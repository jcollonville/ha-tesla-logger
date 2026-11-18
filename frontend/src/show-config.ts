import type { CardConfig, ViewName } from "./types";

/** Blocks the card can show. Missing keys stay visible. */
export const SHOW_DEFAULTS = {
  car: true,
  status: true,
  drives: true,
  charges: true,
  stats: true,
  charts: true,
  chart_consumption: true,
  chart_distance: true,
  chart_energy: true,
  totals: true,
  battery_health: true,
  charging_split: true,
  vampire_drain: true,
  consumption_vs_temp: true,
} as const;

export type ShowKey = keyof typeof SHOW_DEFAULTS;
export type ShowFlags = Record<ShowKey, boolean>;

export const SHOW_KEYS = Object.keys(SHOW_DEFAULTS) as ShowKey[];

/** Sections in the visual editor, apart from the header map. */
export const SECTION_KEYS = ["car", "status", "drives", "charges", "stats", "charts"] as const satisfies readonly ShowKey[];

/** Status toggles, including the totals strip. */
export const VIEW_SHOW_KEYS = ["car", "status", "drives", "charges", "stats", "totals"] as const satisfies readonly ShowKey[];

/** Chart toggles, kept separate in the editor. */
export const CHART_SHOW_KEYS = [
  "chart_consumption",
  "chart_distance",
  "chart_energy",
  "battery_health",
  "charging_split",
  "vampire_drain",
  "consumption_vs_temp",
] as const satisfies readonly ShowKey[];

export function showFlags(config: CardConfig | undefined): ShowFlags {
  const flags: ShowFlags = { ...SHOW_DEFAULTS };
  const raw = config?.show;
  if (!raw || typeof raw !== "object") {
    return flags;
  }
  for (const key of SHOW_KEYS) {
    const value = raw[key];
    if (typeof value === "boolean") {
      flags[key] = value;
    }
  }
  return flags;
}

function chartBlocks(show: ShowFlags): boolean {
  return (
    show.chart_consumption ||
    show.chart_distance ||
    show.chart_energy ||
    show.totals ||
    show.battery_health ||
    show.charging_split ||
    show.vampire_drain ||
    show.consumption_vs_temp
  );
}

export function chartsVisible(show: ShowFlags): boolean {
  return show.charts && chartBlocks(show);
}

/** Series endpoint feeds every chart except temperature bins. */
export function seriesNeeded(show: ShowFlags): boolean {
  return (
    show.charts &&
    (show.chart_consumption ||
      show.chart_distance ||
      show.chart_energy ||
      show.totals ||
      show.battery_health ||
      show.charging_split ||
      show.vampire_drain)
  );
}

/** Tabs that mirror the console. Charts live on Stats. `showMap` keeps Aperçu. */
export function visibleViews(
  show: ShowFlags,
  showMap = true,
): Array<Exclude<ViewName, "drive" | "charge" | "charts">> {
  const views: Array<Exclude<ViewName, "drive" | "charge" | "charts">> = [];
  if (show.car || show.status || showMap) {
    views.push("status");
  }
  if (show.drives) {
    views.push("drives");
  }
  if (show.charges) {
    views.push("charges");
  }
  if (show.stats || chartsVisible(show)) {
    views.push("stats");
  }
  return views;
}

export function fallbackView(view: ViewName, show: ShowFlags, showMap = true): ViewName {
  const views = visibleViews(show, showMap);
  if (view === "drive") {
    return show.drives ? view : (views[0] ?? "status");
  }
  if (view === "charge") {
    return show.charges ? view : (views[0] ?? "status");
  }
  const normalized = view === "charts" ? "stats" : view;
  if (normalized === "stats") {
    return show.stats || chartsVisible(show) ? "stats" : (views[0] ?? "status");
  }
  if (views.includes(normalized)) {
    return normalized;
  }
  return views[0] ?? "status";
}
