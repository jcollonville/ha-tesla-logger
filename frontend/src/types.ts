export interface HassEntity {
  state: string;
  attributes: Record<string, unknown>;
  last_updated?: string;
  last_changed?: string;
}

export interface EntityRegistryEntry {
  device_id?: string;
  translation_key?: string;
  platform?: string;
}

export interface DeviceRegistryEntry {
  name?: string | null;
  model?: string | null;
}

export interface HomeAssistant {
  states: Record<string, HassEntity>;
  entities?: Record<string, EntityRegistryEntry>;
  devices?: Record<string, DeviceRegistryEntry>;
  locale?: {
    language?: string;
    /** "12", "24", "language", or "system". */
    time_format?: string;
    /** "local" uses the browser zone. "server" uses `config.time_zone`. */
    time_zone?: string;
  };
  config?: {
    /** IANA name of the Home Assistant server clock. */
    time_zone?: string;
  };
  language?: string;
  themes?: { darkMode?: boolean };
  callService(
    domain: string,
    service: string,
    serviceData?: Record<string, unknown>,
    target?: Record<string, unknown>,
    notifyOnError?: boolean,
    returnResponse?: boolean,
  ): Promise<{ response?: unknown }>;
  /** Signs a same-origin path so an `<img>` can load it without a bearer header. */
  callWS?<T>(message: { type: string; [key: string]: unknown }): Promise<T>;
  /** Prefix a Home Assistant path with the instance origin. */
  hassUrl?(path?: string): string;
}

export interface CardConfig {
  type?: string;
  entity: string;
  default_view?: ViewName;
  /** Faint position map in the header. Omitted means shown. */
  show_map?: boolean;
  /** Ignored. Older YAML may still set this; the official render is always used. */
  official_image?: boolean;
  /** List page length. Omitted means 10. */
  page_size?: number;
  show?: Partial<Record<string, boolean>>;
  /** Drive detail metrics. Omitted keys stay visible. */
  drive_detail?: Partial<Record<string, boolean>>;
  /** Charge detail metrics. Omitted keys stay visible. */
  charge_detail?: Partial<Record<string, boolean>>;
}

export type ViewName = "status" | "drives" | "drive" | "charges" | "charge" | "stats" | "charts";
export type Period = "week" | "month" | "year";

export interface Drive {
  id: number;
  start_at: string;
  end_at?: string | null;
  distance_km?: number | null;
  duration_s?: number | null;
  energy_used_kwh?: number | null;
  start_battery_level?: number | null;
  end_battery_level?: number | null;
  start_address?: string | null;
  end_address?: string | null;
}

export interface RoutePoint {
  recorded_at: string;
  latitude: number;
  longitude: number;
}

export interface SeriesPoint {
  recorded_at: string;
  speed_kmh?: number | null;
  power_kw?: number | null;
  battery_level?: number | null;
  elevation_m?: number | null;
}

export interface DriveDetail extends Drive {
  route: RoutePoint[];
  series: SeriesPoint[];
}

export interface Charge {
  id: number;
  start_at: string;
  end_at?: string | null;
  energy_added_kwh?: number | null;
  duration_s?: number | null;
  max_power_kw?: number | null;
  charger_type?: string | null;
  is_dc?: boolean | null;
  start_battery_level?: number | null;
  end_battery_level?: number | null;
  address?: string | null;
  geofence?: string | null;
  location?: string | null;
  cost?: number | null;
  voltage_v?: number | null;
  /** Power and state of charge along the session, when the list payload has them. */
  series?: SeriesPoint[] | null;
}

export interface Page<T> {
  data: T[];
  page: number;
  per_page: number;
  total: number;
}

export interface Stats {
  drive_count: number;
  distance_km: number;
  drive_duration_s: number;
  energy_used_kwh: number;
  charge_count: number;
  energy_added_kwh: number;
}

export interface StatsBucket {
  start: string;
  distance_km?: number | null;
  energy_used_kwh?: number | null;
  wh_per_km?: number | null;
  energy_charged_kwh?: number | null;
  drive_duration_s?: number | null;
  drive_count?: number | null;
  range_at_100_km?: number | null;
  ac_energy_kwh?: number | null;
  dc_energy_kwh?: number | null;
  dc_share_pct?: number | null;
  charge_cost?: number | null;
  cost_per_km?: number | null;
  idle_range_loss_km_per_day?: number | null;
  idle_energy_loss_kwh_per_day?: number | null;
}

export interface TempBin {
  temp_c_bucket: number;
  wh_per_km?: number | null;
  distance_km?: number | null;
}

export interface StatsSeries {
  period?: Period;
  buckets: StatsBucket[];
}
