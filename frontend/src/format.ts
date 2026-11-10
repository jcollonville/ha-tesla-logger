import type { Lang } from "./i18n";
import type { Period } from "./types";

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

/** Compact list timestamp, e.g. "mar. 10 nov. 03:30" or "Tue Nov 10 03:30 AM". */
export function formatListTimestamp(value: string, lang: Lang): string {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) {
    return value;
  }
  const locale = lang === "fr" ? "fr-FR" : "en-US";
  const day = new Intl.DateTimeFormat(locale, {
    weekday: "short",
    day: "numeric",
    month: "short",
  })
    .format(date)
    .replace(/[\u00a0\u202f]/g, " ")
    .replace(/,/g, "")
    .replace(/\s+/g, " ")
    .trim();
  const time = new Intl.DateTimeFormat(locale, {
    hour: "2-digit",
    minute: "2-digit",
  })
    .format(date)
    .replace(/[\u00a0\u202f]/g, " ")
    .trim();
  return `${day} ${time}`;
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
