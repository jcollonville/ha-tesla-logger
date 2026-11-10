/** Slippy-map zoom for the header watermark. One zoom only: no prefetch. */
export const MAP_ZOOM = 15;
export const TILE_SIZE = 256;

const MAX_LAT = 85.05112878;

export interface MapTile {
  x: number;
  y: number;
  left: number;
  top: number;
  url: string;
}

export interface MapView {
  tiles: MapTile[];
  dot: { left: number; top: number };
}

export function readPosition(lat: unknown, lon: unknown): { lat: number; lon: number } | null {
  if (typeof lat !== "number" || typeof lon !== "number") {
    return null;
  }
  if (!Number.isFinite(lat) || !Number.isFinite(lon)) {
    return null;
  }
  if (lat < -90 || lat > 90 || lon < -180 || lon > 180) {
    return null;
  }
  return { lat, lon };
}

/** Web Mercator world pixel at the north-west origin of the zoom's map. */
export function worldPixel(lat: number, lon: number, zoom = MAP_ZOOM): { x: number; y: number } {
  const size = TILE_SIZE * 2 ** zoom;
  const clamped = Math.min(MAX_LAT, Math.max(-MAX_LAT, lat));
  const latRad = (clamped * Math.PI) / 180;
  const x = ((lon + 180) / 360) * size;
  const merc = Math.log(Math.tan(Math.PI / 4 + latRad / 2));
  const y = ((1 - merc / Math.PI) / 2) * size;
  return { x, y };
}

/**
 * Tiles that intersect a box centered on the car. Nothing outside that box
 * is requested, and every tile is the same zoom.
 */
export function tilesForView(
  lat: number,
  lon: number,
  width: number,
  height: number,
  zoom = MAP_ZOOM,
): MapView {
  const center = worldPixel(lat, lon, zoom);
  const originX = center.x - width / 2;
  const originY = center.y - height / 2;
  const x0 = Math.floor(originX / TILE_SIZE);
  const x1 = Math.floor((originX + Math.max(width, 1) - 0.001) / TILE_SIZE);
  const y0 = Math.floor(originY / TILE_SIZE);
  const y1 = Math.floor((originY + Math.max(height, 1) - 0.001) / TILE_SIZE);
  const wrap = 2 ** zoom;
  const tiles: MapTile[] = [];
  for (let x = x0; x <= x1; x += 1) {
    for (let y = y0; y <= y1; y += 1) {
      if (y < 0 || y >= wrap) {
        continue;
      }
      const wrapped = ((x % wrap) + wrap) % wrap;
      tiles.push({
        x: wrapped,
        y,
        left: Math.round((x * TILE_SIZE - originX) * 10) / 10,
        top: Math.round((y * TILE_SIZE - originY) * 10) / 10,
        url: `https://tile.openstreetmap.org/${zoom}/${wrapped}/${y}.png`,
      });
    }
  }
  return {
    tiles,
    dot: { left: width / 2, top: height / 2 },
  };
}
