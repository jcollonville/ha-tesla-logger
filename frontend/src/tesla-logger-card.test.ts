import { afterEach, describe, expect, it, vi } from "vitest";

import { safeError } from "./format";
import "./loader";
import { TeslaLoggerCard, TeslaLoggerCardEditor } from "./tesla-logger-card";
import type { CardConfig, Charge, Drive, HomeAssistant, Page, StatsSeries, TempBin } from "./types";

const HISTORY_ERROR = {
  code: "home_assistant_error",
  message: "The action requires responses and must be called with return_response=True.",
};

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

  it("shows Error and string messages", () => {
    expect(safeError(new Error("network down"), "Could not load history.")).toBe("network down");
    expect(safeError("plain failure", "Could not load history.")).toBe("plain failure");
  });

  it("hides token-like text", () => {
    expect(safeError({ code: "unknown", message: "token tl_secret failed" }, "fallback")).toBe(
      "fallback",
    );
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
      entities: {
        "sensor.tesla_location": { device_id: "device-1" },
      },
      callService,
    } as HomeAssistant;
    card.setConfig({ entity: "sensor.tesla_location" });

    const payload = await (
      card as unknown as {
        call(service: string, data: Record<string, unknown>): Promise<unknown>;
      }
    ).call("get_drives", { page: 1 });

    expect(callService).toHaveBeenCalledTimes(1);
    const args = callService.mock.calls[0];
    expect(args[0]).toBe("tesla_logger");
    expect(args[1]).toBe("get_drives");
    expect(args[2]).toEqual({ device_id: "device-1", page: 1 });
    expect(args[4]).toBe(false);
    expect(args[5]).toBe(true);
    expect(payload).toEqual({ data: [], page: 1, per_page: 20, total: 0 });
  });
});

const mounted: TeslaLoggerCard[] = [];

afterEach(() => {
  for (const card of mounted) {
    card.remove();
  }
  mounted.length = 0;
  vi.unstubAllGlobals();
});

function frenchHass(): HomeAssistant {
  return {
    states: {
      "sensor.tesla_location": {
        state: "home",
        attributes: { friendly_name: "Red" },
      },
    },
    entities: {
      "sensor.tesla_location": { device_id: "device-1" },
    },
    devices: { "device-1": { name: "Red" } },
    locale: { language: "fr" },
    callService: vi.fn().mockResolvedValue({
      response: { data: [], page: 1, per_page: 20, total: 0 },
    }),
  } as HomeAssistant;
}

async function showList<T>(view: "drives" | "charges", page: Page<T>): Promise<TeslaLoggerCard> {
  const card = new TeslaLoggerCard();
  mounted.push(card);
  document.body.append(card);
  card.hass = frenchHass();
  card.setConfig({ entity: "sensor.tesla_location", default_view: view });
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
  it("hides placeholder charger types and keeps charge details on one muted line", async () => {
    const start = new Date(2026, 10, 10, 3, 30).toISOString();
    const card = await showList("charges", {
      page: 1,
      per_page: 20,
      total: 4,
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
          duration_s: 2400,
          energy_added_kwh: 6.5,
          max_power_kw: 11,
          charger_type: "<invalid>",
        },
        {
          id: 3,
          start_at: start,
          duration_s: 900,
          energy_added_kwh: 1,
          charger_type: " None ",
        },
        {
          id: 4,
          start_at: start,
          duration_s: 60,
          charger_type: "NULL",
        },
      ],
    });

    const root = card.shadowRoot;
    expect(root).toBeTruthy();
    const list = root?.querySelector("ul.list");
    expect(list).toBeTruthy();
    const rows = Array.from(list?.querySelectorAll(".entry") ?? []);
    expect(rows).toHaveLength(4);
    expect(list?.getAttribute("data-slots")).toBe("4");
    expect(card.shadowRoot?.querySelector(".day-heading")?.textContent).toBe("mar. 10 nov.");
    expect(rows[0].querySelector("time.entry-when")?.textContent).toBe("03:30");
    expect(rows[0].querySelector("time.entry-when")?.getAttribute("aria-label")).toBe(
      "mar. 10 nov., 03:30",
    );
    expect(rows[0].querySelector("time.entry-when")?.getAttribute("datetime")).toBe(start);
    expect(rows[0].querySelector(".entry-figure")?.textContent).toBe("6,5 kWh");
    expect(chipTexts(rows[0])).toEqual(["40 min", "", "11 kW", "AC"]);
    expect(rows[1].querySelector(".entry-figure")?.textContent).toBe("6,5 kWh");
    expect(chipTexts(rows[1])).toEqual(["40 min", "", "11 kW", ""]);
    expect(rows[2].querySelector(".entry-figure")?.textContent).toBe("1,0 kWh");
    expect(chipTexts(rows[2])).toEqual(["15 min", "", "", ""]);
    expect(rows[3].querySelector(".entry-figure")?.textContent).toBe("—");
    expect(chipTexts(rows[3])).toEqual(["1 min", "", "", ""]);
    expect(list?.textContent).not.toContain("<invalid>");
    expect(list?.textContent?.toLowerCase()).not.toContain("none");
    expect(list?.textContent?.toLowerCase()).not.toContain("null");
    expect(list?.querySelector(".row")).toBeNull();

    const metrics = rows[0].querySelector(".entry-metrics");
    expect(metrics?.getAttribute("title")).toBe("40 min · 11 kW · AC");
    const metricsStyle = metrics ? getComputedStyle(metrics) : null;
    expect(metricsStyle?.display).toBe("grid");
    expect(metricsStyle?.gridTemplateColumns.split(" ").length).toBe(4);
    const chipStyle = getComputedStyle(rows[0].querySelector(".chip") as Element);
    expect(chipStyle.textOverflow).toBe("ellipsis");
    expect(chipStyle.whiteSpace).toBe("nowrap");
    expect(chipStyle.textAlign).toBe("right");
    const whenStyle = getComputedStyle(rows[0].querySelector(".entry-when") as Element);
    expect(whenStyle.textOverflow).toBe("ellipsis");
    expect(whenStyle.whiteSpace).toBe("nowrap");
    expect(whenStyle.fontVariantNumeric).toContain("tabular-nums");
    const figureStyle = getComputedStyle(rows[0].querySelector(".entry-figure") as Element);
    expect(figureStyle.fontVariantNumeric).toContain("tabular-nums");
    expect(Number.parseInt(figureStyle.fontWeight, 10)).toBeGreaterThanOrEqual(700);
    const lineStyle = getComputedStyle(rows[0].querySelector(".entry-line") as Element);
    expect(lineStyle.display).toBe("grid");
    const listStyle = getComputedStyle(list as Element);
    expect(listStyle.width).toBe("100%");
    expect(["", "none"]).toContain(listStyle.maxWidth);
    const entryStyle = getComputedStyle(rows[0]);
    expect(entryStyle.width).toBe("100%");
    expect(entryStyle.borderBottomStyle).toBe("solid");
    expect(Number.parseFloat(entryStyle.minHeight)).toBeGreaterThanOrEqual(40);
  });

  it("uses a two-line drive row with distance on the right", async () => {
    const start = new Date(2026, 10, 9, 8, 0).toISOString();
    const card = await showList("drives", {
      page: 1,
      per_page: 20,
      total: 2,
      data: [
        {
          id: 7,
          start_at: start,
          duration_s: 1800,
          distance_km: 18.4,
          energy_used_kwh: 3.2,
          start_address: " Maison ",
          end_address: "Bureau",
        },
        {
          id: 8,
          start_at: start,
          duration_s: 600,
          energy_used_kwh: 1.5,
        },
      ],
    });

    const rows = Array.from(card.shadowRoot?.querySelectorAll("ul.list .entry") ?? []);
    expect(rows).toHaveLength(2);
    expect(card.shadowRoot?.querySelector("ul.list")?.getAttribute("data-slots")).toBe("3");
    expect(rows[0].tagName).toBe("BUTTON");
    expect(card.shadowRoot?.querySelector(".day-heading")?.textContent).toBe("lun. 9 nov.");
    expect(rows[0].querySelector("time.entry-when")?.textContent).toBe("08:00");
    expect(rows[0].querySelector("time.entry-when")?.getAttribute("title")).toBe("lun. 9 nov., 08:00");
    expect(rows[0].querySelector(".entry-place")?.textContent).toBe("Maison→Bureau");
    expect(
      Array.from(rows[0].querySelectorAll(".place-point"), (node) => node.textContent),
    ).toEqual(["Maison", "Bureau"]);
    expect(rows[0].querySelector("time")?.textContent).not.toContain("Maison");
    const placeStyle = getComputedStyle(rows[0].querySelector(".entry-place") as Element);
    expect(placeStyle.textOverflow).toBe("ellipsis");
    expect(placeStyle.whiteSpace).toBe("nowrap");
    expect(rows[0].querySelector(".entry-figure")?.textContent).toBe("18,4 km");
    expect(chipTexts(rows[0])).toEqual(["30 min", "174 Wh/km", "3,2 kWh"]);
    expect(rows[1].querySelector(".entry-place")?.textContent).toBe("");
    expect(rows[1].querySelector(".entry-figure")?.textContent).toBe("—");
    expect(chipTexts(rows[1])).toEqual(["10 min", "", "1,5 kWh"]);
    expect(getComputedStyle(rows[0].querySelector(".entry-metrics") as Element).gridTemplateColumns).toBe(
      getComputedStyle(rows[1].querySelector(".entry-metrics") as Element).gridTemplateColumns,
    );
    expect(rows[0].querySelector(".row")).toBeNull();

    rows[0].dispatchEvent(new MouseEvent("click", { bubbles: true }));
    await card.updateComplete;
    expect((card as unknown as { _view: string })._view).toBe("drive");
    const back = card.shadowRoot?.querySelector("ha-icon-button");
    expect(back?.querySelector("ha-icon")?.getAttribute("icon")).toBe("mdi:arrow-left");
    expect(back?.getAttribute("aria-label")).toBe("Retour");
    expect(card.shadowRoot?.querySelector(".back-label")?.textContent?.trim()).toBe("Retour");
  });

  it("puts icon controls on the left and the page range on the right", async () => {
    const card = await showList("charges", {
      page: 2,
      per_page: 10,
      total: 25,
      data: [
        {
          id: 9,
          start_at: "2026-11-10T15:14:00Z",
          end_at: "2026-11-10T15:29:00Z",
          energy_added_kwh: 6.5,
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
    const list = card.shadowRoot?.querySelector("ul.list");
    expect(toolbar).toBeTruthy();
    expect(list).toBeTruthy();
    expect(toolbar!.compareDocumentPosition(list!) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy();
    const buttons = Array.from(toolbar?.querySelectorAll("ha-icon-button") ?? []);
    expect(buttons.map((button) => button.querySelector("ha-icon")?.getAttribute("icon"))).toEqual([
      "mdi:chevron-left",
      "mdi:chevron-right",
      "mdi:refresh",
    ]);
    expect(buttons.map((button) => button.getAttribute("aria-label"))).toEqual([
      "Previous",
      "Next",
      "Refresh",
    ]);
    expect(buttons[0]?.hasAttribute("disabled")).toBe(false);
    expect(buttons[1]?.hasAttribute("disabled")).toBe(false);
    expect(buttons[2]?.hasAttribute("disabled")).toBe(false);
    expect(toolbar?.querySelector(".page-indicator")?.textContent).toBe("11–20");
    const control = buttons[0] ? getComputedStyle(buttons[0]) : null;
    expect(Number.parseFloat(control?.width ?? "0")).toBeGreaterThanOrEqual(40);
    expect(Number.parseFloat(control?.height ?? "0")).toBeGreaterThanOrEqual(40);
    expect(card.shadowRoot?.querySelector(".day-heading")?.textContent).toBe("Tue, Nov 10");
    expect(card.shadowRoot?.querySelector("time")?.textContent).toBe("15:14–15:29");

    buttons[1]?.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    expect((card as unknown as { _page: number })._page).toBe(3);
  });

  it("requests ten drives and ten charges per page", async () => {
    const callService = vi.fn().mockImplementation(async (_domain: string, _service: string, data?: { page?: number }) => ({
      response: {
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
    card.setConfig({ entity: "sensor.tesla_location", default_view: "drives" });
    await card.updateComplete;
    await vi.waitFor(() => expect(callService).toHaveBeenCalled());
    expect(callService.mock.calls[0]?.[1]).toBe("get_drives");
    expect(callService.mock.calls[0]?.[2]).toEqual({ device_id: "device-1", page: 1, per_page: 10 });

    await vi.waitFor(() => {
      const next = card.shadowRoot?.querySelectorAll(".list-toolbar ha-icon-button")[1];
      expect(next?.hasAttribute("disabled")).toBe(false);
    });
    card.shadowRoot
      ?.querySelectorAll(".list-toolbar ha-icon-button")[1]
      ?.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    await vi.waitFor(() => expect(callService.mock.calls.length).toBeGreaterThanOrEqual(2));
    expect(callService.mock.calls[1]?.[2]).toEqual({ device_id: "device-1", page: 2, per_page: 10 });

    const charges = Array.from(card.shadowRoot?.querySelectorAll("[role='tab']") ?? []).find(
      (tab) => tab.textContent?.trim() === "Charges",
    );
    charges?.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    await vi.waitFor(() =>
      expect(callService.mock.calls.some((call) => call[1] === "get_charges")).toBe(true),
    );
    const chargeCall = callService.mock.calls.find((call) => call[1] === "get_charges");
    expect(chargeCall?.[2]).toEqual({ device_id: "device-1", page: 2, per_page: 10 });
  });
});

function chipTexts(row: Element): Array<string | null> {
  return Array.from(row.querySelectorAll(".entry-metrics .chip"), (node) => node.textContent);
}

function stubHeaderLayout(width: number, height: number): void {
  vi.stubGlobal(
    "ResizeObserver",
    class {
      constructor(private readonly cb: ResizeObserverCallback) {}
      observe(target: Element): void {
        const host = target as HTMLElement;
        const rect =
          host.dataset.mapHost != null
            ? { width, height, top: 0, left: 0, bottom: height, right: width, x: 0, y: 0 }
            : { width: 1600, height: 208, top: 0, left: 0, bottom: 208, right: 1600, x: 0, y: 0 };
        this.cb(
          [{ target, contentRect: rect } as ResizeObserverEntry],
          this as unknown as ResizeObserver,
        );
      }
      unobserve(): void {}
      disconnect(): void {}
    },
  );
}

function stubVisible(visible: boolean): void {
  vi.stubGlobal(
    "IntersectionObserver",
    class {
      constructor(private readonly cb: IntersectionObserverCallback) {}
      observe(target: Element): void {
        if (!visible) {
          return;
        }
        this.cb(
          [{ isIntersecting: true, target } as IntersectionObserverEntry],
          this as unknown as IntersectionObserver,
        );
      }
      unobserve(): void {}
      disconnect(): void {}
    },
  );
}

describe("header map", () => {
  function trackerHass(latitude?: number, longitude?: number): HomeAssistant {
    const hass = frenchHass();
    hass.states["sensor.tesla_location"] = {
      state: "home",
      attributes: { friendly_name: "Red", vin: "V" },
    };
    hass.states["sensor.red_range"] = {
      state: "328",
      attributes: { key: "rated_range", vin: "V" },
    };
    hass.states["sensor.red_fence"] = {
      state: "Maison",
      attributes: { key: "geofence", vin: "V" },
    };
    hass.states["device_tracker.red"] = {
      state: "not_home",
      attributes: {
        key: "location",
        vin: "V",
        ...(latitude == null ? {} : { latitude, longitude }),
      },
    };
    return hass;
  }

  async function mountHeader(hass: HomeAssistant, showMap?: boolean): Promise<TeslaLoggerCard> {
    const card = new TeslaLoggerCard();
    mounted.push(card);
    document.body.append(card);
    card.hass = hass;
    card.setConfig({
      entity: "sensor.tesla_location",
      ...(showMap == null ? {} : { show_map: showMap }),
    });
    await card.updateComplete;
    await card.updateComplete;
    return card;
  }

  it("drops coordinates and the header range, and paints only the visible tiles", async () => {
    stubHeaderLayout(360, 96);
    stubVisible(true);
    const card = await mountHeader(trackerHass(0, 0));
    const header = card.shadowRoot?.querySelector(".header");
    expect(header?.querySelector(".name")?.textContent).toBe("Red");
    expect(header?.querySelector(".sub")?.textContent).toBe("Maison");
    expect(header?.querySelector(".pill")?.textContent?.trim()).not.toBe("");
    expect(header?.textContent).not.toContain("Autonomie");
    expect(header?.textContent).not.toContain("328");
    const hero = Array.from(card.shadowRoot?.querySelectorAll(".status-hero .metric") ?? []);
    expect(hero[0]?.querySelector("span")?.textContent).toBe("Batterie");
    expect(hero[1]?.querySelector("span")?.textContent).toBe("Autonomie");
    const range = hero[1];
    expect(range?.querySelector("strong")?.textContent).toBe("328 km");
    expect(range?.querySelector("ha-icon")?.getAttribute("icon")).toBe("mdi:map-marker-distance");
    const text = card.shadowRoot?.textContent ?? "";
    expect(text).not.toContain("0.0000");
    const tiles = Array.from(card.shadowRoot?.querySelectorAll(".map-bg img") ?? []);
    expect(tiles.length).toBeGreaterThan(0);
    expect(tiles.length).toBeLessThanOrEqual(8);
    expect(tiles.every((tile) => tile.getAttribute("src")?.includes("/15/"))).toBe(true);
    expect(tiles[0]?.getAttribute("referrerpolicy")).toBe("strict-origin-when-cross-origin");
    expect(card.shadowRoot?.querySelector(".map-dot")).toBeTruthy();
    expect(card.shadowRoot?.querySelector(".map-credit")?.textContent).toContain("OpenStreetMap");
    const chart = card.shadowRoot?.querySelector(".series-chart");
    expect(chart).toBeNull();
    vi.unstubAllGlobals();
  });

  it("does not request header tiles until the card is visible", async () => {
    stubHeaderLayout(360, 96);
    stubVisible(false);
    const card = await mountHeader(trackerHass(0, 0));
    expect(card.shadowRoot?.querySelector(".map-bg")).toBeNull();
    expect(card.shadowRoot?.querySelector(".map-bg img")).toBeNull();
    expect(card.shadowRoot?.textContent).not.toContain("0.0000");
  });

  it("skips the map without a position or when show_map is false", async () => {
    const missing = await mountHeader(trackerHass());
    expect(missing.shadowRoot?.textContent).toContain("328 km");
    expect(missing.shadowRoot?.querySelector(".map-bg")).toBeNull();
    const hidden = await mountHeader(trackerHass(0, 0), false);
    (hidden as unknown as { _headerBox: { width: number; height: number } })._headerBox = {
      width: 1600,
      height: 120,
    };
    hidden.requestUpdate();
    await hidden.updateComplete;
    expect(hidden.shadowRoot?.querySelector(".map-bg")).toBeNull();
    expect(hidden.shadowRoot?.textContent).not.toContain("0.0000");
  });
});

describe("charts view", () => {
  it("draws consumption, distance, and energy charged on one French view", async () => {
    const now = new Date();
    const previous = new Date(now.getFullYear(), now.getMonth() - 1, 15).toISOString();
    const current = new Date(now.getFullYear(), now.getMonth(), 15).toISOString();
    const previousLabel = new Intl.DateTimeFormat("fr-FR", { month: "short" })
      .format(new Date(previous))
      .replace(/\.$/, "");
    const series: StatsSeries = {
      period: "month",
      buckets: [
        {
          start: previous,
          distance_km: 100,
          energy_used_kwh: 18,
          wh_per_km: 180,
          energy_charged_kwh: 20,
          drive_duration_s: 7200,
          drive_count: 4,
          range_at_100_km: 480,
          ac_energy_kwh: 12,
          dc_energy_kwh: 8,
          dc_share_pct: 40,
          charge_cost: 15.5,
          cost_per_km: 0.16,
          idle_range_loss_km_per_day: 1.2,
        },
        {
          start: current,
          distance_km: 40.5,
          energy_used_kwh: null,
          wh_per_km: null,
          energy_charged_kwh: 0,
          drive_duration_s: 5400,
          drive_count: 1,
          range_at_100_km: 470,
          ac_energy_kwh: 5,
          dc_energy_kwh: 0,
          dc_share_pct: 0,
          charge_cost: 2,
          cost_per_km: 0.05,
          idle_range_loss_km_per_day: 0.4,
        },
      ],
    };
    const bins: TempBin[] = [{ temp_c_bucket: 10, wh_per_km: 160, distance_km: 40 }];
    const card = new TeslaLoggerCard();
    mounted.push(card);
    document.body.append(card);
    card.hass = frenchHass();
    card.setConfig({ entity: "sensor.tesla_location", default_view: "charts" });
    const state = card as unknown as {
      _series?: StatsSeries;
      _seriesPeriod?: string;
      _tempBins?: TempBin[];
    };
    state._series = series;
    state._tempBins = bins;
    state._seriesPeriod = "month";
    await card.updateComplete;

    const root = card.shadowRoot;
    expect(root?.querySelector('[role="tab"][aria-selected="true"]')?.textContent?.trim()).toBe(
      "Graphiques",
    );
    const pressed = Array.from(root?.querySelectorAll("button[aria-pressed='true']") ?? []).map(
      (button) => button.textContent?.trim(),
    );
    expect(pressed).toContain("Mois");
    const titles = Array.from(root?.querySelectorAll(".series-list .series-title") ?? []).map(
      (node) => node.textContent,
    );
    expect(titles).toEqual(["Consommation"]);
    const tips = Array.from(root?.querySelectorAll(".series-list title") ?? []).map(
      (node) => node.textContent,
    );
    const consumptionTips = tips.filter((tip) => tip?.includes("Wh/km"));
    expect(consumptionTips).toHaveLength(1);
    expect(consumptionTips[0]).toContain("180 Wh/km");
    const values = Array.from(root?.querySelectorAll(".series-list .series-value") ?? []).map(
      (node) => node.textContent?.trim(),
    );
    expect(values[0]).toContain("180 Wh/km");
    expect(values[0]).not.toContain("Dernier");
    expect(root?.querySelectorAll(".series-list rect.bar")).toHaveLength(0);
    expect(root?.querySelectorAll(".series-list circle.dot")).toHaveLength(1);
    const distanceButton = Array.from(root?.querySelectorAll("button") ?? []).find(
      (button) => button.textContent?.trim() === "Distance",
    );
    distanceButton?.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    await card.updateComplete;
    expect(root?.querySelector(".series-list .series-title")?.textContent).toBe("Distance");
    expect(root?.querySelector(".series-list .series-value")?.textContent).toContain("40,5 km");
    expect(root?.querySelector(".series-list .series-value")?.textContent).toContain("Ce mois");
    const energyButton = Array.from(root?.querySelectorAll("button") ?? []).find(
      (button) => button.textContent?.trim() === "Énergie chargée",
    );
    energyButton?.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    await card.updateComplete;
    expect(root?.querySelector(".series-list .series-value")?.textContent).toContain("0,0 kWh");
    distanceButton?.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    await card.updateComplete;
    expect(root?.querySelector(".series-chart")?.getAttribute("role")).toBe("group");
    const chartBoxes = Array.from(root?.querySelectorAll(".series-chart") ?? []).map((node) =>
      Number(node.getAttribute("height")),
    );
    expect(chartBoxes.length).toBeGreaterThan(3);
    expect(Math.max(...chartBoxes)).toBeLessThanOrEqual(220);
    expect(Math.min(...chartBoxes)).toBeGreaterThanOrEqual(100);
    const extraTitles = Array.from(root?.querySelectorAll(".series-extra .series-title") ?? []).map(
      (node) => node.textContent,
    );
    expect(extraTitles).toEqual([
      "Santé batterie",
      "Charges AC/DC",
      "Consommation à l'arrêt",
      "Consommation vs température",
    ]);
    expect(root?.querySelector(".series-extra")?.textContent).toContain(
      "0 % recharge rapide · Coût 2,00 · 0,05 /km",
    );
    expect(root?.querySelectorAll(".series-extra rect.bar.dc").length).toBeGreaterThan(0);
    expect(root?.querySelector(".series-extra")?.textContent).toContain("10–15°");

    const totals = () => root?.querySelector(".totals");
    expect(totals()?.querySelector(".totals-label")?.textContent).toBe("Ce mois");
    expect(totals()?.textContent).toContain("40,5 km");
    expect(totals()?.textContent).toContain("1 h 30 min");
    expect(totals()?.textContent).toContain("0,0 kWh");
    expect(totals()?.textContent).not.toContain("consommé");

    const distanceMarks = root?.querySelector(".series-list")?.querySelectorAll("[role='button']");
    expect(distanceMarks?.[1]?.getAttribute("aria-pressed")).toBe("true");
    distanceMarks?.[0]?.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    await card.updateComplete;
    expect(totals()?.querySelector(".totals-label")?.textContent).toBe(previousLabel);
    expect(totals()?.textContent).toContain("100,0 km");
    expect(totals()?.textContent).toContain("2 h 0 min");
    expect(totals()?.textContent).toContain("20,0 kWh");
    expect(totals()?.textContent).toContain("consommé 18,0 kWh");
    expect(root?.querySelector(".series-extra")?.textContent).toContain("40 % recharge rapide");
    expect(root?.querySelector(".series-extra")?.textContent).toContain("15,50");

    const weekStart = new Date(now);
    weekStart.setDate(weekStart.getDate() - ((weekStart.getDay() + 6) % 7));
    weekStart.setHours(12, 0, 0, 0);
    const callService = vi.fn().mockResolvedValue({
      response: {
        period: "week",
        buckets: [
          {
            start: weekStart.toISOString(),
            distance_km: 12,
            energy_used_kwh: 2.5,
            wh_per_km: 208,
            energy_charged_kwh: 4,
            drive_duration_s: 3600,
            drive_count: 1,
          },
        ],
      },
    });
    card.hass = { ...card.hass, callService } as HomeAssistant;
    const week = Array.from(root?.querySelectorAll("button") ?? []).find(
      (button) => button.textContent?.trim() === "Semaine",
    );
    week?.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    await vi.waitFor(() => {
      expect(card.shadowRoot?.querySelector(".totals-label")?.textContent).toBe("Cette semaine");
    });
    const weekTotals = card.shadowRoot?.querySelector(".totals")?.textContent ?? "";
    expect(weekTotals).toContain("12,0 km");
    expect(weekTotals).toContain("1 h 0 min");
    expect(weekTotals).toContain("4,0 kWh");
    expect(weekTotals).toContain("consommé 2,5 kWh");
    expect(callService.mock.calls[0]?.[2]).toEqual({
      device_id: "device-1",
      period: "week",
      count: 12,
    });
  });

  it("requests get_stats_series for the selected period", async () => {
    const callService = vi.fn().mockResolvedValue({
      response: { period: "month", buckets: [] },
    });
    const card = new TeslaLoggerCard();
    mounted.push(card);
    document.body.append(card);
    const hass = frenchHass();
    hass.callService = callService;
    card.hass = hass;
    card.setConfig({ entity: "sensor.tesla_location", default_view: "charts" });
    await card.updateComplete;
    await vi.waitFor(() => expect(callService).toHaveBeenCalled());
    const args = callService.mock.calls[0];
    expect(args[0]).toBe("tesla_logger");
    expect(args[1]).toBe("get_stats_series");
    expect(args[2]).toEqual({ device_id: "device-1", period: "month", count: 12 });
    expect(args[5]).toBe(true);
  });
});

describe("show configuration", () => {
  it("hides the drives tab and skips the drives request", async () => {
    const callService = vi.fn().mockResolvedValue({
      response: { data: [], page: 1, per_page: 20, total: 0 },
    });
    const card = new TeslaLoggerCard();
    mounted.push(card);
    document.body.append(card);
    const hass = frenchHass();
    hass.callService = callService;
    card.hass = hass;
    card.setConfig({
      entity: "sensor.tesla_location",
      default_view: "drives",
      show: { drives: false },
    });
    await card.updateComplete;
    const tabs = Array.from(card.shadowRoot?.querySelectorAll("[role='tab']") ?? []).map((tab) =>
      tab.textContent?.trim(),
    );
    expect(tabs).not.toContain("Trajets");
    expect(tabs).toContain("État");
    expect(tabs).toContain("Charges");
    expect(callService.mock.calls.map((call) => call[1])).not.toContain("get_drives");
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
      default_view: "charts",
      show: {
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
    await card.updateComplete;
    await vi.waitFor(() => {
      expect(card.shadowRoot?.textContent).toContain("10–15°");
    });
    const services = callService.mock.calls.map((call) => call[1]);
    expect(services).toContain("get_consumption_by_temp");
    expect(services).not.toContain("get_stats_series");
    expect(card.shadowRoot?.querySelector(".series-list")).toBeNull();
    expect(card.shadowRoot?.textContent).toContain("Consommation vs température");
  });
});

describe("status groups", () => {
  it("puts battery beside range and hides live charging tiles unless charging", async () => {
    const card = new TeslaLoggerCard();
    mounted.push(card);
    document.body.append(card);
    const hass = frenchHass();
    hass.states["sensor.battery"] = { state: "72", attributes: { key: "battery_level", vin: "V" } };
    hass.states["sensor.range"] = { state: "328", attributes: { key: "rated_range", vin: "V" } };
    hass.states["sensor.charger"] = { state: "11", attributes: { key: "charger_power", vin: "V" } };
    hass.states["sensor.activity"] = { state: "online", attributes: { key: "activity", vin: "V" } };
    hass.entities = {
      ...hass.entities,
      "sensor.battery": { device_id: "device-1" },
      "sensor.range": { device_id: "device-1" },
      "sensor.charger": { device_id: "device-1" },
      "sensor.activity": { device_id: "device-1" },
    };
    card.hass = hass;
    card.setConfig({ entity: "sensor.tesla_location" });
    await card.updateComplete;
    await vi.waitFor(() => {
      expect(card.shadowRoot?.textContent).toContain("Image du véhicule indisponible");
    });
    const hero = Array.from(card.shadowRoot?.querySelectorAll(".status-hero .metric strong") ?? []).map(
      (node) => node.textContent,
    );
    expect(hero).toEqual(["72 %", "328 km"]);
    expect(card.shadowRoot?.textContent).toContain("Déplacement");
    expect(card.shadowRoot?.textContent).toContain("Habitacle");
    expect(card.shadowRoot?.querySelector("svg.car")).toBeNull();
    expect(card.shadowRoot?.querySelector("img.car")).toBeNull();
    expect(card.shadowRoot?.textContent).toContain("Image du véhicule indisponible");
    expect(card.shadowRoot?.querySelector(".ring")).toBeNull();
    expect(card.shadowRoot?.querySelector(".header")?.textContent).not.toContain("328");
    expect(card.shadowRoot?.textContent).not.toContain("Chargeur");
    hass.states["sensor.activity"] = { state: "charging", attributes: { key: "activity", vin: "V" } };
    card.hass = { ...hass };
    await card.updateComplete;
    expect(card.shadowRoot?.textContent).toContain("Chargeur");
    expect(card.shadowRoot?.textContent).toContain("11,0 kW");
  });

  it("falls back to English when the Home Assistant language is not French", async () => {
    const card = new TeslaLoggerCard();
    mounted.push(card);
    document.body.append(card);
    const hass = frenchHass();
    hass.locale = { language: "de" };
    card.hass = hass;
    card.setConfig({ entity: "sensor.tesla_location" });
    await card.updateComplete;
    await vi.waitFor(() => {
      expect(card.shadowRoot?.textContent).toContain("Vehicle image unavailable");
    });
    expect(card.shadowRoot?.textContent).toContain("Driving");
    expect(card.shadowRoot?.textContent).toContain("Cabin");
    expect(card.shadowRoot?.textContent).toContain("Vehicle image unavailable");
    expect(card.shadowRoot?.textContent).not.toContain("Déplacement");
  });
});

describe("stats comparison", () => {
  it("loads the previous period distance from the series", async () => {
    const now = new Date();
    const previous = new Date(now.getFullYear(), now.getMonth() - 1, 15).toISOString();
    const current = new Date(now.getFullYear(), now.getMonth(), 15).toISOString();
    const callService = vi.fn().mockImplementation(async (_domain: string, service: string) => {
      if (service === "get_stats") {
        return {
          response: {
            drive_count: 4,
            distance_km: 40.5,
            drive_duration_s: 5400,
            energy_used_kwh: 8,
            charge_count: 1,
            energy_added_kwh: 10,
          },
        };
      }
      return {
        response: {
          period: "month",
          buckets: [
            { start: previous, distance_km: 100 },
            { start: current, distance_km: 40.5 },
          ],
        },
      };
    });
    const card = new TeslaLoggerCard();
    mounted.push(card);
    document.body.append(card);
    const hass = frenchHass();
    hass.callService = callService;
    card.hass = hass;
    card.setConfig({ entity: "sensor.tesla_location", default_view: "stats" });
    await card.updateComplete;
    await vi.waitFor(() => {
      expect(card.shadowRoot?.querySelector(".stats-hero")?.textContent).toContain("100,0 km");
    });
    const hero = card.shadowRoot?.querySelector(".stats-hero")?.textContent ?? "";
    expect(hero).toContain("40,5 km");
    expect(hero).toContain("mois précédent");
    expect(callService.mock.calls.map((call) => call[1])).toEqual(["get_stats", "get_stats_series"]);
  });
});

describe("editor schema", () => {
  it("localizes view options and splits chart toggles", async () => {
    const editor = new TeslaLoggerCardEditor();
    mounted.push(editor as unknown as TeslaLoggerCard);
    document.body.append(editor);
    editor.hass = frenchHass();
    editor.setConfig({ entity: "sensor.tesla_location" });
    await editor.updateComplete;
    const root = editor.shadowRoot;
    expect(root?.querySelector(".editor")).toBeTruthy();
    const options = Array.from(root?.querySelectorAll("[data-field='default_view'] option") ?? []).map(
      (option) => option.textContent?.trim(),
    );
    expect(options).toEqual(["État", "Trajets", "Charges", "Statistiques", "Graphiques"]);
    expect(root?.textContent).toContain("Carte voiture");
    expect(root?.textContent).toContain("Détail du trajet");
    expect(root?.textContent).toContain("Courbe de charge");
    const page = root?.querySelector("[data-field='page_size']") as HTMLInputElement | null;
    expect(page?.value).toBe("10");
    const boxes = Array.from(root?.querySelectorAll("label.row") ?? []);
    const distance = boxes.find((row) => row.textContent?.includes("Distance") && row.closest("fieldset")?.textContent?.includes("Graphiques"));
    distance?.querySelector("input")?.dispatchEvent(new Event("change"));
    const distanceInput = distance?.querySelector("input") as HTMLInputElement | undefined;
    if (distanceInput) {
      distanceInput.checked = false;
      distanceInput.dispatchEvent(new Event("change"));
    }
    const config = (editor as unknown as { _config?: CardConfig })._config;
    expect(config?.show?.chart_distance).toBe(false);
    expect(config?.show?.chart_consumption).toBe(true);
    expect(config?.show?.status).toBe(true);
    expect(config).not.toHaveProperty("show_charts");
    expect(config?.page_size).toBe(10);
    expect(config?.drive_detail?.distance).toBe(true);
  });

  it("does not offer an official image toggle and keeps a stored key", async () => {
    const editor = new TeslaLoggerCardEditor();
    mounted.push(editor as unknown as TeslaLoggerCard);
    document.body.append(editor);
    editor.hass = frenchHass();
    editor.setConfig({ entity: "sensor.tesla_location", official_image: false });
    await editor.updateComplete;
    expect(editor.shadowRoot?.querySelector("[data-field='official_image']")).toBeNull();
    expect(editor.shadowRoot?.textContent).not.toContain("Image officielle");
    const page = editor.shadowRoot?.querySelector("[data-field='page_size']") as HTMLInputElement | null;
    if (page) {
      page.value = "12";
      page.dispatchEvent(new Event("change"));
    }
    const config = (editor as unknown as { _config?: CardConfig })._config;
    expect(config?.official_image).toBe(false);
    expect(config?.page_size).toBe(12);
  });
});

const PLACEHOLDER_PNG =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8DwHwAFBQIAX8jx0gAAAABJRU5ErkJggg==";

describe("official car image", () => {
  function withImage(url: string) {
    const callWS = vi.fn().mockResolvedValue({
      path: "/api/tesla_logger/entry-1/7/car.png?authSig=signed",
    });
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
    hass.hassUrl = () => url;
    return { hass, callWS };
  }

  async function mount(hass: HomeAssistant, official?: boolean): Promise<TeslaLoggerCard> {
    const card = new TeslaLoggerCard();
    mounted.push(card);
    document.body.append(card);
    card.hass = hass;
    card.setConfig({
      entity: "sensor.tesla_location",
      ...(official == null ? {} : { official_image: official }),
    });
    await card.updateComplete;
    return card;
  }

  it("loads the signed Home Assistant url and does not draw an SVG", async () => {
    const { hass, callWS } = withImage(PLACEHOLDER_PNG);
    const card = await mount(hass);
    await vi.waitFor(() => {
      const image = card.shadowRoot?.querySelector("img.car.official");
      expect(image?.getAttribute("src")).toBe(PLACEHOLDER_PNG);
    });
    expect(card.shadowRoot?.querySelector("svg.car")).toBeNull();
    expect(card.shadowRoot?.textContent).not.toContain("Image du véhicule indisponible");
    expect(callWS).toHaveBeenCalledWith({
      type: "auth/sign_path",
      path: "/api/tesla_logger/entry-1/7/car.png",
      expires: 3600,
    });
    expect(JSON.stringify(callWS.mock.calls)).not.toContain("5YJTEST");
  });

  it("shows a muted message when the image fails, and ignores official_image: false", async () => {
    const { hass, callWS } = withImage("http://127.0.0.1:9/missing.png");
    const card = await mount(hass);
    await vi.waitFor(() => {
      expect(card.shadowRoot?.querySelector("img.car.official")).toBeTruthy();
    });
    card.shadowRoot?.querySelector("img.car.official")?.dispatchEvent(new Event("error"));
    await card.updateComplete;
    expect(card.shadowRoot?.querySelector("svg.car")).toBeNull();
    expect(card.shadowRoot?.querySelector("img.car.official")).toBeNull();
    const missing = card.shadowRoot?.querySelector(".car-missing");
    expect(missing?.textContent).toBe("Image du véhicule indisponible");

    const stillOn = await mount(hass, false);
    await vi.waitFor(() => {
      expect(stillOn.shadowRoot?.querySelector("img.car.official")?.getAttribute("src")).toBe(
        "http://127.0.0.1:9/missing.png",
      );
    });
    expect(stillOn.shadowRoot?.querySelector("svg.car")).toBeNull();
    expect(callWS).toHaveBeenCalledTimes(2);
  });
});

describe("narrow charts", () => {
  it("collapses the extra charts behind a disclosure", async () => {
    const card = new TeslaLoggerCard();
    mounted.push(card);
    document.body.append(card);
    card.hass = frenchHass();
    card.setConfig({ entity: "sensor.tesla_location", default_view: "charts" });
    const state = card as unknown as { _narrow: boolean; _series: StatsSeries; _seriesPeriod: string };
    state._narrow = true;
    state._seriesPeriod = "month";
    state._series = {
      period: "month",
      buckets: [{ start: new Date().toISOString(), distance_km: 1, wh_per_km: 100, energy_charged_kwh: 1 }],
    };
    await card.updateComplete;
    const details = card.shadowRoot?.querySelector("details.extras");
    expect(details).toBeTruthy();
    expect(details?.hasAttribute("open")).toBe(false);
    expect(details?.querySelector("summary")?.textContent).toBe("Autres graphiques");
    expect(card.shadowRoot?.querySelector(".series-extra")).toBeTruthy();
  });
});
