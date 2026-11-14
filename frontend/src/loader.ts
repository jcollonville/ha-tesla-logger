import type { CardConfig, HomeAssistant } from "./types";

const CARD_TYPE = "tesla-logger-card";
const EDITOR_TYPE = "tesla-logger-card-editor";
const CARD_IMPL = "tesla-logger-card-impl";
const EDITOR_IMPL = "tesla-logger-card-editor-impl";

type CardImpl = HTMLElement & {
  hass?: HomeAssistant;
  setConfig(config: CardConfig): void;
  getCardSize(): number;
};

type EditorImpl = HTMLElement & {
  hass?: HomeAssistant;
  setConfig(config: CardConfig): void;
};

let cardModule: Promise<typeof import("./tesla-logger-card")> | undefined;

function loadCard(): Promise<typeof import("./tesla-logger-card")> {
  cardModule ??= import("./tesla-logger-card");
  return cardModule;
}

class TeslaLoggerCardShell extends HTMLElement {
  private impl?: CardImpl;
  private loading?: Promise<void>;
  private _hass?: HomeAssistant;
  private _config?: CardConfig;

  set hass(value: HomeAssistant | undefined) {
    this._hass = value;
    if (this.impl && value) {
      this.impl.hass = value;
    }
  }

  get hass(): HomeAssistant | undefined {
    return this._hass;
  }

  setConfig(config: CardConfig): void {
    this._config = config;
    this.impl?.setConfig(config);
  }

  getCardSize(): number {
    return this.impl?.getCardSize() ?? 6;
  }

  static getConfigElement(): HTMLElement {
    return document.createElement(EDITOR_TYPE);
  }

  static getStubConfig(hass: HomeAssistant): CardConfig {
    const entity =
      Object.keys(hass.states).find((id) => hass.states[id]?.attributes?.key === "location") || "";
    return {
      entity,
      show: {
        status: true,
        drives: true,
        charges: true,
        chart_consumption: true,
        chart_distance: true,
        chart_energy: true,
        totals: true,
        battery_health: true,
        charging_split: true,
        vampire_drain: true,
        consumption_vs_temp: true,
      },
    };
  }

  connectedCallback(): void {
    this.style.display = "block";
    void this.upgrade();
  }

  private upgrade(): Promise<void> {
    if (this.impl) {
      return Promise.resolve();
    }
    this.loading ??= loadCard().then(() => {
      if (this.impl) {
        return;
      }
      const impl = document.createElement(CARD_IMPL) as CardImpl;
      this.append(impl);
      this.impl = impl;
      if (this._config) {
        impl.setConfig(this._config);
      }
      if (this._hass) {
        impl.hass = this._hass;
      }
    });
    return this.loading;
  }
}

class TeslaLoggerCardEditorShell extends HTMLElement {
  private impl?: EditorImpl;
  private loading?: Promise<void>;
  private _hass?: HomeAssistant;
  private _config?: CardConfig;

  set hass(value: HomeAssistant | undefined) {
    this._hass = value;
    if (this.impl && value) {
      this.impl.hass = value;
    }
  }

  get hass(): HomeAssistant | undefined {
    return this._hass;
  }

  setConfig(config: CardConfig): void {
    this._config = config;
    this.impl?.setConfig(config);
  }

  connectedCallback(): void {
    this.style.display = "block";
    void this.upgrade();
  }

  private upgrade(): Promise<void> {
    if (this.impl) {
      return Promise.resolve();
    }
    this.loading ??= loadCard().then(() => {
      if (this.impl) {
        return;
      }
      const impl = document.createElement(EDITOR_IMPL) as EditorImpl;
      this.append(impl);
      this.impl = impl;
      if (this._hass) {
        impl.hass = this._hass;
      }
      if (this._config) {
        impl.setConfig(this._config);
      }
    });
    return this.loading;
  }
}

if (!customElements.get(CARD_TYPE)) {
  customElements.define(CARD_TYPE, TeslaLoggerCardShell);
}
if (!customElements.get(EDITOR_TYPE)) {
  customElements.define(EDITOR_TYPE, TeslaLoggerCardEditorShell);
}

window.customCards = window.customCards || [];
if (!window.customCards.some((card) => card.type === CARD_TYPE)) {
  window.customCards.push({
    type: CARD_TYPE,
    name: "Tesla Logger",
    description: "Vehicle status, drives, charges, and stats from tesla-logger",
    preview: false,
  });
}

declare global {
  interface Window {
    customCards?: Array<{
      type: string;
      name: string;
      description: string;
      preview?: boolean;
    }>;
  }
}
