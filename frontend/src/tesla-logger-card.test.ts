import { afterEach, describe, expect, it, vi } from "vitest";

import { safeError } from "./format";
import { TeslaLoggerCard } from "./tesla-logger-card";
import type { Charge, Drive, HomeAssistant, Page } from "./types";

const HISTORY_ERROR = {
  code: "home_assistant_error",
  message: "The action requires responses and must be called with return_response=True.",
};

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
    expect(rows[0].querySelector(".entry-when time")?.textContent).toBe("mar. 10 nov. 03:30");
    expect(rows[0].querySelector(".entry-when time")?.getAttribute("datetime")).toBe(start);
    expect(rows[0].querySelector(".entry-meta")?.textContent).toBe("40 min · 6,5 kWh · 11 kW · AC");
    expect(rows[1].querySelector(".entry-meta")?.textContent).toBe("40 min · 6,5 kWh · 11 kW");
    expect(rows[2].querySelector(".entry-meta")?.textContent).toBe("15 min · 1,0 kWh");
    expect(rows[3].querySelector(".entry-meta")?.textContent).toBe("1 min");
    expect(list?.textContent).not.toContain("<invalid>");
    expect(list?.textContent?.toLowerCase()).not.toContain("none");
    expect(list?.textContent?.toLowerCase()).not.toContain("null");
    expect(list?.querySelector(".row")).toBeNull();

    const meta = rows[0].querySelector(".entry-meta");
    expect(meta?.getAttribute("title")).toBe("40 min · 6,5 kWh · 11 kW · AC");
    const metaStyle = meta ? getComputedStyle(meta) : null;
    expect(metaStyle?.textOverflow).toBe("ellipsis");
    expect(metaStyle?.whiteSpace).toBe("nowrap");
    const entryStyle = getComputedStyle(rows[0]);
    expect(parseFloat(entryStyle.paddingTop)).toBeLessThan(10);
  });

  it("uses the same two-line row for drives and folds distance into the detail line", async () => {
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
    expect(rows[0].tagName).toBe("BUTTON");
    expect(rows[0].querySelector(".entry-when time")?.textContent).toBe("lun. 9 nov. 08:00");
    expect(rows[0].querySelector(".entry-meta")?.textContent).toBe(
      "30 min · 18,4 km · 174 Wh/km · 3,2 kWh · Maison → Bureau",
    );
    expect(rows[1].querySelector(".entry-meta")?.textContent).toBe("10 min · 1,5 kWh");
    expect(rows[0].querySelector(".row")).toBeNull();

    rows[0].dispatchEvent(new MouseEvent("click", { bubbles: true }));
    await card.updateComplete;
    expect((card as unknown as { _view: string })._view).toBe("drive");
  });
});
