import { LitElement, css, html, nothing } from "lit";
import { ref } from "lit/directives/ref.js";
import { activityLabel, copy, language, type Copy, type Lang } from "./i18n";
import {
  bucketLabel,
  currentBucketIndex,
  SERIES_COUNT,
  seriesChart,
  seriesValues,
  sparkline,
  type ChartPoint,
} from "./charts";
import {
  asRecord,
  bucketInPeriod,
  chargeHistory,
  datePrefsFromHass,
  driveHistory,
  formatDuration,
  formatListTimestamp,
  formatNumber,
  periodRange,
  safeError,
  whPerKm,
  type HistoryRowModel,
} from "./format";
import { readPosition, tilesForView } from "./mini-map";
import {
  SHOW_DEFAULTS,
  SHOW_KEYS,
  chartsVisible,
  fallbackView,
  seriesNeeded,
  showFlags,
  visibleViews,
} from "./show-config";
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
  StatsBucket,
  StatsSeries,
  TempBin,
  ViewName,
} from "./types";

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

function isSeries(value: unknown): value is StatsSeries {
  const record = asRecord(value);
  return Boolean(record && Array.isArray(record.buckets));
}

function tempBins(value: unknown): TempBin[] {
  const record = asRecord(value);
  const rows = record && Array.isArray(record.data) ? record.data : [];
  return rows.filter((row): row is TempBin => {
    const item = asRecord(row);
    return Boolean(item && typeof item.temp_c_bucket === "number");
  });
}

function finiteOrNull(value: number | null | undefined): number | null {
  return typeof value === "number" && Number.isFinite(value) ? value : null;
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
    _series: { state: true },
    _tempBins: { state: true },
    _bucketIndex: { state: true },
    _period: { state: true },
    _page: { state: true },
    _loading: { state: true },
    _error: { state: true },
    _plotWidths: { state: true },
    _headerBox: { state: true },
    _headerVisible: { state: true },
  };

  hass?: HomeAssistant;
  private _config?: CardConfig;
  private _view: ViewName = "status";
  private _drives?: Page<Drive>;
  private _charges?: Page<Charge>;
  private _detail?: DriveDetail;
  private _stats?: Stats;
  private _series?: StatsSeries;
  private _tempBins?: TempBin[];
  private _seriesPeriod?: Period;
  private _bucketIndex: number | null = null;
  private _period: Period = "month";
  private _page = 1;
  private _loading = false;
  private _error = "";
  private _driveId?: number;
  private _plotWidths: Record<string, number> = {};
  private _headerBox = { width: 0, height: 0 };
  private _headerVisible = false;
  private _resize?: ResizeObserver;
  private _onScreen?: IntersectionObserver;
  private routeMap?: { element: HTMLDivElement; destroy(): void };
  private mapToken = 0;
  private mapModule?: Promise<typeof import("./leaflet-map")>;

  static styles = css`
      :host {
        display: block;
      }
      ha-card {
        padding-bottom: 8px;
      }
      .header-wrap {
        position: relative;
        overflow: hidden;
      }
      .header {
        position: relative;
        z-index: 1;
        display: grid;
        grid-template-columns: 72px 1fr;
        gap: 12px;
        align-items: center;
        padding: 16px 16px 8px;
      }
      .map-bg {
        position: absolute;
        inset: 0;
        z-index: 0;
        overflow: hidden;
        pointer-events: none;
        user-select: none;
      }
      .map-bg img {
        position: absolute;
        width: 256px;
        height: 256px;
        filter: grayscale(1);
        opacity: 0.22;
        pointer-events: none;
      }
      .map-bg.dark img {
        filter: invert(1) hue-rotate(180deg) grayscale(1) brightness(0.85);
        opacity: 0.2;
      }
      .map-dot {
        position: absolute;
        z-index: 2;
        width: 8px;
        height: 8px;
        margin-left: -4px;
        margin-top: -4px;
        border-radius: 50%;
        background: #c62828;
        box-shadow: 0 0 0 1.5px #fff;
      }
      .map-credit {
        position: absolute;
        right: 8px;
        bottom: 4px;
        color: var(--secondary-text-color, #666);
        font-size: 9px;
        line-height: 1;
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
      .metric {
        display: flex;
        align-items: center;
        gap: 10px;
        background: var(--secondary-background-color, rgba(0, 0, 0, 0.04));
        border-radius: 12px;
        padding: 10px 12px;
      }
      .metric ha-icon {
        flex: none;
        --mdc-icon-size: 22px;
        color: var(--primary-color, #03a9f4);
      }
      .metric span, .muted {
        display: block;
        color: var(--secondary-text-color);
        font-size: 0.78rem;
      }
      .metric strong {
        color: var(--primary-text-color);
        font-size: 1rem;
      }
      .list {
        display: flex;
        flex-direction: column;
        gap: 0;
        box-sizing: border-box;
        width: 100%;
        margin: 0;
        padding: 0 12px 4px;
        list-style: none;
      }
      .entry {
        display: flex;
        flex-direction: column;
        gap: 2px;
        box-sizing: border-box;
        width: 100%;
        min-width: 0;
        max-width: 100%;
        margin: 0;
        padding: 7px 4px;
        border: 0;
        border-bottom: 1px solid var(--divider-color, rgba(127, 127, 127, 0.35));
        border-radius: 0;
        background: transparent;
        color: var(--primary-text-color, #212121);
        text-align: left;
      }
      .entry-line {
        display: grid;
        grid-template-columns: minmax(0, 1fr) auto;
        column-gap: 12px;
        align-items: baseline;
        min-width: 0;
      }
      .entry-main {
        min-width: 0;
        overflow: hidden;
        color: var(--primary-text-color, #212121);
        font-size: 0.92rem;
        font-weight: 600;
        line-height: 1.25;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .entry-figure {
        color: var(--primary-text-color, #212121);
        font-size: 0.92rem;
        font-weight: 700;
        font-variant-numeric: tabular-nums;
        line-height: 1.25;
        white-space: nowrap;
      }
      button.entry {
        font: inherit;
        min-height: 0;
        border-bottom: 0;
        cursor: pointer;
      }
      button.entry:hover {
        background: color-mix(
          in srgb,
          var(--primary-text-color, #212121) 8%,
          var(--secondary-background-color, transparent)
        );
      }
      button.entry:focus-visible {
        outline: 2px solid var(--primary-color, #03a9f4);
        outline-offset: 2px;
      }
      .entry-meta {
        display: flex;
        justify-content: space-between;
        align-items: baseline;
        gap: 12px;
        min-width: 0;
        max-width: 100%;
        overflow: hidden;
        color: var(--secondary-text-color);
        font-size: 0.75rem;
        font-weight: 400;
        line-height: 1.3;
      }
      .entry-meta > span {
        min-width: 0;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
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
      .series-list {
        display: flex;
        flex-direction: column;
        gap: 8px;
        padding: 0 12px 8px;
      }
      .series-card {
        margin: 0;
        padding: 8px 8px 2px;
        border-radius: 12px;
        background: var(--secondary-background-color, rgba(127, 127, 127, 0.12));
      }
      .series-card figcaption {
        display: flex;
        justify-content: space-between;
        align-items: baseline;
        gap: 8px;
        padding: 0 4px 2px;
      }
      .series-title {
        color: var(--primary-text-color, #212121);
        font-size: 0.92rem;
        font-weight: 700;
      }
      .series-value {
        color: var(--secondary-text-color);
        font-size: 0.8rem;
      }
      .plot {
        width: 100%;
        min-width: 0;
      }
      .series-chart {
        width: 100%;
        display: block;
      }
      .series-chart .grid {
        stroke: var(--divider-color, rgba(127, 127, 127, 0.45));
        stroke-width: 1;
      }
      .series-chart g[role="button"] {
        cursor: pointer;
      }
      .series-chart .bar {
        fill: var(--primary-color, #03a9f4);
        opacity: 0.62;
      }
      .series-chart g.selected .bar,
      .series-chart g[role="button"]:focus-visible .bar {
        opacity: 1;
        stroke: var(--primary-text-color, #212121);
        stroke-width: 1.5;
      }
      .series-chart .hit {
        fill: transparent;
      }
      .series-chart .line {
        fill: none;
        stroke: var(--primary-color, #03a9f4);
        stroke-width: 2;
        stroke-linejoin: round;
        stroke-linecap: round;
        vector-effect: non-scaling-stroke;
      }
      .series-chart .grid,
      .series-chart .dot,
      .series-chart .bar {
        vector-effect: non-scaling-stroke;
      }
      .series-chart .dot {
        fill: var(--primary-color, #03a9f4);
        stroke: var(--card-background-color, #fff);
        stroke-width: 1;
        opacity: 0.75;
      }
      .series-chart g.selected .dot,
      .series-chart g[role="button"]:focus-visible .dot {
        opacity: 1;
        stroke: var(--primary-text-color, #212121);
        stroke-width: 2;
      }
      .totals {
        margin: 0 12px 8px;
        padding: 8px 10px;
        border-radius: 12px;
        background: var(--secondary-background-color, rgba(127, 127, 127, 0.12));
      }
      .totals-label {
        margin: 0 0 6px;
        color: var(--primary-text-color, #212121);
        font-size: 0.92rem;
        font-weight: 700;
      }
      .totals-row {
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 8px;
      }
      .totals-row span {
        display: block;
        color: var(--secondary-text-color);
        font-size: 0.75rem;
      }
      .totals-row strong {
        display: block;
        color: var(--primary-text-color, #212121);
        font-size: 0.95rem;
      }
      .totals-sub {
        margin-top: 2px;
      }
      .series-extra {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 8px;
        padding: 0 12px 8px;
      }
      .series-card.compact {
        padding: 6px 6px 0;
      }
      .series-card.compact .series-title {
        font-size: 0.82rem;
      }
      .series-note {
        margin: 0;
        padding: 0 4px 2px;
        color: var(--secondary-text-color);
        font-size: 0.75rem;
      }
      .legend {
        display: flex;
        gap: 8px;
        align-items: center;
        margin: 0;
        padding: 0 4px 2px;
        color: var(--secondary-text-color);
        font-size: 0.72rem;
      }
      .swatch {
        display: inline-block;
        width: 8px;
        height: 8px;
        margin-right: 3px;
        border-radius: 2px;
      }
      .swatch.ac {
        background: var(--primary-color, #03a9f4);
      }
      .swatch.dc {
        background: var(--accent-color, #ff9800);
      }
      .series-chart .bar.ac {
        fill: var(--primary-color, #03a9f4);
      }
      .series-chart .bar.dc {
        fill: var(--accent-color, #ff9800);
      }
      .series-chart.compact text {
        font-size: 12px;
      }
      .series-chart text {
        fill: var(--secondary-text-color, currentColor);
        font-size: 11px;
        font-family: inherit;
      }
      .message, .toolbar {
        padding: 4px 16px 8px;
        color: var(--secondary-text-color);
      }
      .toolbar {
        display: flex;
        align-items: center;
        gap: 4px;
        box-sizing: border-box;
        width: 100%;
      }
      .toolbar-actions,
      .back {
        display: flex;
        align-items: center;
        min-width: 0;
      }
      .page-indicator {
        margin-left: auto;
        color: var(--secondary-text-color);
        font-size: 0.85rem;
        font-variant-numeric: tabular-nums;
        white-space: nowrap;
      }
      ha-icon-button {
        width: 36px;
        height: 36px;
        --mdc-icon-button-size: 36px;
        --mdc-icon-size: 20px;
        color: var(--primary-text-color);
      }
      ha-icon-button[disabled] {
        color: var(--disabled-text-color, var(--secondary-text-color));
        opacity: 0.4;
      }
      button.back-label {
        min-height: 0;
        margin: 0;
        padding: 0 4px 0 0;
        border-bottom: 0;
        color: var(--primary-text-color);
        font-size: 0.92rem;
        font-weight: 600;
      }
      @media (max-width: 420px) {
        .header {
          grid-template-columns: 64px 1fr;
        }
        .list {
          gap: 0;
          padding: 0 8px 4px;
        }
        .entry {
          padding: 6px 2px;
        }
        .totals-row {
          gap: 4px;
        }
        .totals-row strong {
          font-size: 0.85rem;
        }
        .series-extra {
          grid-template-columns: 1fr;
        }
      }
    `;

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
    this.ensureVisibleView();
  }

  private get flags() {
    return showFlags(this._config);
  }

  private ensureVisibleView(): void {
    const next = fallbackView(this._view, this.flags);
    if (next !== this._view) {
      this._view = next;
    }
  }

  static getConfigElement(): HTMLElement {
    return document.createElement("tesla-logger-card-editor-impl");
  }

  static getStubConfig(hass: HomeAssistant): CardConfig {
    const entity =
      Object.keys(hass.states).find((id) => hass.states[id]?.attributes?.key === "location") ||
      "";
    return { entity, show: { ...SHOW_DEFAULTS } };
  }

  getCardSize(): number {
    return 6;
  }

  override connectedCallback(): void {
    super.connectedCallback();
    this.watchVisibility();
    if (typeof ResizeObserver !== "function") {
      return;
    }
    this._resize = new ResizeObserver((entries) => {
      const measured = entries.map((entry) => {
        const target = entry.target as HTMLElement;
        return {
          plot: target.dataset.plot,
          mapHost: target.dataset.mapHost != null,
          width: Math.round(entry.contentRect.width),
          height: Math.round(entry.contentRect.height),
        };
      });
      queueMicrotask(() => {
        if (!this._resize) {
          return;
        }
        let plots = this._plotWidths;
        let plotsChanged = false;
        let header = this._headerBox;
        let headerChanged = false;
        for (const entry of measured) {
          if (entry.plot) {
            if (entry.width > 0 && plots[entry.plot] !== entry.width) {
              if (!plotsChanged) {
                plots = { ...plots };
                plotsChanged = true;
              }
              plots[entry.plot] = entry.width;
            }
            continue;
          }
          if (entry.mapHost && (header.width !== entry.width || header.height !== entry.height)) {
            header = { width: entry.width, height: entry.height };
            headerChanged = true;
          }
        }
        if (plotsChanged) {
          this._plotWidths = plots;
        }
        if (headerChanged) {
          this._headerBox = header;
        }
      });
    });
  }

  override disconnectedCallback(): void {
    this._onScreen?.disconnect();
    this._onScreen = undefined;
    this._resize?.disconnect();
    this._resize = undefined;
    this.destroyMap();
    super.disconnectedCallback();
  }

  private watchVisibility(): void {
    if (this._headerVisible || this._onScreen) {
      return;
    }
    if (typeof IntersectionObserver !== "function") {
      this._headerVisible = true;
      return;
    }
    this._onScreen = new IntersectionObserver((entries) => {
      if (!entries.some((entry) => entry.isIntersecting)) {
        return;
      }
      this._onScreen?.disconnect();
      this._onScreen = undefined;
      this._headerVisible = true;
    });
    this._onScreen.observe(this);
  }

  private readonly watchSize = (element: Element | undefined): void => {
    if (element) {
      this._resize?.observe(element);
    }
  };

  override updated(changed: Map<string, unknown>): void {
    if (changed.has("_view") || changed.has("_config")) {
      void this.ensureView();
    }
    if (
      this._view === "drive" &&
      (changed.has("_detail") || changed.has("_view") || changed.has("_headerVisible"))
    ) {
      this.syncMap();
    }
    if (changed.has("_view") && this._view !== "drive") {
      this.destroyMap();
    }
    if (this.shouldLoadMapChunk()) {
      void this.loadMapModule().catch(() => undefined);
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
          ${visibleViews(this.flags).map((view) => this.tab(view, this.text[view]))}
        </div>
        ${this._error ? html`<p class="message">${this._error}</p>` : nothing}
        ${this._loading ? html`<p class="message">${this.text.loading}</p>` : nothing}
        ${this.body()}
      </ha-card>
    `;
  }

  private get dates() {
    return datePrefsFromHass(this.hass);
  }

  private get cardLang(): Lang {
    return language(this.dates.language);
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
    const deviceName = this.deviceId ? this.hass?.devices?.[this.deviceId]?.name : undefined;
    const friendly = this.hass?.states[this._config?.entity || ""]?.attributes.friendly_name;
    const name = deviceName || (typeof friendly === "string" ? friendly : this.text.unknown);
    const fence = this.label("geofence");
    return html`
      <div class="header-wrap" data-map-host ${ref(this.watchSize)}>
        ${this.watermark()}
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
            ${fence ? html`<p class="sub">${fence}</p>` : nothing}
            <span class="pill">${activityLabel(this.text, activity)}</span>
          </div>
        </div>
      </div>
    `;
  }

  private mapEnabled(): boolean {
    return this._config?.show_map !== false;
  }

  private headerMapReady(): boolean {
    if (!this.mapEnabled()) {
      return false;
    }
    const position = this.carPosition();
    const { width, height } = this._headerBox;
    return Boolean(position && width >= 32 && height >= 32);
  }

  private shouldLoadMapChunk(): boolean {
    if (!this._headerVisible) {
      return false;
    }
    if (this._view === "drive" && (this._detail?.route.length ?? 0) > 0) {
      return true;
    }
    return this.headerMapReady();
  }

  private loadMapModule(): Promise<typeof import("./leaflet-map")> {
    this.mapModule ??= import("./leaflet-map").catch((error: unknown) => {
      this.mapModule = undefined;
      throw error;
    });
    return this.mapModule;
  }

  private carPosition(): { lat: number; lon: number } | null {
    const tracker = this.readings.get("location");
    return readPosition(tracker?.attributes.latitude, tracker?.attributes.longitude);
  }

  private watermark() {
    if (!this._headerVisible || !this.headerMapReady()) {
      return nothing;
    }
    const position = this.carPosition();
    if (!position) {
      return nothing;
    }
    const { width, height } = this._headerBox;
    const view = tilesForView(position.lat, position.lon, width, height);
    const dark = Boolean(this.hass?.themes?.darkMode);
    return html`
      <div class=${dark ? "map-bg dark" : "map-bg"} aria-hidden="true">
        ${view.tiles.map(
          (tile) => html`
            <img
              alt=""
              width="256"
              height="256"
              src=${tile.url}
              referrerpolicy="strict-origin-when-cross-origin"
              style=${`left:${tile.left}px;top:${tile.top}px`}
              draggable="false"
            />
          `,
        )}
        <span class="map-credit">© OpenStreetMap</span>
      </div>
      <span
        class="map-dot"
        aria-hidden="true"
        style=${`left:${view.dot.left}px;top:${view.dot.top}px`}
      ></span>
    `;
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
    if (this._view === "charts") {
      return this.charts();
    }
    return this.stats();
  }

  private metric(title: string, value: string, icon?: string) {
    return html`<div class="metric">
      ${icon ? html`<ha-icon icon=${icon}></ha-icon>` : nothing}
      <div><span>${title}</span><strong>${value}</strong></div>
    </div>`;
  }

  private quantity(key: string, digits: number, unit: string): string {
    const value = this.numeric(key);
    return value == null ? "—" : `${formatNumber(value, digits, this.cardLang)} ${unit}`;
  }

  private status() {
    return html`
      <div class="grid">
        ${this.metric(
          this.text.range,
          this.quantity("rated_range", 0, "km"),
          "mdi:map-marker-distance",
        )}
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
      ${this.listToolbar(page)}
      <ul class="list">
        ${(page?.data || []).map((drive) =>
          this.historyRow(driveHistory(drive, this.dates), () => this.openDrive(drive.id)),
        )}
      </ul>
      ${page && page.data.length === 0 ? html`<p class="message">${this.text.emptyDrives}</p>` : nothing}
    `;
  }

  private drive() {
    const detail = this._detail;
    const efficiency = whPerKm(detail?.energy_used_kwh, detail?.distance_km);
    return html`
      <div class="toolbar">
        <div class="back">
          ${this.iconButton("mdi:arrow-left", this.text.back, false, () => this.open("drives"))}
          <button type="button" class="back-label" @click=${() => this.open("drives")}>
            ${this.text.back}
          </button>
        </div>
        <span class="page-indicator">${detail ? this.when(detail.start_at) : ""}</span>
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
      ${this.listToolbar(page)}
      <ul class="list">
        ${(page?.data || []).map((charge) =>
          this.historyRow(chargeHistory(charge, this.dates)),
        )}
      </ul>
      ${page && page.data.length === 0
        ? html`<p class="message">${this.text.emptyCharges}</p>`
        : nothing}
    `;
  }

  private stats() {
    const stats = this._stats;
    const efficiency = whPerKm(stats?.energy_used_kwh, stats?.distance_km);
    return html`
      ${this.periodBar()}
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

  private periodBar() {
    return html`
      <div class="periods" role="group" aria-label=${this.text.period}>
        ${(["week", "month", "year"] as Period[]).map(
          (period) => html`
            <button
              type="button"
              aria-pressed=${this._period === period ? "true" : "false"}
              class=${this._period === period ? "active" : ""}
              @click=${() => this.setPeriod(period)}
            >
              ${this.text[period]}
            </button>
          `,
        )}
      </div>
    `;
  }

  private charts() {
    const show = this.flags;
    const series = this._series;
    const buckets = series?.buckets ?? [];
    const selected = buckets.length ? this.selectedBucketIndex(buckets) : -1;
    const main = show.chart_consumption || show.chart_distance || show.chart_energy;
    const extra =
      show.battery_health ||
      show.charging_split ||
      show.vampire_drain ||
      show.consumption_vs_temp;
    return html`
      ${this.periodBar()}
      ${main && series && buckets.length === 0
        ? html`<p class="message">${this.text.emptySeries}</p>`
        : nothing}
      ${main && buckets.length
        ? html`
            <div class="series-list">
              ${show.chart_consumption
                ? this.seriesFigure(
                    "consumption",
                    "line",
                    this.text.consumptionChart,
                    "Wh/km",
                    (bucket) => finiteOrNull(bucket.wh_per_km),
                    selected,
                  )
                : nothing}
              ${show.chart_distance
                ? this.seriesFigure(
                    "distance",
                    "bar",
                    this.text.distance,
                    "km",
                    (bucket) => finiteOrNull(bucket.distance_km),
                    selected,
                  )
                : nothing}
              ${show.chart_energy
                ? this.seriesFigure(
                    "energy",
                    "bar",
                    this.text.chargedChart,
                    "kWh",
                    (bucket) => finiteOrNull(bucket.energy_charged_kwh),
                    selected,
                  )
                : nothing}
            </div>
          `
        : nothing}
      ${show.totals && selected >= 0 ? this.bucketTotals(buckets[selected]) : nothing}
      ${extra
        ? html`
            <div class="series-extra">
              ${show.battery_health && selected >= 0
                ? this.seriesFigure(
                    "health",
                    "line",
                    this.text.batteryHealth,
                    "km",
                    (bucket) => finiteOrNull(bucket.range_at_100_km),
                    selected,
                    true,
                  )
                : nothing}
              ${show.charging_split && selected >= 0 ? this.acDcFigure(buckets, selected) : nothing}
              ${show.vampire_drain && selected >= 0
                ? this.seriesFigure(
                    "idle",
                    "bar",
                    this.text.idleUse,
                    "km/j",
                    (bucket) => finiteOrNull(bucket.idle_range_loss_km_per_day),
                    selected,
                    true,
                  )
                : nothing}
              ${show.consumption_vs_temp ? this.tempFigure() : nothing}
            </div>
          `
        : nothing}
    `;
  }

  private selectedBucketIndex(buckets: StatsBucket[]): number {
    if (
      this._bucketIndex != null &&
      this._bucketIndex >= 0 &&
      this._bucketIndex < buckets.length
    ) {
      return this._bucketIndex;
    }
    return currentBucketIndex(
      buckets.map((bucket) => bucket.start),
      this._period,
    );
  }

  private selectBucket(index: number): void {
    this._bucketIndex = index;
  }

  private bucketHeading(bucket: StatsBucket): string {
    if (bucketInPeriod(bucket.start, this._period)) {
      if (this._period === "week") {
        return this.text.thisWeek;
      }
      if (this._period === "month") {
        return this.text.thisMonth;
      }
      return this.text.thisYear;
    }
    return bucketLabel(bucket.start, this._period, this.dates);
  }

  private bucketTotals(bucket: StatsBucket) {
    const consumed = finiteOrNull(bucket.energy_used_kwh);
    return html`
      <section class="totals" aria-live="polite">
        <h3 class="totals-label">${this.bucketHeading(bucket)}</h3>
        <div class="totals-row">
          <div>
            <span>${this.text.distance}</span>
            <strong>${this.km(bucket.distance_km)}</strong>
          </div>
          <div>
            <span>${this.text.duration}</span>
            <strong>${formatDuration(bucket.drive_duration_s)}</strong>
          </div>
          <div>
            <span>${this.text.chargedChart}</span>
            <strong>${this.kwh(bucket.energy_charged_kwh)}</strong>
            ${consumed == null
              ? nothing
              : html`<span class="totals-sub">${this.text.consumed} ${this.kwh(consumed)}</span>`}
          </div>
        </div>
      </section>
    `;
  }

  private seriesFigure(
    plotKey: string,
    kind: "bar" | "line" | "stack",
    title: string,
    unit: string,
    read: (bucket: StatsBucket) => number | null,
    selected: number,
    compact = false,
  ) {
    const buckets = this._series?.buckets ?? [];
    const digits = unit === "Wh/km" ? 0 : 1;
    const points: ChartPoint[] = buckets.map((bucket) => {
      const value = read(bucket);
      const label = bucketLabel(bucket.start, this._period, this.dates);
      const shown = value == null ? "—" : `${formatNumber(value, digits, this.cardLang)} ${unit}`;
      return { label, value, title: `${label} · ${shown}` };
    });
    const focus = compact ? points[selected] : points[points.length - 1];
    const headline = compact ? this.bucketHeading(buckets[selected]) : this.text.latest;
    const focusText =
      focus?.value == null ? "—" : `${formatNumber(focus.value, digits, this.cardLang)} ${unit}`;
    const summary = `${title}. ${headline} ${focusText}`;
    return html`
      <figure class=${compact ? "series-card compact" : "series-card"}>
        <figcaption>
          <span class="series-title">${title}</span>
          <span class="series-value">${headline} ${focusText}</span>
        </figcaption>
        ${this.drawSeries(plotKey, points, kind, summary, selected, compact)}
      </figure>
    `;
  }

  private acDcFigure(buckets: StatsBucket[], selected: number) {
    const bucket = buckets[selected];
    const share = finiteOrNull(bucket?.dc_share_pct);
    const cost = finiteOrNull(bucket?.charge_cost);
    const perKm = finiteOrNull(bucket?.cost_per_km);
    const points: ChartPoint[] = buckets.map((item) => {
      const label = bucketLabel(item.start, this._period, this.dates);
      const ac = finiteOrNull(item.ac_energy_kwh);
      const dc = finiteOrNull(item.dc_energy_kwh);
      const acText = ac == null ? "—" : `${formatNumber(ac, 1, this.cardLang)} kWh`;
      const dcText = dc == null ? "—" : `${formatNumber(dc, 1, this.cardLang)} kWh`;
      return {
        label,
        value: ac,
        stack: dc,
        title: `${label} · AC ${acText} · DC ${dcText}`,
      };
    });
    const summary = `${this.text.acDc}. ${this.bucketHeading(bucket)}`;
    return html`
      <figure class="series-card compact">
        <figcaption>
          <span class="series-title">${this.text.acDc}</span>
        </figcaption>
        <p class="series-note">
          ${share == null
            ? nothing
            : html`${formatNumber(share, 0, this.cardLang)} % ${this.text.fastShare}`}
          ${cost == null
            ? nothing
            : html`${share == null ? "" : " · "}${this.text.cost} ${formatNumber(cost, 2, this.cardLang)}`}
          ${perKm == null
            ? nothing
            : html`<span class="totals-sub">${formatNumber(perKm, 2, this.cardLang)} ${this.text.perKm}</span>`}
        </p>
        <p class="legend">
          <span><i class="swatch ac" aria-hidden="true"></i>AC</span>
          <span><i class="swatch dc" aria-hidden="true"></i>DC</span>
        </p>
        ${this.drawSeries("acdc", points, "stack", summary, selected, true)}
      </figure>
    `;
  }

  private tempFigure() {
    const bins = this._tempBins ?? [];
    const points: ChartPoint[] = bins.map((bin) => {
      const lower = bin.temp_c_bucket;
      const label = `${formatNumber(lower, 0, this.cardLang)}–${formatNumber(lower + 5, 0, this.cardLang)}°`;
      const wh = finiteOrNull(bin.wh_per_km);
      const distance = finiteOrNull(bin.distance_km);
      const whText = wh == null ? "—" : `${formatNumber(wh, 0, this.cardLang)} Wh/km`;
      const distanceText =
        distance == null ? "" : ` · ${formatNumber(distance, 0, this.cardLang)} km`;
      return { label, value: wh, title: `${label} · ${whText}${distanceText}` };
    });
    return html`
      <figure class="series-card compact">
        <figcaption>
          <span class="series-title">${this.text.tempUse}</span>
        </figcaption>
        ${points.length
          ? this.drawSeries("temp", points, "bar", this.text.tempUse, -1, true, false)
          : html`<p class="message">${this.text.emptySeries}</p>`}
      </figure>
    `;
  }

  private drawSeries(
    plotKey: string,
    points: ChartPoint[],
    kind: "bar" | "line" | "stack",
    label: string,
    selected: number,
    compact: boolean,
    selectable = true,
  ) {
    const formatTick = (value: number) =>
      formatNumber(value, value >= 10 || value === 0 ? 0 : 1, this.cardLang);
    return html`
      <div class="plot" data-plot=${plotKey} ${ref(this.watchSize)}>
        ${seriesChart(points, kind, label, formatTick, {
          width: this._plotWidths[plotKey],
          compact,
          selected,
          onSelect: selectable ? (index) => this.selectBucket(index) : undefined,
        })}
      </div>
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

  private listToolbar(page: Page<unknown> | undefined) {
    const current = page?.page ?? this._page;
    const pages = page && page.per_page > 0 ? Math.ceil(page.total / page.per_page) : 1;
    return html`
      <div class="toolbar list-toolbar">
        <div class="toolbar-actions">
          ${this.iconButton("mdi:chevron-left", this.text.previous, !page || current <= 1, () =>
            this.setPage(current - 1),
          )}
          ${this.iconButton(
            "mdi:chevron-right",
            this.text.next,
            !page || current >= pages,
            () => this.setPage(current + 1),
          )}
          ${this.iconButton("mdi:refresh", this.text.refresh, false, () => this.reload())}
        </div>
        <span class="page-indicator">${this.pageIndicator(page)}</span>
      </div>
    `;
  }

  private pageIndicator(page: Page<unknown> | undefined): string {
    if (!page || page.total <= 0 || page.per_page <= 0 || page.total <= page.per_page) {
      return `${this.text.page} ${page?.page ?? this._page}`;
    }
    const start = (page.page - 1) * page.per_page + 1;
    const end = Math.min(page.page * page.per_page, page.total);
    return `${start}–${end}`;
  }

  private iconButton(icon: string, label: string, disabled: boolean, action: () => void) {
    return html`
      <ha-icon-button
        .label=${label}
        aria-label=${label}
        title=${label}
        ?disabled=${disabled}
        @click=${() => {
          if (!disabled) {
            action();
          }
        }}
      >
        <ha-icon icon=${icon}></ha-icon>
      </ha-icon-button>
    `;
  }

  private historyRow(row: HistoryRowModel, onOpen?: () => void) {
    const main = row.place ? `${row.when} · ${row.place}` : row.when;
    const body = html`<span class="entry-line"
        ><span class="entry-main" title=${main}
          ><time datetime=${row.datetime}>${row.when}</time>${row.place
            ? ` · ${row.place}`
            : nothing}</span
        ><strong class="entry-figure">${row.figure ?? "—"}</strong></span
      >${row.details.length
        ? html`<span class="entry-meta" title=${row.detail}
            >${row.details.map((part) => html`<span>${part}</span>`)}</span
          >`
        : nothing}`;
    if (onOpen) {
      return html`
        <li>
          <button type="button" class="entry" @click=${onOpen}>${body}</button>
        </li>
      `;
    }
    return html`<li><div class="entry">${body}</div></li>`;
  }

  private km(value: number | null | undefined): string {
    return value == null ? "—" : `${formatNumber(value, 1, this.cardLang)} km`;
  }

  private kwh(value: number | null | undefined): string {
    return value == null ? "—" : `${formatNumber(value, 1, this.cardLang)} kWh`;
  }

  private when(value: string): string {
    return formatListTimestamp(value, this.dates);
  }

  private openDrive(id: number): void {
    this._driveId = id;
    this._detail = undefined;
    this._view = "drive";
  }

  private setPeriod(period: Period): void {
    this._period = period;
    this._bucketIndex = null;
    if (this._view === "charts") {
      void this.loadSeries();
      return;
    }
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
    this._series = undefined;
    this._tempBins = undefined;
    this._seriesPeriod = undefined;
    this._bucketIndex = null;
    this._page = 1;
    this._error = "";
  }

  private async ensureView(): Promise<void> {
    if (this._view === "drives" && this.flags.drives && !this._drives) {
      await this.loadDrives();
    } else if (this._view === "charges" && this.flags.charges && !this._charges) {
      await this.loadCharges();
    } else if (this._view === "stats" && !this._stats) {
      await this.loadStats();
    } else if (this._view === "charts" && chartsVisible(this.flags) && this.seriesStale()) {
      await this.loadSeries();
    } else if (this._view === "drive" && this.flags.drives && this._driveId != null && !this._detail) {
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

  private seriesStale(): boolean {
    const show = this.flags;
    if (this._seriesPeriod !== this._period) {
      return true;
    }
    if (seriesNeeded(show) && !this._series) {
      return true;
    }
    if (show.consumption_vs_temp && !this._tempBins) {
      return true;
    }
    return false;
  }

  private async loadSeries(): Promise<void> {
    const show = this.flags;
    if (!chartsVisible(show)) {
      return;
    }
    const period = this._period;
    const wantSeries = seriesNeeded(show);
    const wantTemp = show.consumption_vs_temp;
    if (wantSeries) {
      this._series = undefined;
    }
    if (wantTemp) {
      this._tempBins = undefined;
    }
    await this.load("charts", async () => {
      const count = SERIES_COUNT[period];
      if (wantSeries) {
        const payload = await this.call("get_stats_series", { period, count });
        if (!isSeries(payload)) {
          throw new Error(this.text.failed);
        }
        this._series = payload;
      }
      if (wantTemp) {
        try {
          this._tempBins = tempBins(await this.call("get_consumption_by_temp", { period, count }));
        } catch {
          this._tempBins = [];
        }
      }
      this._seriesPeriod = period;
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
      this.destroyMap();
      return;
    }
    if (!this._headerVisible) {
      return;
    }
    const token = ++this.mapToken;
    const dark = Boolean(this.hass?.themes?.darkMode);
    const color = getComputedStyle(this).getPropertyValue("--primary-color").trim() || "#03a9f4";
    void this.loadMapModule()
      .then((mod) => {
        if (token !== this.mapToken || !this.isConnected) {
          return;
        }
        const current = this.renderRoot.querySelector<HTMLDivElement>(".map");
        if (current !== el) {
          return;
        }
        this.routeMap = mod.mountRoute(this.routeMap, el, route, dark, color);
      })
      .catch(() => undefined);
  }

  private destroyMap(): void {
    this.mapToken += 1;
    const current = this.routeMap;
    this.routeMap = undefined;
    current?.destroy();
  }
}

function fieldLabel(name: string, text: Copy): string {
  const key = name.split(".").pop() ?? name;
  if (key === "entity") {
    return text.entity;
  }
  if (key === "default_view") {
    return text.defaultView;
  }
  if (key === "show") {
    return text.showBlocks;
  }
  if (key === "show_map") {
    return text.showMap;
  }
  if (key in text.showFields) {
    return text.showFields[key as keyof typeof text.showFields];
  }
  return name;
}

const SCHEMA = [
  {
    name: "entity",
    required: true,
    selector: { entity: { integration: "tesla_logger" } },
  },
  {
    name: "show_map",
    selector: { boolean: {} },
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
          { value: "charts", label: "Charts" },
        ],
      },
    },
  },
  {
    name: "show",
    type: "grid",
    column_min_width: "200px",
    schema: SHOW_KEYS.map((name) => ({ name, selector: { boolean: {} } })),
  },
];

export class TeslaLoggerCardEditor extends LitElement {
  static properties = {
    hass: { attribute: false },
    _config: { state: true },
  };

  hass?: HomeAssistant;
  private _config?: CardConfig;

  setConfig(config: CardConfig): void {
    this._config = { ...config, show_map: config.show_map !== false, show: showFlags(config) };
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
        .computeLabel=${(schema: { name: string }) => fieldLabel(schema.name, text)}
        @value-changed=${(event: CustomEvent<{ value: CardConfig }>) => {
          const next = { ...this._config, ...event.detail.value };
          this._config = { ...next, show: showFlags(next) };
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

if (!customElements.get("tesla-logger-card-impl")) {
  customElements.define("tesla-logger-card-impl", TeslaLoggerCard);
}
if (!customElements.get("tesla-logger-card-editor-impl")) {
  customElements.define("tesla-logger-card-editor-impl", TeslaLoggerCardEditor);
}
