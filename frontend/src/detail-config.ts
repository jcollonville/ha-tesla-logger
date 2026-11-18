import type { CardConfig } from "./types";

/** Drives and charges requested for one list page when `page_size` is omitted. */
export const DEFAULT_PAGE_SIZE = 10;
const MAX_PAGE_SIZE = 50;

export function pageSize(config: CardConfig | undefined): number {
  const raw = config?.page_size;
  if (typeof raw !== "number" || !Number.isFinite(raw)) {
    return DEFAULT_PAGE_SIZE;
  }
  return Math.min(MAX_PAGE_SIZE, Math.max(1, Math.round(raw)));
}

/** Metrics and charts on the drive detail. Missing keys stay visible. */
export const DRIVE_DETAIL_DEFAULTS = {
  distance: true,
  duration: true,
  energy: true,
  efficiency: true,
  map: true,
  speed: true,
  power: true,
  elevation: true,
  battery: true,
} as const;

/** Metrics and charts on the charge detail. Missing keys stay visible. */
export const CHARGE_DETAIL_DEFAULTS = {
  energy: true,
  duration: true,
  soc: true,
  power: true,
  ac_dc: true,
  voltage: true,
  cost: true,
  curve: true,
} as const;

export type DriveDetailKey = keyof typeof DRIVE_DETAIL_DEFAULTS;
export type ChargeDetailKey = keyof typeof CHARGE_DETAIL_DEFAULTS;
export type DriveDetailFlags = Record<DriveDetailKey, boolean>;
export type ChargeDetailFlags = Record<ChargeDetailKey, boolean>;

export const DRIVE_DETAIL_KEYS = Object.keys(DRIVE_DETAIL_DEFAULTS) as DriveDetailKey[];
export const CHARGE_DETAIL_KEYS = Object.keys(CHARGE_DETAIL_DEFAULTS) as ChargeDetailKey[];

function flags<T extends Record<string, boolean>>(defaults: T, raw: unknown): T {
  const out: T = { ...defaults };
  if (!raw || typeof raw !== "object") {
    return out;
  }
  for (const key of Object.keys(defaults)) {
    const value = (raw as Record<string, unknown>)[key];
    if (typeof value === "boolean") {
      out[key as keyof T] = value as T[keyof T];
    }
  }
  return out;
}

export function driveDetailFlags(config: CardConfig | undefined): DriveDetailFlags {
  return flags(DRIVE_DETAIL_DEFAULTS, config?.drive_detail);
}

export function chargeDetailFlags(config: CardConfig | undefined): ChargeDetailFlags {
  return flags(CHARGE_DETAIL_DEFAULTS, config?.charge_detail);
}
