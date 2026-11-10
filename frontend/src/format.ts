import { language, type Lang } from "./i18n";
import type { Charge, Drive, HomeAssistant, Period } from "./types";

/** How list timestamps and chart axis dates are formatted. */
export interface DatePrefs {
  /** BCP 47 language from `hass.locale.language`, such as "fr" or "en". */
  language: string;
  /** `true` for a 12-hour clock, `false` for 24-hour. Omit to follow the language. */
  hour12?: boolean;
  /** IANA zone. Omit to use the browser's local zone. */
  timeZone?: string;
}

export function datePrefs(value: Lang | DatePrefs | undefined): DatePrefs {
  if (value && typeof value === "object") {
    return {
      language: value.language || "en",
      hour12: value.hour12,
      timeZone: value.timeZone,
    };
  }
  return { language: value || "en" };
}

/**
 * Home Assistant stores the 12/24 choice on `locale.time_format` and the
 * server-versus-local choice on `locale.time_zone`. The server's IANA name
 * is `config.time_zone`.
 */
export function datePrefsFromHass(
  hass?: Pick<HomeAssistant, "locale" | "language" | "config">,
): DatePrefs {
  const languageCode = hass?.locale?.language || hass?.language || "en";
  const timeFormat = hass?.locale?.time_format;
  let hour12: boolean | undefined;
  if (timeFormat === "12") {
    hour12 = true;
  } else if (timeFormat === "24") {
    hour12 = false;
  }
  const preference = hass?.locale?.time_zone;
  const serverZone = hass?.config?.time_zone;
  const timeZone =
    preference === "server" &&
    typeof serverZone === "string" &&
    serverZone !== "" &&
    serverZone !== "local" &&
    serverZone !== "server"
      ? serverZone
      : undefined;
  return { language: languageCode, hour12, timeZone };
}

export function formatNumber(value: number, digits: number, lang: Lang): string {
  return value.toLocaleString(lang === "fr" ? "fr-FR" : "en-US", {
    minimumFractionDigits: digits,
    maximumFractionDigits: digits,
  });
}

const PLACEHOLDER_VALUE = /^<.*>$/;

/** Charger label safe to show. Tesla sends placeholders such as "<invalid>". */
export function displayChargerType(value: string | null | undefined): string | null {
  if (typeof value !== "string") {
    return null;
  }
  const trimmed = value.trim();
  if (!trimmed || PLACEHOLDER_VALUE.test(trimmed)) {
    return null;
  }
  const lower = trimmed.toLowerCase();
  if (lower === "none" || lower === "null") {
    return null;
  }
  return trimmed;
}

/** One muted detail line. Empty pieces are left out. */
export function detailLine(parts: Array<string | null | undefined>): string {
  return parts
    .map((part) => (typeof part === "string" ? part.trim() : ""))
    .filter((part) => part.length > 0)
    .join(" · ");
}

function plain(value: string): string {
  return value
    .replace(/[\u00a0\u202f]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function intlOptions(prefs: DatePrefs, options: Intl.DateTimeFormatOptions): Intl.DateTimeFormatOptions {
  const next: Intl.DateTimeFormatOptions = { ...options };
  if (prefs.timeZone) {
    next.timeZone = prefs.timeZone;
  }
  return next;
}

function formatDatePart(date: Date, prefs: DatePrefs): string {
  return plain(
    new Intl.DateTimeFormat(
      prefs.language || "en",
      intlOptions(prefs, { weekday: "short", day: "numeric", month: "short" }),
    ).format(date),
  );
}

function formatTimePart(date: Date, prefs: DatePrefs): string {
  const options = intlOptions(prefs, {
    hour: prefs.hour12 ? "numeric" : "2-digit",
    minute: "2-digit",
  });
  if (typeof prefs.hour12 === "boolean") {
    options.hour12 = prefs.hour12;
  }
  return plain(new Intl.DateTimeFormat(prefs.language || "en", options).format(date));
}

function calendarDay(date: Date, prefs: DatePrefs): string {
  const parts = new Intl.DateTimeFormat(
    "en-US",
    intlOptions(prefs, { year: "numeric", month: "2-digit", day: "2-digit" }),
  ).formatToParts(date);
  const pick = (type: Intl.DateTimeFormatPartTypes) =>
    parts.find((part) => part.type === type)?.value ?? "";
  return `${pick("year")}-${pick("month")}-${pick("day")}`;
}

/** Compact list timestamp, e.g. "mar. 10 nov., 15:14" or "Tue, Nov 10, 3:14 PM". */
export function formatListTimestamp(value: string, prefs: Lang | DatePrefs): string {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) {
    return value;
  }
  const resolved = datePrefs(prefs);
  return `${formatDatePart(date, resolved)}, ${formatTimePart(date, resolved)}`;
}

export function formatDuration(seconds: number | null | undefined): string {
  if (seconds == null || Number.isNaN(seconds)) {
    return "—";
  }
  const total = Math.max(0, Math.round(seconds));
  const hours = Math.floor(total / 3600);
  const minutes = Math.floor((total % 3600) / 60);
  if (hours > 0) {
    return `${hours} h ${minutes} min`;
  }
  return `${minutes} min`;
}

export interface HistoryRowModel {
  datetime: string;
  when: string;
  place: string | null;
  figure: string | null;
  /** Joined detail, used as the row title. */
  detail: string;
  /** Pieces spread across the second line. */
  details: string[];
}

function present(parts: Array<string | null | undefined>): string[] {
  return parts
    .map((part) => (typeof part === "string" ? part.trim() : ""))
    .filter((part) => part.length > 0);
}

function trimmedText(value: unknown): string | null {
  if (typeof value !== "string") {
    return null;
  }
  const trimmed = value.trim();
  return trimmed || null;
}

function finite(value: number | null | undefined): number | null {
  return typeof value === "number" && Number.isFinite(value) ? value : null;
}

/** "70 → 64 %" when both ends exist, otherwise the one known percentage. */
export function socRange(
  start: number | null | undefined,
  end: number | null | undefined,
  lang: Lang,
): string | null {
  const from = finite(start);
  const to = finite(end);
  if (from == null && to == null) {
    return null;
  }
  if (from != null && to != null) {
    return `${formatNumber(from, 0, lang)} → ${formatNumber(to, 0, lang)} %`;
  }
  return `${formatNumber((from ?? to) as number, 0, lang)} %`;
}

/** Start timestamp, with the end time when the trip or charge has one. */
export function formatListRange(
  start: string,
  end: string | null | undefined,
  prefs: Lang | DatePrefs,
): string {
  const resolved = datePrefs(prefs);
  const startDate = new Date(start);
  if (Number.isNaN(startDate.getTime())) {
    return start;
  }
  const startText = `${formatDatePart(startDate, resolved)}, ${formatTimePart(startDate, resolved)}`;
  if (!end) {
    return startText;
  }
  const endDate = new Date(end);
  if (Number.isNaN(endDate.getTime())) {
    return startText;
  }
  if (calendarDay(startDate, resolved) !== calendarDay(endDate, resolved)) {
    const endText = `${formatDatePart(endDate, resolved)}, ${formatTimePart(endDate, resolved)}`;
    return `${startText} – ${endText}`;
  }
  return `${formatDatePart(startDate, resolved)}, ${formatTimePart(startDate, resolved)}–${formatTimePart(endDate, resolved)}`;
}

function kwh(value: number | null | undefined, lang: Lang): string | null {
  const energy = finite(value);
  return energy == null ? null : `${formatNumber(energy, 1, lang)} kWh`;
}

export function driveHistory(drive: Drive, prefs: Lang | DatePrefs): HistoryRowModel {
  const resolved = datePrefs(prefs);
  const lang = language(resolved.language);
  const start = trimmedText(drive.start_address);
  const end = trimmedText(drive.end_address);
  const place = start && end ? `${start} → ${end}` : start || end;
  const efficiency = whPerKm(drive.energy_used_kwh, drive.distance_km);
  const soc = socRange(drive.start_battery_level, drive.end_battery_level, lang);
  const details = present([
    finite(drive.duration_s) == null ? null : formatDuration(drive.duration_s),
    efficiency == null ? null : `${formatNumber(efficiency, 0, lang)} Wh/km`,
    soc ?? kwh(drive.energy_used_kwh, lang),
  ]);
  const distance = finite(drive.distance_km);
  return {
    datetime: drive.start_at,
    when: formatListRange(drive.start_at, drive.end_at, resolved),
    place,
    figure: distance == null ? null : `${formatNumber(distance, 1, lang)} km`,
    detail: details.join(" · "),
    details,
  };
}

function chargeKind(charge: Charge): "AC" | "DC" | null {
  if (charge.is_dc === true) {
    return "DC";
  }
  if (charge.is_dc === false) {
    return "AC";
  }
  const type = displayChargerType(charge.charger_type);
  return type === "AC" || type === "DC" ? type : null;
}

export function chargeHistory(charge: Charge, prefs: Lang | DatePrefs): HistoryRowModel {
  const resolved = datePrefs(prefs);
  const lang = language(resolved.language);
  const named =
    trimmedText(charge.address) || trimmedText(charge.geofence) || trimmedText(charge.location);
  const type = displayChargerType(charge.charger_type);
  const descriptive = type && type !== "AC" && type !== "DC" ? type : null;
  const power = finite(charge.max_power_kw);
  const details = present([
    finite(charge.duration_s) == null ? null : formatDuration(charge.duration_s),
    socRange(charge.start_battery_level, charge.end_battery_level, lang),
    power == null ? null : `${formatNumber(power, 0, lang)} kW`,
    chargeKind(charge),
  ]);
  return {
    datetime: charge.start_at,
    when: formatListRange(charge.start_at, charge.end_at, resolved),
    place: named || descriptive,
    figure: kwh(charge.energy_added_kwh, lang),
    detail: details.join(" · "),
    details,
  };
}

export function whPerKm(
  energyKwh: number | null | undefined,
  distanceKm: number | null | undefined,
): number | null {
  if (energyKwh == null || distanceKm == null || distanceKm <= 0) {
    return null;
  }
  return (energyKwh * 1000) / distanceKm;
}

export function periodBounds(period: Period, now = new Date()): { start: Date; end: Date } {
  const start = new Date(now);
  if (period === "week") {
    const monday = (start.getDay() + 6) % 7;
    start.setDate(start.getDate() - monday);
  } else if (period === "month") {
    start.setDate(1);
  } else {
    start.setMonth(0, 1);
  }
  start.setHours(0, 0, 0, 0);
  const end = new Date(start);
  if (period === "week") {
    end.setDate(end.getDate() + 7);
  } else if (period === "month") {
    end.setMonth(end.getMonth() + 1);
  } else {
    end.setFullYear(end.getFullYear() + 1);
  }
  return { start, end };
}

export function bucketInPeriod(startIso: string, period: Period, now = new Date()): boolean {
  const time = new Date(startIso).getTime();
  if (Number.isNaN(time)) {
    return false;
  }
  const { start, end } = periodBounds(period, now);
  return time >= start.getTime() && time < end.getTime();
}

export function periodRange(period: Period): { from: string; to: string } {
  const now = new Date();
  return { from: periodBounds(period, now).start.toISOString(), to: now.toISOString() };
}

function errorText(err: unknown): string {
  if (typeof err === "string") {
    return err;
  }
  if (err instanceof Error) {
    return err.message;
  }
  if (err && typeof err === "object" && "message" in err && typeof err.message === "string") {
    return err.message;
  }
  return "";
}

export function safeError(err: unknown, fallback: string): string {
  const text = errorText(err);
  if (!text || text.includes("tl_")) {
    return fallback;
  }
  return text.slice(0, 180);
}

export function asRecord(value: unknown): Record<string, unknown> | null {
  if (!value || typeof value !== "object") {
    return null;
  }
  return value as Record<string, unknown>;
}
