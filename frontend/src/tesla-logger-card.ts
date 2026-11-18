import { makeFormat, type ChartSeries, type FormatHooks, type VehicleCardData } from "@jcollonville/tesla-logger-ui";
import { LitElement, css, html, nothing } from "lit";
import { carImageTarget, signedCarImageUrl } from "./car-image";
import { TeslaLoggerCardEditor } from "./card-editor";
import { chargeDetailFlags, driveDetailFlags, pageSize } from "./detail-config";
import {
  asRecord,
  datePrefsFromHass,
  formatClock,
  formatDayHeading,
  listDay,
  safeError,
  type DatePrefs,
} from "./format";
import { copy, language, type Copy } from "./i18n";
import {
  SERIES_COUNT,
  barChart,
  bucketAxisLabel,
  chargeRow,
  efficiencyWh,
  finite,
  lineChart,
  listQuery,
  monthQuery,
  offsetMinutes,
  periodQuery,
  positionMap,
  readPosition,
  routeMap,
  routeRoads,
  samplePoints,
  statsFacts,
  sum,
  type FactItem,
  type ListRange,
} from "./present";
import { chartsVisible, fallbackView, seriesNeeded, showFlags, visibleViews } from "./show-config";
import { stubConfig } from "./stub";
import type {
  CardConfig,
  Charge,
  Drive,
  DriveDetail,
  HassEntity,
  HomeAssistant,
  Page,
  Period,
  SeriesPoint,
  Stats,
  StatsSeries,
  TempBin,
  ViewName,
} from "./types";

const THEME_STYLE = [
  "--tl-bg:var(--tl-ha-bg)",
  "--tl-surface:var(--tl-ha-surface)",
  "--tl-surface-2:var(--tl-ha-surface-2)",
  "--tl-text:var(--tl-ha-text)",
  "--tl-muted:var(--tl-ha-muted)",
  "--tl-accent:var(--tl-ha-accent)",
  "--tl-line:var(--tl-ha-line)",
  "--tl-green:var(--tl-ha-green)",
  "--tl-danger:var(--tl-ha-danger)",
  "--tl-map-bg:var(--tl-ha-map)",
].join(";");

const UI_HOSTS =
  "tl-vehicle-card, tl-mini-map, tl-recent-card, tl-summary-strip, tl-tabs, tl-period-chips, tl-day-group, tl-drive-row, tl-charge-row, tl-chart";

type ThemeHost = HTMLElement & {
  locale: string | null;
  timeZone: string | null;
  theme: string | null;
  format: FormatHooks | null;
};

type PositionMap = HTMLElement & { latitude: number | null; longitude: number | null; heading: number | null };

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
    _period: { state: true },
    _range: { state: true },
    _page: { state: true },
    _loading: { state: true },
    _error: { state: true },
    _recentDrive: { state: true },
    _recentCharge: { state: true },
    _month: { state: true },
    _rangeStats: { state: true },
    _carImageUrl: { state: true },
    _carImageFailed: { state: true },
  };

  hass?: HomeAssistant;
  private _config?: CardConfig;
  private _view: ViewName = "status";
  private _drives?: Page<Drive>;
  private _charges?: Page<Charge>;
  private _detail?: DriveDetail;
  private _charge?: Charge;
  private _stats?: Stats;
  private _series?: StatsSeries;
  private _tempBins?: TempBin[];
  private _seriesPeriod?: Period;
  private _period: Period = "month";
  private _range: ListRange = "all";
  private _page = 1;
  private _loading = false;
  private _error = "";
  private _driveId?: number;
  private _chargeId?: number;
  private _recentDrive?: Drive | null;
  private _recentCharge?: Charge | null;
  private _month?: Stats | null;
  private _rangeStats?: Stats | null;
  private _rangeStatsKey = "";
  private _recentDrivePending = false;
  private _recentChargePending = false;
  private _monthPending = false;
  private _inflight = new Set<string>();
  private _carImageUrl = "";
  private _carImageFailed = false;
  private _carImageKey = "";
  private _carImageGen = 0;
  private _hooksKey = "";
  private _hooks: FormatHooks = {};

  static styles = css`
    :host {
      display: block;
      --tl-ha-bg: var(--primary-background-color, #f4f4f4);
      --tl-ha-surface: var(--card-background-color, var(--ha-card-background, #fff));
      --tl-ha-surface-2: var(--secondary-background-color, #f4f4f4);
      --tl-ha-text: var(--primary-text-color, #171a20);
      --tl-ha-muted: var(--secondary-text-color, #5c5e62);
      --tl-ha-accent: var(--primary-color, #3e6ae1);
      --tl-ha-line: var(--divider-color, rgba(23, 26, 32, 0.12));
      --tl-ha-green: var(--success-color, #1d9b52);
      --tl-ha-danger: var(--error-color, #c8332f);
      --tl-ha-map: var(--secondary-background-color, #eef0f3);
      --tl-bg: var(--tl-ha-bg);
      --tl-surface: var(--tl-ha-surface);
      --tl-text: var(--tl-ha-text);
      --tl-muted: var(--tl-ha-muted);
      --tl-accent: var(--tl-ha-accent);
      --tl-line: var(--tl-ha-line);
      --tl-radius: 14px;
      --ha-card-background: var(--tl-ha-bg);
      color: var(--tl-text);
      color-scheme: light;
      font-family: var(--ha-font-family, var(--tl-font, inherit));
    }
    :host(.dark) {
      color-scheme: dark;
      --tl-ha-bg: var(--primary-background-color, #111318);
      --tl-ha-surface: var(--card-background-color, #181b21);
      --tl-ha-surface-2: var(--secondary-background-color, #20242b);
      --tl-ha-text: var(--primary-text-color, #f2f3f5);
      --tl-ha-muted: var(--secondary-text-color, #a3a6ad);
      --tl-ha-accent: var(--primary-color, #6f93ff);
      --tl-ha-line: var(--divider-color, rgba(255, 255, 255, 0.12));
      --tl-ha-green: var(--success-color, #4fd17c);
      --tl-ha-danger: var(--error-color, #ff7a70);
      --tl-ha-map: var(--secondary-background-color, #1d2128);
    }
    ha-card {
      padding: 8px 0 16px;
      color: var(--tl-text);
    }
    tl-vehicle-card,
    tl-recent-card,
    tl-summary-strip,
    tl-mini-map,
    tl-day-group,
    tl-chart,
    tl-tabs,
    tl-period-chips {
      display: block;
    }
    tl-tabs {
      margin: 0 8px 8px;
    }
    .overview {
      display: grid;
      gap: 16px;
      padding: 0 16px;
    }
    .overview > tl-summary-strip {
      grid-column: 1 / -1;
    }
    .place-card {
      overflow: hidden;
      border: 1px solid var(--tl-line);
      border-radius: var(--tl-radius);
      background: var(--tl-surface);
    }
    .place-card p {
      margin: 0;
      padding: 0 16px 16px;
    }
    .visually-hidden {
      position: absolute;
      width: 1px;
      height: 1px;
      padding: 0;
      margin: -1px;
      overflow: hidden;
      clip: rect(0, 0, 0, 0);
      white-space: nowrap;
      border: 0;
    }
    .place-card .muted,
    .message,
    .page-indicator,
    .hint {
      color: var(--tl-muted);
    }
    .panel {
      display: flex;
      flex-direction: column;
      gap: 12px;
      padding: 0 16px;
    }
    .list-toolbar {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 8px;
    }
    .toolbar-actions {
      display: flex;
      align-items: center;
    }
    ha-icon-button {
      display: inline-flex;
      width: 40px;
      height: 40px;
      color: var(--tl-text);
      --mdc-icon-size: 24px;
    }
    .page-indicator {
      font-variant-numeric: tabular-nums;
    }
    .chart-grid {
      display: grid;
      gap: 16px;
    }
    .back {
      display: flex;
      align-items: center;
      gap: 4px;
      margin: 0;
      padding: 0;
      border: 0;
      background: transparent;
      color: var(--tl-accent);
      font: inherit;
      cursor: pointer;
    }
    .detail-head {
      display: flex;
      flex-direction: column;
      gap: 4px;
    }
    .eyebrow {
      margin: 0;
      color: var(--tl-muted);
    }
    @media (min-width: 720px) {
      .chart-grid {
        grid-template-columns: 1fr 1fr;
      }
    }
    @media (min-width: 900px) {
      .overview {
        grid-template-columns: minmax(0, 1.25fr) minmax(0, 1fr);
        align-items: start;
      }
      .overview > tl-vehicle-card {
        grid-row: span 3;
      }
    }
  `;

  setConfig(config: CardConfig): void {
    if (!config || typeof config.entity !== "string" || !config.entity) {
      throw new Error("Please select a Tesla Logger entity");
    }
    const changed = this._config?.entity !== config.entity;
    const pageChanged = this._config != null && pageSize(this._config) !== pageSize(config);
    this._config = config;
    if (changed) {
      this._view = this.openingView(config.default_view);
      this.clearHistory();
    } else if (pageChanged) {
      this._page = 1;
      this._drives = undefined;
      this._charges = undefined;
    }
    this.ensureVisibleView();
  }

  private openingView(view: ViewName | undefined): ViewName {
    if (view === "charts") {
      return "stats";
    }
    return view || "status";
  }

  private get flags() {
    return showFlags(this._config);
  }

  private ensureVisibleView(): void {
    const next = fallbackView(this._view, this.flags, this.mapEnabled());
    if (next !== this._view) {
      this._view = next;
    }
  }

  static getConfigElement(): HTMLElement {
    return document.createElement("tesla-logger-card-editor-impl");
  }

  static getStubConfig(hass: HomeAssistant): CardConfig {
    return stubConfig(hass);
  }

  getCardSize(): number {
    return 6;
  }

  override updated(): void {
    this.classList.toggle("dark", this.dark);
    this.paintHosts();
    this.syncPositionMap();
    if (this._config) {
      void this.ensureView();
      void this.ensureCarImage();
    }
  }

  private paintHosts(): void {
    const locale = this.locale;
    const timeZone = this.timeZone;
    const theme = this.dark ? "dark" : "light";
    const format = this.hooks;
    this.renderRoot.querySelectorAll(UI_HOSTS).forEach((node) => {
      const host = node as ThemeHost;
      if (host.locale !== locale) {
        host.locale = locale;
      }
      if (host.timeZone !== timeZone) {
        host.timeZone = timeZone;
      }
      if (host.theme !== theme) {
        host.theme = theme;
      }
      if (host.format !== format) {
        host.format = format;
      }
      if (host.getAttribute("style") !== THEME_STYLE) {
        host.setAttribute("style", THEME_STYLE);
      }
    });
  }

  private syncPositionMap(): void {
    const map = this.renderRoot.querySelector<PositionMap>("tl-mini-map.where");
    if (!map) {
      return;
    }
    const position = this.carPosition();
    const lat = position?.lat ?? null;
    const lon = position?.lon ?? null;
    const heading = this.numeric("heading");
    if (map.latitude !== lat) {
      map.latitude = lat;
    }
    if (map.longitude !== lon) {
      map.longitude = lon;
    }
    if (map.heading !== heading) {
      map.heading = heading;
    }
  }

  override render() {
    if (!this._config?.entity) {
      return html`<ha-card><p class="message">${this.text.pick}</p></ha-card>`;
    }
    return html`
      <ha-card>
        <tl-tabs
          label=${this.text.sections}
          .data=${this.tabOptions()}
          @tl-change=${this.onTab}
          @click=${this.blockLink}
        ></tl-tabs>
        ${this._error ? html`<p class="message">${this._error}</p>` : nothing}
        ${this._loading ? html`<p class="message">${this.text.loading}</p>` : nothing}
        ${this.body()}
      </ha-card>
    `;
  }

  private get dark(): boolean {
    return Boolean(this.hass?.themes?.darkMode);
  }

  private get dates(): DatePrefs {
    return datePrefsFromHass(this.hass);
  }

  private get locale(): string {
    return this.dates.language || "en";
  }

  private get timeZone(): string {
    if (this.dates.timeZone) {
      return this.dates.timeZone;
    }
    try {
      return Intl.DateTimeFormat().resolvedOptions().timeZone || "UTC";
    } catch {
      return "UTC";
    }
  }

  private get hooks(): FormatHooks {
    const prefs = this.dates;
    const key = `${prefs.language}|${String(prefs.hour12)}|${prefs.timeZone ?? ""}`;
    if (key !== this._hooksKey) {
      this._hooksKey = key;
      this._hooks = {
        clock: (iso: string) => formatClock(iso, prefs),
        dayLabel: (iso: string) => formatDayHeading(iso, prefs),
      };
    }
    return this._hooks;
  }

  private get fmt() {
    return makeFormat({ locale: this.locale, timeZone: this.timeZone, format: this.hooks });
  }

  private get text(): Copy {
    return copy(language(this.locale));
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
        reg?.translation_key || (typeof state.attributes.key === "string" ? state.attributes.key : undefined);
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

  private binary(key: string): boolean | null {
    const raw = this.readings.get(key)?.state;
    if (!raw || raw === "unknown" || raw === "unavailable") {
      return null;
    }
    if (key === "lock") {
      if (raw === "off") {
        return true;
      }
      if (raw === "on") {
        return false;
      }
      return null;
    }
    if (raw === "on") {
      return true;
    }
    if (raw === "off") {
      return false;
    }
    return null;
  }

  private vehicleName(): string {
    const deviceName = this.deviceId ? this.hass?.devices?.[this.deviceId]?.name : undefined;
    const friendly = this.hass?.states[this._config?.entity || ""]?.attributes.friendly_name;
    if (typeof deviceName === "string" && deviceName) {
      return deviceName;
    }
    return typeof friendly === "string" && friendly ? friendly : this.text.unknown;
  }

  private mapEnabled(): boolean {
    return this._config?.show_map !== false;
  }

  private carPosition(): { lat: number; lon: number } | null {
    const tracker = this.readings.get("location");
    return readPosition(tracker?.attributes.latitude, tracker?.attributes.longitude);
  }

  private tabOptions() {
    const text = this.text;
    const labels = {
      status: text.overview,
      drives: text.drives,
      charges: text.charges,
      stats: text.stats,
    };
    return visibleViews(this.flags, this.mapEnabled()).map((view) => ({
      id: view === "status" ? "tab-overview" : `tab-${view}`,
      label: labels[view],
      href: "",
      selected:
        this._view === view ||
        (view === "drives" && this._view === "drive") ||
        (view === "charges" && this._view === "charge"),
    }));
  }

  private onTab(event: CustomEvent<{ id?: string }>): void {
    const id = event.detail?.id;
    const view: ViewName =
      id === "tab-drives" ? "drives" : id === "tab-charges" ? "charges" : id === "tab-stats" ? "stats" : "status";
    this.open(view);
  }

  private blockLink(event: Event): void {
    if (event.composedPath().some((node) => node instanceof HTMLAnchorElement)) {
      event.preventDefault();
    }
  }

  private onChip(event: CustomEvent<{ id?: string }>): void {
    const id = event.detail?.id;
    if (this._view === "stats") {
      if (id === "week" || id === "month" || id === "year") {
        this.setPeriod(id);
      }
      return;
    }
    if (id === "7d" || id === "30d" || id === "year" || id === "all") {
      if (this._range !== id) {
        this._range = id;
        this._page = 1;
        this._drives = undefined;
        this._charges = undefined;
        this._rangeStats = undefined;
        this._rangeStatsKey = "";
        void this.ensureView();
      }
    }
  }

  private open(view: ViewName): void {
    this._error = "";
    this._view = view;
    if (view !== "drive") {
      this._driveId = undefined;
      this._detail = undefined;
    }
    if (view !== "charge") {
      this._chargeId = undefined;
      this._charge = undefined;
    }
    this.ensureVisibleView();
  }

  private body() {
    if (this._view === "drive") {
      return this.driveDetail();
    }
    if (this._view === "charge") {
      return this.chargeDetail();
    }
    if (this._view === "drives") {
      return this.driveList();
    }
    if (this._view === "charges") {
      return this.chargeList();
    }
    if (this._view === "stats") {
      return this.statsPanel();
    }
    return this.overview();
  }

  private vehicleData(): VehicleCardData {
    const status = this.flags.status;
    const data: VehicleCardData = {
      name: this.vehicleName(),
      model: this.deviceId ? this.hass?.devices?.[this.deviceId]?.model : undefined,
      activity: this.label("activity"),
      charging_state: this.label("charging_state"),
      plugged_in: this.binary("plugged_in"),
      battery_level: this.numeric("battery_level"),
      charge_limit_soc: this.numeric("charge_limit"),
      rated_range_km: this.numeric("rated_range") ?? this.numeric("estimated_range"),
      note: this.vehicleNote(),
    };
    if (status) {
      data.locked = this.binary("lock");
      data.inside_temp_c = this.numeric("inside_temp");
      data.outside_temp_c = this.numeric("outside_temp");
      data.odometer_km = this.numeric("odometer");
      data.sentry_mode = this.binary("sentry") === true ? true : null;
      data.software_version = this.label("software_version");
    } else {
      data.facts = [];
    }
    return data;
  }

  private vehicleNote(): string | null {
    const fmt = this.fmt;
    const activity = (this.label("activity") || "").toLowerCase();
    const french = this.locale.toLowerCase().startsWith("fr");
    if (activity === "charging") {
      const parts = [french ? "En charge" : "Charging"];
      const power = this.numeric("charger_power");
      if (power != null && power > 0) {
        parts.push(fmt.unit(power, 1, "kW"));
      }
      const added = this.numeric("energy_added");
      if (added != null && added > 0) {
        parts.push(`+${fmt.energy(added)}`);
      }
      return parts.join(" · ");
    }
    if (activity === "driving") {
      const speed = this.numeric("speed");
      if (speed != null) {
        const pace = fmt.unit(speed, 0, "km/h");
        return french ? `Roule à ${pace}` : `Driving at ${pace}`;
      }
    }
    const limit = this.numeric("charge_limit");
    if (limit != null) {
      const percent = fmt.percent(limit);
      return french ? `Limite de charge ${percent}` : `Charge limit ${percent}`;
    }
    return null;
  }

  private overview() {
    const text = this.text;
    const showCar = this.flags.car || this.flags.status;
    const fence = this.label("geofence");
    const place = fence || text.unknownPosition;
    const positioned = this.carPosition() != null;
    return html`
      <div class="overview">
        ${showCar
          ? html`<tl-vehicle-card
              unavailable=${text.carImageUnavailable}
              alt=${this.vehicleName()}
              image-url=${this._carImageUrl && !this._carImageFailed ? this._carImageUrl : nothing}
              .data=${this.vehicleData()}
            ></tl-vehicle-card>`
          : nothing}
        ${this.mapEnabled()
          ? html`<section class="place-card">
              <h2 class="visually-hidden">${text.position}</h2>
              <tl-mini-map
                class="where"
                .data=${positionMap(fence ? `${text.position} : ${fence}` : text.unknownPosition, (this.label("activity") || "") === "driving", positioned)}
              ></tl-mini-map>
              <p class="place-name">${place}</p>
            </section>`
          : nothing}
        ${this.flags.drives
          ? html`<tl-recent-card
              title=${text.lastDrive}
              empty=${text.noDrive}
              link-href="#drives"
              link-label=${text.allDrives}
              .data=${this._recentDrive ?? null}
              @click=${(event: Event) => this.onRecent(event, "drive")}
            ></tl-recent-card>`
          : nothing}
        ${this.flags.charges
          ? html`<tl-recent-card
              id="derniere-charge"
              title=${text.lastCharge}
              empty=${text.noCharge}
              link-href="#charges"
              link-label=${text.allCharges}
              .data=${this._recentCharge ?? null}
              @click=${(event: Event) => this.onRecent(event, "charge")}
            ></tl-recent-card>`
          : nothing}
        ${this._month && (this.flags.stats || this.flags.totals)
          ? html`<tl-summary-strip
              variant="card"
              title=${text.thisMonthTitle}
              label=${text.thisMonthTitle}
              link-href="#stats"
              link-label=${text.statsLink}
              .data=${this.monthFacts(this._month)}
              @click=${(event: Event) => this.onRecent(event, "stats")}
            ></tl-summary-strip>`
          : nothing}
      </div>
    `;
  }

  private monthFacts(stats: Stats): FactItem[] {
    const fmt = this.fmt;
    const wh = efficiencyWh(stats.energy_used_kwh, stats.distance_km);
    return [
      { label: this.text.distance, value: fmt.distance(stats.distance_km) },
      { label: this.text.drivesCount, value: fmt.number(stats.drive_count || 0, 0) },
      { label: this.text.efficiency, value: wh == null ? "—" : fmt.unit(wh, 0, "Wh/km") },
      { label: this.text.energyCharged, value: fmt.energy(stats.energy_added_kwh) },
    ];
  }

  private onRecent(event: Event, kind: "drive" | "charge" | "stats"): void {
    const link = event.composedPath().find((node) => node instanceof HTMLAnchorElement);
    if (!(link instanceof HTMLAnchorElement)) {
      return;
    }
    event.preventDefault();
    if (link.classList.contains("text-link") || kind === "stats") {
      this.open(kind === "drive" ? "drives" : kind === "charge" ? "charges" : "stats");
      return;
    }
    if (kind === "drive" && this._recentDrive) {
      this.openDrive(this._recentDrive);
    } else if (kind === "charge" && this._recentCharge) {
      this.openCharge(this._recentCharge);
    }
  }

  private listChips() {
    const text = this.text;
    return [
      { id: "7d", label: text.days7, href: "", current: this._range === "7d" },
      { id: "30d", label: text.days30, href: "", current: this._range === "30d" },
      { id: "year", label: text.yearToDate, href: "", current: this._range === "year" },
      { id: "all", label: text.allTime, href: "", current: this._range === "all" },
    ];
  }

  private driveList() {
    const page = this._drives;
    const groups = this.dayGroups(page?.data ?? []);
    return html`
      <div class="panel">
        ${this.listToolbar(page)}
        <tl-period-chips label=${this.text.period} .data=${this.listChips()} @tl-change=${this.onChip} @click=${this.blockLink}></tl-period-chips>
        ${this.flags.totals && this._rangeStats ? this.summary(this.driveFacts(this._rangeStats)) : nothing}
        ${groups.length
          ? groups.map(
              (group) => html`<tl-day-group heading=${group.heading} summary=${this.driveDaySummary(group.items)}>
                ${group.items.map(
                  (drive) => html`<tl-drive-row .data=${drive} @tl-open=${() => this.openDrive(drive)}></tl-drive-row>`,
                )}
              </tl-day-group>`,
            )
          : html`<p class="message">${this.text.emptyDrives}</p>`}
      </div>
    `;
  }

  private chargeList() {
    const page = this._charges;
    const groups = this.dayGroups(page?.data ?? []);
    return html`
      <div class="panel">
        ${this.listToolbar(page)}
        <tl-period-chips label=${this.text.period} .data=${this.listChips()} @tl-change=${this.onChip} @click=${this.blockLink}></tl-period-chips>
        ${this.flags.totals && this._rangeStats ? this.summary(this.chargeFactsFromStats(this._rangeStats)) : nothing}
        ${groups.length
          ? groups.map(
              (group) => html`<tl-day-group heading=${group.heading} summary=${this.chargeDaySummary(group.items)}>
                ${group.items.map(
                  (charge) =>
                    html`<tl-charge-row .data=${chargeRow(charge)} @tl-open=${() => this.openCharge(charge)}></tl-charge-row>`,
                )}
              </tl-day-group>`,
            )
          : html`<p class="message">${this.text.emptyCharges}</p>`}
      </div>
    `;
  }

  private summary(items: FactItem[]) {
    return html`<tl-summary-strip variant="strip" label=${this.text.selectionTotals} .data=${items}></tl-summary-strip>`;
  }

  private driveFacts(stats: Stats): FactItem[] {
    return statsFacts(
      stats,
      {
        drives: this.text.drivesCount,
        distance: this.text.distance,
        duration: this.text.behindWheel,
        energy: this.text.energy,
        efficiency: this.text.efficiency,
      },
      this.fmt,
    );
  }

  private chargeFactsFromStats(stats: Stats): FactItem[] {
    const fmt = this.fmt;
    return [
      { label: this.text.chargesCount, value: fmt.number(stats.charge_count || 0, 0) },
      { label: this.text.energyAdded, value: fmt.energy(stats.energy_added_kwh) },
    ];
  }

  private dayGroups<T extends { start_at: string }>(items: T[]): Array<{ key: string; heading: string; items: T[] }> {
    const groups: Array<{ key: string; heading: string; items: T[] }> = [];
    for (const item of items) {
      const day = listDay(item.start_at, this.dates);
      const last = groups[groups.length - 1];
      if (last && last.key === day.key) {
        last.items.push(item);
      } else {
        groups.push({ key: day.key, heading: day.label, items: [item] });
      }
    }
    return groups;
  }

  private driveDaySummary(items: Drive[]): string {
    const count = items.length;
    const word = this.locale.toLowerCase().startsWith("fr")
      ? count > 1
        ? "trajets"
        : "trajet"
      : count > 1
        ? "drives"
        : "drive";
    const fmt = this.fmt;
    return `${count} ${word} · ${fmt.distance(sum(items.map((item) => item.distance_km)))} · ${fmt.duration(sum(items.map((item) => item.duration_s)))}`;
  }

  private chargeDaySummary(items: Charge[]): string {
    const count = items.length;
    const word = this.locale.toLowerCase().startsWith("fr")
      ? count > 1
        ? "charges"
        : "charge"
      : count > 1
        ? "charges"
        : "charge";
    const energy = sum(items.map((item) => item.energy_added_kwh));
    return `${count} ${word} · +${this.fmt.energy(energy)}`;
  }

  private listToolbar(page: Page<unknown> | undefined) {
    const current = page?.page ?? this._page;
    const pages = page && page.per_page > 0 ? Math.max(1, Math.ceil(page.total / page.per_page)) : 1;
    return html`
      <div class="list-toolbar">
        <div class="toolbar-actions">
          ${this.iconButton("mdi:chevron-left", this.text.previous, !page || current <= 1, () => this.setPage(current - 1))}
          ${this.iconButton("mdi:chevron-right", this.text.next, !page || current >= pages, () => this.setPage(current + 1))}
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

  private statsPanel() {
    const text = this.text;
    const chips = [
      { id: "week", label: text.byWeek, href: "", current: this._period === "week" },
      { id: "month", label: text.byMonth, href: "", current: this._period === "month" },
      { id: "year", label: text.byYear, href: "", current: this._period === "year" },
    ];
    const charts = this.flags.charts ? this.statCharts() : [];
    const strip = this.flags.totals ? this.statsStrip() : undefined;
    return html`
      <div class="panel">
        <tl-period-chips label=${text.period} .data=${chips} @tl-change=${this.onChip} @click=${this.blockLink}></tl-period-chips>
        ${strip ? this.summary(strip) : nothing}
        ${charts.length
          ? html`<div class="chart-grid">
              ${charts.map(
                (chart) => html`<tl-chart variant="card" title=${chart.title} summary=${chart.summary} .data=${chart.data}></tl-chart>`,
              )}
            </div>`
          : nothing}
        ${this._series && charts.length === 0 && !strip ? html`<p class="message">${text.emptySeries}</p>` : nothing}
      </div>
    `;
  }

  private statsStrip(): FactItem[] | undefined {
    const buckets = this._series?.buckets;
    if (buckets && buckets.length && this._seriesPeriod === this._period) {
      return this.driveFacts({
        drive_count: sum(buckets.map((bucket) => bucket.drive_count)),
        distance_km: sum(buckets.map((bucket) => bucket.distance_km)),
        drive_duration_s: sum(buckets.map((bucket) => bucket.drive_duration_s)),
        energy_used_kwh: sum(buckets.map((bucket) => bucket.energy_used_kwh)),
        charge_count: 0,
        energy_added_kwh: sum(buckets.map((bucket) => bucket.energy_charged_kwh)),
      });
    }
    return this._stats ? this.driveFacts(this._stats) : undefined;
  }

  private statCharts(): Array<{ title: string; summary: string; data: ReturnType<typeof barChart> }> {
    const show = this.flags;
    const text = this.text;
    const buckets = this._seriesPeriod === this._period ? this._series?.buckets ?? [] : [];
    const charts: Array<{ title: string; summary: string; data: ReturnType<typeof barChart> }> = [];
    if (!show.charts || !buckets.length) {
      if (show.charts && show.consumption_vs_temp && this._tempBins?.length) {
        charts.push(this.tempChart(this._tempBins));
      }
      return charts;
    }
    const labels = buckets.map((bucket) => bucketAxisLabel(bucket.start, this._period, this.dates));
    const add = (
      title: string,
      unit: string,
      digits: number,
      tone: string,
      values: Array<number | null | undefined>,
      fold: "total" | "mean",
    ) => {
      charts.push({
        title,
        summary: this.foldSummary(values, unit, digits, fold),
        data: barChart(labels, labels, [this.series(title, unit, digits, tone, values)]),
      });
    };
    if (show.chart_distance) {
      add(text.distance, "km", 0, "accent", buckets.map((bucket) => bucket.distance_km), "total");
    }
    if (show.chart_consumption) {
      add(text.efficiencyChart, "Wh/km", 0, "amber", buckets.map((bucket) => bucket.wh_per_km), "mean");
    }
    if (show.chart_energy) {
      const ac = buckets.map((bucket) => bucket.ac_energy_kwh);
      const dc = buckets.map((bucket) => bucket.dc_energy_kwh);
      const french = this.locale.toLowerCase().startsWith("fr");
      charts.push({
        title: text.energyCharged,
        summary: `${this.fmt.energy(sum(ac))} ${french ? "en AC" : "AC"} · ${this.fmt.energy(sum(dc))} ${french ? "en DC" : "DC"}`,
        data: barChart(
          labels,
          labels,
          [this.series("AC", "kWh", 1, "accent", ac), this.series("DC", "kWh", 1, "green", dc)],
          true,
        ),
      });
    }
    if (show.charging_split) {
      add(text.chargeCostChart, "€", 2, "violet", buckets.map((bucket) => bucket.charge_cost), "total");
    }
    if (show.battery_health) {
      add(text.rangeAtFull, "km", 0, "accent", buckets.map((bucket) => bucket.range_at_100_km), "mean");
    }
    if (show.vampire_drain) {
      add(text.idleLoss, text.perDay, 1, "slate", buckets.map((bucket) => bucket.idle_range_loss_km_per_day), "mean");
    }
    if (show.consumption_vs_temp && this._tempBins?.length) {
      charts.push(this.tempChart(this._tempBins));
    }
    return charts;
  }

  private tempChart(bins: TempBin[]) {
    const text = this.text;
    const labels = bins.map((bin) => `${bin.temp_c_bucket}°`);
    const titles = bins.map((bin) => `${bin.temp_c_bucket}–${bin.temp_c_bucket + 5}°`);
    const best = bins.reduce<{ temp: number; wh: number } | null>((picked, bin) => {
      if (bin.wh_per_km == null || !Number.isFinite(bin.wh_per_km)) {
        return picked;
      }
      if (!picked || bin.wh_per_km < picked.wh) {
        return { temp: bin.temp_c_bucket, wh: bin.wh_per_km };
      }
      return picked;
    }, null);
    const summary = best
      ? `${best.temp}–${best.temp + 5}° · ${this.fmt.unit(best.wh, 0, "Wh/km")}`
      : text.emptySeries;
    return {
      title: text.tempChart,
      summary,
      data: barChart(labels, titles, [this.series(text.efficiencyChart, "Wh/km", 0, "amber", bins.map((bin) => bin.wh_per_km))]),
    };
  }

  private series(
    name: string,
    unit: string,
    decimals: number,
    tone: string,
    values: Array<number | null | undefined>,
  ): ChartSeries {
    return {
      name,
      unit,
      decimals,
      tone,
      values: values.map((value) => finite(value)),
    };
  }

  private foldSummary(values: Array<number | null | undefined>, unit: string, digits: number, fold: "total" | "mean"): string {
    const known = values.map((value) => finite(value)).filter((value): value is number => value != null);
    if (!known.length) {
      return this.text.emptySeries;
    }
    const total = known.reduce((summed, value) => summed + value, 0);
    const shown = fold === "mean" ? total / known.length : total;
    const max = Math.max(...known);
    const french = this.locale.toLowerCase().startsWith("fr");
    const left = fold === "mean" ? (french ? "Moyenne" : "Average") : "Total";
    return `${left} ${this.fmt.unit(shown, digits, unit)} · max ${this.fmt.unit(max, digits, unit)}`;
  }

  private driveDetail() {
    const detail = this._detail;
    const flags = driveDetailFlags(this._config);
    const text = this.text;
    if (!detail) {
      return html`<div class="panel">${this.backButton("drives")}</div>`;
    }
    const roads = flags.map ? routeRoads(detail.route) : [];
    const facts = this.detailDriveFacts(detail);
    return html`
      <div class="panel">
        <div class="detail-head">
          ${this.backButton("drives")}
          <p class="eyebrow">${formatClock(detail.start_at, this.dates)}</p>
        </div>
        ${flags.map
          ? roads.length
            ? html`<tl-mini-map class="route" .data=${routeMap(text.map, roads)}></tl-mini-map>`
            : html`<p class="message">${text.noGps}</p>`
          : nothing}
        ${facts.length ? this.summary(facts) : nothing}
        ${this.lineCharts(detail.start_at, detail.series, [
          flags.speed ? ["speed_kmh", text.speedChart, "km/h", 0, "accent", false] : null,
          flags.power ? ["power_kw", text.power, "kW", 0, "violet", true] : null,
          flags.elevation ? ["elevation_m", text.elevationChart, "m", 0, "amber", false] : null,
          flags.battery ? ["battery_level", text.batteryChart, "%", 0, "green", false] : null,
        ])}
      </div>
    `;
  }

  private detailDriveFacts(detail: Drive): FactItem[] {
    const flags = driveDetailFlags(this._config);
    const fmt = this.fmt;
    const items: FactItem[] = [];
    if (flags.distance) {
      items.push({ label: this.text.distance, value: fmt.distance(detail.distance_km ?? null) });
    }
    if (flags.duration) {
      items.push({ label: this.text.duration, value: fmt.duration(detail.duration_s ?? null) });
    }
    if (flags.energy) {
      items.push({ label: this.text.energy, value: fmt.energy(detail.energy_used_kwh ?? null) });
    }
    if (flags.efficiency) {
      const wh = efficiencyWh(detail.energy_used_kwh, detail.distance_km);
      items.push({ label: this.text.efficiency, value: wh == null ? "—" : fmt.unit(wh, 0, "Wh/km") });
    }
    return items;
  }

  private chargeDetail() {
    const charge = this.selectedCharge();
    const text = this.text;
    if (!charge) {
      return html`<div class="panel">${this.backButton("charges")}</div>`;
    }
    const flags = chargeDetailFlags(this._config);
    const fmt = this.fmt;
    const items: FactItem[] = [];
    if (flags.energy) {
      items.push({ label: text.energyAdded, value: fmt.energy(charge.energy_added_kwh ?? null) });
    }
    if (flags.duration) {
      items.push({ label: text.duration, value: fmt.duration(charge.duration_s ?? null) });
    }
    if (flags.soc) {
      const start = finite(charge.start_battery_level);
      const end = finite(charge.end_battery_level);
      const value =
        start != null && end != null ? `${fmt.number(start, 0)} → ${fmt.percent(end)}` : fmt.percent(start ?? end);
      items.push({ label: text.battery, value });
    }
    if (flags.power) {
      items.push({ label: text.power, value: fmt.unit(charge.max_power_kw ?? null, 0, "kW") });
    }
    if (flags.ac_dc) {
      const supply = charge.is_dc === true ? "DC" : charge.is_dc === false ? "AC" : "—";
      items.push({ label: text.acDcShort, value: supply });
    }
    if (flags.voltage) {
      items.push({ label: text.voltage, value: fmt.unit(charge.voltage_v ?? null, 0, "V") });
    }
    if (flags.cost) {
      items.push({ label: text.cost, value: fmt.money(charge.cost ?? null) });
    }
    const series = charge.series ?? [];
    return html`
      <div class="panel">
        <div class="detail-head">
          ${this.backButton("charges")}
          <p class="eyebrow">${formatClock(charge.start_at, this.dates)}</p>
        </div>
        ${items.length ? this.summary(items) : nothing}
        ${flags.curve
          ? this.lineCharts(charge.start_at, series, [
              flags.power ? ["power_kw", text.power, "kW", 0, "green", false] : null,
              flags.soc ? ["battery_level", text.battery, "%", 0, "accent", false] : null,
            ])
          : nothing}
      </div>
    `;
  }

  private lineCharts(
    start: string,
    points: SeriesPoint[],
    specs: Array<["speed_kmh" | "power_kw" | "elevation_m" | "battery_level", string, string, number, string, boolean] | null>,
  ) {
    const sampled = samplePoints(points);
    if (sampled.length < 2) {
      return html`<p class="message">${this.text.notEnoughPoints}</p>`;
    }
    const origin = new Date(start).getTime();
    const offset = offsetMinutes(this.timeZone, new Date(origin));
    const t = sampled.map((point) => (new Date(point.recorded_at).getTime() - origin) / 1000);
    const charts = specs.flatMap((spec) => {
      if (!spec) {
        return [];
      }
      const [key, title, unit, decimals, tone, signed] = spec;
      const values = sampled.map((point) => finite(point[key]));
      if (values.filter((value) => value != null).length < 2) {
        return [];
      }
      return [
        {
          title,
          summary: this.foldSummary(values, unit, decimals, "mean"),
          data: lineChart(origin, offset, t, [{ name: title, unit, decimals, tone, values, area: true, signed }]),
        },
      ];
    });
    if (!charts.length) {
      return nothing;
    }
    return html`
      <section>
        <h2>${this.text.telemetry}</h2>
        <p class="hint">${this.text.chartHint}</p>
        ${charts.map(
          (chart) =>
            html`<tl-chart variant="card" sync="detail" title=${chart.title} summary=${chart.summary} .data=${chart.data}></tl-chart>`,
        )}
      </section>
    `;
  }

  private backButton(view: "drives" | "charges") {
    return html`
      <button class="back" type="button" @click=${() => this.open(view)}>
        <ha-icon icon="mdi:arrow-left"></ha-icon>
        <span class="back-label">${this.text.back}</span>
      </button>
    `;
  }

  private selectedCharge(): Charge | undefined {
    if (this._charge && this._charge.id === this._chargeId) {
      return this._charge;
    }
    return (
      this._charges?.data.find((charge) => charge.id === this._chargeId) ??
      (this._recentCharge && this._recentCharge.id === this._chargeId ? this._recentCharge : undefined)
    );
  }

  private openDrive(drive: Drive): void {
    this._driveId = drive.id;
    this._detail = undefined;
    this._view = "drive";
  }

  private openCharge(charge: Charge): void {
    this._charge = charge;
    this._chargeId = charge.id;
    this._view = "charge";
  }

  private setPeriod(period: Period): void {
    if (this._period === period) {
      return;
    }
    this._period = period;
    this._series = undefined;
    this._tempBins = undefined;
    this._seriesPeriod = undefined;
    this._stats = undefined;
    void this.ensureView();
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
    this._charge = undefined;
    this._stats = undefined;
    this._series = undefined;
    this._tempBins = undefined;
    this._seriesPeriod = undefined;
    this._recentDrive = undefined;
    this._recentCharge = undefined;
    this._month = undefined;
    this._rangeStats = undefined;
    this._rangeStatsKey = "";
    this._page = 1;
    this._error = "";
  }

  private async ensureView(): Promise<void> {
    if (this._view === "status") {
      await this.loadOverview();
    } else if (this._view === "drives" && this.flags.drives && !this._drives) {
      await this.loadDrives();
    } else if (this._view === "charges" && this.flags.charges && !this._charges) {
      await this.loadCharges();
    } else if (this._view === "stats" && (this.flags.stats || chartsVisible(this.flags))) {
      if (chartsVisible(this.flags) && this.seriesStale()) {
        await this.loadSeries();
      } else if (!chartsVisible(this.flags) && this.flags.stats && !this._stats) {
        await this.loadStats();
      }
    } else if (this._view === "drive" && this.flags.drives && this._driveId != null && !this._detail) {
      await this.loadDrive();
    }
  }

  private async loadOverview(): Promise<void> {
    if (!this.deviceId) {
      this._error = this.text.missingDevice;
      return;
    }
    const jobs: Promise<void>[] = [];
    if (this.flags.drives && this._recentDrive === undefined && !this._recentDrivePending) {
      this._recentDrivePending = true;
      jobs.push(this.fetchRecent("drive"));
    }
    if (this.flags.charges && this._recentCharge === undefined && !this._recentChargePending) {
      this._recentChargePending = true;
      jobs.push(this.fetchRecent("charge"));
    }
    if ((this.flags.stats || this.flags.totals) && this._month === undefined && !this._monthPending) {
      this._monthPending = true;
      jobs.push(this.fetchMonth());
    }
    await Promise.all(jobs);
  }

  private async fetchRecent(kind: "drive" | "charge"): Promise<void> {
    try {
      const payload = await this.call(kind === "drive" ? "get_drives" : "get_charges", { page: 1, per_page: 1 });
      const row = isPage<Drive | Charge>(payload) ? (payload.data[0] ?? null) : null;
      if (kind === "drive") {
        this._recentDrive = row as Drive | null;
      } else {
        this._recentCharge = row as Charge | null;
      }
    } catch {
      if (kind === "drive") {
        this._recentDrive = null;
      } else {
        this._recentCharge = null;
      }
    } finally {
      if (kind === "drive") {
        this._recentDrivePending = false;
      } else {
        this._recentChargePending = false;
      }
    }
  }

  private async fetchMonth(): Promise<void> {
    try {
      const payload = await this.call("get_stats", monthQuery(this.timeZone));
      this._month = isStats(payload) ? payload : null;
    } catch {
      this._month = null;
    } finally {
      this._monthPending = false;
    }
  }

  private async loadDrives(): Promise<void> {
    await this.once("drives", () => this.load(async () => {
      const payload = await this.call("get_drives", {
        page: this._page,
        per_page: pageSize(this._config),
        ...listQuery(this._range, this.timeZone),
      });
      if (!isPage<Drive>(payload)) {
        throw new Error(this.text.failed);
      }
      this._drives = payload;
      await this.loadRangeStats();
    }));
  }

  private async loadCharges(): Promise<void> {
    await this.once("charges", () => this.load(async () => {
      const payload = await this.call("get_charges", {
        page: this._page,
        per_page: pageSize(this._config),
        ...listQuery(this._range, this.timeZone),
      });
      if (!isPage<Charge>(payload)) {
        throw new Error(this.text.failed);
      }
      this._charges = payload;
      await this.loadRangeStats();
    }));
  }

  private async once(key: string, action: () => Promise<void>): Promise<void> {
    if (this._inflight.has(key)) {
      return;
    }
    this._inflight.add(key);
    try {
      await action();
    } finally {
      this._inflight.delete(key);
    }
  }

  private async loadRangeStats(): Promise<void> {
    if (!this.flags.totals) {
      return;
    }
    const key = `${this._range}|${this.timeZone}`;
    if (this._rangeStatsKey === key && this._rangeStats !== undefined) {
      return;
    }
    try {
      const payload = await this.call("get_stats", listQuery(this._range, this.timeZone));
      this._rangeStats = isStats(payload) ? payload : null;
    } catch {
      this._rangeStats = null;
    }
    this._rangeStatsKey = key;
  }

  private async loadDrive(): Promise<void> {
    const id = this._driveId;
    if (id == null) {
      return;
    }
    await this.once(`drive:${id}`, () => this.load(async () => {
      const payload = await this.call("get_drive", { drive_id: id, max_points: 300 });
      if (!isDetail(payload)) {
        throw new Error(this.text.failed);
      }
      this._detail = payload;
    }));
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
    await this.once(`series:${period}`, () => this.load(async () => {
      if (wantSeries) {
        const payload = await this.call("get_stats_series", { period, count: SERIES_COUNT[period] });
        if (!isSeries(payload)) {
          throw new Error(this.text.failed);
        }
        this._series = payload;
      }
      if (wantTemp) {
        try {
          this._tempBins = tempBins(await this.call("get_consumption_by_temp", { period, count: SERIES_COUNT[period] }));
        } catch {
          this._tempBins = [];
        }
      }
      this._seriesPeriod = period;
    }));
  }

  private async loadStats(): Promise<void> {
    const period = this._period;
    await this.once(`stats:${period}`, () => this.load(async () => {
      const payload = await this.call("get_stats", periodQuery(period, this.timeZone));
      if (!isStats(payload)) {
        throw new Error(this.text.failed);
      }
      this._stats = payload;
    }));
  }

  private async load(action: () => Promise<void>): Promise<void> {
    if (!this.deviceId) {
      this._error = this.text.missingDevice;
      return;
    }
    this._loading = true;
    this._error = "";
    try {
      await action();
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

  private async ensureCarImage(): Promise<void> {
    const show = this.flags.car || this.flags.status;
    const target = show ? carImageTarget(this.readings.values()) : null;
    const key = target ? `${target.entryId}:${target.vehicleId}` : "";
    if (!show || !target) {
      this._carImageKey = "";
      this._carImageUrl = "";
      this._carImageFailed = show && !target;
      return;
    }
    if (key === this._carImageKey && (this._carImageUrl || this._carImageFailed)) {
      return;
    }
    this._carImageGen += 1;
    const generation = this._carImageGen;
    this._carImageKey = key;
    this._carImageUrl = "";
    this._carImageFailed = false;
    const hass = this.hass;
    if (!hass?.callWS || !hass.hassUrl) {
      this._carImageFailed = true;
      return;
    }
    try {
      const url = await signedCarImageUrl(hass, target.entryId, target.vehicleId);
      if (generation !== this._carImageGen) {
        return;
      }
      if (!url) {
        this._carImageFailed = true;
        return;
      }
      this._carImageUrl = url;
    } catch {
      if (generation === this._carImageGen) {
        this._carImageFailed = true;
      }
    }
  }
}

export { TeslaLoggerCardEditor };

if (!customElements.get("tesla-logger-card-impl")) {
  customElements.define("tesla-logger-card-impl", TeslaLoggerCard);
}
if (!customElements.get("tesla-logger-card-editor-impl")) {
  customElements.define("tesla-logger-card-editor-impl", TeslaLoggerCardEditor);
}
