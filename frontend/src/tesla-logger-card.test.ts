import { afterEach, describe, expect, it, vi } from "vitest";

vi.mock("./basemap", async () => {
  const actual = await vi.importActual<typeof import("./basemap")>("./basemap");
  return {
    ...actual,
    syncBasemap: vi.fn(),
    releaseBasemap: vi.fn(),
  };
});

import { safeError } from "./format";
import "./loader";
import { TeslaLoggerCard, TeslaLoggerCardEditor } from "./tesla-logger-card";
import type { CardConfig, Charge, Drive, HomeAssistant, Page, StatsSeries, TempBin } from "./types";

const HISTORY_ERROR = {
  code: "home_assistant_error",
  message: "The action requires responses and must be called with return_response=True.",
};

function flat(root: ParentNode | null | undefined): string {
  if (!root) {
    return "";
  }
  let text = root instanceof Element || root instanceof ShadowRoot ? (root.textContent ?? "") : "";
  const nodes = root.querySelectorAll("*");
  nodes.forEach((node) => {
    if (node.shadowRoot) {
      text += flat(node.shadowRoot);
    }
  });
  return text.replace(/[\u00a0\u202f]/g, " ");
}

function deep(root: ParentNode | null | undefined, selector: string): Element[] {
  if (!root) {
    return [];
  }
  const found = Array.from(root.querySelectorAll(selector));
  root.querySelectorAll("*").forEach((node) => {
    if (node.shadowRoot) {
      found.push(...deep(node.shadowRoot, selector));
    }
  });
  return found;
}

describe("card shell", () => {
  it("uses the same stub config as the implementation", () => {
    const hass = {
      states: {
        "device_tracker.car": {
          state: "home",
          attributes: { key: "location" },
        },
      },
      callService: vi.fn(),
    } as unknown as HomeAssistant;
    const shell = customElements.get("tesla-logger-card") as unknown as {
      getStubConfig(hass: HomeAssistant): CardConfig;
    };
    expect(shell.getStubConfig(hass)).toEqual(TeslaLoggerCard.getStubConfig(hass));
    expect(shell.getStubConfig(hass).entity).toBe("device_tracker.car");
  });
});

describe("safeError", () => {
  it("shows the message from a Home Assistant error object", () => {
    expect(safeError(HISTORY_ERROR, "Could not load history.")).toBe(HISTORY_ERROR.message);
  });

  it("hides token-like text", () => {
    expect(safeError({ code: "unknown", message: "token tl_secret failed" }, "fallback")).toBe("fallback");
  });
});

describe("TeslaLoggerCard service calls", () => {
  it("requests a service response and reads it back", async () => {
    const callService = vi.fn().mockResolvedValue({
      response: { data: [], page: 1, per_page: 20, total: 0 },
    });
    const card = new TeslaLoggerCard();
    card.hass = {
      states: {},
      entities: { "sensor.tesla_location": { device_id: "device-1" } },
      callService,
    } as HomeAssistant;
    card.setConfig({ entity: "sensor.tesla_location" });
    const payload = await (
      card as unknown as { call(service: string, data: Record<string, unknown>): Promise<unknown> }
    ).call("get_drives", { page: 1 });
    expect(callService.mock.calls[0]?.[0]).toBe("tesla_logger");
    expect(callService.mock.calls[0]?.[1]).toBe("get_drives");
    expect(callService.mock.calls[0]?.[2]).toEqual({ device_id: "device-1", page: 1 });
    expect(callService.mock.calls[0]?.[4]).toBe(false);
    expect(callService.mock.calls[0]?.[5]).toBe(true);
    expect(payload).toEqual({ data: [], page: 1, per_page: 20, total: 0 });
  });
});

const mounted: TeslaLoggerCard[] = [];

afterEach(() => {
  for (const card of mounted) {
    card.remove();
  }
  mounted.length = 0;
});

function frenchHass(): HomeAssistant {
  return {
    states: {
      "sensor.tesla_location": { state: "home", attributes: { friendly_name: "Red" } },
    },
    entities: { "sensor.tesla_location": { device_id: "device-1" } },
    devices: { "device-1": { name: "Red", model: "Model Y" } },
    locale: { language: "fr", time_format: "24", time_zone: "server" },
    config: { time_zone: "UTC" },
    themes: { darkMode: false },
    callService: vi.fn().mockResolvedValue({ response: { data: [], page: 1, per_page: 10, total: 0 } }),
  } as HomeAssistant;
}

async function showList(view: "drives" | "charges", page: Page<Drive> | Page<Charge>): Promise<TeslaLoggerCard> {
  const card = new TeslaLoggerCard();
  mounted.push(card);
  document.body.append(card);
  card.hass = frenchHass();
  card.setConfig({ entity: "sensor.tesla_location", default_view: view, show: { totals: false } });
  const state = card as unknown as { _drives?: Page<Drive>; _charges?: Page<Charge> };
  if (view === "drives") {
    state._drives = page as Page<Drive>;
  } else {
    state._charges = page as Page<Charge>;
  }
  await card.updateComplete;
  return card;
}

describe("history lists", () => {
  it("groups charges by day and hides placeholder charger types", async () => {
    const start = new Date(Date.UTC(2026, 10, 10, 3, 30)).toISOString();
    const card = await showList("charges", {
      page: 1,
      per_page: 10,
      total: 2,
      data: [
        {
          id: 1,
          start_at: start,
          duration_s: 2400,
          energy_added_kwh: 6.5,
          max_power_kw: 11,
          charger_type: " AC ",
        },
        {
          id: 2,
          start_at: start,
          duration_s: 60,
          charger_type: "<invalid>",
        },
      ],
    });
    const text = flat(card.shadowRoot);
    expect(text).toContain("mar. 10 nov.");
    expect(text).toContain("03:30");
    expect(text).toContain("6,5");
    expect(text).toContain("kWh");
    expect(text).toContain("AC");
    expect(text).not.toContain("<invalid>");
    expect(text.toLowerCase()).not.toContain("null");
    const buttons = card.shadowRoot?.querySelectorAll(".list-toolbar ha-icon-button");
    expect(buttons?.[0]?.querySelector("ha-icon")?.getAttribute("icon")).toBe("mdi:chevron-left");
  });

  it("puts icon controls on the left and the page range on the right", async () => {
    const card = await showList("drives", {
      page: 2,
      per_page: 10,
      total: 25,
      data: [
        {
          id: 7,
          start_at: "2026-11-09T08:00:00Z",
          end_at: "2026-11-09T08:30:00Z",
          duration_s: 1800,
          distance_km: 18.4,
          energy_used_kwh: 3.2,
          start_address: "Maison",
          end_address: "Bureau",
        },
      ],
    });
    card.hass = {
      ...card.hass,
      locale: { language: "en", time_format: "24", time_zone: "server" },
      config: { time_zone: "UTC" },
    } as HomeAssistant;
    await card.updateComplete;
    const toolbar = card.shadowRoot?.querySelector(".list-toolbar");
    const group = card.shadowRoot?.querySelector("tl-day-group") as Element | null;
    expect(toolbar!.compareDocumentPosition(group!) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy();
    const buttons = Array.from(toolbar?.querySelectorAll("ha-icon-button") ?? []);
    expect(buttons.map((button) => button.querySelector("ha-icon")?.getAttribute("icon"))).toEqual([
      "mdi:chevron-left",
      "mdi:chevron-right",
      "mdi:refresh",
    ]);
    expect(toolbar?.querySelector(".page-indicator")?.textContent).toBe("11–20");
    const style = buttons[0] ? getComputedStyle(buttons[0]) : null;
    expect(Number.parseFloat(style?.width ?? "0")).toBeGreaterThanOrEqual(40);
    expect(flat(card.shadowRoot)).toContain("Mon, Nov 9");
    expect(flat(card.shadowRoot)).toContain("Maison");
    expect(flat(card.shadowRoot)).toContain("Bureau");
    buttons[1]?.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    expect((card as unknown as { _page: number })._page).toBe(3);
  });

  it("requests ten rows per page and keeps the page when the tab changes", async () => {
    const callService = vi.fn().mockImplementation(async (_domain: string, service: string, data?: { page?: number }) => ({
      response:
        service === "get_stats"
          ? {
              drive_count: 1,
              distance_km: 1,
              drive_duration_s: 60,
              energy_used_kwh: 1,
              charge_count: 1,
              energy_added_kwh: 1,
            }
          : {
              data: [{ id: 1, start_at: "2026-11-16T07:12:00Z", distance_km: 1, energy_added_kwh: 1 }],
              page: data?.page ?? 1,
              per_page: 10,
              total: 30,
            },
    }));
    const card = new TeslaLoggerCard();
    mounted.push(card);
    document.body.append(card);
    const hass = frenchHass();
    hass.callService = callService;
    card.hass = hass;
    card.setConfig({ entity: "sensor.tesla_location", default_view: "drives", show: { totals: false } });
    await vi.waitFor(() => expect(callService).toHaveBeenCalled());
    expect(callService.mock.calls[0]?.[1]).toBe("get_drives");
    expect(callService.mock.calls[0]?.[2]).toMatchObject({ device_id: "device-1", page: 1, per_page: 10 });
    await card.updateComplete;
    card.shadowRoot?.querySelectorAll(".list-toolbar ha-icon-button")[1]?.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    await vi.waitFor(() => expect(callService.mock.calls.filter((call) => call[1] === "get_drives").length).toBeGreaterThanOrEqual(2));
    const second = callService.mock.calls.filter((call) => call[1] === "get_drives")[1];
    expect(second?.[2]).toMatchObject({ page: 2, per_page: 10 });
    const charges = deep(card.shadowRoot, "[role='tab']").find((tab) => tab.textContent?.trim() === "Charges");
    charges?.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    await vi.waitFor(() => expect(callService.mock.calls.some((call) => call[1] === "get_charges" && call[2]?.page === 2)).toBe(true));
  });
});

describe("overview", () => {
  it("shows the console layout without coordinates or tile requests", async () => {
    const hass = frenchHass();
    hass.states["sensor.battery"] = { state: "72", attributes: { key: "battery_level", vin: "V" } };
    hass.states["sensor.range"] = { state: "328", attributes: { key: "rated_range", vin: "V" } };
    hass.states["sensor.limit"] = { state: "80", attributes: { key: "charge_limit", vin: "V" } };
    hass.states["sensor.activity"] = { state: "online", attributes: { key: "activity", vin: "V" } };
    hass.states["sensor.fence"] = { state: "Maison", attributes: { key: "geofence", vin: "V" } };
    hass.states["device_tracker.red"] = {
      state: "home",
      attributes: { key: "location", vin: "V", latitude: 1.25, longitude: 2.5 },
    };
    hass.entities = {
      ...hass.entities,
      "sensor.battery": { device_id: "device-1" },
      "sensor.range": { device_id: "device-1" },
      "sensor.limit": { device_id: "device-1" },
      "sensor.activity": { device_id: "device-1" },
      "sensor.fence": { device_id: "device-1" },
      "device_tracker.red": { device_id: "device-1" },
    };
    const card = new TeslaLoggerCard();
    mounted.push(card);
    document.body.append(card);
    card.hass = hass;
    card.setConfig({ entity: "sensor.tesla_location" });
    await card.updateComplete;
    await card.updateComplete;
    const text = flat(card.shadowRoot);
    expect(text).toContain("Aperçu");
    expect(text).toContain("Red");
    expect(text).toContain("72");
    expect(text).toContain("328");
    expect(text).toContain("Image du véhicule indisponible");
    expect(text).toContain("Maison");
    expect(text).not.toContain("1.25");
    expect(text).not.toContain("2.5");
    expect(text).not.toContain("openstreetmap");
    expect(text).not.toContain("openfreemap");
    expect(text).not.toContain("tile.");
    expect(text).toContain("OpenMapTiles");
    expect(card.shadowRoot?.querySelector("[data-map='overview']")).toBeTruthy();
    const map = card.shadowRoot?.querySelector("tl-mini-map") as Element | null;
    expect(map?.getAttribute("latitude")).toBeNull();
    expect(map?.getAttribute("longitude")).toBeNull();
    expect(JSON.stringify(map?.outerHTML)).not.toContain("1.25");
    expect(card.shadowRoot?.querySelector("svg.car")).toBeNull();
  });

  it("left-aligns the month values, gaps the charge dot, and captions the map", async () => {
    const hass = frenchHass();
    hass.states["sensor.fence"] = { state: "Maison", attributes: { key: "geofence", vin: "V" } };
    hass.states["device_tracker.red"] = {
      state: "home",
      last_updated: new Date(Date.now() - 12 * 60 * 1000).toISOString(),
      attributes: { key: "location", vin: "V", latitude: 0, longitude: 0, address: "Allée des tilleuls" },
    };
    hass.entities = {
      ...hass.entities,
      "sensor.fence": { device_id: "device-1" },
      "device_tracker.red": { device_id: "device-1" },
    };
    const card = new TeslaLoggerCard();
    mounted.push(card);
    document.body.append(card);
    card.hass = hass;
    card.setConfig({ entity: "sensor.tesla_location", show: { drives: false } });
    const state = card as unknown as {
      _month?: unknown;
      _recentCharge?: unknown;
    };
    state._month = {
      drive_count: 42,
      distance_km: 642,
      drive_duration_s: 3600,
      energy_used_kwh: 112,
      charge_count: 18,
      energy_added_kwh: 148.2,
    };
    state._recentCharge = {
      id: 3,
      start_at: "2026-11-16T19:02:00Z",
      end_at: "2026-11-16T22:14:00Z",
      energy_added_kwh: 28.4,
      geofence: "Maison",
    };
    card.requestUpdate();
    await card.updateComplete;
    const summary = card.shadowRoot?.querySelector("tl-summary-strip") as HTMLElement | null;
    const value = summary?.shadowRoot?.querySelector("dd");
    expect(value).toBeTruthy();
    expect(getComputedStyle(value as Element).marginLeft).toBe("0px");
    expect(getComputedStyle(value as Element).textAlign).toBe("start");
    const stop = deep(card.shadowRoot?.querySelector("#derniere-charge")?.shadowRoot, ".route-stop")[0];
    expect(stop).toBeTruthy();
    expect(getComputedStyle(stop).paddingLeft).toBe("18px");
    const caption = card.shadowRoot?.querySelector(".place-text");
    expect(getComputedStyle(caption as Element).paddingBottom).toBe("24px");
    expect(getComputedStyle(caption as Element).paddingLeft).toBe("24px");
    const text = flat(caption);
    expect(text).toContain("Maison");
    expect(text).toContain("Allée des tilleuls");
    expect(text).toContain("Mis à jour");
  });

  it("hides the drives tab and does not request drives", async () => {
    const callService = vi.fn().mockResolvedValue({ response: { data: [], page: 1, per_page: 10, total: 0 } });
    const card = new TeslaLoggerCard();
    mounted.push(card);
    document.body.append(card);
    const hass = frenchHass();
    hass.callService = callService;
    card.hass = hass;
    card.setConfig({ entity: "sensor.tesla_location", default_view: "drives", show: { drives: false } });
    await card.updateComplete;
    const tabs = deep(card.shadowRoot, "[role='tab']").map((tab) => tab.textContent?.trim());
    expect(tabs).not.toContain("Trajets");
    expect(tabs).toContain("Aperçu");
    expect(callService.mock.calls.map((call) => call[1])).not.toContain("get_drives");
  });
});

describe("stats", () => {
  it("draws the console charts for the selected grouping", async () => {
    const now = new Date();
    const previous = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth() - 1, 15)).toISOString();
    const current = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), 15)).toISOString();
    const series: StatsSeries = {
      period: "month",
      buckets: [
        { start: previous, distance_km: 100, wh_per_km: 180, energy_charged_kwh: 20, ac_energy_kwh: 12, dc_energy_kwh: 8 },
        { start: current, distance_km: 40.5, wh_per_km: 170, energy_charged_kwh: 4, ac_energy_kwh: 4, dc_energy_kwh: 0 },
      ],
    };
    const bins: TempBin[] = [{ temp_c_bucket: 10, wh_per_km: 160, distance_km: 40 }];
    const card = new TeslaLoggerCard();
    mounted.push(card);
    document.body.append(card);
    card.hass = frenchHass();
    card.setConfig({ entity: "sensor.tesla_location", default_view: "charts" });
    const state = card as unknown as { _series?: StatsSeries; _seriesPeriod?: string; _tempBins?: TempBin[]; _period?: string };
    state._series = series;
    state._tempBins = bins;
    state._seriesPeriod = "month";
    state._period = "month";
    await card.updateComplete;
    const text = flat(card.shadowRoot);
    expect(deep(card.shadowRoot, "[role='tab']").find((tab) => tab.getAttribute("aria-selected") === "true")?.textContent).toBe(
      "Stats",
    );
    expect(text).toContain("Distance");
    expect(text).toContain("Efficacité");
    expect(text).toContain("Énergie chargée");
    expect(text).toContain("10–15°");
    expect(card.shadowRoot?.querySelectorAll("tl-chart").length).toBeGreaterThan(3);
  });

  it("requests only temperature bins when the other chart blocks are hidden", async () => {
    const callService = vi.fn().mockImplementation(async (_domain: string, service: string) => {
      if (service === "get_consumption_by_temp") {
        return { response: { data: [{ temp_c_bucket: 10, wh_per_km: 150, distance_km: 5 }] } };
      }
      return { response: { period: "month", buckets: [] } };
    });
    const card = new TeslaLoggerCard();
    mounted.push(card);
    document.body.append(card);
    const hass = frenchHass();
    hass.callService = callService;
    card.hass = hass;
    card.setConfig({
      entity: "sensor.tesla_location",
      default_view: "stats",
      show: {
        stats: false,
        chart_consumption: false,
        chart_distance: false,
        chart_energy: false,
        totals: false,
        battery_health: false,
        charging_split: false,
        vampire_drain: false,
        consumption_vs_temp: true,
      },
    });
    await vi.waitFor(() => expect(flat(card.shadowRoot)).toContain("10–15°"));
    const services = callService.mock.calls.map((call) => call[1]);
    expect(services).toContain("get_consumption_by_temp");
    expect(services).not.toContain("get_stats_series");
  });
});

describe("editor schema", () => {
  it("localizes the console views and keeps detail toggles", async () => {
    const editor = new TeslaLoggerCardEditor();
    mounted.push(editor as unknown as TeslaLoggerCard);
    document.body.append(editor);
    editor.hass = frenchHass();
    editor.setConfig({ entity: "sensor.tesla_location", default_view: "charts" });
    await editor.updateComplete;
    const options = Array.from(editor.shadowRoot?.querySelectorAll("[data-field='default_view'] option") ?? []).map(
      (option) => option.textContent?.trim(),
    );
    expect(options).toEqual(["Aperçu", "Trajets", "Charges", "Stats"]);
    expect((editor as unknown as { _config?: CardConfig })._config?.default_view).toBe("stats");
    expect(editor.shadowRoot?.querySelector("[data-field='default_view'] option[selected]")?.getAttribute("value")).toBe(
      "stats",
    );
    expect(editor.shadowRoot?.textContent).toContain("Carte voiture");
    expect(editor.shadowRoot?.textContent).toContain("Fond de carte");
    expect((editor.shadowRoot?.querySelector("[data-field='show_basemap']") as HTMLInputElement).checked).toBe(true);
    expect(editor.shadowRoot?.textContent).toContain("Courbe de charge");
    expect((editor.shadowRoot?.querySelector("[data-field='page_size']") as HTMLInputElement).value).toBe("10");
  });

  it("does not offer an official image toggle and keeps a stored key", async () => {
    const editor = new TeslaLoggerCardEditor();
    mounted.push(editor as unknown as TeslaLoggerCard);
    document.body.append(editor);
    editor.hass = frenchHass();
    editor.setConfig({ entity: "sensor.tesla_location", official_image: false });
    await editor.updateComplete;
    expect(editor.shadowRoot?.querySelector("[data-field='official_image']")).toBeNull();
    const config = (editor as unknown as { _config?: CardConfig })._config;
    expect(config?.official_image).toBe(false);
  });
});

describe("official car image", () => {
  it("asks Home Assistant to sign the proxy path and never sends a VIN", async () => {
    const callWS = vi.fn().mockResolvedValue({ path: "/api/tesla_logger/entry-1/7/car.png?authSig=signed" });
    const hass = frenchHass();
    hass.states["sensor.tesla_location"] = {
      state: "home",
      attributes: {
        friendly_name: "Red",
        key: "location",
        vin: "5YJTEST0000000001",
        vehicle_id: 7,
        config_entry_id: "entry-1",
      },
    };
    hass.callWS = callWS;
    hass.hassUrl = (path?: string) => path ?? "";
    const card = new TeslaLoggerCard();
    mounted.push(card);
    document.body.append(card);
    card.hass = hass;
    card.setConfig({ entity: "sensor.tesla_location", official_image: false });
    await vi.waitFor(() => {
      expect((card.shadowRoot?.querySelector("tl-vehicle-card") as Element | null)?.getAttribute("image-url")).toContain(
        "car.png",
      );
    });
    expect(callWS).toHaveBeenCalledWith({
      type: "auth/sign_path",
      path: "/api/tesla_logger/entry-1/7/car.png",
      expires: 3600,
    });
    expect(JSON.stringify(callWS.mock.calls)).not.toContain("5YJTEST");
    expect(card.shadowRoot?.querySelector("svg.car")).toBeNull();
  });
});

describe("drive detail", () => {
  it("opens a projected route and does not request map tiles", async () => {
    const card = await showList("drives", {
      page: 1,
      per_page: 10,
      total: 1,
      data: [
        {
          id: 7,
          start_at: "2026-11-09T08:00:00Z",
          end_at: "2026-11-09T08:30:00Z",
          distance_km: 18.4,
          duration_s: 1800,
          energy_used_kwh: 3.2,
          start_address: "Maison",
          end_address: "Bureau",
        },
      ],
    });
    const row = card.shadowRoot?.querySelector("tl-drive-row") as Element | null;
    row?.shadowRoot?.querySelector(".trip")?.dispatchEvent(new MouseEvent("click", { bubbles: true, composed: true }));
    await card.updateComplete;
    expect((card as unknown as { _view: string })._view).toBe("drive");
    const state = card as unknown as { _detail?: unknown };
    state._detail = {
      id: 7,
      start_at: "2026-11-09T08:00:00Z",
      end_at: "2026-11-09T08:30:00Z",
      distance_km: 18.4,
      duration_s: 1800,
      energy_used_kwh: 3.2,
      route: [
        { recorded_at: "2026-11-09T08:00:00Z", latitude: 0, longitude: 0 },
        { recorded_at: "2026-11-09T08:30:00Z", latitude: 0.02, longitude: 0.03 },
      ],
      series: [
        { recorded_at: "2026-11-09T08:00:00Z", speed_kmh: 0 },
        { recorded_at: "2026-11-09T08:10:00Z", speed_kmh: 40 },
        { recorded_at: "2026-11-09T08:20:00Z", speed_kmh: 10 },
      ],
    };
    card.requestUpdate();
    await card.updateComplete;
    const text = flat(card.shadowRoot);
    expect(text).toContain("Retour");
    expect(text).toContain("Vitesse");
    expect(card.shadowRoot?.querySelector(".leaflet-container")).toBeNull();
    expect(card.shadowRoot?.querySelector("[data-map='drive']")).toBeTruthy();
    expect(text).toContain("OpenMapTiles");
    expect(text).not.toContain("openstreetmap");
    expect(text).not.toContain("openfreemap");
    expect(text).not.toContain("0.02");
    expect(text).not.toContain("0.03");
  });

  it("keeps the projected route when the basemap is off", async () => {
    const card = await showList("drives", {
      page: 1,
      per_page: 10,
      total: 1,
      data: [
        {
          id: 7,
          start_at: "2026-11-09T08:00:00Z",
          end_at: "2026-11-09T08:30:00Z",
          distance_km: 18.4,
          duration_s: 1800,
          energy_used_kwh: 3.2,
          start_address: "Maison",
          end_address: "Bureau",
        },
      ],
    });
    card.setConfig({ entity: "sensor.tesla_location", show_basemap: false });
    const state = card as unknown as { _view: string; _detail?: unknown };
    state._view = "drive";
    state._detail = {
      id: 7,
      start_at: "2026-11-09T08:00:00Z",
      route: [
        { recorded_at: "2026-11-09T08:00:00Z", latitude: 0, longitude: 0 },
        { recorded_at: "2026-11-09T08:30:00Z", latitude: 0.02, longitude: 0.03 },
      ],
      series: [],
    };
    card.requestUpdate();
    await card.updateComplete;
    expect(card.shadowRoot?.querySelector("[data-map='drive']")).toBeNull();
    expect(card.shadowRoot?.querySelector("tl-mini-map.route")).toBeTruthy();
    expect(flat(card.shadowRoot)).not.toContain("0.02");
  });
});
