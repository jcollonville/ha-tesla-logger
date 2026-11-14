import * as L from "leaflet";
import leafletCss from "leaflet/dist/leaflet.css?inline";

export interface MapPoint {
  latitude: number;
  longitude: number;
}

export interface RouteMap {
  element: HTMLDivElement;
  destroy(): void;
}

interface MapState extends RouteMap {
  map: L.Map;
  routeLayer?: L.LayerGroup;
}

function ensureLeafletStyle(el: HTMLElement): void {
  const root = el.getRootNode();
  if (!(root instanceof ShadowRoot) || root.querySelector("style[data-tesla-logger-leaflet]")) {
    return;
  }
  const style = document.createElement("style");
  style.dataset.teslaLoggerLeaflet = "";
  style.textContent = leafletCss;
  root.prepend(style);
}

/** Leaflet route map. Imported only when a header watermark or drive map is shown. */
export function mountRoute(
  current: RouteMap | undefined,
  el: HTMLDivElement,
  route: MapPoint[],
  dark: boolean,
  color: string,
): RouteMap {
  ensureLeafletStyle(el);
  let state = current as MapState | undefined;
  if (state && state.element !== el) {
    state.destroy();
    state = undefined;
  }
  if (!state) {
    const map = L.map(el, { zoomControl: true, attributionControl: true });
    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      // HA serves Referrer-Policy: no-referrer; override per-tile so OSM gets a Referer.
      referrerPolicy: "strict-origin-when-cross-origin",
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);
    if (dark) {
      const pane = map.getPane("tilePane");
      if (pane) {
        pane.style.filter = "invert(1) hue-rotate(180deg) brightness(0.95) contrast(0.9)";
      }
    }
    state = {
      element: el,
      map,
      destroy() {
        map.remove();
      },
    };
  }
  state.routeLayer?.remove();
  const group = L.layerGroup().addTo(state.map);
  const latlngs = route.map((point) => [point.latitude, point.longitude] as [number, number]);
  const line = L.polyline(latlngs, { color, weight: 4 }).addTo(group);
  L.circleMarker(latlngs[0], {
    radius: 6,
    color: "#2e7d32",
    fillColor: "#2e7d32",
    fillOpacity: 1,
  }).addTo(group);
  const end = latlngs[latlngs.length - 1];
  L.circleMarker(end, {
    radius: 6,
    color: "#c62828",
    fillColor: "#c62828",
    fillOpacity: 1,
  }).addTo(group);
  state.routeLayer = group;
  state.map.fitBounds(line.getBounds().pad(0.15));
  const map = state.map;
  requestAnimationFrame(() => map.invalidateSize());
  return state;
}
