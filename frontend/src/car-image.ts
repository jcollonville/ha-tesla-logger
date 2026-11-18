import type { HassEntity, HomeAssistant } from "./types";

/** Signed image URLs stay valid long enough for a dashboard to load the PNG. */
export const CAR_IMAGE_SIGN_SECONDS = 3600;

/** Omitted means the official render is shown. */
export function officialImageEnabled(config: { official_image?: boolean } | undefined): boolean {
  return config?.official_image !== false;
}

function entryIdOf(value: unknown): string | null {
  if (typeof value !== "string" || !/^[A-Za-z0-9_-]{1,128}$/.test(value)) {
    return null;
  }
  return value;
}

/** Numeric vehicle id only. A VIN is rejected. */
export function vehicleIdOf(value: unknown): number | null {
  if (typeof value === "number" && Number.isInteger(value) && value >= 0 && value <= 1_000_000_000_000) {
    return value;
  }
  if (typeof value === "string" && /^\d{1,12}$/.test(value)) {
    return Number(value);
  }
  return null;
}

export function carImageTarget(
  entities: Iterable<Pick<HassEntity, "attributes">>,
): { entryId: string; vehicleId: number } | null {
  for (const entity of entities) {
    const entryId = entryIdOf(entity.attributes.config_entry_id);
    const vehicleId = vehicleIdOf(entity.attributes.vehicle_id);
    if (entryId && vehicleId !== null) {
      return { entryId, vehicleId };
    }
  }
  return null;
}

export function carImagePath(entryId: string, vehicleId: number): string {
  return `/api/tesla_logger/${encodeURIComponent(entryId)}/${vehicleId}/car.png`;
}

/**
 * An `<img>` cannot send Home Assistant's bearer token. `auth/sign_path` returns
 * a temporary same-origin URL that the HTTP view accepts.
 */
export async function signedCarImageUrl(
  hass: HomeAssistant,
  entryId: string,
  vehicleId: number,
): Promise<string | null> {
  if (!hass.callWS || !hass.hassUrl) {
    return null;
  }
  const path = carImagePath(entryId, vehicleId);
  const signed = await hass.callWS<{ path?: unknown }>({
    type: "auth/sign_path",
    path,
    expires: CAR_IMAGE_SIGN_SECONDS,
  });
  if (!signed || typeof signed.path !== "string") {
    return null;
  }
  if (!signed.path.startsWith("/") || signed.path.startsWith("//")) {
    return null;
  }
  const url = hass.hassUrl(signed.path);
  return url || null;
}
