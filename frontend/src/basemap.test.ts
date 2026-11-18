import { describe, expect, it, vi } from "vitest";

import { absolutizeStyle, authorizeTileRequest, routeLngLats, styleUrl } from "./basemap";

describe("basemap proxy requests", () => {
  it("keeps tile fetches on the Home Assistant origin and adds the bearer token", () => {
    const request = authorizeTileRequest(
      "http://home.local/api/tesla_logger/map/planet/20260101_000000_pt/3/2/1.pbf?cache=1",
      "session-token",
      "http://home.local",
    );
    expect(request.url).toBe("http://home.local/api/tesla_logger/map/planet/20260101_000000_pt/3/2/1.pbf");
    expect(request.headers.Authorization).toBe("Bearer session-token");
    expect(request.url).not.toContain("session-token");
  });

  it("refuses a third-party tile host", () => {
    const request = authorizeTileRequest(
      "https://tiles.openfreemap.org/styles/positron",
      "session-token",
      "http://home.local",
    );
    expect(request.url).toBe("http://home.local/api/tesla_logger/map/rejected");
    expect(request.url).not.toContain("openfreemap");
    expect(request.headers.Authorization).toBe("Bearer session-token");
  });

  it("uses the console style names on the proxy", () => {
    expect(styleUrl("http://home.local", false)).toBe("http://home.local/api/tesla_logger/map/styles/positron?v=1");
    expect(styleUrl("http://home.local", true)).toBe("http://home.local/api/tesla_logger/map/styles/dark?v=1");
    expect(authorizeTileRequest(styleUrl("http://home.local", false), undefined, "http://home.local").url).toBe(
      "http://home.local/api/tesla_logger/map/styles/positron",
    );
  });

  it("makes proxy paths absolute so MapLibre accepts the sprite", () => {
    const style = absolutizeStyle(
      {
        sprite: "/api/tesla_logger/map/sprites/ofm_f384/ofm",
        glyphs: "/api/tesla_logger/map/fonts/{fontstack}/{range}.pbf",
        sources: { openmaptiles: { url: "/api/tesla_logger/map/planet" } },
      },
      "http://home.local",
    ) as { sprite: string; glyphs: string; sources: { openmaptiles: { url: string } } };
    expect(style.sprite).toBe("http://home.local/api/tesla_logger/map/sprites/ofm_f384/ofm");
    expect(style.glyphs).toBe("http://home.local/api/tesla_logger/map/fonts/{fontstack}/{range}.pbf");
    expect(style.sources.openmaptiles.url).toBe("http://home.local/api/tesla_logger/map/planet");
  });

  it("drops coordinates that are not a position", () => {
    expect(
      routeLngLats([
        { latitude: 0, longitude: 0 },
        { latitude: Number.NaN, longitude: 1 },
        { latitude: 0.02, longitude: 0.03 },
      ]),
    ).toEqual([
      [0, 0],
      [0.03, 0.02],
    ]);
  });
});

describe("basemap mount", () => {
  it("asks MapLibre to authorize every fetch and does not enable its attribution control", async () => {
    vi.resetModules();
    const constructed: Array<Record<string, unknown>> = [];
    vi.doMock("maplibre-gl", () => ({
      default: {
        Map: vi.fn(function Map(options: Record<string, unknown>) {
          constructed.push(options);
          return {
            on: vi.fn(),
            once: vi.fn(),
            remove: vi.fn(),
            resize: vi.fn(),
            addControl: vi.fn(),
            addSource: vi.fn(),
            addLayer: vi.fn(),
            fitBounds: vi.fn(),
            jumpTo: vi.fn(),
            touchZoomRotate: { disableRotation: vi.fn() },
            getContainer: () => document.createElement("div"),
          };
        }),
        NavigationControl: vi.fn(),
        LngLatBounds: vi.fn(() => ({ extend: vi.fn() })),
      },
    }));
    vi.stubGlobal(
      "fetch",
      vi.fn(async () => ({
        ok: true,
        json: async () => ({
          version: 8,
          sprite: "/api/tesla_logger/map/sprites/ofm_f384/ofm",
          layers: [],
        }),
      })),
    );
    const { mountBasemap } = await import("./basemap");
    const element = document.createElement("div");
    await mountBasemap(element, {
      dark: true,
      interactive: false,
      accessToken: "session-token",
      origin: "http://home.local",
      points: [[0, 0]],
    });
    expect((constructed[0]?.style as { sprite: string }).sprite).toBe(
      "http://home.local/api/tesla_logger/map/sprites/ofm_f384/ofm",
    );
    expect(constructed[0]?.attributionControl).toBe(false);
    const transform = constructed[0]?.transformRequest as (url: string) => { url: string; headers: Record<string, string> };
    const tile = transform("http://home.local/api/tesla_logger/map/styles/dark");
    expect(tile.headers.Authorization).toBe("Bearer session-token");
    expect(transform("https://tiles.openfreemap.org/planet/1/0/0.pbf").url).not.toContain("openfreemap");
  });
});
