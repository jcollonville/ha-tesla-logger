/**
 * Dev/test harness for the Lovelace card.
 * Coordinates are the public null-island fixture (0, 0) only.
 */
import { TeslaLoggerCardEditor } from "../src/card-editor";
import { TeslaLoggerCard } from "../src/tesla-logger-card";
import type { HomeAssistant } from "../src/types";

const ICONS: Record<string, string> = {
  "mdi:chevron-left": "M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z",
  "mdi:chevron-right": "M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z",
  "mdi:refresh":
    "M17.65,6.35C16.2,4.9 14.21,4 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20C15.73,20 18.84,17.45 19.73,14H17.65C16.83,16.33 14.61,18 12,18A6,6 0 0,1 6,12A6,6 0 0,1 12,6C13.66,6 15.14,6.69 16.22,7.78L13,11H20V4L17.65,6.35Z",
  "mdi:arrow-left": "M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z",
  "mdi:map-marker-distance":
    "M6.5,8.11C5.61,8.11 4.89,7.39 4.89,6.5A1.61,1.61 0 0,1 6.5,4.89C7.39,4.89 8.11,5.61 8.11,6.5V6.5A1.61,1.61 0 0,1 6.5,8.11M6.5,2C4,2 2,4 2,6.5C2,9.87 6.5,14.86 6.5,14.86C6.5,14.86 11,9.87 11,6.5C11,4 9,2 6.5,2M17.5,8.11A1.61,1.61 0 0,1 15.89,6.5C15.89,5.61 16.61,4.89 17.5,4.89C18.39,4.89 19.11,5.61 19.11,6.5A1.61,1.61 0 0,1 17.5,8.11M17.5,2C15,2 13,4 13,6.5C13,9.87 17.5,14.86 17.5,14.86C17.5,14.86 22,9.87 22,6.5C22,4 20,2 17.5,2M17.5,16C16.23,16 15.1,16.8 14.68,18H9.32C8.77,16.44 7.05,15.62 5.5,16.17C3.93,16.72 3.11,18.44 3.66,20C4.22,21.56 5.93,22.38 7.5,21.83C8.35,21.53 9,20.85 9.32,20H14.69C15.24,21.56 16.96,22.38 18.5,21.83C20.08,21.28 20.9,19.56 20.35,18C19.92,16.8 18.78,16 17.5,16V16M17.5,20.5A1.5,1.5 0 0,1 16,19A1.5,1.5 0 0,1 17.5,17.5A1.5,1.5 0 0,1 19,19A1.5,1.5 0 0,1 17.5,20.5Z",
};

class HaIcon extends HTMLElement {
  static observedAttributes = ["icon"];

  private readonly root: ShadowRoot;

  constructor() {
    super();
    this.root = this.attachShadow({ mode: "open" });
    this.root.innerHTML = `<style>
      :host { display: inline-flex; width: var(--mdc-icon-size, 24px); height: var(--mdc-icon-size, 24px); color: inherit; }
      svg { width: 100%; height: 100%; display: block; }
    </style>`;
  }

  connectedCallback(): void {
    this.draw();
  }

  attributeChangedCallback(): void {
    this.draw();
  }

  private draw(): void {
    const path = ICONS[this.getAttribute("icon") ?? ""];
    this.root.innerHTML = `<style>
      :host { display: inline-flex; width: var(--mdc-icon-size, 24px); height: var(--mdc-icon-size, 24px); color: inherit; }
      svg { width: 100%; height: 100%; display: block; }
    </style>${
      path
        ? `<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="${path}"/></svg>`
        : ""
    }`;
  }
}

class HaIconButton extends HTMLElement {
  connectedCallback(): void {
    this.style.display = "inline-flex";
    this.style.alignItems = "center";
    this.style.justifyContent = "center";
    this.style.padding = "0";
    this.style.background = "transparent";
    this.style.color = "inherit";
    this.style.cursor = this.hasAttribute("disabled") ? "default" : "pointer";
    this.style.borderRadius = "999px";
  }
}

class HaCard extends HTMLElement {
  constructor() {
    super();
    const root = this.attachShadow({ mode: "open" });
    root.innerHTML = `<style>
      :host {
        display: block;
        background: var(--ha-card-background, var(--card-background-color, #fff));
        color: var(--primary-text-color, #212121);
        border-radius: var(--ha-card-border-radius, 12px);
        box-shadow: var(--ha-card-box-shadow, none);
        overflow: hidden;
      }
    </style><slot></slot>`;
  }
}

if (!customElements.get("ha-icon")) {
  customElements.define("ha-icon", HaIcon);
}
if (!customElements.get("ha-icon-button")) {
  customElements.define("ha-icon-button", HaIconButton);
}
if (!customElements.get("ha-card")) {
  customElements.define("ha-card", HaCard);
}

const params = new URLSearchParams(location.search);
const theme = params.get("theme") === "dark" ? "dark" : "light";
const view = params.get("view") || "status";
const total = Number(params.get("total") || "24");
const cardWidth = params.get("width") || "760";
document.documentElement.dataset.theme = theme;
document.documentElement.style.setProperty("--card-width", `${cardWidth}px`);

const at = (iso: string) => iso;

const DRIVES = [
  {
    id: 1,
    start_at: at("2026-11-16T07:12:00Z"),
    end_at: at("2026-11-16T07:46:00Z"),
    duration_s: 2040,
    distance_km: 28.4,
    energy_used_kwh: 4.8,
    start_battery_level: 82,
    end_battery_level: 74,
    start_address: "Maison",
    end_address: "Bureau",
  },
  {
    id: 2,
    start_at: at("2026-11-16T17:05:00Z"),
    end_at: at("2026-11-16T17:48:00Z"),
    duration_s: 2580,
    distance_km: 31.2,
    energy_used_kwh: 6.1,
    start_battery_level: 71,
    end_battery_level: 61,
    start_address: "Bureau",
    end_address: "Maison",
  },
  {
    id: 3,
    start_at: at("2026-11-15T09:02:00Z"),
    end_at: at("2026-11-15T11:18:00Z"),
    duration_s: 8160,
    distance_km: 142.6,
    energy_used_kwh: 24.8,
    start_battery_level: 95,
    end_battery_level: 48,
    start_address: "Maison",
    end_address: "Entrepôt nord, quai B, porte de livraison",
  },
  {
    id: 4,
    start_at: at("2026-11-14T22:10:00Z"),
    end_at: at("2026-11-15T00:05:00Z"),
    duration_s: 6900,
    distance_km: 96.2,
    energy_used_kwh: 18.4,
    start_battery_level: 64,
    end_battery_level: 31,
    start_address: "Aéroport",
    end_address: "Maison",
  },
  {
    id: 5,
    start_at: at("2026-11-13T12:30:00Z"),
    end_at: at("2026-11-13T12:46:00Z"),
    duration_s: 960,
    distance_km: 6.2,
    energy_used_kwh: 1.2,
    start_battery_level: 58,
    end_battery_level: 56,
    start_address: "Épicerie",
    end_address: "Maison",
  },
  {
    id: 6,
    start_at: at("2026-11-12T08:15:00Z"),
    duration_s: 600,
    energy_used_kwh: 1.5,
  },
  {
    id: 7,
    start_at: at("2026-11-11T16:20:00Z"),
    end_at: at("2026-11-11T16:41:00Z"),
    duration_s: 1260,
    distance_km: 11,
    energy_used_kwh: 2.2,
    start_address: "École",
    end_address: "Piscine",
  },
  {
    id: 8,
    start_at: at("2026-11-10T07:40:00Z"),
    end_at: at("2026-11-10T08:05:00Z"),
    duration_s: 1500,
    distance_km: 14.8,
    energy_used_kwh: 2.6,
    start_battery_level: 88,
    end_battery_level: 83,
    start_address: "Maison",
    end_address: "Gare",
  },
  {
    id: 9,
    start_at: at("2026-11-09T18:12:00Z"),
    end_at: at("2026-11-09T18:55:00Z"),
    duration_s: 2580,
    distance_km: 22.4,
    energy_used_kwh: 5.4,
    start_battery_level: 77,
    end_battery_level: 68,
    start_address: "Gare",
    end_address: "Maison",
  },
  {
    id: 10,
    start_at: at("2026-11-08T13:05:00Z"),
    end_at: at("2026-11-08T13:28:00Z"),
    duration_s: 1380,
    distance_km: 9.6,
    energy_used_kwh: 1.8,
    start_battery_level: 66,
    end_battery_level: 63,
    start_address: "Centre-ville",
    end_address: "Maison",
  },
];

const CHARGES = [
  {
    id: 1,
    start_at: at("2026-11-16T19:02:00Z"),
    end_at: at("2026-11-16T22:14:00Z"),
    duration_s: 11520,
    energy_added_kwh: 28.4,
    max_power_kw: 11,
    charger_type: "Wall Connector",
    is_dc: false,
    start_battery_level: 34,
    end_battery_level: 80,
    address: "Maison",
  },
  {
    id: 2,
    start_at: at("2026-11-15T11:30:00Z"),
    end_at: at("2026-11-15T12:02:00Z"),
    duration_s: 1920,
    energy_added_kwh: 36.5,
    max_power_kw: 142,
    charger_type: "Supercharger",
    is_dc: true,
    start_battery_level: 18,
    end_battery_level: 72,
  },
  {
    id: 3,
    start_at: at("2026-11-14T08:10:00Z"),
    end_at: at("2026-11-14T08:40:00Z"),
    duration_s: 1800,
    energy_added_kwh: 6.5,
    max_power_kw: 11,
    charger_type: " AC ",
    start_battery_level: 48,
    end_battery_level: 62,
    address: "Bureau",
  },
  {
    id: 4,
    start_at: at("2026-11-13T21:00:00Z"),
    end_at: at("2026-11-14T01:12:00Z"),
    duration_s: 15120,
    energy_added_kwh: 41.2,
    max_power_kw: 7,
    is_dc: false,
    start_battery_level: 22,
    end_battery_level: 90,
    geofence: "Maison",
  },
  {
    id: 5,
    start_at: at("2026-11-12T15:14:00Z"),
    end_at: at("2026-11-12T15:29:00Z"),
    duration_s: 900,
    energy_added_kwh: 8.2,
    max_power_kw: 50,
    is_dc: true,
    location: "Aire de recharge, voie de droite, place 4",
  },
  {
    id: 6,
    start_at: at("2026-11-11T07:55:00Z"),
    duration_s: 2400,
    energy_added_kwh: 6.5,
    max_power_kw: 11,
    charger_type: "<invalid>",
  },
  {
    id: 7,
    start_at: at("2026-11-10T12:00:00Z"),
    end_at: at("2026-11-10T12:20:00Z"),
    duration_s: 1200,
    energy_added_kwh: 3.1,
    charger_type: " None ",
    address: "Épicerie",
  },
  {
    id: 8,
    start_at: at("2026-11-09T18:40:00Z"),
    duration_s: 60,
    charger_type: "NULL",
  },
  {
    id: 9,
    start_at: at("2026-11-08T09:05:00Z"),
    end_at: at("2026-11-08T09:48:00Z"),
    duration_s: 2580,
    energy_added_kwh: 18.6,
    max_power_kw: 11,
    is_dc: false,
    start_battery_level: 40,
    end_battery_level: 70,
    address: "Bureau",
  },
  {
    id: 10,
    start_at: at("2026-11-07T16:18:00Z"),
    end_at: at("2026-11-07T16:36:00Z"),
    duration_s: 1080,
    energy_added_kwh: 12.4,
    max_power_kw: 75,
    is_dc: true,
    start_battery_level: 29,
    end_battery_level: 51,
    address: "Centre-ville",
    cost: 9.4,
    voltage_v: 400,
    series: [20, 40, 70, 75, 60, 30].map((power, index) => ({
      recorded_at: new Date(Date.parse("2026-11-07T16:18:00Z") + index * 3 * 60 * 1000).toISOString(),
      power_kw: power,
      battery_level: 29 + index * 4,
    })),
  },
];

function monthIso(offset: number): string {
  const now = new Date();
  return new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth() + offset, 1)).toISOString();
}

const BUCKETS = [-5, -4, -3, -2, -1, 0].map((offset, index) => {
  const distance = [180, 210, 160, 240, 190, 86][index];
  const charged = [70, 82, 60, 96, 74, 28][index];
  const ac = Math.round(charged * 0.62);
  return {
    start: monthIso(offset),
    distance_km: distance,
    energy_used_kwh: Math.round(distance * 0.17 * 10) / 10,
    wh_per_km: [168, 174, 181, 159, 176, null][index],
    energy_charged_kwh: charged,
    drive_duration_s: distance * 70,
    drive_count: 8 + index,
    range_at_100_km: 490 - index * 4,
    ac_energy_kwh: ac,
    dc_energy_kwh: charged - ac,
    dc_share_pct: Math.round(((charged - ac) / charged) * 100),
    charge_cost: 18 + index * 3.25,
    cost_per_km: 0.08 + index * 0.01,
    idle_range_loss_km_per_day: 0.6 + index * 0.15,
  };
});

const TEMP_BINS = [-5, 0, 5, 10, 15, 20, 25].map((temp) => ({
  temp_c_bucket: temp,
  wh_per_km: temp < 5 ? 210 - temp : 150 + Math.abs(temp - 15) * 2,
  distance_km: 40 + temp,
}));

const DETAIL = {
  ...DRIVES[2],
  route: [
    { recorded_at: DRIVES[2].start_at, latitude: 0, longitude: 0 },
    { recorded_at: DRIVES[2].end_at, latitude: 0.02, longitude: 0.03 },
  ],
  series: [0, 20, 45, 70, 88, 90, 60, 30, 12, 0].map((speed, index) => ({
    recorded_at: new Date(Date.parse(DRIVES[2].start_at) + index * 12 * 60 * 1000).toISOString(),
    speed_kmh: speed,
    power_kw: Math.round((speed / 8) * 10) / 10,
    elevation_m: 40 + index * 8,
    battery_level: 95 - index * 4.5,
  })),
};

function pageOf<T>(rows: T[], requested: number, page: number) {
  const perPage = requested > 0 ? requested : rows.length;
  return {
    data: rows.slice(0, Math.min(rows.length, perPage)),
    page,
    per_page: perPage,
    total,
  };
}

const SEEN_AT = new Date(Date.now() - 12 * 60 * 1000).toISOString();

function sensor(key: string, state: string | number) {
  return {
    id: `sensor.${key}`,
    state: String(state),
    last_updated: SEEN_AT,
    attributes: { key, vin: "TEST", vehicle_id: 1, config_entry_id: "entry-1" },
  };
}

const readings = [
  sensor("battery_level", 72),
  sensor("rated_range", 328),
  sensor("speed", 0),
  sensor("power", -1.2),
  sensor("inside_temp", 21),
  sensor("outside_temp", 8.5),
  sensor("charger_power", 0),
  sensor("energy_added", 0),
  sensor("odometer", 18420),
  sensor("charge_limit", 80),
  sensor("activity", "online"),
  sensor("geofence", "Maison"),
];

const states: HomeAssistant["states"] = {
  "sensor.tesla_location": {
    state: "home",
    attributes: {
      friendly_name: "Red",
      vin: "TEST",
      key: "location",
      vehicle_id: 1,
      config_entry_id: "entry-1",
    },
  },
  "device_tracker.car": {
    state: "home",
    last_updated: SEEN_AT,
    attributes: {
      key: "location",
      vin: "TEST",
      latitude: 0,
      longitude: 0,
      address: "Allée des tilleuls",
      vehicle_id: 1,
      config_entry_id: "entry-1",
    },
  },
};
const entities: NonNullable<HomeAssistant["entities"]> = {
  "sensor.tesla_location": { device_id: "device-1" },
  "device_tracker.car": { device_id: "device-1", translation_key: "location" },
};
for (const reading of readings) {
  states[reading.id] = { state: reading.state, attributes: reading.attributes };
  entities[reading.id] = { device_id: "device-1", translation_key: reading.attributes.key };
}

const hass = {
  states,
  entities,
  devices: { "device-1": { name: "Red", model: "Model Y" } },
  locale: { language: "fr", time_format: "24", time_zone: "server" },
  config: { time_zone: "UTC" },
  themes: { darkMode: theme === "dark" },
  callWS: async (message: { type: string; [key: string]: unknown }) => {
    const path = message.path;
    if (message.type !== "auth/sign_path" || typeof path !== "string") {
      throw new Error(message.type);
    }
    return { path: `${path}?authSig=harness` };
  },
  hassUrl: () => "",
  callService: async (_domain: string, service: string, data?: Record<string, unknown>) => {
    const requested = Number(data?.per_page ?? 20);
    const page = Number(data?.page ?? 1);
    if (service === "get_drives") {
      return { response: pageOf(DRIVES, requested, page) };
    }
    if (service === "get_charges") {
      return { response: pageOf(CHARGES, requested, page) };
    }
    if (service === "get_drive") {
      return { response: DETAIL };
    }
    if (service === "get_stats") {
      return {
        response: {
          drive_count: 42,
          distance_km: 642.4,
          drive_duration_s: 28 * 3600 + 15 * 60,
          energy_used_kwh: 112.6,
          charge_count: 18,
          energy_added_kwh: 148.2,
        },
      };
    }
    if (service === "get_stats_series") {
      return { response: { period: data?.period ?? "month", buckets: BUCKETS } };
    }
    if (service === "get_consumption_by_temp") {
      return { response: { data: TEMP_BINS } };
    }
    return { response: { data: [], page: 1, per_page: requested, total: 0 } };
  },
} as HomeAssistant;

class HaEntityPicker extends HTMLElement {
  private input?: HTMLSelectElement;

  set hass(value: HomeAssistant) {
    this.renderPicker(value);
  }

  set value(next: string) {
    if (this.input) {
      this.input.value = next;
    }
  }

  set label(next: string) {
    this.dataset.label = next;
    this.renderPicker();
  }

  connectedCallback(): void {
    this.renderPicker();
  }

  private renderPicker(hassValue?: HomeAssistant): void {
    const current = this.input?.value || "sensor.tesla_location";
    const label = this.dataset.label || "Entity";
    this.innerHTML = "";
    const field = document.createElement("label");
    field.style.display = "flex";
    field.style.flexDirection = "column";
    field.style.gap = "6px";
    field.style.fontSize = "0.82rem";
    field.style.fontWeight = "600";
    field.style.color = "var(--secondary-text-color)";
    field.textContent = label;
    const select = document.createElement("select");
    select.style.minHeight = "40px";
    select.style.borderRadius = "10px";
    select.style.padding = "8px 12px";
    select.style.background = "var(--secondary-background-color)";
    select.style.color = "var(--primary-text-color)";
    select.style.border = "1px solid var(--divider-color)";
    const source = hassValue?.states ?? hass.states;
    for (const id of Object.keys(source)) {
      const option = document.createElement("option");
      option.value = id;
      option.textContent = id;
      select.append(option);
    }
    select.value = current;
    select.addEventListener("change", () => {
      this.dispatchEvent(new CustomEvent("value-changed", { detail: { value: select.value }, bubbles: true }));
    });
    field.append(select);
    this.append(field);
    this.input = select;
  }
}

if (!customElements.get("ha-entity-picker")) {
  customElements.define("ha-entity-picker", HaEntityPicker);
}

const stage = document.querySelector("#stage");
const card = new TeslaLoggerCard();
const editor = new TeslaLoggerCardEditor();
if (view === "editor") {
  stage?.append(editor);
  editor.hass = hass;
  editor.setConfig({ entity: "sensor.tesla_location", show_map: true });
} else {
  stage?.append(card);
  card.hass = hass;
  const defaultView = view === "drive" || view === "charge" ? "drives" : view;
  card.setConfig({
    entity: "sensor.tesla_location",
    default_view: (defaultView === "editor" ? "status" : defaultView) as "status",
    show_map: true,
  });
}

if (view === "drive") {
  const state = card as unknown as { _driveId?: number; _view: string };
  state._driveId = DETAIL.id;
  state._view = "drive";
}

if (view === "charge") {
  const state = card as unknown as { _chargeId?: number; _charge?: unknown; _view: string };
  state._chargeId = 10;
  state._charge = CHARGES[9];
  state._view = "charge";
}

function has(root: ParentNode | null | undefined, selector: string): boolean {
  if (!root) {
    return false;
  }
  if (root.querySelector(selector)) {
    return true;
  }
  for (const node of root.querySelectorAll("*")) {
    if (node.shadowRoot && has(node.shadowRoot, selector)) {
      return true;
    }
  }
  return false;
}

async function settle(): Promise<void> {
  for (let attempt = 0; attempt < 50; attempt += 1) {
    await card.updateComplete;
    await editor.updateComplete;
    const root = card.shadowRoot;
    const text = root?.textContent ?? "";
    const loading = text.includes("Chargement") || text.includes("Loading");
    const ready =
      view === "editor"
        ? Boolean(editor.shadowRoot?.querySelector(".editor input, .editor ha-entity-picker"))
        : !loading &&
          (view === "drives"
            ? has(root, "tl-drive-row")
            : view === "charges"
              ? has(root, "tl-charge-row")
              : view === "status"
                ? has(root, "tl-vehicle-card") && has(root, "tl-mini-map")
                : view === "stats" || view === "charts"
                  ? has(root, "tl-chart")
                  : view === "drive"
                    ? has(root, "tl-chart")
                    : view === "charge"
                      ? has(root, "tl-summary-strip")
                      : true);
    if (ready) {
      await new Promise((resolve) => setTimeout(resolve, 250));
      await card.updateComplete;
      document.documentElement.dataset.ready = "true";
      return;
    }
    await new Promise((resolve) => setTimeout(resolve, 60));
  }
  document.documentElement.dataset.ready = "timeout";
}

void settle();
