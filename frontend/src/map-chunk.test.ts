import { afterEach, describe, expect, it, vi } from "vitest";

const loads = vi.hoisted(() => ({
  count: 0,
  mountRoute: vi.fn(
    (current: unknown, element: unknown, route: unknown, dark: unknown, color: unknown) => ({
      destroy: () => ({ current, element, route, dark, color }),
    }),
  ),
}));

vi.mock("./leaflet-map", () => {
  loads.count += 1;
  return { mountRoute: loads.mountRoute };
});

import { TeslaLoggerCard } from "./tesla-logger-card";
import type { HomeAssistant } from "./types";

const mounted: TeslaLoggerCard[] = [];

afterEach(() => {
  for (const card of mounted) {
    card.remove();
  }
  mounted.length = 0;
  loads.mountRoute.mockClear();
  vi.unstubAllGlobals();
});

function hass(): HomeAssistant {
  return {
    states: {
      "sensor.tesla_location": {
        state: "home",
        attributes: { friendly_name: "Red", vin: "V" },
      },
      "device_tracker.red": {
        state: "home",
        attributes: { key: "location", vin: "V", latitude: 0, longitude: 0 },
      },
    },
    entities: { "sensor.tesla_location": { device_id: "device-1" } },
    devices: { "device-1": { name: "Red" } },
    callService: vi.fn().mockResolvedValue({
      response: { data: [], page: 1, per_page: 20, total: 0 },
    }),
  } as HomeAssistant;
}

function stubLayout(visible: boolean): void {
  vi.stubGlobal(
    "ResizeObserver",
    class {
      constructor(private readonly cb: ResizeObserverCallback) {}
      observe(target: Element): void {
        const rect = { width: 360, height: 96, top: 0, left: 0, bottom: 96, right: 360, x: 0, y: 0 };
        this.cb([{ target, contentRect: rect } as ResizeObserverEntry], this as unknown as ResizeObserver);
      }
      unobserve(): void {}
      disconnect(): void {}
    },
  );
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

async function mount(showMap: boolean): Promise<TeslaLoggerCard> {
  const card = new TeslaLoggerCard();
  mounted.push(card);
  document.body.append(card);
  card.hass = hass();
  card.setConfig({ entity: "sensor.tesla_location", show_map: showMap });
  await card.updateComplete;
  await card.updateComplete;
  return card;
}

describe("leaflet chunk", () => {
  it("stays unloaded when the header map is hidden", async () => {
    await mount(false);
    expect(loads.count).toBe(0);
    expect(loads.mountRoute).not.toHaveBeenCalled();
  });

  it("stays unloaded until the card is visible", async () => {
    stubLayout(false);
    await mount(true);
    expect(loads.count).toBe(0);
  });

  it("loads leaflet for a visible header watermark without drawing a route", async () => {
    stubLayout(true);
    await mount(true);
    await vi.waitFor(() => expect(loads.count).toBe(1));
    expect(loads.mountRoute).not.toHaveBeenCalled();
  });

  it("mounts a route from generic coordinates when a drive map is shown", async () => {
    const card = await mount(false);
    const state = card as unknown as {
      _view: string;
      _headerVisible: boolean;
      _detail: {
        id: number;
        start_at: string;
        distance_km: number;
        duration_s: number;
        energy_used_kwh: number;
        route: Array<{ recorded_at: string; latitude: number; longitude: number }>;
        series: [];
      };
    };
    state._headerVisible = true;
    state._detail = {
      id: 1,
      start_at: "2026-01-01T00:00:00.000Z",
      distance_km: 1,
      duration_s: 60,
      energy_used_kwh: 0.2,
      route: [
        { recorded_at: "2026-01-01T00:00:00.000Z", latitude: 0, longitude: 0 },
        { recorded_at: "2026-01-01T00:01:00.000Z", latitude: 0, longitude: 0 },
      ],
      series: [],
    };
    state._view = "drive";
    await card.updateComplete;
    await vi.waitFor(() => expect(loads.mountRoute).toHaveBeenCalled());
    const route = loads.mountRoute.mock.calls[0]?.[2];
    expect(route).toEqual([
      { recorded_at: "2026-01-01T00:00:00.000Z", latitude: 0, longitude: 0 },
      { recorded_at: "2026-01-01T00:01:00.000Z", latitude: 0, longitude: 0 },
    ]);
  });
});
