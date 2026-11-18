import type { HomeAssistant } from "./types";

/** Same-origin proxy. The browser never requests a tile host directly. */
export const MAP_PROXY_PREFIX = "/api/tesla_logger/map/";

/** Shown on every basemap. MapLibre's own control is off so this is the only credit. */
export const BASEMAP_CREDIT = "© OpenMapTiles © OpenStreetMap contributors";

export interface BasemapSpec {
  dark: boolean;
  interactive: boolean;
  /** Home Assistant access token. Sent only as a bearer header to our proxy. */
  accessToken?: string;
  /** Page origin. Tile requests on any other origin are refused. */
  origin: string;
  /** `[longitude, latitude]` pairs. Not written into the DOM. */
  points: [number, number][];
}

export interface BasemapHandle {
  destroy(): void;
}

interface TileRequest {
  url: string;
  headers: Record<string, string>;
}

/**
 * MapLibre fetches styles, vector tiles, glyphs, and sprites. `transformRequest`
 * can set headers on those fetches, which is how the card authenticates to
 * Home Assistant. `auth/sign_path` cannot: each tile URL is chosen later, and a
 * signed URL would expire while the map is still open.
 * Anything that is not this proxy on the Home Assistant origin is replaced with
 * a same-origin path the view rejects.
 */
export function authorizeTileRequest(
  url: string,
  accessToken: string | undefined,
  pageOrigin: string,
): TileRequest {
  const page = new URL(pageOrigin);
  const headers: Record<string, string> = {};
  if (accessToken) {
    headers.Authorization = `Bearer ${accessToken}`;
  }
  let parsed: URL;
  try {
    parsed = new URL(url, page);
  } catch {
    return { url: rejectedUrl(page), headers };
  }
  if (parsed.origin !== page.origin || !parsed.pathname.includes(MAP_PROXY_PREFIX)) {
    return { url: rejectedUrl(page), headers };
  }
  if (parsed.username || parsed.password || parsed.pathname.includes("..")) {
    return { url: rejectedUrl(page), headers };
  }
  return { url: `${parsed.origin}${parsed.pathname}`, headers };
}

export function styleUrl(origin: string, dark: boolean): string {
  const page = new URL(origin);
  // The query is stripped by authorizeTileRequest. It keeps a corrected style
  // from being stuck behind a cached copy that still named the tile host.
  return `${page.origin}${MAP_PROXY_PREFIX}styles/${dark ? "dark" : "positron"}?v=1`;
}

export function accessToken(hass: HomeAssistant | undefined): string | undefined {
  const auth = hass?.auth;
  const token = auth?.data?.access_token ?? auth?.accessToken;
  return typeof token === "string" && token ? token : undefined;
}

export function routeLngLats(points: Array<{ latitude: number; longitude: number }>): [number, number][] {
  const pairs: [number, number][] = [];
  for (const point of points) {
    if (!Number.isFinite(point.latitude) || !Number.isFinite(point.longitude)) {
      continue;
    }
    if (Math.abs(point.latitude) > 90 || Math.abs(point.longitude) > 180) {
      continue;
    }
    pairs.push([point.longitude, point.latitude]);
  }
  return pairs;
}

/**
 * MapLibre requires sprite and glyph URLs to be absolute. The proxy cache stores
 * root-relative paths so it is not tied to one Home Assistant origin.
 */
export function absolutizeStyle(value: unknown, origin: string): unknown {
  if (typeof value === "string") {
    if (value.startsWith(MAP_PROXY_PREFIX)) {
      return `${origin}${value}`;
    }
    return value;
  }
  if (Array.isArray(value)) {
    return value.map((item) => absolutizeStyle(item, origin));
  }
  if (value && typeof value === "object") {
    const copy: Record<string, unknown> = {};
    for (const [key, item] of Object.entries(value)) {
      copy[key] = absolutizeStyle(item, origin);
    }
    return copy;
  }
  return value;
}

async function loadStyle(spec: BasemapSpec): Promise<unknown> {
  const origin = new URL(spec.origin).origin;
  const style = absolutizeStyle(await fetchJson(styleUrl(spec.origin, spec.dark), spec), origin) as {
    sources?: Record<string, { url?: string; tiles?: unknown }>;
  };
  for (const source of Object.values(style.sources ?? {})) {
    if (!source.url?.startsWith(`${origin}${MAP_PROXY_PREFIX}`)) {
      continue;
    }
    const tilejson = (await fetchJson(source.url, spec)) as { tiles?: unknown };
    source.tiles = absolutizeStyle(tilejson.tiles, origin);
    delete source.url;
  }
  return style;
}

async function fetchJson(url: string, spec: BasemapSpec): Promise<unknown> {
  const request = authorizeTileRequest(url, spec.accessToken, spec.origin);
  const response = await fetch(request.url, { headers: request.headers });
  if (!response.ok) {
    throw new Error("basemap style");
  }
  return response.json();
}

function rejectedUrl(page: URL): string {
  return `${page.origin}${MAP_PROXY_PREFIX}rejected`;
}

interface MapLibreMap {
  on(event: string, handler: () => void): void;
  once(event: string, handler: () => void): void;
  remove(): void;
  resize(): void;
  addControl(control: unknown, position?: string): void;
  addSource(id: string, source: unknown): void;
  addLayer(layer: unknown): void;
  fitBounds(bounds: unknown, options: unknown): void;
  jumpTo(camera: { center: [number, number]; zoom: number }): void;
  touchZoomRotate: { disableRotation(): void };
  getContainer(): HTMLElement;
}

interface MapLibreNs {
  Map: new (options: Record<string, unknown>) => MapLibreMap;
  NavigationControl: new (options: { showCompass: boolean; visualizePitch: boolean }) => unknown;
  LngLatBounds: new (sw: [number, number], ne: [number, number]) => { extend(point: [number, number]): void };
  setWorkerUrl?: (url: string) => void;
}

const mounts = new WeakMap<HTMLElement, { key: string; destroy(): void }>();

export function syncBasemap(element: HTMLElement, spec: BasemapSpec): void {
  const key = specKey(spec);
  const current = mounts.get(element);
  if (current?.key === key) {
    return;
  }
  current?.destroy();
  let destroyed = false;
  let handle: BasemapHandle | undefined;
  const entry = {
    key,
    destroy() {
      destroyed = true;
      handle?.destroy();
      if (mounts.get(element) === entry) {
        mounts.delete(element);
      }
    },
  };
  mounts.set(element, entry);
  void mountBasemap(element, spec)
    .then((next) => {
      if (destroyed || mounts.get(element) !== entry) {
        next?.destroy();
        return;
      }
      handle = next ?? undefined;
    })
    .catch(() => {
      /* A missing token or a browser without WebGL leaves the credit and the dot. */
    });
}

export function releaseBasemap(element: HTMLElement): void {
  mounts.get(element)?.destroy();
}

export async function mountBasemap(element: HTMLElement, spec: BasemapSpec): Promise<BasemapHandle | null> {
  if (!spec.points.length) {
    return null;
  }
  const runtime = await loadRuntime();
  const css = runtime.css;
  ensureStyle(element, css);
  const maplibregl = runtime.maplibregl;
  // A blob worker is blocked by strict content security policies. The CSP worker
  // is a same-origin file next to this chunk, so vector tiles are parsed here.
  maplibregl.setWorkerUrl?.(new URL(/* @vite-ignore */ "./maplibre-gl-csp-worker.js", import.meta.url).href);
  const style = await loadStyle(spec);
  const map = new maplibregl.Map({
    container: element,
    style,
    center: spec.points[0],
    zoom: spec.interactive ? 11 : 14,
    maxZoom: 14,
    interactive: spec.interactive,
    attributionControl: false,
    dragRotate: false,
    pitchWithRotate: false,
    fadeDuration: 0,
    locale: {
      "NavigationControl.ZoomIn": "Zoom in",
      "NavigationControl.ZoomOut": "Zoom out",
    },
    transformRequest: (url: string) => authorizeTileRequest(url, spec.accessToken, spec.origin),
  });
  if (spec.interactive) {
    map.addControl(new maplibregl.NavigationControl({ showCompass: false, visualizePitch: false }), "top-right");
    map.touchZoomRotate.disableRotation();
  }
  let lastWidth = 0;
  let lastHeight = 0;
  let resizes = 0;
  const observer = new ResizeObserver(() => {
    const width = element.clientWidth;
    const height = element.clientHeight;
    if (resizes > 8 || width < 2 || height < 2 || (width === lastWidth && height === lastHeight)) {
      return;
    }
    resizes += 1;
    lastWidth = width;
    lastHeight = height;
    map.resize();
  });
  observer.observe(element);
  map.on("load", () => {
    paint(map, spec);
    map.resize();
    fit(map, maplibregl, spec);
  });
  return {
    destroy() {
      observer.disconnect();
      map.remove();
    },
  };
}

function specKey(spec: BasemapSpec): string {
  const coords = spec.points.map((point) => `${point[0].toFixed(5)},${point[1].toFixed(5)}`).join(";");
  return `${spec.dark ? "d" : "l"}|${spec.interactive ? "i" : "s"}|${spec.accessToken ? "a" : "n"}|${spec.origin}|${coords}`;
}

async function loadRuntime(): Promise<{ maplibregl: MapLibreNs; css: string }> {
  const [mod, css] = await Promise.all([
    import("maplibre-gl"),
    import("maplibre-gl/dist/maplibre-gl.css?inline"),
  ]);
  const maplibregl = (mod as unknown as { default: MapLibreNs }).default;
  const text = (css as { default: string }).default;
  return { maplibregl, css: text };
}

function ensureStyle(element: HTMLElement, cssText: string): void {
  const root = element.getRootNode();
  const parent = root instanceof ShadowRoot ? root : document.head;
  if (parent.querySelector("style[data-tesla-logger-maplibre]")) {
    return;
  }
  const style = document.createElement("style");
  style.dataset.teslaLoggerMaplibre = "";
  style.textContent = `${cssText}
.basemap{position:relative;overflow:hidden}
.maplibregl-map{position:absolute;inset:0;width:100%;height:100%}`;
  parent.append(style);
}

function paint(map: MapLibreMap, spec: BasemapSpec): void {
  const line = spec.points.length >= 2 ? spec.points : [];
  if (line.length >= 2) {
    map.addSource("route", {
      type: "geojson",
      data: { type: "Feature", properties: {}, geometry: { type: "LineString", coordinates: line } },
    });
    map.addLayer({
      id: "route-casing",
      type: "line",
      source: "route",
      layout: { "line-cap": "round", "line-join": "round" },
      paint: { "line-color": "#ffffff", "line-width": 7, "line-opacity": 0.92 },
    });
    map.addLayer({
      id: "route-line",
      type: "line",
      source: "route",
      layout: { "line-cap": "round", "line-join": "round" },
      paint: { "line-color": "#3e6ae1", "line-width": 4 },
    });
  }
  const ends = [];
  if (line.length >= 1) {
    ends.push(pointFeature(line[0], "start"));
    ends.push(pointFeature(line[line.length - 1], "end"));
  } else if (spec.points.length === 1) {
    ends.push(pointFeature(spec.points[0], "end"));
  }
  map.addSource("ends", { type: "geojson", data: { type: "FeatureCollection", features: ends } });
  map.addLayer({
    id: "ends",
    type: "circle",
    source: "ends",
    paint: {
      "circle-radius": ["match", ["get", "kind"], "end", 7, 6],
      "circle-color": ["match", ["get", "kind"], "end", "#3e6ae1", "#ffffff"],
      "circle-stroke-width": 3,
      "circle-stroke-color": ["match", ["get", "kind"], "end", "#ffffff", "#171a20"],
    },
  });
}

function pointFeature(coordinates: [number, number], kind: string) {
  return { type: "Feature", properties: { kind }, geometry: { type: "Point", coordinates } };
}

function fit(map: MapLibreMap, maplibregl: MapLibreNs, spec: BasemapSpec): void {
  if (spec.points.length >= 2) {
    const bounds = new maplibregl.LngLatBounds(spec.points[0], spec.points[0]);
    for (const point of spec.points) {
      bounds.extend(point);
    }
    map.fitBounds(bounds, { padding: 48, maxZoom: 14, animate: false, duration: 0 });
    return;
  }
  map.jumpTo({ center: spec.points[0], zoom: 14 });
}
