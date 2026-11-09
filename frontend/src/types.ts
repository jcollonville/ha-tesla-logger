export interface HassEntity {
  state: string;
  attributes: Record<string, unknown>;
}

export interface EntityRegistryEntry {
  device_id?: string;
  translation_key?: string;
  platform?: string;
}

export interface DeviceRegistryEntry {
  name?: string | null;
}

export interface HomeAssistant {
  states: Record<string, HassEntity>;
  entities?: Record<string, EntityRegistryEntry>;
  devices?: Record<string, DeviceRegistryEntry>;
  locale?: { language?: string };
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
}

export interface CardConfig {
  type?: string;
  entity: string;
  default_view?: ViewName;
}

export type ViewName = "status" | "drives" | "drive" | "charges" | "stats";
export type Period = "week" | "month" | "year";

export interface Drive {
  id: number;
  start_at: string;
  end_at?: string | null;
  distance_km?: number | null;
  duration_s?: number | null;
  energy_used_kwh?: number | null;
}

export interface RoutePoint {
  recorded_at: string;
  latitude: number;
  longitude: number;
}

export interface SeriesPoint {
  recorded_at: string;
  speed_kmh?: number | null;
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
