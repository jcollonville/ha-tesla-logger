import { CHARGE_DETAIL_DEFAULTS, DEFAULT_PAGE_SIZE, DRIVE_DETAIL_DEFAULTS } from "./detail-config";
import { SHOW_DEFAULTS } from "./show-config";
import type { CardConfig, HomeAssistant } from "./types";

/** New-card defaults. Omitted keys in an existing YAML config stay on these values. */
export function stubConfig(hass: HomeAssistant): CardConfig {
  const entity =
    Object.keys(hass.states).find((id) => hass.states[id]?.attributes?.key === "location") || "";
  return {
    entity,
    show_map: true,
    official_image: true,
    page_size: DEFAULT_PAGE_SIZE,
    show: { ...SHOW_DEFAULTS },
    drive_detail: { ...DRIVE_DETAIL_DEFAULTS },
    charge_detail: { ...CHARGE_DETAIL_DEFAULTS },
  };
}
