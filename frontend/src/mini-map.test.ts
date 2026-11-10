import { describe, expect, it } from "vitest";

import { MAP_ZOOM, TILE_SIZE, readPosition, tilesForView, worldPixel } from "./mini-map";

describe("readPosition", () => {
  it("accepts a finite coordinate pair and rejects everything else", () => {
    expect(readPosition(0, 0)).toEqual({ lat: 0, lon: 0 });
    expect(readPosition(null, 2)).toBeNull();
    expect(readPosition(91, 0)).toBeNull();
    expect(readPosition(0, Number.NaN)).toBeNull();
  });
});

describe("tilesForView", () => {
  it("centers the car and requests only the visible zoom-15 tiles", () => {
    const view = tilesForView(0, 0, 360, 96);
    expect(view.dot).toEqual({ left: 180, top: 48 });
    expect(view.tiles.length).toBeGreaterThan(0);
    expect(view.tiles.length).toBeLessThanOrEqual(8);
    for (const tile of view.tiles) {
      expect(tile.url).toBe(
        `https://tile.openstreetmap.org/${MAP_ZOOM}/${tile.x}/${tile.y}.png`,
      );
      expect(tile.url).not.toMatch(/\/14\/|\/16\//);
    }
    const wide = tilesForView(0, 0, 1600, 120);
    expect(wide.tiles.length).toBeLessThanOrEqual(16);
    expect(new Set(wide.tiles.map((tile) => tile.url)).size).toBe(wide.tiles.length);
  });

  it("does not fetch tiles outside a box that sits inside one tile", () => {
    const zoom = MAP_ZOOM;
    const size = TILE_SIZE * 2 ** zoom;
    const pixel = worldPixel(0, 0, zoom);
    expect(pixel.x).toBeCloseTo(size / 2, 4);
    expect(pixel.y).toBeCloseTo(size / 2, 4);
    const x = (2 ** (zoom - 1) + 0.5) * TILE_SIZE;
    const y = x;
    const lon = (x / size) * 360 - 180;
    const merc = Math.PI * (1 - (2 * y) / size);
    const lat = (Math.atan(Math.sinh(merc)) * 180) / Math.PI;
    const view = tilesForView(lat, lon, 80, 80, zoom);
    expect(view.tiles).toHaveLength(1);
    expect(view.tiles[0]?.url).toContain(`/${zoom}/`);
  });
});
