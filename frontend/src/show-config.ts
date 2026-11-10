import type { CardConfig, ViewName } from "./types";

/** Blocks the card can show. Missing keys stay visible. */
export const SHOW_DEFAULTS = {
  status: true,
  drives: true,
  charges: true,
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

export function chartsVisible(show: ShowFlags): boolean {
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

/** Series endpoint feeds every chart except temperature bins. */
export function seriesNeeded(show: ShowFlags): boolean {
  return (
    show.chart_consumption ||
    show.chart_distance ||
    show.chart_energy ||
    show.totals ||
    show.battery_health ||
    show.charging_split ||
    show.vampire_drain
  );
}

export function visibleViews(show: ShowFlags): Array<Exclude<ViewName, "drive">> {
  const views: Array<Exclude<ViewName, "drive">> = [];
  if (show.status) {
    views.push("status");
  }
  if (show.drives) {
    views.push("drives");
  }
  if (show.charges) {
    views.push("charges");
  }
  views.push("stats");
  if (chartsVisible(show)) {
    views.push("charts");
  }
  return views;
}

export function fallbackView(view: ViewName, show: ShowFlags): ViewName {
  if (view === "drive") {
    return show.drives ? view : (visibleViews(show)[0] ?? "stats");
  }
  if (view === "stats" || visibleViews(show).includes(view)) {
    return view;
  }
  return visibleViews(show)[0] ?? "stats";
}
