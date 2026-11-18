import { LitElement, css, html } from "lit";
import {
  CHARGE_DETAIL_KEYS,
  DRIVE_DETAIL_KEYS,
  chargeDetailFlags,
  driveDetailFlags,
  pageSize,
  type ChargeDetailKey,
  type DriveDetailKey,
} from "./detail-config";
import { copy, language, type Copy } from "./i18n";
import { CHART_SHOW_KEYS, SECTION_KEYS, showFlags, type ShowKey } from "./show-config";
import type { CardConfig, HomeAssistant } from "./types";

const VIEWS = ["status", "drives", "charges", "stats", "charts"] as const;

/**
 * Visual editor for the Lovelace card. It does not depend on `ha-form`, so the
 * same controls render in Home Assistant and in the screenshot harness.
 * `ha-entity-picker` is used when Home Assistant has registered it.
 */
export class TeslaLoggerCardEditor extends LitElement {
  static properties = {
    hass: { attribute: false },
    _config: { state: true },
  };

  static styles = css`
    :host {
      display: block;
      color: var(--primary-text-color, #171a20);
      font: inherit;
    }
    .editor {
      display: flex;
      flex-direction: column;
      gap: 16px;
    }
    fieldset {
      margin: 0;
      padding: 12px 12px 4px;
      border: 1px solid var(--divider-color, rgba(23, 26, 32, 0.12));
      border-radius: 14px;
      background: var(--card-background-color, transparent);
    }
    legend {
      padding: 0 6px;
      color: var(--secondary-text-color, #5c5e62);
      font-size: 0.75rem;
      font-weight: 700;
      letter-spacing: 0.06em;
      text-transform: uppercase;
    }
    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
      gap: 4px 12px;
      margin: 0 0 8px;
    }
    label.row {
      display: flex;
      align-items: center;
      gap: 8px;
      min-height: 36px;
      color: var(--primary-text-color, #171a20);
      font-size: 0.92rem;
    }
    input[type="checkbox"] {
      width: 18px;
      height: 18px;
      margin: 0;
      accent-color: var(--primary-color, #3e6ae1);
    }
    label.field {
      display: flex;
      flex-direction: column;
      gap: 6px;
      color: var(--secondary-text-color, #5c5e62);
      font-size: 0.82rem;
      font-weight: 600;
    }
    input[type="number"],
    input[type="text"],
    select {
      min-height: 40px;
      padding: 8px 12px;
      border: 1px solid var(--divider-color, rgba(23, 26, 32, 0.16));
      border-radius: 10px;
      background: var(--secondary-background-color, rgba(0, 0, 0, 0.04));
      color: var(--primary-text-color, #171a20);
      font: inherit;
      font-weight: 500;
    }
    .pair {
      display: grid;
      grid-template-columns: minmax(0, 1fr) 8rem;
      gap: 12px;
    }
    ha-entity-picker {
      display: block;
    }
  `;

  hass?: HomeAssistant;
  private _config?: CardConfig;

  setConfig(config: CardConfig): void {
    const show = showFlags(config);
    this._config = {
      ...config,
      show_map: config.show_map !== false,
      page_size: pageSize(config),
      show,
      drive_detail: driveDetailFlags(config),
      charge_detail: chargeDetailFlags(config),
    };
  }

  override render() {
    if (!this.hass || !this._config) {
      return html``;
    }
    const text = copy(language(this.hass.locale?.language || this.hass.language));
    const show = showFlags(this._config);
    const drive = driveDetailFlags(this._config);
    const charge = chargeDetailFlags(this._config);
    return html`
      <div class="editor">
        ${this.entityField(text)}
        <div class="pair">
          <label class="field">
            ${text.defaultView}
            <select
              data-field="default_view"
              .value=${this._config.default_view || "status"}
              @change=${(event: Event) =>
                this.commit({
                  default_view: (event.target as HTMLSelectElement).value as (typeof VIEWS)[number],
                })}
            >
              ${VIEWS.map(
                (view) => html`<option value=${view} ?selected=${(this._config?.default_view || "status") === view}>
                  ${text[view]}
                </option>`,
              )}
            </select>
          </label>
          <label class="field">
            ${text.pageSize}
            <input
              data-field="page_size"
              type="number"
              min="1"
              max="50"
              step="1"
              .value=${String(pageSize(this._config))}
              @change=${(event: Event) =>
                this.commit({ page_size: Number((event.target as HTMLInputElement).value) })}
            />
          </label>
        </div>
        <fieldset>
          <legend>${text.sections}</legend>
          <div class="grid">
            ${this.check(text.showMap, this._config.show_map !== false, (checked) =>
              this.commit({ show_map: checked }),
            )}
            ${SECTION_KEYS.map((key) =>
              this.check(text.showFields[key], show[key], (checked) => this.patchShow(key, checked)),
            )}
          </div>
        </fieldset>
        <fieldset>
          <legend>${text.charts}</legend>
          <div class="grid">
            ${CHART_SHOW_KEYS.map((key) =>
              this.check(text.showFields[key], show[key], (checked) => this.patchShow(key, checked)),
            )}
          </div>
        </fieldset>
        <fieldset>
          <legend>${text.driveDetail}</legend>
          <div class="grid">
            ${DRIVE_DETAIL_KEYS.map((key) =>
              this.check(text.detailFields[key], drive[key], (checked) => this.patchDrive(key, checked)),
            )}
          </div>
        </fieldset>
        <fieldset>
          <legend>${text.chargeDetail}</legend>
          <div class="grid">
            ${CHARGE_DETAIL_KEYS.map((key) =>
              this.check(text.detailFields[key], charge[key], (checked) => this.patchCharge(key, checked)),
            )}
          </div>
        </fieldset>
      </div>
    `;
  }

  private entityField(text: Copy) {
    const entity = this._config?.entity || "";
    if (customElements.get("ha-entity-picker")) {
      return html`
        <ha-entity-picker
          .hass=${this.hass}
          .value=${entity}
          .label=${text.entity}
          allow-custom-entity
          @value-changed=${(event: CustomEvent<{ value?: string }>) =>
            this.commit({ entity: event.detail.value || "" })}
        ></ha-entity-picker>
      `;
    }
    return html`
      <label class="field">
        ${text.entity}
        <input
          data-field="entity"
          type="text"
          .value=${entity}
          @change=${(event: Event) => this.commit({ entity: (event.target as HTMLInputElement).value })}
        />
      </label>
    `;
  }

  private check(label: string, checked: boolean, onChange: (checked: boolean) => void) {
    return html`
      <label class="row">
        <input
          type="checkbox"
          .checked=${checked}
          @change=${(event: Event) => onChange((event.target as HTMLInputElement).checked)}
        />
        <span>${label}</span>
      </label>
    `;
  }

  private patchShow(key: ShowKey, checked: boolean): void {
    const show = { ...showFlags(this._config), [key]: checked };
    this.commit({ show });
  }

  private patchDrive(key: DriveDetailKey, checked: boolean): void {
    this.commit({ drive_detail: { ...driveDetailFlags(this._config), [key]: checked } });
  }

  private patchCharge(key: ChargeDetailKey, checked: boolean): void {
    this.commit({ charge_detail: { ...chargeDetailFlags(this._config), [key]: checked } });
  }

  private commit(patch: Partial<CardConfig>): void {
    if (!this._config) {
      return;
    }
    const next: CardConfig = {
      ...this._config,
      ...patch,
      show: showFlags({ entity: this._config.entity, show: { ...showFlags(this._config), ...patch.show } }),
      drive_detail: driveDetailFlags({
        entity: this._config.entity,
        drive_detail: { ...driveDetailFlags(this._config), ...patch.drive_detail },
      }),
      charge_detail: chargeDetailFlags({
        entity: this._config.entity,
        charge_detail: { ...chargeDetailFlags(this._config), ...patch.charge_detail },
      }),
      page_size: pageSize({ entity: this._config.entity, page_size: patch.page_size ?? this._config.page_size }),
      show_map: patch.show_map ?? this._config.show_map !== false,
    };
    delete (next as { show_charts?: unknown }).show_charts;
    this._config = next;
    this.dispatchEvent(
      new CustomEvent("config-changed", {
        detail: { config: this._config },
        bubbles: true,
        composed: true,
      }),
    );
  }
}
