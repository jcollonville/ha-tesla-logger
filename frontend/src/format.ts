import type { Lang } from "./i18n";

export function formatNumber(value: number, digits: number, lang: Lang): string {
  return value.toLocaleString(lang === "fr" ? "fr-FR" : "en-US", {
    minimumFractionDigits: digits,
    maximumFractionDigits: digits,
  });
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

export function periodRange(period: "week" | "month" | "year"): { from: string; to: string } {
  const now = new Date();
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
  return { from: start.toISOString(), to: now.toISOString() };
}

export function safeError(err: unknown, fallback: string): string {
  const text = err instanceof Error ? err.message : String(err);
  if (text.includes("tl_")) {
    return fallback;
  }
  return text.slice(0, 180) || fallback;
}

export function asRecord(value: unknown): Record<string, unknown> | null {
  if (!value || typeof value !== "object") {
    return null;
  }
  return value as Record<string, unknown>;
}
