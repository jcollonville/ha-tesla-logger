import * as L from "leaflet";
import leafletCss from "leaflet/dist/leaflet.css?inline";
import { LitElement, css, html, nothing, unsafeCSS } from "lit";
import { activityLabel, copy, language, type Copy, type Lang } from "./i18n";
import { sparkline, seriesValues } from "./charts";
import {
  asRecord,
  formatDuration,
  formatNumber,
  periodRange,
  safeError,
  whPerKm,
} from "./format";
import type {
  CardConfig,
  Charge,
  Drive,
  DriveDetail,
  HassEntity,
  HomeAssistant,
  Page,
  Period,
  Stats,
  ViewName,
} from "./types";

const CARD_TYPE = "tesla-logger-card";

function isPage<T>(value: unknown): value is Page<T> {
  const record = asRecord(value);
  return Boolean(record && Array.isArray(record.data));
}

function isDetail(value: unknown): value is DriveDetail {
  const record = asRecord(value);
  return Boolean(record && Array.isArray(record.route) && Array.isArray(record.series));
}

function isStats(value: unknown): value is Stats {
  const record = asRecord(value);
  return Boolean(record && typeof record.distance_km === "number");
}

export class TeslaLoggerCard extends LitElement {
  static properties = {
    hass: { attribute: false },
    _config: { state: true },
    _view: { state: true },
    _drives: { state: true },
    _charges: { state: true },
    _detail: { state: true },
    _stats: { state: true },
    _period: { state: true },
    _page: { state: true },
    _loading: { state: true },
    _error: { state: true },
  };

  hass?: HomeAssistant;
  private _config?: CardConfig;
  private _view: ViewName = "status";
  private _drives?: Page<Drive>;
  private _charges?: Page<Charge>;
  private _detail?: DriveDetail;
  private _stats?: Stats;
  private _period: Period = "month";
  private _page = 1;
  private _loading = false;
  private _error = "";
  private _driveId?: number;
  private map?: L.Map;
  private mapEl?: HTMLDivElement;
  private routeLayer?: L.LayerGroup;

  static styles = [
    unsafeCSS(leafletCss),
    css`
      :host {
        display: block;
      }
      ha-card {
        padding-bottom: 8px;
      }
      .header {
        display: grid;
        grid-template-columns: 72px 1fr;
        gap: 12px;
        align-items: center;
        padding: 16px 16px 8px;
      }
      .ring {
        width: 72px;
        height: 72px;
      }
      .ring circle {
        fill: none;
        stroke-width: 3.5;
      }
      .ring .track {
        stroke: var(--divider-color, rgba(127, 127, 127, 0.35));
      }
      .ring .value {
        stroke: var(--primary-color, #03a9f4);
        stroke-linecap: round;
        transform: rotate(-90deg);
        transform-origin: 18px 18px;
      }
      .ring text {
        fill: var(--primary-text-color, #212121);
        font-size: 8px;
        text-anchor: middle;
        font-weight: 600;
      }
      .name {
        margin: 0;
        font-size: 1.15rem;
        font-weight: 600;
        color: var(--primary-text-color);
      }
      .sub {
        margin: 2px 0 0;
        color: var(--secondary-text-color);
        font-size: 0.92rem;
      }
      .pill {
        display: inline-block;
        margin-top: 6px;
        padding: 2px 8px;
        border-radius: 999px;
        background: var(--secondary-background-color, rgba(0, 0, 0, 0.06));
        color: var(--primary-text-color);
        font-size: 0.78rem;
        letter-spacing: 0.02em;
      }
      .tabs, .periods, .pager {
        display: flex;
        gap: 6px;
        overflow-x: auto;
        padding: 4px 12px 8px;
      }
      button {
        border: 0;
        background: transparent;
        color: var(--secondary-text-color);
        font: inherit;
        min-height: 40px;
        padding: 8px 10px;
        border-bottom: 2px solid transparent;
        cursor: pointer;
      }
      button[aria-selected="true"], button.active {
        color: var(--primary-text-color);
        border-bottom-color: var(--primary-color, #03a9f4);
      }
      .grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 8px;
        padding: 0 12px 8px;
      }
      .metric, .item {
        background: var(--secondary-background-color, rgba(0, 0, 0, 0.04));
        border-radius: 12px;
        padding: 10px 12px;
      }
      .metric span, .muted {
        display: block;
        color: var(--secondary-text-color);
        font-size: 0.78rem;
      }
      .metric strong, .item strong {
        color: var(--primary-text-color);
        font-size: 1rem;
      }
      .list {
        display: flex;
        flex-direction: column;
        gap: 8px;
        padding: 0 12px 8px;
      }
      .item {
        text-align: left;
        width: 100%;
      }
      .row {
        display: flex;
        justify-content: space-between;
        gap: 8px;
      }
      .map {
        height: 220px;
        margin: 0 12px 8px;
        border-radius: 12px;
        overflow: hidden;
        background: var(--secondary-background-color);
      }
      .chart-block {
        padding: 0 12px 8px;
      }
      .chart {
        width: 100%;
        height: 56px;
        display: block;
      }
      .chart polyline {
        fill: none;
        stroke: var(--primary-color, #03a9f4);
        stroke-width: 2;
      }
      .message, .toolbar {
        padding: 4px 16px 8px;
        color: var(--secondary-text-color);
      }
      .toolbar {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      @media (max-width: 420px) {
        .header {
          grid-template-columns: 64px 1fr;
        }
      }
    `,
  ];

  setConfig(config: CardConfig): void {
    if (!config || typeof config.entity !== "string" || !config.entity) {
      throw new Error("Please select a Tesla Logger entity");
    }
    const changed = this._config?.entity !== config.entity;
    this._config = config;
    if (changed) {
      this._view = config.default_view || "status";
      this.clearHistory();
    }
  }

  static getConfigElement(): HTMLElement {
    return document.createElement("tesla-logger-card-editor");
  }

  static getStubConfig(hass: HomeAssistant): CardConfig {
    const entity =
      Object.keys(hass.states).find((id) => hass.states[id]?.attributes?.key === "location") ||
      "";
    return { entity };
  }

  getCardSize(): number {
    return 6;
  }

  override disconnectedCallback(): void {
    this.destroyMap();
    super.disconnectedCallback();
  }

  override updated(changed: Map<string, unknown>): void {
    if (changed.has("_view") || changed.has("_config")) {
      void this.ensureView();
    }
    if (this._view === "drive" && (changed.has("_detail") || changed.has("_view"))) {
      this.syncMap();
    }
    if (changed.has("_view") && this._view !== "drive") {
      this.destroyMap();
    }
  }

  override render() {
    if (!this._config?.entity) {
      return html`<ha-card><p class="message">${this.text.pick}</p></ha-card>`;
    }
    return html`
      <ha-card>
        ${this.header()}
        <div class="tabs" role="tablist">
          ${this.tab("status", this.text.status)}
          ${this.tab("drives", this.text.drives)}
          ${this.tab("charges", this.text.charges)}
          ${this.tab("stats", this.text.stats)}
        </div>
        ${this._error ? html`<p class="message">${this._error}</p>` : nothing}
        ${this._loading ? html`<p class="message">${this.text.loading}</p>` : nothing}
        ${this.body()}
      </ha-card>
    `;
  }

  private get cardLang(): Lang {
    return language(this.hass?.locale?.language || this.hass?.language);
  }

  private get text(): Copy {
    return copy(this.cardLang);
  }

  private get readings(): Map<string, HassEntity> {
    const map = new Map<string, HassEntity>();
    const hass = this.hass;
    const entity = this._config?.entity;
    if (!hass || !entity || !hass.states[entity]) {
      return map;
    }
    const device = hass.entities?.[entity]?.device_id;
    const vin = hass.states[entity].attributes.vin;
    for (const [id, state] of Object.entries(hass.states)) {
      const reg = hass.entities?.[id];
      const sameDevice = Boolean(device && reg?.device_id === device);
      const sameVin = Boolean(vin && state.attributes.vin === vin);
      if (!sameDevice && !sameVin) {
        continue;
      }
      const key =
        reg?.translation_key ||
        (typeof state.attributes.key === "string" ? state.attributes.key : undefined);
      if (key) {
        map.set(key, state);
      }
    }
    return map;
  }

  private get deviceId(): string | undefined {
    const entity = this._config?.entity;
    if (!this.hass || !entity) {
      return undefined;
    }
    return this.hass.entities?.[entity]?.device_id;
  }

  private numeric(key: string): number | null {
    const raw = this.readings.get(key)?.state;
    if (!raw || raw === "unknown" || raw === "unavailable") {
      return null;
    }
    const value = Number(raw);
    return Number.isFinite(value) ? value : null;
  }

  private label(key: string): string | null {
    const raw = this.readings.get(key)?.state;
    if (!raw || raw === "unknown" || raw === "unavailable") {
      return null;
    }
    return raw;
  }

  private header() {
    const battery = this.numeric("battery_level");
    const shown = battery == null ? "—" : `${Math.round(battery)}`;
    const dash = battery == null ? 0 : Math.max(0, Math.min(100, battery));
    const activity = this.label("activity") || "";
    const range = this.numeric("rated_range");
    const deviceName = this.deviceId ? this.hass?.devices?.[this.deviceId]?.name : undefined;
    const friendly = this.hass?.states[this._config?.entity || ""]?.attributes.friendly_name;
    const name = deviceName || (typeof friendly === "string" ? friendly : this.text.unknown);
    return html`
      <div class="header">
        <svg class="ring" viewBox="0 0 36 36" aria-label="${shown}%">
          <circle class="track" cx="18" cy="18" r="15.5"></circle>
          <circle
            class="value"
            cx="18"
            cy="18"
            r="15.5"
            pathLength="100"
            stroke-dasharray="${dash} 100"
          ></circle>
          <text x="18" y="20">${shown}</text>
        </svg>
        <div>
          <p class="name">${name}</p>
          <p class="sub">
            ${this.text.range}
            ${range == null ? "—" : `${formatNumber(range, 0, this.cardLang)} km`}
            · ${this.locationText()}
          </p>
          <span class="pill">${activityLabel(this.text, activity)}</span>
        </div>
      </div>
    `;
  }

  private locationText(): string {
    const fence = this.label("geofence");
    if (fence) {
      return fence;
    }
    const tracker = this.readings.get("location");
    const lat = tracker?.attributes.latitude;
    const lon = tracker?.attributes.longitude;
    if (typeof lat === "number" && typeof lon === "number") {
      return `${lat.toFixed(4)}, ${lon.toFixed(4)}`;
    }
    return this.text.unknown;
  }

  private tab(view: ViewName, label: string) {
    return html`
      <button
        role="tab"
        aria-selected=${this._view === view ? "true" : "false"}
        @click=${() => this.open(view)}
      >
        ${label}
      </button>
    `;
  }

  private open(view: ViewName): void {
    this._error = "";
    this._view = view;
    if (view !== "drive") {
      this._driveId = undefined;
      this._detail = undefined;
    }
  }

  private body() {
    if (this._view === "status") {
      return this.status();
    }
    if (this._view === "drives") {
      return this.drives();
    }
    if (this._view === "drive") {
      return this.drive();
    }
    if (this._view === "charges") {
      return this.charges();
    }
    return this.stats();
  }

  private metric(title: string, value: string) {
    return html`<div class="metric"><span>${title}</span><strong>${value}</strong></div>`;
  }

  private quantity(key: string, digits: number, unit: string): string {
    const value = this.numeric(key);
    return value == null ? "—" : `${formatNumber(value, digits, this.cardLang)} ${unit}`;
  }

  private status() {
    return html`
      <div class="grid">
        ${this.metric(this.text.speed, this.quantity("speed", 0, "km/h"))}
        ${this.metric(this.text.power, this.quantity("power", 1, "kW"))}
        ${this.metric(this.text.inside, this.quantity("inside_temp", 1, "°C"))}
        ${this.metric(this.text.outside, this.quantity("outside_temp", 1, "°C"))}
        ${this.metric(this.text.charger, this.quantity("charger_power", 1, "kW"))}
        ${this.metric(this.text.added, this.quantity("energy_added", 1, "kWh"))}
        ${this.metric(this.text.odometer, this.quantity("odometer", 0, "km"))}
        ${this.metric(this.text.limit, this.quantity("charge_limit", 0, "%"))}
      </div>
    `;
  }

  private drives() {
    const page = this._drives;
    return html`
      <div class="toolbar">
        <span>${this.text.page} ${page?.page ?? this._page}</span>
        <button @click=${() => this.reload()}>${this.text.refresh}</button>
      </div>
      <div class="list">
        ${(page?.data || []).map(
          (drive) => html`
            <button class="item" @click=${() => this.openDrive(drive.id)}>
              <div class="row">
                <strong>${this.when(drive.start_at)}</strong>
                <span>${this.km(drive.distance_km)}</span>
              </div>
              <span class="muted">
                ${formatDuration(drive.duration_s)} · ${this.consumption(drive)}
              </span>
            </button>
          `,
        )}
      </div>
      ${page && page.data.length === 0 ? html`<p class="message">${this.text.emptyDrives}</p>` : nothing}
      ${this.pager(page)}
    `;
  }

  private drive() {
    const detail = this._detail;
    const efficiency = whPerKm(detail?.energy_used_kwh, detail?.distance_km);
    return html`
      <div class="toolbar">
        <button @click=${() => this.open("drives")}>${this.text.back}</button>
        <span>${detail ? this.when(detail.start_at) : ""}</span>
      </div>
      ${detail
        ? html`
            <div class="grid">
              ${this.metric(this.text.distance, this.km(detail.distance_km))}
              ${this.metric(this.text.duration, formatDuration(detail.duration_s))}
              ${this.metric(this.text.energy, this.kwh(detail.energy_used_kwh))}
              ${this.metric(
                this.text.efficiency,
                efficiency == null ? "—" : `${formatNumber(efficiency, 0, this.cardLang)} Wh/km`,
              )}
            </div>
            <p class="message">${this.text.map}</p>
            ${detail.route.length
              ? html`<div class="map"></div>`
              : html`<p class="message">${this.text.noRoute}</p>`}
            ${this.chart(this.text.speedChart, detail.series, "speed_kmh", "km/h")}
            ${this.chart(this.text.elevationChart, detail.series, "elevation_m", "m")}
            ${this.chart(this.text.batteryChart, detail.series, "battery_level", "%")}
          `
        : nothing}
    `;
  }

  private charges() {
    const page = this._charges;
    return html`
      <div class="toolbar">
        <span>${this.text.page} ${page?.page ?? this._page}</span>
        <button @click=${() => this.reload()}>${this.text.refresh}</button>
      </div>
      <div class="list">
        ${(page?.data || []).map(
          (charge) => html`
            <div class="item">
              <div class="row">
                <strong>${this.when(charge.start_at)}</strong>
                <span>${this.kwh(charge.energy_added_kwh)}</span>
              </div>
              <span class="muted">
                ${formatDuration(charge.duration_s)}
                ${charge.max_power_kw != null
                  ? `· ${formatNumber(charge.max_power_kw, 0, this.cardLang)} kW`
                  : ""}
                ${charge.charger_type ? `· ${charge.charger_type}` : ""}
              </span>
            </div>
          `,
        )}
      </div>
      ${page && page.data.length === 0
        ? html`<p class="message">${this.text.emptyCharges}</p>`
        : nothing}
      ${this.pager(page)}
    `;
  }

  private stats() {
    const stats = this._stats;
    const efficiency = whPerKm(stats?.energy_used_kwh, stats?.distance_km);
    return html`
      <div class="periods">
        ${(["week", "month", "year"] as Period[]).map(
          (period) => html`
            <button
              class=${this._period === period ? "active" : ""}
              @click=${() => this.setPeriod(period)}
            >
              ${this.text[period]}
            </button>
          `,
        )}
      </div>
      ${stats
        ? html`
            <div class="grid">
              ${this.metric(this.text.distance, this.km(stats.distance_km))}
              ${this.metric(this.text.duration, formatDuration(stats.drive_duration_s))}
              ${this.metric(this.text.energy, this.kwh(stats.energy_used_kwh))}
              ${this.metric(
                this.text.efficiency,
                efficiency == null ? "—" : `${formatNumber(efficiency, 0, this.cardLang)} Wh/km`,
              )}
              ${this.metric(this.text.drivesCount, String(stats.drive_count))}
              ${this.metric(this.text.chargesCount, String(stats.charge_count))}
              ${this.metric(this.text.energyAdded, this.kwh(stats.energy_added_kwh))}
            </div>
          `
        : nothing}
    `;
  }

  private chart(
    title: string,
    points: DriveDetail["series"],
    key: string,
    unit: string,
  ) {
    const values = seriesValues(points, key);
    if (values.length < 2) {
      return nothing;
    }
    const last = values[values.length - 1];
    return html`
      <div class="chart-block">
        <span class="muted">${title} · ${formatNumber(last, 0, this.cardLang)} ${unit}</span>
        ${sparkline(values)}
      </div>
    `;
  }

  private pager(page: Page<unknown> | undefined) {
    if (!page || page.total <= page.per_page) {
      return nothing;
    }
    const pages = Math.ceil(page.total / page.per_page);
    return html`
      <div class="pager">
        <button ?disabled=${page.page <= 1} @click=${() => this.setPage(page.page - 1)}>
          ${this.text.previous}
        </button>
        <button ?disabled=${page.page >= pages} @click=${() => this.setPage(page.page + 1)}>
          ${this.text.next}
        </button>
      </div>
    `;
  }

  private km(value: number | null | undefined): string {
    return value == null ? "—" : `${formatNumber(value, 1, this.cardLang)} km`;
  }

  private kwh(value: number | null | undefined): string {
    return value == null ? "—" : `${formatNumber(value, 1, this.cardLang)} kWh`;
  }

  private consumption(drive: Drive): string {
    const value = whPerKm(drive.energy_used_kwh, drive.distance_km);
    if (value == null) {
      return this.kwh(drive.energy_used_kwh);
    }
    return `${formatNumber(value, 0, this.cardLang)} Wh/km`;
  }

  private when(value: string): string {
    const date = new Date(value);
    if (Number.isNaN(date.getTime())) {
      return value;
    }
    return date.toLocaleString(this.cardLang === "fr" ? "fr-FR" : "en-US", {
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  }

  private openDrive(id: number): void {
    this._driveId = id;
    this._detail = undefined;
    this._view = "drive";
  }

  private setPeriod(period: Period): void {
    this._period = period;
    this._stats = undefined;
    void this.loadStats();
  }

  private setPage(page: number): void {
    this._page = page;
    if (this._view === "drives") {
      this._drives = undefined;
      void this.loadDrives();
    } else if (this._view === "charges") {
      this._charges = undefined;
      void this.loadCharges();
    }
  }

  private reload(): void {
    this.clearHistory();
    void this.ensureView();
  }

  private clearHistory(): void {
    this._drives = undefined;
    this._charges = undefined;
    this._detail = undefined;
    this._stats = undefined;
    this._page = 1;
    this._error = "";
  }

  private async ensureView(): Promise<void> {
    if (this._view === "drives" && !this._drives) {
      await this.loadDrives();
    } else if (this._view === "charges" && !this._charges) {
      await this.loadCharges();
    } else if (this._view === "stats" && !this._stats) {
      await this.loadStats();
    } else if (this._view === "drive" && this._driveId != null && !this._detail) {
      await this.loadDrive();
    }
  }

  private async loadDrives(): Promise<void> {
    await this.load("drives", async () => {
      const payload = await this.call("get_drives", { page: this._page, per_page: 20 });
      if (!isPage<Drive>(payload)) {
        throw new Error(this.text.failed);
      }
      this._drives = payload;
    });
  }

  private async loadCharges(): Promise<void> {
    await this.load("charges", async () => {
      const payload = await this.call("get_charges", { page: this._page, per_page: 20 });
      if (!isPage<Charge>(payload)) {
        throw new Error(this.text.failed);
      }
      this._charges = payload;
    });
  }

  private async loadDrive(): Promise<void> {
    const id = this._driveId;
    if (id == null) {
      return;
    }
    await this.load("drive", async () => {
      const payload = await this.call("get_drive", { drive_id: id, max_points: 300 });
      if (!isDetail(payload)) {
        throw new Error(this.text.failed);
      }
      this._detail = payload;
    });
  }

  private async loadStats(): Promise<void> {
    const period = this._period;
    await this.load("stats", async () => {
      const range = periodRange(period);
      const payload = await this.call("get_stats", range);
      if (!isStats(payload)) {
        throw new Error(this.text.failed);
      }
      this._stats = payload;
    });
  }

  private async load(view: ViewName, action: () => Promise<void>): Promise<void> {
    if (!this.deviceId) {
      this._error = this.text.missingDevice;
      return;
    }
    this._loading = true;
    this._error = "";
    try {
      await action();
      if (this._view !== view && view !== "drive") {
        return;
      }
    } catch (err) {
      this._error = safeError(err, this.text.failed);
    } finally {
      this._loading = false;
    }
  }

  private async call(service: string, data: Record<string, unknown>): Promise<unknown> {
    if (!this.hass || !this.deviceId) {
      throw new Error(this.text.missingDevice);
    }
    const result = await this.hass.callService(
      "tesla_logger",
      service,
      { device_id: this.deviceId, ...data },
      undefined,
      false,
      true,
    );
    const record = asRecord(result);
    if (record && "response" in record) {
      return record.response;
    }
    return result;
  }

  private syncMap(): void {
    const el = this.renderRoot.querySelector<HTMLDivElement>(".map");
    const route = this._detail?.route ?? [];
    if (!el || route.length === 0) {
      return;
    }
    if (this.map && this.mapEl !== el) {
      this.destroyMap();
    }
    if (!this.map) {
      this.map = L.map(el, { zoomControl: true, attributionControl: true });
      L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }).addTo(this.map);
      this.mapEl = el;
    }
    this.routeLayer?.remove();
    const group = L.layerGroup().addTo(this.map);
    const latlngs = route.map(
      (point) => [point.latitude, point.longitude] as [number, number],
    );
    const color =
      getComputedStyle(this).getPropertyValue("--primary-color").trim() || "#03a9f4";
    const line = L.polyline(latlngs, { color, weight: 4 }).addTo(group);
    L.circleMarker(latlngs[0], {
      radius: 6,
      color: "#2e7d32",
      fillColor: "#2e7d32",
      fillOpacity: 1,
    }).addTo(group);
    const end = latlngs[latlngs.length - 1];
    L.circleMarker(end, {
      radius: 6,
      color: "#c62828",
      fillColor: "#c62828",
      fillOpacity: 1,
    }).addTo(group);
    this.routeLayer = group;
    this.map.fitBounds(line.getBounds().pad(0.15));
    requestAnimationFrame(() => this.map?.invalidateSize());
  }

  private destroyMap(): void {
    this.map?.remove();
    this.map = undefined;
    this.mapEl = undefined;
    this.routeLayer = undefined;
  }
}

const SCHEMA = [
  {
    name: "entity",
    required: true,
    selector: { entity: { integration: "tesla_logger" } },
  },
  {
    name: "default_view",
    selector: {
      select: {
        options: [
          { value: "status", label: "Status" },
          { value: "drives", label: "Drives" },
          { value: "charges", label: "Charges" },
          { value: "stats", label: "Stats" },
        ],
      },
    },
  },
];

class TeslaLoggerCardEditor extends LitElement {
  static properties = {
    hass: { attribute: false },
    _config: { state: true },
  };

  hass?: HomeAssistant;
  private _config?: CardConfig;

  setConfig(config: CardConfig): void {
    this._config = config;
  }

  override render() {
    if (!this.hass || !this._config) {
      return nothing;
    }
    const text = copy(language(this.hass.locale?.language || this.hass.language));
    return html`
      <ha-form
        .hass=${this.hass}
        .data=${this._config}
        .schema=${SCHEMA}
        .computeLabel=${(schema: { name: string }) =>
          schema.name === "entity" ? text.entity : text.defaultView}
        @value-changed=${(event: CustomEvent<{ value: CardConfig }>) => {
          this._config = { ...this._config, ...event.detail.value };
          this.dispatchEvent(
            new CustomEvent("config-changed", {
              detail: { config: this._config },
              bubbles: true,
              composed: true,
            }),
          );
        }}
      ></ha-form>
    `;
  }
}

if (!customElements.get(CARD_TYPE)) {
  customElements.define(CARD_TYPE, TeslaLoggerCard);
}
if (!customElements.get("tesla-logger-card-editor")) {
  customElements.define("tesla-logger-card-editor", TeslaLoggerCardEditor);
}

window.customCards = window.customCards || [];
if (!window.customCards.some((card) => card.type === CARD_TYPE)) {
  window.customCards.push({
    type: CARD_TYPE,
    name: "Tesla Logger",
    description: "Vehicle status, drives, charges, and stats from tesla-logger",
    preview: false,
  });
}

declare global {
  interface Window {
    customCards?: Array<{
      type: string;
      name: string;
      description: string;
      preview?: boolean;
    }>;
  }
}
