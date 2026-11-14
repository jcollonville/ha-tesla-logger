import { afterEach, describe, expect, it, vi } from "vitest";

import "./loader";
import type { CardConfig, HomeAssistant } from "./types";

const mounted: HTMLElement[] = [];

afterEach(() => {
  for (const element of mounted) {
    element.remove();
  }
  mounted.length = 0;
});

function hass(): HomeAssistant {
  return {
    states: {
      "sensor.tesla_location": {
        state: "home",
        attributes: { friendly_name: "Red" },
      },
    },
    entities: { "sensor.tesla_location": { device_id: "device-1" } },
    devices: { "device-1": { name: "Red" } },
    locale: { language: "fr" },
    callService: vi.fn().mockResolvedValue({
      response: { data: [], page: 1, per_page: 20, total: 0 },
    }),
  } as HomeAssistant;
}

describe("loader", () => {
  it("registers the card and editor without loading the implementation", () => {
    expect(customElements.get("tesla-logger-card")).toBeTruthy();
    expect(customElements.get("tesla-logger-card-editor")).toBeTruthy();
    expect(customElements.get("tesla-logger-card-impl")).toBeUndefined();
    expect(customElements.get("tesla-logger-card-editor-impl")).toBeUndefined();
    expect(window.customCards?.some((card) => card.type === "tesla-logger-card" && card.preview === false)).toBe(
      true,
    );
  });

  it("loads the card when an instance is connected", async () => {
    const card = document.createElement("tesla-logger-card") as HTMLElement & {
      hass?: HomeAssistant;
      setConfig(config: CardConfig): void;
    };
    mounted.push(card);
    card.setConfig({ entity: "sensor.tesla_location" });
    card.hass = hass();
    document.body.append(card);
    await vi.waitFor(() => {
      const impl = card.querySelector("tesla-logger-card-impl");
      expect(impl?.shadowRoot?.querySelector(".name")?.textContent).toBe("Red");
    });
  });

  it("loads the editor stub into the real editor", async () => {
    const editor = document.createElement("tesla-logger-card-editor") as HTMLElement & {
      hass?: HomeAssistant;
      setConfig(config: CardConfig): void;
    };
    mounted.push(editor);
    editor.hass = hass();
    editor.setConfig({ entity: "sensor.tesla_location", show_map: false });
    document.body.append(editor);
    await vi.waitFor(() => {
      const impl = editor.querySelector("tesla-logger-card-editor-impl") as
        | (HTMLElement & { _config?: CardConfig })
        | null;
      expect(impl?._config?.entity).toBe("sensor.tesla_location");
      expect(impl?._config?.show_map).toBe(false);
      expect(impl?.shadowRoot?.querySelector("ha-form")).toBeTruthy();
    });
  });
});
