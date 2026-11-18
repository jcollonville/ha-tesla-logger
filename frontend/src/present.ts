import type { ChartData, ChartSeries, ChargeData, MiniMapData } from "@jcollonville/tesla-logger-ui";

import { datePrefs, type DatePrefs } from "./format";
import type { Lang } from "./i18n";
import type { Charge, Period, RoutePoint, SeriesPoint, Stats } from "./types";

/** Buckets requested for each stats grouping. Oldest to newest. */
export const SERIES_COUNT: Record<Period, number> = {
  week: 12,
  month: 12,
  year: 5,
};

export type ListRange = "7d" | "30d" | "year" | "all";

const MINI_W = 360;
const MINI_H = 220;

interface Ymd {
  y: number;
  m: number;
  d: number;
}

function zonedParts(date: Date, timeZone: string): Ymd {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(date);
  const pick = (type: string) => Number(parts.find((part) => part.type === type)?.value);
  return { y: pick("year"), m: pick("month"), d: pick("day") };
}

function addDays(date: Ymd, days: number): Ymd {
  const utc = new Date(Date.UTC(date.y, date.m - 1, date.d));
  utc.setUTCDate(utc.getUTCDate() + days);
  return { y: utc.getUTCFullYear(), m: utc.getUTCMonth() + 1, d: utc.getUTCDate() };
}

/** Minutes to add to a UTC instant so the chart's UTC clock reads local time. */
export function offsetMinutes(timeZone: string, instant: Date): number {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone,
    hourCycle: "h23",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  }).formatToParts(instant);
  const pick = (type: string) => parts.find((part) => part.type === type)?.value ?? "0";
  const hour = pick("hour") === "24" ? 0 : Number(pick("hour"));
  const asUtc = Date.UTC(
    Number(pick("year")),
    Number(pick("month")) - 1,
    Number(pick("day")),
    hour,
    Number(pick("minute")),
    Number(pick("second")),
  );
  return Math.round((asUtc - instant.getTime()) / 60000);
}

function zonedMidnight(timeZone: string, date: Ymd): Date {
  const utc = new Date(Date.UTC(date.y, date.m - 1, date.d));
  const offset = offsetMinutes(timeZone, utc);
  return new Date(utc.getTime() - offset * 60000);
}

/** `from`/`to` for the console period chips. `all` sends neither bound. */
export function listQuery(
  range: ListRange,
  timeZone: string,
  now = new Date(),
): { from?: string; to?: string } {
  if (range === "all") {
    return {};
  }
  const today = zonedParts(now, timeZone);
  const start =
    range === "7d" ? addDays(today, -6) : range === "30d" ? addDays(today, -29) : { y: today.y, m: 1, d: 1 };
  return { from: zonedMidnight(timeZone, start).toISOString(), to: now.toISOString() };
}

/** First instant of the current month in `timeZone`, through `now`. */
export function monthQuery(timeZone: string, now = new Date()): { from: string; to: string } {
  return periodQuery("month", timeZone, now);
}

/** Start of the current week, month, or year in `timeZone`, through `now`. */
export function periodQuery(period: Period, timeZone: string, now = new Date()): { from: string; to: string } {
  const today = zonedParts(now, timeZone);
  let start: Ymd;
  if (period === "year") {
    start = { y: today.y, m: 1, d: 1 };
  } else if (period === "month") {
    start = { y: today.y, m: today.m, d: 1 };
  } else {
    const utc = new Date(Date.UTC(today.y, today.m - 1, today.d));
    start = addDays(today, -((utc.getUTCDay() + 6) % 7));
  }
  return { from: zonedMidnight(timeZone, start).toISOString(), to: now.toISOString() };
}

export function bucketAxisLabel(start: string, period: Period, prefs: Lang | DatePrefs): string {
  const date = new Date(start);
  if (Number.isNaN(date.getTime())) {
    return start;
  }
  const resolved = datePrefs(prefs);
  const zone = resolved.timeZone ? { timeZone: resolved.timeZone } : {};
  const locale = resolved.language || "en";
  if (period === "year") {
    return new Intl.DateTimeFormat(locale, { year: "numeric", ...zone }).format(date);
  }
  if (period === "month") {
    return new Intl.DateTimeFormat(locale, { month: "short", ...zone })
      .format(date)
      .replace(/[\u00a0\u202f]/g, " ")
      .replace(/\.$/, "")
      .trim();
  }
  return new Intl.DateTimeFormat(locale, { day: "numeric", month: "short", ...zone })
    .format(date)
    .replace(/[\u00a0\u202f]/g, " ")
    .replace(/,/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function strideIndexes(length: number, max: number): number[] {
  if (length <= max || max < 2) {
    return Array.from({ length }, (_, index) => index);
  }
  const indexes = Array.from({ length: max }, (_, index) => Math.round((index * (length - 1)) / (max - 1)));
  return indexes.filter((value, index) => index === 0 || value !== indexes[index - 1]);
}

/**
 * Project a route into one SVG path in viewBox units.
 * The path never contains the source latitude or longitude text.
 */
export function routeRoads(points: RoutePoint[]): string[] {
  const located = points.filter(
    (point) => Number.isFinite(point.latitude) && Number.isFinite(point.longitude),
  );
  if (located.length < 2) {
    return [];
  }
  const kept = strideIndexes(located.length, 90).map((index) => located[index]);
  const lats = kept.map((point) => point.latitude);
  const lons = kept.map((point) => point.longitude);
  const minLat = Math.min(...lats);
  const maxLat = Math.max(...lats);
  const minLon = Math.min(...lons);
  const maxLon = Math.max(...lons);
  const spanLat = Math.max(maxLat - minLat, 1e-9);
  const spanLon = Math.max(maxLon - minLon, 1e-9);
  const pad = 28;
  const scale = Math.min((MINI_W - pad * 2) / spanLon, (MINI_H - pad * 2) / spanLat);
  const ox = (MINI_W - spanLon * scale) / 2;
  const oy = (MINI_H - spanLat * scale) / 2;
  const commands = kept.map((point, index) => {
    const x = ox + (point.longitude - minLon) * scale;
    const y = MINI_H - (oy + (point.latitude - minLat) * scale);
    return `${index === 0 ? "M" : "L"}${x.toFixed(1)} ${y.toFixed(1)}`;
  });
  return [commands.join(" ")];
}

export function positionMap(label: string, moving: boolean, positioned: boolean): MiniMapData {
  return {
    label,
    moving,
    empty: !positioned,
    width: MINI_W,
    height: MINI_H,
    roads: [],
  };
}

export function routeMap(label: string, roads: string[]): MiniMapData {
  return {
    label,
    moving: false,
    empty: roads.length === 0,
    width: MINI_W,
    height: MINI_H,
    roads,
  };
}

/** Drop Tesla placeholders such as "<invalid>", "None", and "NULL". */
export function chargeRow(charge: Charge): ChargeData {
  const raw = typeof charge.charger_type === "string" ? charge.charger_type.trim() : "";
  const lower = raw.toLowerCase();
  const usable = raw && !/^<.*>$/.test(raw) && lower !== "none" && lower !== "null" ? raw : null;
  let isDc = charge.is_dc ?? null;
  const chargerType = usable;
  if (usable === "AC") {
    isDc = false;
  }
  if (usable === "DC") {
    isDc = true;
  }
  return {
    id: charge.id,
    start_at: charge.start_at,
    end_at: charge.end_at,
    energy_added_kwh: charge.energy_added_kwh,
    duration_s: charge.duration_s,
    cost: charge.cost,
    is_dc: isDc,
    charger_type: chargerType,
    max_power_kw: charge.max_power_kw,
    start_battery_level: charge.start_battery_level,
    end_battery_level: charge.end_battery_level,
    address: charge.address || charge.location,
    geofence: charge.geofence,
  };
}

export function readPosition(lat: unknown, lon: unknown): { lat: number; lon: number } | null {
  if (typeof lat !== "number" || typeof lon !== "number") {
    return null;
  }
  if (!Number.isFinite(lat) || !Number.isFinite(lon) || Math.abs(lat) > 90 || Math.abs(lon) > 180) {
    return null;
  }
  return { lat, lon };
}

export function barChart(
  labels: string[],
  titles: string[],
  series: ChartSeries[],
  stacked = false,
): ChartData {
  return { kind: "bar", labels, titles, series, stacked };
}

export function lineChart(
  originMs: number,
  offsetMin: number,
  t: number[],
  series: ChartSeries[],
): ChartData {
  return {
    kind: "line",
    x: { kind: "time", origin_ms: originMs, offset_min: offsetMin },
    t,
    series,
  };
}

export function samplePoints(points: SeriesPoint[], max = 240): SeriesPoint[] {
  return strideIndexes(points.length, max).map((index) => points[index]);
}

export function finite(value: number | null | undefined): number | null {
  return typeof value === "number" && Number.isFinite(value) ? value : null;
}

export function efficiencyWh(energyKwh: number | null | undefined, distanceKm: number | null | undefined): number | null {
  const energy = finite(energyKwh);
  const distance = finite(distanceKm);
  if (energy == null || distance == null || distance <= 0) {
    return null;
  }
  return (energy * 1000) / distance;
}

export function sum(values: Array<number | null | undefined>): number {
  return values.reduce<number>((total, value) => total + (finite(value) ?? 0), 0);
}

export interface FactItem {
  label: string;
  value: string;
}

export function statsFacts(
  stats: Stats,
  labels: { drives: string; distance: string; duration: string; energy: string; efficiency: string },
  format: {
    number: (value: number, digits: number) => string;
    distance: (km: number | null) => string;
    duration: (seconds: number | null) => string;
    energy: (kwh: number | null) => string;
    unit: (value: number | null, digits: number, suffix: string) => string;
  },
): FactItem[] {
  const wh = efficiencyWh(stats.energy_used_kwh, stats.distance_km);
  return [
    { label: labels.drives, value: format.number(stats.drive_count || 0, 0) },
    { label: labels.distance, value: format.distance(stats.distance_km) },
    { label: labels.duration, value: format.duration(stats.drive_duration_s) },
    { label: labels.energy, value: format.energy(stats.energy_used_kwh) },
    { label: labels.efficiency, value: wh == null ? "—" : format.unit(wh, 0, "Wh/km") },
  ];
}
