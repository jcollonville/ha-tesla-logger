import { LitElement, css, html, nothing } from "lit";
import { ref } from "lit/directives/ref.js";
import { TeslaLoggerCardEditor } from "./card-editor";
import { carDrawing } from "./car-art";
import {
  brushSpan,
  bucketLabel,
  currentBucketIndex,
  previousDistanceKm,
  SERIES_COUNT,
  seriesChart,
  slotBand,
  slotIndex,
  type ChartPoint,
} from "./charts";
import { chargeDetailFlags, driveDetailFlags, pageSize } from "./detail-config";
import { activityLabel, copy, language, type Copy, type Lang } from "./i18n";
import {
  asRecord,
  bucketInPeriod,
  chargeHistory,
  datePrefsFromHass,
  driveHistory,
  formatDuration,
  formatListTimestamp,
  formatNumber,
  periodRange,
  safeError,
  socRange,
  chargeSupply,
  whPerKm,
  type HistoryRowModel,
} from "./format";
import { readPosition, tilesForView } from "./mini-map";
import {
  chartsVisible,
  fallbackView,
  seriesNeeded,
  showFlags,
  visibleViews,
} from "./show-config";
import { stubConfig } from "./stub";
import type {
  CardConfig,
  Charge,
  Drive,
  DriveDetail,
  SeriesPoint,
  HassEntity,
  HomeAssistant,
  Page,
  Period,
  Stats,
  StatsBucket,
  StatsSeries,
  TempBin,
  ViewName,
} from "./types";

function isPage<T>(value: unknown): value is Page<T> {
  const record = asRecord(value);
  return Boolean(record && Array.isArray(record.data));
}

function isDetail(value: unknown): value is DriveDetail {
  const record = asRecord(value);
  return Boolean(record && Array.isArray(record.route) && Array.isArray(record.series));
}

function isStats(value: unknown): value is Stats {
  const record = asRecord(value);
  return Boolean(record && typeof record.distance_km === "number");
}

function isSeries(value: unknown): value is StatsSeries {
  const record = asRecord(value);
  return Boolean(record && Array.isArray(record.buckets));
}

function tempBins(value: unknown): TempBin[] {
  const record = asRecord(value);
  const rows = record && Array.isArray(record.data) ? record.data : [];
  return rows.filter((row): row is TempBin => {
    const item = asRecord(row);
    return Boolean(item && typeof item.temp_c_bucket === "number");
  });
}

function finiteOrNull(value: number | null | undefined): number | null {
  return typeof value === "number" && Number.isFinite(value) ? value : null;
}

export class TeslaLoggerCard extends LitElement {
  static properties = {
    hass: { attribute: false },
    _config: { state: true },
    _view: { state: true },
    _drives: { state: true },
    _charges: { state: true },
    _detail: { state: true },
    _stats: { state: true },
    _series: { state: true },
    _tempBins: { state: true },
    _bucketIndex: { state: true },
    _period: { state: true },
    _page: { state: true },
    _loading: { state: true },
    _error: { state: true },
    _plotWidths: { state: true },
    _headerBox: { state: true },
    _headerVisible: { state: true },
    _mainChart: { state: true },
    _previousKm: { state: true },
    _narrow: { state: true },
    _tabsOverflow: { state: true },
    _hover: { state: true },
    _zoom: { state: true },
    _brush: { state: true },
  };

  hass?: HomeAssistant;
  private _config?: CardConfig;
  private _view: ViewName = "status";
  private _drives?: Page<Drive>;
  private _charges?: Page<Charge>;
  private _detail?: DriveDetail;
  private _stats?: Stats;
  private _series?: StatsSeries;
  private _tempBins?: TempBin[];
  private _seriesPeriod?: Period;
  private _bucketIndex: number | null = null;
  private _period: Period = "month";
  private _page = 1;
  private _loading = false;
  private _error = "";
  private _driveId?: number;
  private _plotWidths: Record<string, number> = {};
  private _headerBox = { width: 0, height: 0 };
  private _headerVisible = false;
  private _mainChart: "consumption" | "distance" | "energy" = "consumption";
  private _previousKm: number | null = null;
  private _narrow = false;
  private _tabsOverflow = false;
  private _hover: number | null = null;
  private _zoom: { start: number; end: number } | null = null;
  private _brush: { start: number; end: number } | null = null;
  private _dragAnchor: number | null = null;
  private _eatClick = false;
  private _chargeId?: number;
  private _resize?: ResizeObserver;
  private _onScreen?: IntersectionObserver;
  private routeMap?: { element: HTMLDivElement; destroy(): void };
  private mapToken = 0;
  private mapModule?: Promise<typeof import("./leaflet-map")>;

  static styles = css`
      :host {
        display: block;
        --tl-text: var(--primary-text-color, #171a20);
        --tl-muted: var(--secondary-text-color, #5c5e62);
        --tl-surface: var(--card-background-color, var(--ha-card-background, #fff));
        --tl-surface-2: var(--secondary-background-color, #f4f4f4);
        --tl-line: var(--divider-color, rgba(23, 26, 32, 0.12));
        --tl-accent: var(--primary-color, #3e6ae1);
        --tl-green: var(--success-color, #1d9b52);
        --tl-radius: 14px;
        color: var(--tl-text);
        font-family: var(
          --ha-card-font-family,
          var(--ha-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif)
        );
      }
      ha-card.dark {
        --tl-green: var(--success-color, #4fd17c);
      }
      ha-card {
        padding-bottom: 8px;
      }
      .header-wrap {
        position: relative;
        overflow: hidden;
      }
      .map-band {
        position: relative;
        min-height: 84px;
        overflow: hidden;
      }
      .header {
        position: relative;
        z-index: 1;
        display: flex;
        flex-direction: column;
        gap: 4px;
        padding: 16px 16px 12px;
      }
      .map-bg {
        position: absolute;
        inset: 0;
        z-index: 0;
        overflow: hidden;
        pointer-events: none;
        user-select: none;
      }
      .map-bg img {
        position: absolute;
        width: 256px;
        height: 256px;
        filter: grayscale(1);
        opacity: 0.22;
        pointer-events: none;
      }
      .map-bg.dark img {
        filter: invert(1) hue-rotate(180deg) grayscale(1) brightness(0.85);
        opacity: 0.2;
      }
      .map-dot {
        position: absolute;
        z-index: 2;
        width: 8px;
        height: 8px;
        margin-left: -4px;
        margin-top: -4px;
        border-radius: 50%;
        background: #c62828;
        box-shadow: 0 0 0 1.5px #fff;
      }
      .map-credit {
        position: absolute;
        right: 8px;
        bottom: 4px;
        color: var(--secondary-text-color, #666);
        font-size: 9px;
        line-height: 1;
      }
      .ring {
        width: 72px;
        height: 72px;
      }
      .ring circle {
        fill: none;
        stroke-width: 3.5;
      }
      .ring .track {
        stroke: var(--divider-color, rgba(127, 127, 127, 0.35));
      }
      .ring .value {
        stroke: var(--primary-color, #03a9f4);
        stroke-linecap: round;
        transform: rotate(-90deg);
        transform-origin: 18px 18px;
      }
      .ring text {
        fill: var(--primary-text-color, #212121);
        font-size: 6.5px;
        text-anchor: middle;
        font-weight: 600;
      }
      .name {
        margin: 0;
        font-size: 1.35rem;
        font-weight: 500;
        letter-spacing: -0.02em;
        color: var(--tl-text);
      }
      .sub {
        margin: 2px 0 0;
        color: var(--tl-muted);
        font-size: 0.92rem;
      }
      .hero-head {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        gap: 8px;
      }
      .car-stage {
        margin: 8px -8px 0;
      }
      svg.car {
        display: block;
        width: 100%;
        height: auto;
        aspect-ratio: 400 / 160;
      }
      .car-floor {
        opacity: 0.85;
      }
      ha-card.dark .car-floor {
        opacity: 1;
      }
      .map-only-spacer {
        height: 72px;
      }
      .pill {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        margin-top: 6px;
        padding: 2px 10px;
        border-radius: 999px;
        background: var(--tl-surface-2);
        color: var(--tl-text);
        font-size: 0.78rem;
        font-weight: 500;
        letter-spacing: 0.02em;
      }
      .pill.drive {
        background: color-mix(in srgb, var(--tl-accent) 14%, transparent);
        color: var(--tl-accent);
      }
      .pill.charge {
        background: color-mix(in srgb, var(--tl-green) 16%, transparent);
        color: var(--tl-green);
      }
      .pill .status-dot {
        width: 7px;
        height: 7px;
        border-radius: 50%;
        background: currentColor;
      }
      .tabbar {
        position: relative;
      }
      .tabbar.overflow::after {
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        width: 18px;
        pointer-events: none;
        background: linear-gradient(
          90deg,
          transparent,
          var(--card-background-color, var(--ha-card-background, #fff))
        );
      }
      .tabs, .periods {
        display: flex;
        flex-wrap: nowrap;
        gap: 4px;
        width: max-content;
        max-width: calc(100% - 24px);
        margin: 0 12px 12px;
        padding: 4px;
        overflow-x: auto;
        scrollbar-width: none;
        border-radius: 999px;
        background: color-mix(in srgb, var(--tl-text) 8%, var(--tl-surface));
      }
      .tabs button, .periods button, .chart-switch button, button.zoom-reset {
        border: 0;
        border-bottom: 0;
        border-radius: 999px;
        background: transparent;
        color: var(--tl-muted);
        font: inherit;
        font-size: 0.875rem;
        font-weight: 500;
        min-height: 36px;
        padding: 0 14px;
        white-space: nowrap;
        cursor: pointer;
      }
      .tabs button[aria-selected="true"], .periods button[aria-pressed="true"], .chart-switch button[aria-pressed="true"] {
        background: var(--tl-surface);
        color: var(--tl-text);
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12);
      }
      .chart-switch {
        display: flex;
        gap: 4px;
        width: max-content;
        max-width: calc(100% - 24px);
        margin: 0 12px 8px;
        padding: 3px;
        border-radius: 999px;
        background: color-mix(in srgb, var(--tl-text) 8%, var(--tl-surface));
      }
      button.zoom-reset {
        margin: 0 12px 8px;
        background: var(--tl-surface-2);
        color: var(--tl-text);
      }
      .grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 8px;
        padding: 0 12px 8px;
      }
      .metric {
        display: flex;
        align-items: center;
        gap: 10px;
        background: var(--secondary-background-color, rgba(0, 0, 0, 0.04));
        border-radius: 12px;
        padding: 10px 12px;
      }
      .metric ha-icon {
        flex: none;
        --mdc-icon-size: 22px;
        color: var(--primary-color, #03a9f4);
      }
      .metric span, .muted {
        display: block;
        color: var(--secondary-text-color);
        font-size: 0.78rem;
      }
      .metric strong {
        color: var(--primary-text-color);
        font-size: 1rem;
        font-variant-numeric: tabular-nums;
      }
      .status-board {
        display: flex;
        flex-direction: column;
        gap: 12px;
        padding: 0 12px 8px;
      }
      .status-hero,
      .tiles {
        display: grid;
        gap: 8px;
      }
      .status-hero {
        grid-template-columns: 1fr 1fr;
      }
      .tiles {
        grid-template-columns: repeat(3, minmax(0, 1fr));
      }
      .group-label {
        margin: 0 0 6px;
        color: var(--secondary-text-color);
        font-size: 0.72rem;
        font-weight: 700;
        letter-spacing: 0.04em;
        text-transform: uppercase;
      }
      .stats-hero {
        margin: 0 12px 8px;
        padding: 12px 14px;
        border-radius: 12px;
        background: var(--secondary-background-color, rgba(0, 0, 0, 0.04));
      }
      .stats-hero span {
        display: block;
        color: var(--secondary-text-color);
        font-size: 0.78rem;
      }
      .stats-hero strong {
        display: block;
        color: var(--primary-text-color);
        font-size: 1.55rem;
        font-variant-numeric: tabular-nums;
        font-weight: 700;
        line-height: 1.2;
      }
      .day-group {
        margin: 0 12px 12px;
      }
      .day-heading {
        margin: 0 4px 8px;
        color: var(--tl-text);
        font-size: 1rem;
        font-weight: 600;
        letter-spacing: -0.01em;
        text-transform: none;
      }
      .route-name {
        margin: 0 16px 8px;
        min-width: 0;
        color: var(--primary-text-color);
        font-weight: 600;
      }
      details.extras {
        margin: 0 12px 8px;
      }
      details.extras summary {
        display: flex;
        align-items: center;
        min-height: 40px;
        color: var(--primary-text-color);
        font-weight: 600;
        cursor: pointer;
      }
      details.extras summary:focus-visible {
        outline: 2px solid var(--primary-color, #03a9f4);
        outline-offset: 2px;
      }
      details.extras .series-extra {
        padding: 0;
      }
      .list {
        display: flex;
        flex-direction: column;
        gap: 0;
        box-sizing: border-box;
        width: 100%;
        margin: 0;
        padding: 0;
        overflow: hidden;
        list-style: none;
        border: 1px solid var(--tl-line);
        border-radius: var(--tl-radius);
        background: var(--tl-surface);
      }
      .entry {
        display: flex;
        flex-direction: column;
        gap: 4px;
        box-sizing: border-box;
        width: 100%;
        min-width: 0;
        max-width: 100%;
        min-height: 44px;
        margin: 0;
        padding: 10px 2px;
        border: 0;
        border-bottom: 1px solid var(--divider-color, rgba(127, 127, 127, 0.35));
        border-radius: 0;
        background: transparent;
        color: var(--primary-text-color, #212121);
        text-align: left;
      }
      .entry-line {
        display: grid;
        grid-template-columns: 8.5rem minmax(0, 1fr) auto;
        column-gap: 12px;
        align-items: start;
        min-width: 0;
        max-width: 100%;
      }
      .entry-secondary {
        display: block;
        margin-top: 4px;
        padding-left: calc(8.5rem + 12px);
      }
      .entry-when {
        min-width: 0;
        overflow: hidden;
        color: var(--primary-text-color, #212121);
        font-size: 0.95rem;
        font-weight: 600;
        font-variant-numeric: tabular-nums;
        line-height: 1.25;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .entry-figure {
        color: var(--primary-text-color, #212121);
        font-size: 1.05rem;
        font-weight: 700;
        font-variant-numeric: tabular-nums;
        line-height: 1.25;
        text-align: right;
        white-space: nowrap;
      }
      .entry-place {
        display: block;
        min-width: 0;
        overflow: hidden;
        color: var(--secondary-text-color, #727272);
        font-size: 0.8rem;
        font-weight: 500;
        line-height: 1.3;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .entry-place.route {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: stretch;
        gap: 4px;
      }
      .entry-place.route::before {
        content: "";
        position: absolute;
        left: 3.25px;
        top: 0.55em;
        bottom: 0.55em;
        width: 1.5px;
        background: var(--tl-line);
      }
      .place-point {
        position: relative;
        padding-left: 16px;
      }
      .place-point::before {
        content: "";
        position: absolute;
        left: 0;
        top: 0.45em;
        width: 8px;
        height: 8px;
        box-sizing: border-box;
        border-radius: 50%;
        border: 2px solid var(--tl-muted);
        background: var(--tl-surface);
      }
      .place-point:last-child::before {
        border: 0;
        background: var(--tl-accent);
      }
      .place-join {
        position: absolute;
        width: 1px;
        height: 1px;
        overflow: hidden;
        clip: rect(0 0 0 0);
      }
      .place-point {
        flex: 0 1 auto;
        min-width: 0;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .place-join {
        flex: none;
      }
      .entry-metrics {
        display: grid;
        align-items: center;
        justify-content: end;
        min-width: 0;
        column-gap: 6px;
        color: var(--primary-text-color, #212121);
        font-size: 0.72rem;
        font-weight: 600;
        font-variant-numeric: tabular-nums;
        line-height: 1.2;
      }
      .list[data-slots="3"] .entry-metrics {
        grid-template-columns: 12ch 12ch 13ch;
      }
      .list[data-slots="4"] .entry-metrics {
        grid-template-columns: 12ch 13ch 8ch 4.5ch;
      }
      .list[data-slots="4"] .entry-figure {
        color: var(--tl-green);
      }
      .chip {
        min-width: 0;
        overflow: hidden;
        text-align: right;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .chip:not(:empty) {
        padding: 2px 6px;
        border-radius: 999px;
        background: color-mix(in srgb, var(--primary-text-color, #212121) 8%, transparent);
      }
      button.entry {
        font: inherit;
        width: 100%;
        min-height: 44px;
        border-bottom: 1px solid var(--divider-color, rgba(127, 127, 127, 0.35));
        cursor: pointer;
      }
      button.entry:hover {
        background: color-mix(
          in srgb,
          var(--primary-text-color, #212121) 8%,
          var(--secondary-background-color, transparent)
        );
      }
      button.entry:focus-visible,
      ha-icon-button:focus-visible {
        outline: 2px solid var(--primary-color, #03a9f4);
        outline-offset: 2px;
      }
      .map {
        height: 220px;
        margin: 0 12px 8px;
        border-radius: 12px;
        overflow: hidden;
        background: var(--secondary-background-color);
      }
      .chart-block {
        padding: 0 12px 8px;
      }
      .chart {
        width: 100%;
        height: 90px;
        display: block;
      }
      .chart polyline {
        fill: none;
        stroke: var(--primary-color, #03a9f4);
        stroke-width: 2;
      }
      .series-list {
        display: flex;
        flex-direction: column;
        gap: 8px;
        padding: 0 12px 8px;
      }
      .series-card {
        margin: 0;
        padding: 8px 8px 2px;
        border-radius: 12px;
        background: var(--secondary-background-color, rgba(127, 127, 127, 0.12));
      }
      .series-card figcaption {
        display: flex;
        justify-content: space-between;
        align-items: baseline;
        gap: 8px;
        padding: 0 4px 2px;
      }
      .series-title {
        color: var(--primary-text-color, #212121);
        font-size: 0.92rem;
        font-weight: 700;
      }
      .series-value {
        color: var(--secondary-text-color);
        font-size: 0.8rem;
      }
      .plot {
        width: 100%;
        min-width: 0;
      }
      .series-chart {
        width: 100%;
        display: block;
      }
      .series-chart .grid {
        stroke: var(--tl-line);
        stroke-width: 1;
      }
      .series-chart .crosshair {
        stroke: var(--tl-muted);
        stroke-width: 1;
        stroke-dasharray: 3 3;
        pointer-events: none;
      }
      .plot {
        position: relative;
        touch-action: pan-y;
        user-select: none;
      }
      .brush {
        position: absolute;
        top: 12px;
        bottom: 28px;
        background: color-mix(in srgb, var(--tl-accent) 16%, transparent);
        pointer-events: none;
      }
      .chart-tooltip {
        position: absolute;
        z-index: 3;
        min-width: 8rem;
        padding: 8px 10px;
        border: 1px solid var(--tl-line);
        border-radius: 10px;
        background: var(--tl-surface);
        box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
        color: var(--tl-text);
        font-size: 0.8125rem;
        line-height: 1.35;
        pointer-events: none;
        white-space: nowrap;
      }
      .chart-tooltip .tip-head {
        margin-bottom: 4px;
        color: var(--tl-muted);
      }
      .chart-stage {
        position: relative;
      }
      .series-chart g[role="button"] {
        cursor: pointer;
      }
      .series-chart .bar {
        fill: var(--primary-color, #03a9f4);
        opacity: 0.62;
      }
      .series-chart g.selected .bar,
      .series-chart g[role="button"]:focus-visible .bar {
        opacity: 1;
        stroke: var(--primary-text-color, #212121);
        stroke-width: 1.5;
      }
      .series-chart .hit {
        fill: transparent;
      }
      .series-chart .line {
        fill: none;
        stroke: var(--primary-color, #03a9f4);
        stroke-width: 2;
        stroke-linejoin: round;
        stroke-linecap: round;
        vector-effect: non-scaling-stroke;
      }
      .series-chart .grid,
      .series-chart .dot,
      .series-chart .bar {
        vector-effect: non-scaling-stroke;
      }
      .series-chart .dot {
        fill: var(--primary-color, #03a9f4);
        stroke: var(--card-background-color, #fff);
        stroke-width: 1;
        opacity: 0.75;
      }
      .series-chart g.selected .dot,
      .series-chart g[role="button"]:focus-visible .dot {
        opacity: 1;
        stroke: var(--primary-text-color, #212121);
        stroke-width: 2;
      }
      .totals {
        margin: 0 12px 8px;
        padding: 8px 10px;
        border-radius: 12px;
        background: var(--secondary-background-color, rgba(127, 127, 127, 0.12));
      }
      .totals-label {
        margin: 0 0 6px;
        color: var(--primary-text-color, #212121);
        font-size: 0.92rem;
        font-weight: 700;
      }
      .totals-row {
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 8px;
      }
      .totals-row span {
        display: block;
        color: var(--secondary-text-color);
        font-size: 0.75rem;
      }
      .totals-row strong {
        display: block;
        color: var(--primary-text-color, #212121);
        font-size: 0.95rem;
      }
      .totals-sub {
        margin-top: 2px;
      }
      .series-extra {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 8px;
        padding: 0 12px 8px;
      }
      .series-card.compact {
        padding: 6px 6px 0;
      }
      .series-card.compact .series-title {
        font-size: 0.82rem;
      }
      .series-note {
        margin: 0;
        padding: 0 4px 2px;
        color: var(--secondary-text-color);
        font-size: 0.75rem;
      }
      .legend {
        display: flex;
        gap: 8px;
        align-items: center;
        margin: 0;
        padding: 0 4px 2px;
        color: var(--secondary-text-color);
        font-size: 0.72rem;
      }
      .swatch {
        display: inline-block;
        width: 8px;
        height: 8px;
        margin-right: 3px;
        border-radius: 2px;
      }
      .swatch.ac {
        background: var(--primary-color, #03a9f4);
      }
      .swatch.dc {
        background: var(--accent-color, #ff9800);
      }
      .series-chart .bar.ac {
        fill: var(--primary-color, #03a9f4);
      }
      .series-chart .bar.dc {
        fill: var(--accent-color, #ff9800);
      }
      .series-chart.compact text {
        font-size: 12px;
      }
      .series-chart text {
        fill: var(--secondary-text-color, currentColor);
        font-size: 11px;
        font-family: inherit;
      }
      .message, .toolbar {
        padding: 4px 16px 8px;
        color: var(--secondary-text-color);
      }
      .toolbar {
        display: flex;
        align-items: center;
        gap: 4px;
        box-sizing: border-box;
        width: 100%;
      }
      .toolbar-actions,
      .back {
        display: flex;
        align-items: center;
        min-width: 0;
      }
      .page-indicator {
        margin-left: auto;
        color: var(--secondary-text-color);
        font-size: 0.85rem;
        font-variant-numeric: tabular-nums;
        white-space: nowrap;
      }
      ha-icon-button {
        width: 40px;
        height: 40px;
        --mdc-icon-button-size: 40px;
        --mdc-icon-size: 22px;
        color: var(--primary-text-color);
      }
      ha-icon-button[disabled] {
        color: var(--disabled-text-color, var(--secondary-text-color));
        opacity: 0.4;
      }
      button.back-label {
        min-height: 0;
        margin: 0;
        padding: 0 4px 0 0;
        border-bottom: 0;
        color: var(--primary-text-color);
        font-size: 0.92rem;
        font-weight: 600;
      }
      @media (max-width: 420px) {
        .tabs {
          gap: 0;
          padding: 4px 4px 8px;
        }
        .tabs button,
        .periods button {
          padding: 8px 6px;
          font-size: 0.82rem;
          white-space: nowrap;
        }
        .tiles {
          grid-template-columns: 1fr 1fr;
        }
        .list {
          gap: 0;
          padding: 0;
        }
        .entry-line {
          grid-template-columns: 6.6rem minmax(0, 1fr) auto;
          column-gap: 8px;
        }
        .entry-secondary {
          padding-left: calc(6.6rem + 8px);
        }
        .entry {
          padding: 10px 0;
        }
        .entry-when {
          font-size: 0.84rem;
        }
        .entry-figure {
          font-size: 0.98rem;
        }
        .entry-secondary {
          display: flex;
          flex-direction: column;
          align-items: stretch;
          row-gap: 3px;
        }
        .entry-metrics {
          width: 100%;
          font-size: 0.7rem;
        }
        .chip:not(:empty) {
          padding: 1px 2px;
        }
        .list[data-slots="3"] .entry-metrics {
          column-gap: 4px;
          grid-template-columns: 12ch 13ch 13ch;
        }
        .list[data-slots="4"] .entry-metrics {
          column-gap: 4px;
          grid-template-columns: 12ch 13ch 8ch 4.5ch;
        }
        .totals-row {
          gap: 4px;
        }
        .totals-row strong {
          font-size: 0.85rem;
        }
        .series-extra {
          grid-template-columns: 1fr;
        }
      }
    `;

  setConfig(config: CardConfig): void {
    if (!config || typeof config.entity !== "string" || !config.entity) {
      throw new Error("Please select a Tesla Logger entity");
    }
    const changed = this._config?.entity !== config.entity;
    const pageChanged = this._config != null && pageSize(this._config) !== pageSize(config);
    this._config = config;
    if (changed) {
      this._view = config.default_view || "status";
      this.clearHistory();
    } else if (pageChanged) {
      this._page = 1;
      this._drives = undefined;
      this._charges = undefined;
    }
    this.ensureVisibleView();
  }

  private get flags() {
    return showFlags(this._config);
  }

  private ensureVisibleView(): void {
    const next = fallbackView(this._view, this.flags);
    if (next !== this._view) {
      this._view = next;
    }
  }

  static getConfigElement(): HTMLElement {
    return document.createElement("tesla-logger-card-editor-impl");
  }

  static getStubConfig(hass: HomeAssistant): CardConfig {
    return stubConfig(hass);
  }

  getCardSize(): number {
    return 6;
  }

  override connectedCallback(): void {
    super.connectedCallback();
    this.watchVisibility();
    if (typeof ResizeObserver !== "function") {
      return;
    }
    this._resize = new ResizeObserver((entries) => {
      const measured = entries.map((entry) => {
        const target = entry.target as HTMLElement;
        return {
          plot: target.dataset.plot,
          mapHost: target.dataset.mapHost != null,
          tabs: target.dataset.tabs != null,
          host: target === this,
          width: Math.round(entry.contentRect.width),
          height: Math.round(entry.contentRect.height),
          overflow: target.dataset.tabs != null && target.scrollWidth > target.clientWidth + 1,
        };
      });
      queueMicrotask(() => {
        if (!this._resize) {
          return;
        }
        let plots = this._plotWidths;
        let plotsChanged = false;
        let header = this._headerBox;
        let headerChanged = false;
        let narrow = this._narrow;
        let narrowChanged = false;
        let tabsOverflow = this._tabsOverflow;
        let tabsChanged = false;
        for (const entry of measured) {
          if (entry.host && entry.width > 0 && narrow !== (entry.width <= 420)) {
            narrow = entry.width <= 420;
            narrowChanged = true;
          }
          if (entry.tabs && tabsOverflow !== entry.overflow) {
            tabsOverflow = entry.overflow;
            tabsChanged = true;
          }
          if (entry.plot) {
            if (entry.width > 0 && plots[entry.plot] !== entry.width) {
              if (!plotsChanged) {
                plots = { ...plots };
                plotsChanged = true;
              }
              plots[entry.plot] = entry.width;
            }
            continue;
          }
          if (entry.mapHost && (header.width !== entry.width || header.height !== entry.height)) {
            header = { width: entry.width, height: entry.height };
            headerChanged = true;
          }
        }
        if (plotsChanged) {
          this._plotWidths = plots;
        }
        if (headerChanged) {
          this._headerBox = header;
        }
        if (narrowChanged) {
          this._narrow = narrow;
        }
        if (tabsChanged) {
          this._tabsOverflow = tabsOverflow;
        }
      });
    });
    this._resize.observe(this);
  }

  override disconnectedCallback(): void {
    this._onScreen?.disconnect();
    this._onScreen = undefined;
    this._resize?.disconnect();
    this._resize = undefined;
    this.destroyMap();
    super.disconnectedCallback();
  }

  private watchVisibility(): void {
    if (this._headerVisible || this._onScreen) {
      return;
    }
    if (typeof IntersectionObserver !== "function") {
      this._headerVisible = true;
      return;
    }
    this._onScreen = new IntersectionObserver((entries) => {
      if (!entries.some((entry) => entry.isIntersecting)) {
        return;
      }
      this._onScreen?.disconnect();
      this._onScreen = undefined;
      this._headerVisible = true;
    });
    this._onScreen.observe(this);
  }

  private readonly watchSize = (element: Element | undefined): void => {
    if (element) {
      this._resize?.observe(element);
    }
  };

  override updated(changed: Map<string, unknown>): void {
    if (changed.has("_view") || changed.has("_config")) {
      void this.ensureView();
    }
    if (
      this._view === "drive" &&
      (changed.has("_detail") || changed.has("_view") || changed.has("_headerVisible"))
    ) {
      this.syncMap();
    }
    if (changed.has("_view") && this._view !== "drive") {
      this.destroyMap();
    }
    if (this.shouldLoadMapChunk()) {
      void this.loadMapModule().catch(() => undefined);
    }
  }

  override render() {
    if (!this._config?.entity) {
      return html`<ha-card><p class="message">${this.text.pick}</p></ha-card>`;
    }
    const dark = Boolean(this.hass?.themes?.darkMode);
    return html`
      <ha-card class=${dark ? "dark" : ""}>
        ${this.header()}
        <div class=${this._tabsOverflow ? "tabbar overflow" : "tabbar"}>
          <div class="tabs" role="tablist" data-tabs ${ref(this.watchSize)}>
            ${visibleViews(this.flags).map((view) => this.tab(view, this.text[view]))}
          </div>
        </div>
        ${this._error ? html`<p class="message">${this._error}</p>` : nothing}
        ${this._loading ? html`<p class="message">${this.text.loading}</p>` : nothing}
        ${this.body()}
      </ha-card>
    `;
  }

  private get dates() {
    return datePrefsFromHass(this.hass);
  }

  private get cardLang(): Lang {
    return language(this.dates.language);
  }

  private get text(): Copy {
    return copy(this.cardLang);
  }

  private get readings(): Map<string, HassEntity> {
    const map = new Map<string, HassEntity>();
    const hass = this.hass;
    const entity = this._config?.entity;
    if (!hass || !entity || !hass.states[entity]) {
      return map;
    }
    const device = hass.entities?.[entity]?.device_id;
    const vin = hass.states[entity].attributes.vin;
    for (const [id, state] of Object.entries(hass.states)) {
      const reg = hass.entities?.[id];
      const sameDevice = Boolean(device && reg?.device_id === device);
      const sameVin = Boolean(vin && state.attributes.vin === vin);
      if (!sameDevice && !sameVin) {
        continue;
      }
      const key =
        reg?.translation_key ||
        (typeof state.attributes.key === "string" ? state.attributes.key : undefined);
      if (key) {
        map.set(key, state);
      }
    }
    return map;
  }

  private get deviceId(): string | undefined {
    const entity = this._config?.entity;
    if (!this.hass || !entity) {
      return undefined;
    }
    return this.hass.entities?.[entity]?.device_id;
  }

  private numeric(key: string): number | null {
    const raw = this.readings.get(key)?.state;
    if (!raw || raw === "unknown" || raw === "unavailable") {
      return null;
    }
    const value = Number(raw);
    return Number.isFinite(value) ? value : null;
  }

  private label(key: string): string | null {
    const raw = this.readings.get(key)?.state;
    if (!raw || raw === "unknown" || raw === "unavailable") {
      return null;
    }
    return raw;
  }

  private header() {
    const showCar = this.flags.car;
    const showMap = this.mapEnabled();
    if (!showCar && !showMap) {
      return nothing;
    }
    const activity = this.label("activity") || "";
    const deviceName = this.deviceId ? this.hass?.devices?.[this.deviceId]?.name : undefined;
    const model = this.deviceId ? this.hass?.devices?.[this.deviceId]?.model : undefined;
    const friendly = this.hass?.states[this._config?.entity || ""]?.attributes.friendly_name;
    const name = deviceName || (typeof friendly === "string" ? friendly : this.text.unknown);
    const fence = this.label("geofence");
    const tone = activityTone(activity);
    const identity = html`
      <div class="header">
        <div class="hero-head">
          <div>
            <p class="name">${name}</p>
            ${fence ? html`<p class="sub">${fence}</p>` : nothing}
          </div>
          <span class=${`pill ${tone}`}>
            <span class="status-dot" aria-hidden="true"></span>
            ${activityLabel(this.text, activity)}
          </span>
        </div>
      </div>
    `;
    return html`
      <div class="header-wrap">
        <div class="map-band" data-map-host ${ref(this.watchSize)}>
          ${showMap ? this.watermark() : nothing}
          ${showCar ? identity : html`<div class="map-only-spacer"></div>`}
        </div>
        ${showCar
          ? html`<div class="car-stage">
              ${carDrawing(typeof model === "string" ? model : undefined, this.text.car)}
            </div>`
          : nothing}
      </div>
    `;
  }

  private mapEnabled(): boolean {
    return this._config?.show_map !== false;
  }

  private headerMapReady(): boolean {
    if (!this.mapEnabled()) {
      return false;
    }
    const position = this.carPosition();
    const { width, height } = this._headerBox;
    return Boolean(position && width >= 32 && height >= 32);
  }

  private shouldLoadMapChunk(): boolean {
    if (!this._headerVisible) {
      return false;
    }
    if (this._view === "drive" && (this._detail?.route.length ?? 0) > 0) {
      return true;
    }
    return this.headerMapReady();
  }

  private loadMapModule(): Promise<typeof import("./leaflet-map")> {
    this.mapModule ??= import("./leaflet-map").catch((error: unknown) => {
      this.mapModule = undefined;
      throw error;
    });
    return this.mapModule;
  }

  private carPosition(): { lat: number; lon: number } | null {
    const tracker = this.readings.get("location");
    return readPosition(tracker?.attributes.latitude, tracker?.attributes.longitude);
  }

  private watermark() {
    if (!this._headerVisible || !this.headerMapReady()) {
      return nothing;
    }
    const position = this.carPosition();
    if (!position) {
      return nothing;
    }
    const { width, height } = this._headerBox;
    const view = tilesForView(position.lat, position.lon, width, height);
    const dark = Boolean(this.hass?.themes?.darkMode);
    return html`
      <div class=${dark ? "map-bg dark" : "map-bg"} aria-hidden="true">
        ${view.tiles.map(
          (tile) => html`
            <img
              alt=""
              width="256"
              height="256"
              src=${tile.url}
              referrerpolicy="strict-origin-when-cross-origin"
              style=${`left:${tile.left}px;top:${tile.top}px`}
              draggable="false"
            />
          `,
        )}
        <span class="map-credit">© OpenStreetMap</span>
      </div>
      <span
        class="map-dot"
        aria-hidden="true"
        style=${`left:${view.dot.left}px;top:${view.dot.top}px`}
      ></span>
    `;
  }

  private tab(view: ViewName, label: string) {
    return html`
      <button
        role="tab"
        aria-selected=${this._view === view ? "true" : "false"}
        @click=${() => this.open(view)}
      >
        ${label}
      </button>
    `;
  }

  private open(view: ViewName): void {
    this._error = "";
    this.clearZoom();
    this._view = view;
    if (view !== "drive") {
      this._driveId = undefined;
      this._detail = undefined;
    }
    if (view !== "charge") {
      this._chargeId = undefined;
    }
  }

  private body() {
    if (this._view === "status") {
      return this.status();
    }
    if (this._view === "drives") {
      return this.drives();
    }
    if (this._view === "drive") {
      return this.drive();
    }
    if (this._view === "charges") {
      return this.charges();
    }
    if (this._view === "charge") {
      return this.charge();
    }
    if (this._view === "charts") {
      return this.charts();
    }
    return this.stats();
  }

  private metric(title: string, value: string, icon?: string) {
    return html`<div class="metric">
      ${icon ? html`<ha-icon icon=${icon}></ha-icon>` : nothing}
      <div><span>${title}</span><strong>${value}</strong></div>
    </div>`;
  }

  private quantity(key: string, digits: number, unit: string): string {
    const value = this.numeric(key);
    return value == null ? "—" : `${formatNumber(value, digits, this.cardLang)} ${unit}`;
  }

  private get chargingNow(): boolean {
    return (this.label("activity") || "").toLowerCase() === "charging";
  }

  private status() {
    const battery = this.numeric("battery_level");
    const batteryText = battery == null ? "—" : `${formatNumber(battery, 0, this.cardLang)} %`;
    return html`
      <div class="status-board">
        <div class="status-hero">
          ${this.metric(this.text.battery, batteryText)}
          ${this.metric(
            this.text.range,
            this.quantity("rated_range", 0, "km"),
            "mdi:map-marker-distance",
          )}
        </div>
        <section>
          <h3 class="group-label">${this.text.drivingGroup}</h3>
          <div class="tiles">
            ${this.metric(this.text.speed, this.quantity("speed", 0, "km/h"))}
            ${this.metric(this.text.power, this.quantity("power", 1, "kW"))}
            ${this.metric(this.text.odometer, this.quantity("odometer", 0, "km"))}
          </div>
        </section>
        <section>
          <h3 class="group-label">${this.text.cabinGroup}</h3>
          <div class="tiles">
            ${this.metric(this.text.inside, this.quantity("inside_temp", 1, "°C"))}
            ${this.metric(this.text.outside, this.quantity("outside_temp", 1, "°C"))}
          </div>
        </section>
        <section>
          <h3 class="group-label">${this.text.chargeGroup}</h3>
          <div class="tiles">
            ${this.chargingNow
              ? this.metric(this.text.charger, this.quantity("charger_power", 1, "kW"))
              : nothing}
            ${this.chargingNow
              ? this.metric(this.text.added, this.quantity("energy_added", 1, "kWh"))
              : nothing}
            ${this.metric(this.text.limit, this.quantity("charge_limit", 0, "%"))}
          </div>
        </section>
      </div>
    `;
  }

  private drives() {
    const page = this._drives;
    const drives = page?.data || [];
    return html`
      ${this.listToolbar(page)}
      ${this.historyGroups(
        drives,
        (drive) => driveHistory(drive, this.dates),
        3,
        (drive) => this.openDrive(drive.id),
      )}
      ${page && page.data.length === 0 ? html`<p class="message">${this.text.emptyDrives}</p>` : nothing}
    `;
  }

  private drive() {
    const detail = this._detail;
    const fields = driveDetailFlags(this._config);
    const efficiency = whPerKm(detail?.energy_used_kwh, detail?.distance_km);
    const samples = detail ? this.visibleSamples(detail.series) : [];
    return html`
      <div class="toolbar">
        <div class="back">
          ${this.iconButton("mdi:arrow-left", this.text.back, false, () => this.open("drives"))}
          <button type="button" class="back-label" @click=${() => this.open("drives")}>
            ${this.text.back}
          </button>
        </div>
        <span class="page-indicator">${detail ? this.when(detail.start_at) : ""}</span>
      </div>
      ${detail
        ? html`
            ${this.routeTitle(detail)}
            <div class="grid">
              ${fields.distance ? this.metric(this.text.distance, this.km(detail.distance_km)) : nothing}
              ${fields.duration ? this.metric(this.text.duration, formatDuration(detail.duration_s)) : nothing}
              ${fields.energy ? this.metric(this.text.energy, this.kwh(detail.energy_used_kwh)) : nothing}
              ${fields.efficiency
                ? this.metric(
                    this.text.efficiency,
                    efficiency == null ? "—" : `${formatNumber(efficiency, 0, this.cardLang)} Wh/km`,
                  )
                : nothing}
            </div>
            ${fields.map
              ? html`
                  <p class="message">${this.text.map}</p>
                  ${detail.route.length
                    ? html`<div class="map"></div>`
                    : html`<p class="message">${this.text.noRoute}</p>`}
                `
              : nothing}
            ${this.sampleCharts(samples, [
              fields.speed ? ["speed_kmh", this.text.speedChart, "km/h"] : null,
              fields.power ? ["power_kw", this.text.power, "kW"] : null,
              fields.elevation ? ["elevation_m", this.text.elevationChart, "m"] : null,
              fields.battery ? ["battery_level", this.text.batteryChart, "%"] : null,
            ])}
          `
        : nothing}
    `;
  }

  private charge() {
    const charge = this.selectedCharge();
    const fields = chargeDetailFlags(this._config);
    const row = charge ? chargeHistory(charge, this.dates) : undefined;
    const supply = charge ? chargeSupply(charge) : null;
    const soc = charge
      ? socRange(charge.start_battery_level, charge.end_battery_level, this.cardLang)
      : null;
    const samples = charge?.series ? this.visibleSamples(charge.series) : [];
    return html`
      <div class="toolbar">
        <div class="back">
          ${this.iconButton("mdi:arrow-left", this.text.back, false, () => this.open("charges"))}
          <button type="button" class="back-label" @click=${() => this.open("charges")}>
            ${this.text.back}
          </button>
        </div>
        <span class="page-indicator">${charge ? this.when(charge.start_at) : ""}</span>
      </div>
      ${charge
        ? html`
            ${row?.place ? html`<p class="route-name">${row.place}</p>` : nothing}
            <div class="grid">
              ${fields.energy ? this.metric(this.text.energyAdded, this.kwh(charge.energy_added_kwh)) : nothing}
              ${fields.duration ? this.metric(this.text.duration, formatDuration(charge.duration_s)) : nothing}
              ${fields.soc ? this.metric(this.text.soc, soc ?? "—") : nothing}
              ${fields.power
                ? this.metric(
                    this.text.power,
                    charge.max_power_kw == null
                      ? "—"
                      : `${formatNumber(charge.max_power_kw, 0, this.cardLang)} kW`,
                  )
                : nothing}
              ${fields.ac_dc ? this.metric(this.text.acDcShort, supply ?? "—") : nothing}
              ${fields.voltage
                ? this.metric(
                    this.text.voltage,
                    charge.voltage_v == null
                      ? "—"
                      : `${formatNumber(charge.voltage_v, 0, this.cardLang)} V`,
                  )
                : nothing}
              ${fields.cost
                ? this.metric(
                    this.text.cost,
                    charge.cost == null ? "—" : formatNumber(charge.cost, 2, this.cardLang),
                  )
                : nothing}
            </div>
            ${fields.curve
              ? samples.length
                ? this.sampleCharts(samples, [
                    ["power_kw", this.text.power, "kW"],
                    ["battery_level", this.text.batteryChart, "%"],
                  ])
                : html`<p class="message">${this.text.noCurve}</p>`
              : nothing}
          `
        : nothing}
    `;
  }

  private selectedCharge(): Charge | undefined {
    return this._charges?.data.find((item) => item.id === this._chargeId);
  }

  private charges() {
    const page = this._charges;
    return html`
      ${this.listToolbar(page)}
      ${this.historyGroups(
        page?.data || [],
        (charge) => chargeHistory(charge, this.dates),
        4,
        (charge) => this.openCharge(charge.id),
      )}
      ${page && page.data.length === 0
        ? html`<p class="message">${this.text.emptyCharges}</p>`
        : nothing}
    `;
  }

  private stats() {
    const stats = this._stats;
    const efficiency = whPerKm(stats?.energy_used_kwh, stats?.distance_km);
    const previous =
      this._previousKm == null
        ? nothing
        : html`<span>${this.text.previousPeriod[this._period]} ${this.km(this._previousKm)}</span>`;
    return html`
      ${this.periodBar()}
      ${stats
        ? html`
            <section class="stats-hero">
              <span>${this.text.distance}</span>
              <strong>${this.km(stats.distance_km)}</strong>
              ${previous}
            </section>
            <div class="grid">
              ${this.metric(this.text.duration, formatDuration(stats.drive_duration_s))}
              ${this.metric(this.text.energy, this.kwh(stats.energy_used_kwh))}
              ${this.metric(
                this.text.efficiency,
                efficiency == null ? "—" : `${formatNumber(efficiency, 0, this.cardLang)} Wh/km`,
              )}
              ${this.metric(this.text.drivesCount, String(stats.drive_count))}
              ${this.metric(this.text.chargesCount, String(stats.charge_count))}
              ${this.metric(this.text.energyAdded, this.kwh(stats.energy_added_kwh))}
            </div>
          `
        : nothing}
    `;
  }

  private periodBar() {
    return html`
      ${this._zoom ? this.zoomReset() : nothing}
      <div class="periods" role="group" aria-label=${this.text.period}>
        ${(["week", "month", "year"] as Period[]).map(
          (period) => html`
            <button
              type="button"
              aria-pressed=${this._period === period ? "true" : "false"}
              class=${this._period === period ? "active" : ""}
              @click=${() => this.setPeriod(period)}
            >
              ${this.text[period]}
            </button>
          `,
        )}
      </div>
    `;
  }

  private charts() {
    const show = this.flags;
    const series = this._series;
    const buckets = series?.buckets ?? [];
    const shown = this.sliceWindow(buckets);
    const selected = buckets.length ? this.relativeSelection(buckets) : -1;
    const main = show.chart_consumption || show.chart_distance || show.chart_energy;
    const extra =
      show.battery_health ||
      show.charging_split ||
      show.vampire_drain ||
      show.consumption_vs_temp;
    return html`
      ${this.periodBar()}
      ${main && series && buckets.length === 0
        ? html`<p class="message">${this.text.emptySeries}</p>`
        : nothing}
      ${main && shown.length
        ? html`
            ${this.chartSwitch()}
            <div class="chart-stage series-list">
              ${this.syncedTooltip(shown)}
              ${this.mainChart(selected)}
            </div>
          `
        : nothing}
      ${show.totals && this.absoluteSelection(buckets) >= 0
        ? this.bucketTotals(buckets[this.absoluteSelection(buckets)])
        : nothing}
      ${extra ? this.extraCharts(shown, selected) : nothing}
    `;
  }

  private extraCharts(buckets: StatsBucket[], selected: number) {
    const show = this.flags;
    const body = html`
      <div class="series-extra">
        ${show.battery_health && selected >= 0
          ? this.seriesFigure(
              "health",
              "line",
              this.text.batteryHealth,
              "km",
              (bucket) => finiteOrNull(bucket.range_at_100_km),
              selected,
              true,
            )
          : nothing}
        ${show.charging_split && selected >= 0 ? this.acDcFigure(buckets, selected) : nothing}
        ${show.vampire_drain && selected >= 0
          ? this.seriesFigure(
              "idle",
              "bar",
              this.text.idleUse,
                    this.text.perDay,
              (bucket) => finiteOrNull(bucket.idle_range_loss_km_per_day),
              selected,
              true,
            )
          : nothing}
        ${show.consumption_vs_temp ? this.tempFigure() : nothing}
      </div>
    `;
    if (!this._narrow) {
      return body;
    }
    return html`<details class="extras"><summary>${this.text.moreCharts}</summary>${body}</details>`;
  }

  private chartChoices(): Array<"consumption" | "distance" | "energy"> {
    const show = this.flags;
    const choices: Array<"consumption" | "distance" | "energy"> = [];
    if (show.chart_consumption) {
      choices.push("consumption");
    }
    if (show.chart_distance) {
      choices.push("distance");
    }
    if (show.chart_energy) {
      choices.push("energy");
    }
    return choices;
  }

  private activeChart(): "consumption" | "distance" | "energy" | null {
    const choices = this.chartChoices();
    if (choices.includes(this._mainChart)) {
      return this._mainChart;
    }
    return choices[0] ?? null;
  }

  private chartSwitch() {
    const choices = this.chartChoices();
    if (choices.length < 2) {
      return nothing;
    }
    const active = this.activeChart();
    const label = {
      consumption: this.text.consumptionChart,
      distance: this.text.distance,
      energy: this.text.chargedChart,
    };
    return html`
      <div class="periods" role="group" aria-label=${this.text.charts}>
        ${choices.map(
          (choice) => html`
            <button
              type="button"
              aria-pressed=${active === choice ? "true" : "false"}
              class=${active === choice ? "active" : ""}
              @click=${() => {
                this._mainChart = choice;
              }}
            >
              ${label[choice]}
            </button>
          `,
        )}
      </div>
    `;
  }

  private mainChart(selected: number) {
    const active = this.activeChart();
    if (active === "distance") {
      return this.seriesFigure(
        "distance",
        "bar",
        this.text.distance,
        "km",
        (bucket) => finiteOrNull(bucket.distance_km),
        selected,
      );
    }
    if (active === "energy") {
      return this.seriesFigure(
        "energy",
        "bar",
        this.text.chargedChart,
        "kWh",
        (bucket) => finiteOrNull(bucket.energy_charged_kwh),
        selected,
      );
    }
    if (active === "consumption") {
      return this.seriesFigure(
        "consumption",
        "line",
        this.text.consumptionChart,
        "Wh/km",
        (bucket) => finiteOrNull(bucket.wh_per_km),
        selected,
      );
    }
    return nothing;
  }

  private selectedBucketIndex(buckets: StatsBucket[]): number {
    if (
      this._bucketIndex != null &&
      this._bucketIndex >= 0 &&
      this._bucketIndex < buckets.length
    ) {
      return this._bucketIndex;
    }
    return currentBucketIndex(
      buckets.map((bucket) => bucket.start),
      this._period,
    );
  }

  private selectBucket(index: number): void {
    if (this._eatClick) {
      this._eatClick = false;
      return;
    }
    const origin = this._zoom?.start ?? 0;
    this._bucketIndex = origin + index;
  }

  private absoluteSelection(buckets: StatsBucket[]): number {
    if (!buckets.length) {
      return -1;
    }
    return this.selectedBucketIndex(buckets);
  }

  private relativeSelection(buckets: StatsBucket[]): number {
    const absolute = this.absoluteSelection(buckets);
    const origin = this._zoom?.start ?? 0;
    const end = this._zoom?.end ?? Math.max(0, buckets.length - 1);
    if (absolute < origin || absolute > end) {
      return Math.max(0, Math.min(end, absolute) - origin);
    }
    return absolute - origin;
  }

  private sliceWindow<T>(items: T[]): T[] {
    if (!this._zoom || items.length === 0) {
      return items;
    }
    const start = Math.max(0, Math.min(this._zoom.start, items.length - 1));
    const end = Math.max(start, Math.min(this._zoom.end, items.length - 1));
    return items.slice(start, end + 1);
  }

  private bucketHeading(bucket: StatsBucket): string {
    if (bucketInPeriod(bucket.start, this._period)) {
      if (this._period === "week") {
        return this.text.thisWeek;
      }
      if (this._period === "month") {
        return this.text.thisMonth;
      }
      return this.text.thisYear;
    }
    return bucketLabel(bucket.start, this._period, this.dates);
  }

  private bucketTotals(bucket: StatsBucket) {
    const consumed = finiteOrNull(bucket.energy_used_kwh);
    return html`
      <section class="totals" aria-live="polite">
        <h3 class="totals-label">${this.bucketHeading(bucket)}</h3>
        <div class="totals-row">
          <div>
            <span>${this.text.distance}</span>
            <strong>${this.km(bucket.distance_km)}</strong>
          </div>
          <div>
            <span>${this.text.duration}</span>
            <strong>${formatDuration(bucket.drive_duration_s)}</strong>
          </div>
          <div>
            <span>${this.text.chargedChart}</span>
            <strong>${this.kwh(bucket.energy_charged_kwh)}</strong>
            ${consumed == null
              ? nothing
              : html`<span class="totals-sub">${this.text.consumed} ${this.kwh(consumed)}</span>`}
          </div>
        </div>
      </section>
    `;
  }

  private seriesFigure(
    plotKey: string,
    kind: "bar" | "line" | "stack",
    title: string,
    unit: string,
    read: (bucket: StatsBucket) => number | null,
    selected: number,
    compact = false,
  ) {
    const buckets = this.sliceWindow(this._series?.buckets ?? []);
    const digits = unit === "Wh/km" ? 0 : 1;
    const points: ChartPoint[] = buckets.map((bucket) => {
      const value = read(bucket);
      const label = bucketLabel(bucket.start, this._period, this.dates);
      const shown = value == null ? "—" : `${formatNumber(value, digits, this.cardLang)} ${unit}`;
      return { label, value, title: `${label} · ${shown}` };
    });
    const focus = this.chartFocus(points, selected, compact);
    const point = focus.point;
    const headline = compact || focus.index === selected
      ? this.bucketHeading(buckets[Math.max(0, selected)])
      : (point?.label ?? "");
    const focusText =
      point?.value == null ? "—" : `${formatNumber(point.value, digits, this.cardLang)} ${unit}`;
    const summary = `${title}. ${headline} · ${focusText}`;
    return html`
      <figure class=${compact ? "series-card compact" : "series-card"}>
        <figcaption>
          <span class="series-title">${title}</span>
          <span class="series-value">${headline} · ${focusText}</span>
        </figcaption>
        ${this.drawSeries(plotKey, points, kind, summary, selected, compact)}
      </figure>
    `;
  }

  private acDcFigure(buckets: StatsBucket[], selected: number) {
    const bucket = buckets[selected];
    const share = finiteOrNull(bucket?.dc_share_pct);
    const cost = finiteOrNull(bucket?.charge_cost);
    const perKm = finiteOrNull(bucket?.cost_per_km);
    const points: ChartPoint[] = buckets.map((item) => {
      const label = bucketLabel(item.start, this._period, this.dates);
      const ac = finiteOrNull(item.ac_energy_kwh);
      const dc = finiteOrNull(item.dc_energy_kwh);
      const acText = ac == null ? "—" : `${formatNumber(ac, 1, this.cardLang)} kWh`;
      const dcText = dc == null ? "—" : `${formatNumber(dc, 1, this.cardLang)} kWh`;
      return {
        label,
        value: ac,
        stack: dc,
        title: `${label} · AC ${acText} · DC ${dcText}`,
      };
    });
    const summary = `${this.text.acDc}. ${this.bucketHeading(bucket)}`;
    return html`
      <figure class="series-card compact">
        <figcaption>
          <span class="series-title">${this.text.acDc}</span>
        </figcaption>
        <p class="series-note">${this.chargeNote(share, cost, perKm)}</p>
        <p class="legend">
          <span><i class="swatch ac" aria-hidden="true"></i>AC</span>
          <span><i class="swatch dc" aria-hidden="true"></i>DC</span>
        </p>
        ${this.drawSeries("acdc", points, "stack", summary, selected, true)}
      </figure>
    `;
  }

  private tempFigure() {
    const bins = this._tempBins ?? [];
    const points: ChartPoint[] = bins.map((bin) => {
      const lower = bin.temp_c_bucket;
      const label = `${formatNumber(lower, 0, this.cardLang)}–${formatNumber(lower + 5, 0, this.cardLang)}°`;
      const wh = finiteOrNull(bin.wh_per_km);
      const distance = finiteOrNull(bin.distance_km);
      const whText = wh == null ? "—" : `${formatNumber(wh, 0, this.cardLang)} Wh/km`;
      const distanceText =
        distance == null ? "" : ` · ${formatNumber(distance, 0, this.cardLang)} km`;
      return { label, value: wh, title: `${label} · ${whText}${distanceText}` };
    });
    return html`
      <figure class="series-card compact">
        <figcaption>
          <span class="series-title">${this.text.tempUse}</span>
        </figcaption>
        ${points.length
          ? this.drawSeries("temp", points, "bar", this.text.tempUse, -1, true, false, false)
          : html`<p class="message">${this.text.emptySeries}</p>`}
      </figure>
    `;
  }

  private drawSeries(
    plotKey: string,
    points: ChartPoint[],
    kind: "bar" | "line" | "stack",
    label: string,
    selected: number,
    compact: boolean,
    selectable = true,
    interactive = true,
  ) {
    const formatTick = (value: number) =>
      formatNumber(value, value >= 10 || value === 0 ? 0 : 1, this.cardLang);
    const width = this._plotWidths[plotKey] ?? (compact ? 200 : 360);
    const brush = interactive ? this.brushStyle(points.length, width, compact) : undefined;
    return html`
      <div
        class="plot"
        data-plot=${plotKey}
        ${ref(this.watchSize)}
        @pointerdown=${(event: PointerEvent) => this.chartPointerDown(event, points.length, compact)}
        @pointermove=${(event: PointerEvent) => this.chartPointerMove(event, points.length, compact)}
        @pointerup=${() => this.chartPointerUp(points.length)}
        @pointercancel=${() => this.chartPointerLeave(true)}
        @pointerleave=${() => this.chartPointerLeave(false)}
      >
        ${brush ? html`<div class="brush" style=${brush}></div>` : nothing}
        ${seriesChart(points, kind, label, formatTick, {
          width: this._plotWidths[plotKey],
          compact,
          selected,
          highlight: interactive ? this._hover : null,
          onSelect: selectable ? (index) => this.selectBucket(index) : undefined,
        })}
      </div>
    `;
  }

  private brushStyle(count: number, width: number, compact: boolean): string | undefined {
    if (!this._brush || count <= 0) {
      return undefined;
    }
    const start = slotBand(this._brush.start, count, width, compact);
    const end = slotBand(this._brush.end, count, width, compact);
    const left = Math.min(start.left, end.left);
    const right = Math.max(start.left + start.width, end.left + end.width);
    return `left:${left.toFixed(2)}%;width:${Math.max(0, right - left).toFixed(2)}%`;
  }

  private chartPointerDown(event: PointerEvent, count: number, compact: boolean): void {
    const index = this.indexFromEvent(event, count, compact);
    if (index == null) {
      return;
    }
    this._dragAnchor = index;
    (event.currentTarget as HTMLElement).setPointerCapture?.(event.pointerId);
  }

  private chartPointerMove(event: PointerEvent, count: number, compact: boolean): void {
    const index = this.indexFromEvent(event, count, compact);
    if (index == null) {
      return;
    }
    if (this._hover !== index) {
      this._hover = index;
    }
    if (this._dragAnchor == null) {
      return;
    }
    const span = brushSpan(this._dragAnchor, index);
    const next = span ? { start: span.start, end: span.end } : null;
    if (this._brush?.start !== next?.start || this._brush?.end !== next?.end) {
      this._brush = next;
    }
  }

  private chartPointerUp(count: number): void {
    const anchor = this._dragAnchor;
    const span = this._brush;
    this._dragAnchor = null;
    this._brush = null;
    if (anchor == null || !span) {
      return;
    }
    this._eatClick = true;
    const origin = this._zoom?.start ?? 0;
    this.applyZoom(origin + span.start, origin + span.end, origin + count);
  }

  private chartPointerLeave(cancel: boolean): void {
    if (cancel) {
      this._dragAnchor = null;
      this._brush = null;
    }
    if (this._dragAnchor != null) {
      return;
    }
    if (this._hover != null) {
      this._hover = null;
    }
  }

  private indexFromEvent(event: PointerEvent, count: number, compact: boolean): number | null {
    const host = event.currentTarget as HTMLElement | null;
    const svg = host?.querySelector("svg");
    const rect = (svg ?? host)?.getBoundingClientRect();
    if (!rect) {
      return null;
    }
    return slotIndex(event.clientX, rect, count, compact);
  }

  private applyZoom(start: number, end: number, fullLength: number): void {
    if (fullLength <= 2 || end - start < 1) {
      return;
    }
    const last = fullLength - 1;
    const clampedStart = Math.max(0, Math.min(start, last));
    const clampedEnd = Math.max(clampedStart, Math.min(end, last));
    if (clampedStart === 0 && clampedEnd === last) {
      this._zoom = null;
      return;
    }
    this._zoom = { start: clampedStart, end: clampedEnd };
    if (this._bucketIndex == null || this._bucketIndex < clampedStart || this._bucketIndex > clampedEnd) {
      this._bucketIndex = clampedEnd;
    }
    this._hover = null;
  }

  private clearZoom(): void {
    this._zoom = null;
    this._brush = null;
    this._hover = null;
    this._dragAnchor = null;
  }

  private zoomReset() {
    return html`
      <button type="button" class="zoom-reset" @click=${() => this.clearZoom()}>
        ${this.text.resetZoom}
      </button>
    `;
  }

  private syncedTooltip(buckets: StatsBucket[]) {
    const index = this._hover;
    const bucket = index == null ? undefined : buckets[index];
    if (index == null || !bucket) {
      return nothing;
    }
    const width = this._plotWidths.consumption || this._plotWidths.distance || this._plotWidths.energy || 360;
    const band = slotBand(index, buckets.length, width, false);
    const rows = [
      [this.text.consumptionChart, finiteOrNull(bucket.wh_per_km), "Wh/km", 0],
      [this.text.distance, finiteOrNull(bucket.distance_km), "km", 1],
      [this.text.chargedChart, finiteOrNull(bucket.energy_charged_kwh), "kWh", 1],
    ] as const;
    return html`
      <div class="chart-tooltip" style=${`left:${Math.min(band.left, 62).toFixed(1)}%;top:8px`}>
        <div class="tip-head">${bucketLabel(bucket.start, this._period, this.dates)}</div>
        ${rows.map(
          ([label, value, unit, digits]) => html`
            <div>${label} ${value == null ? "—" : `${formatNumber(value, digits, this.cardLang)} ${unit}`}</div>
          `,
        )}
      </div>
    `;
  }

  private sampleCharts(
    samples: SeriesPoint[],
    specs: Array<readonly [string, string, string] | null>,
  ) {
    const charts = specs
      .filter((spec): spec is readonly [string, string, string] => spec != null)
      .map(([key, title, unit]) => ({
        key,
        title,
        unit,
        points: this.samplePoints(samples, key, unit),
      }))
      .filter((chart) => chart.points.filter((point) => point.value != null).length >= 2);
    if (charts.length === 0) {
      return nothing;
    }
    return html`
      <div class="detail-charts">
        ${this._zoom ? this.zoomReset() : nothing}
        ${charts.map(
          (chart) => html`
            <figure class="series-card compact">
              <figcaption>
                <span class="series-title">${chart.title}</span>
                <span class="series-value">${this.sampleHeadline(chart.points, chart.unit)}</span>
              </figcaption>
              ${this.drawSeries(chart.key, chart.points, "line", chart.title, this._hover ?? -1, true, false)}
            </figure>
          `,
        )}
      </div>
    `;
  }

  private samplePoints(samples: SeriesPoint[], key: string, unit: string): ChartPoint[] {
    return samples.map((sample) => {
      const raw = (sample as unknown as Record<string, unknown>)[key];
      const value = typeof raw === "number" && Number.isFinite(raw) ? raw : null;
      const digits = unit === "kW" ? 1 : 0;
      const shown = value == null ? "—" : `${formatNumber(value, digits, this.cardLang)} ${unit}`;
      const label = this.sampleClock(sample.recorded_at);
      return { label, value, title: `${label} · ${shown}` };
    });
  }

  private sampleHeadline(points: ChartPoint[], unit: string): string {
    const index = this._hover != null && points[this._hover] ? this._hover : points.length - 1;
    const point = points[index];
    if (!point || point.value == null) {
      return "—";
    }
    const digits = unit === "kW" ? 1 : 0;
    return `${point.label} · ${formatNumber(point.value, digits, this.cardLang)} ${unit}`;
  }

  private sampleClock(value: string): string {
    const date = new Date(value);
    if (Number.isNaN(date.getTime())) {
      return "";
    }
    return new Intl.DateTimeFormat(this.dates.language || "en", {
      hour: "numeric",
      minute: "2-digit",
      hour12: this.dates.hour12,
      timeZone: this.dates.timeZone,
    }).format(date);
  }

  private visibleSamples(series: SeriesPoint[]): SeriesPoint[] {
    return this.sliceWindow(series);
  }

  private listToolbar(page: Page<unknown> | undefined) {
    const current = page?.page ?? this._page;
    const pages = page && page.per_page > 0 ? Math.ceil(page.total / page.per_page) : 1;
    return html`
      <div class="toolbar list-toolbar">
        <div class="toolbar-actions">
          ${this.iconButton("mdi:chevron-left", this.text.previous, !page || current <= 1, () =>
            this.setPage(current - 1),
          )}
          ${this.iconButton(
            "mdi:chevron-right",
            this.text.next,
            !page || current >= pages,
            () => this.setPage(current + 1),
          )}
          ${this.iconButton("mdi:refresh", this.text.refresh, false, () => this.reload())}
        </div>
        <span class="page-indicator">${this.pageIndicator(page)}</span>
      </div>
    `;
  }

  private pageIndicator(page: Page<unknown> | undefined): string {
    if (!page || page.total <= 0 || page.per_page <= 0 || page.total <= page.per_page) {
      return `${this.text.page} ${page?.page ?? this._page}`;
    }
    const start = (page.page - 1) * page.per_page + 1;
    const end = Math.min(page.page * page.per_page, page.total);
    return `${start}–${end}`;
  }

  private iconButton(icon: string, label: string, disabled: boolean, action: () => void) {
    return html`
      <ha-icon-button
        .label=${label}
        aria-label=${label}
        title=${label}
        ?disabled=${disabled}
        @click=${() => {
          if (!disabled) {
            action();
          }
        }}
      >
        <ha-icon icon=${icon}></ha-icon>
      </ha-icon-button>
    `;
  }

  private chartFocus(
    points: ChartPoint[],
    selected: number,
    compact: boolean,
  ): { point: ChartPoint | undefined; index: number } {
    if (compact || points[selected]?.value != null) {
      return { point: points[selected], index: selected };
    }
    for (let index = selected - 1; index >= 0; index -= 1) {
      if (points[index]?.value != null) {
        return { point: points[index], index };
      }
    }
    return { point: points[selected], index: selected };
  }

  private chargeNote(share: number | null, cost: number | null, perKm: number | null): string {
    const parts: string[] = [];
    if (share != null) {
      parts.push(`${formatNumber(share, 0, this.cardLang)} % ${this.text.fastShare}`);
    }
    if (cost != null) {
      parts.push(`${this.text.cost} ${formatNumber(cost, 2, this.cardLang)}`);
    }
    if (perKm != null) {
      parts.push(`${formatNumber(perKm, 2, this.cardLang)} ${this.text.perKm}`);
    }
    return parts.join(" · ");
  }

  private historyGroups<T>(
    items: T[],
    rowOf: (item: T) => HistoryRowModel,
    slots: number,
    onOpen?: (item: T) => void,
  ) {
    const groups: Array<{ key: string; label: string; items: T[] }> = [];
    for (const item of items) {
      const row = rowOf(item);
      const last = groups[groups.length - 1];
      if (last && last.key === row.dayKey) {
        last.items.push(item);
      } else {
        groups.push({ key: row.dayKey, label: row.dayLabel, items: [item] });
      }
    }
    return html`
      ${groups.map(
        (group) => html`
          <section class="day-group">
            <h3 class="day-heading">${group.label}</h3>
            <ul class="list" data-slots=${String(slots)}>
              ${group.items.map((item) => this.historyRow(rowOf(item), onOpen ? () => onOpen(item) : undefined))}
            </ul>
          </section>
        `,
      )}
    `;
  }

  private routeTitle(detail: Drive) {
    const row = driveHistory(detail, this.dates);
    if (!row.place) {
      return nothing;
    }
    return html`<p class="route-name">${this.placeBody(row)}</p>`;
  }

  private placeBody(row: HistoryRowModel) {
    if (!row.ends) {
      return row.place ?? "";
    }
    return html`<span class="entry-place route" title=${row.place ?? ""} aria-label=${row.place ?? nothing}
      ><span class="place-point">${row.ends[0]}</span
      ><span class="place-join" aria-hidden="true">→</span
      ><span class="place-point">${row.ends[1]}</span></span
    >`;
  }

  private historyRow(row: HistoryRowModel, onOpen?: () => void) {
    const body = html`<span class="entry-line"
        ><time class="entry-when" datetime=${row.datetime} title=${row.when} aria-label=${row.when}
          >${row.clock}</time
        ><span
          class=${row.ends ? "entry-place route" : "entry-place"}
          title=${row.place ?? ""}
          aria-label=${row.place ?? nothing}
          >${row.ends
            ? html`<span class="place-point">${row.ends[0]}</span
                ><span class="place-join" aria-hidden="true">→</span
                ><span class="place-point">${row.ends[1]}</span>`
            : (row.place ?? "")}</span
        ><strong class="entry-figure">${row.figure ?? "—"}</strong></span
      ><span class="entry-line entry-secondary"
        ><span class="entry-metrics" title=${row.detail}
          >${row.slots.map((part) =>
            part
              ? html`<span class="chip">${part}</span>`
              : html`<span class="chip" aria-hidden="true"></span>`,
          )}</span
        ></span
      >`;
    if (onOpen) {
      return html`
        <li>
          <button type="button" class="entry" @click=${onOpen}>${body}</button>
        </li>
      `;
    }
    return html`<li><div class="entry">${body}</div></li>`;
  }

  private km(value: number | null | undefined): string {
    return value == null ? "—" : `${formatNumber(value, 1, this.cardLang)} km`;
  }

  private kwh(value: number | null | undefined): string {
    return value == null ? "—" : `${formatNumber(value, 1, this.cardLang)} kWh`;
  }

  private when(value: string): string {
    return formatListTimestamp(value, this.dates);
  }

  private openDrive(id: number): void {
    this._driveId = id;
    this._detail = undefined;
    this.clearZoom();
    this._view = "drive";
  }

  private openCharge(id: number): void {
    this._chargeId = id;
    this.clearZoom();
    this._view = "charge";
  }

  private setPeriod(period: Period): void {
    this._period = period;
    this._bucketIndex = null;
    this.clearZoom();
    if (this._view === "charts") {
      void this.loadSeries();
      return;
    }
    this._stats = undefined;
    this._previousKm = null;
    void this.loadStats();
  }

  private setPage(page: number): void {
    this._page = page;
    if (this._view === "drives") {
      this._drives = undefined;
      void this.loadDrives();
    } else if (this._view === "charges") {
      this._charges = undefined;
      void this.loadCharges();
    }
  }

  private reload(): void {
    this.clearHistory();
    void this.ensureView();
  }

  private clearHistory(): void {
    this._drives = undefined;
    this._charges = undefined;
    this._detail = undefined;
    this._stats = undefined;
    this._series = undefined;
    this._tempBins = undefined;
    this._seriesPeriod = undefined;
    this._bucketIndex = null;
    this._page = 1;
    this._error = "";
  }

  private async ensureView(): Promise<void> {
    if (this._view === "drives" && this.flags.drives && !this._drives) {
      await this.loadDrives();
    } else if (this._view === "charges" && this.flags.charges && !this._charges) {
      await this.loadCharges();
    } else if (this._view === "stats" && this.flags.stats && !this._stats) {
      await this.loadStats();
    } else if (this._view === "charts" && chartsVisible(this.flags) && this.seriesStale()) {
      await this.loadSeries();
    } else if (this._view === "drive" && this.flags.drives && this._driveId != null && !this._detail) {
      await this.loadDrive();
    } else if (this._view === "charge" && this.flags.charges && !this._charges) {
      await this.loadCharges();
    }
  }

  private async loadDrives(): Promise<void> {
    await this.load("drives", async () => {
      const payload = await this.call("get_drives", { page: this._page, per_page: pageSize(this._config) });
      if (!isPage<Drive>(payload)) {
        throw new Error(this.text.failed);
      }
      this._drives = payload;
    });
  }

  private async loadCharges(): Promise<void> {
    await this.load("charges", async () => {
      const payload = await this.call("get_charges", { page: this._page, per_page: pageSize(this._config) });
      if (!isPage<Charge>(payload)) {
        throw new Error(this.text.failed);
      }
      this._charges = payload;
    });
  }

  private async loadDrive(): Promise<void> {
    const id = this._driveId;
    if (id == null) {
      return;
    }
    await this.load("drive", async () => {
      const payload = await this.call("get_drive", { drive_id: id, max_points: 300 });
      if (!isDetail(payload)) {
        throw new Error(this.text.failed);
      }
      this._detail = payload;
    });
  }

  private seriesStale(): boolean {
    const show = this.flags;
    if (this._seriesPeriod !== this._period) {
      return true;
    }
    if (seriesNeeded(show) && !this._series) {
      return true;
    }
    if (show.consumption_vs_temp && !this._tempBins) {
      return true;
    }
    return false;
  }

  private async loadSeries(): Promise<void> {
    const show = this.flags;
    if (!chartsVisible(show)) {
      return;
    }
    const period = this._period;
    const wantSeries = seriesNeeded(show);
    const wantTemp = show.consumption_vs_temp;
    if (wantSeries) {
      this._series = undefined;
    }
    if (wantTemp) {
      this._tempBins = undefined;
    }
    await this.load("charts", async () => {
      const count = SERIES_COUNT[period];
      if (wantSeries) {
        const payload = await this.call("get_stats_series", { period, count });
        if (!isSeries(payload)) {
          throw new Error(this.text.failed);
        }
        this._series = payload;
      }
      if (wantTemp) {
        try {
          this._tempBins = tempBins(await this.call("get_consumption_by_temp", { period, count }));
        } catch {
          this._tempBins = [];
        }
      }
      this._seriesPeriod = period;
    });
  }

  private async loadStats(): Promise<void> {
    const period = this._period;
    await this.load("stats", async () => {
      const range = periodRange(period);
      const payload = await this.call("get_stats", range);
      if (!isStats(payload)) {
        throw new Error(this.text.failed);
      }
      this._stats = payload;
      this._previousKm = null;
      try {
        const series = await this.call("get_stats_series", { period, count: SERIES_COUNT[period] });
        if (isSeries(series)) {
          this._previousKm = previousDistanceKm(series.buckets, period);
        }
      } catch {
        this._previousKm = null;
      }
    });
  }

  private async load(view: ViewName, action: () => Promise<void>): Promise<void> {
    if (!this.deviceId) {
      this._error = this.text.missingDevice;
      return;
    }
    this._loading = true;
    this._error = "";
    try {
      await action();
      if (this._view !== view && view !== "drive") {
        return;
      }
    } catch (err) {
      this._error = safeError(err, this.text.failed);
    } finally {
      this._loading = false;
    }
  }

  private async call(service: string, data: Record<string, unknown>): Promise<unknown> {
    if (!this.hass || !this.deviceId) {
      throw new Error(this.text.missingDevice);
    }
    const result = await this.hass.callService(
      "tesla_logger",
      service,
      { device_id: this.deviceId, ...data },
      undefined,
      false,
      true,
    );
    const record = asRecord(result);
    if (record && "response" in record) {
      return record.response;
    }
    return result;
  }

  private syncMap(): void {
    const el = this.renderRoot.querySelector<HTMLDivElement>(".map");
    const route = this._detail?.route ?? [];
    if (!el || route.length === 0) {
      this.destroyMap();
      return;
    }
    if (!this._headerVisible) {
      return;
    }
    const token = ++this.mapToken;
    const dark = Boolean(this.hass?.themes?.darkMode);
    const color = getComputedStyle(this).getPropertyValue("--primary-color").trim() || "#03a9f4";
    void this.loadMapModule()
      .then((mod) => {
        if (token !== this.mapToken || !this.isConnected) {
          return;
        }
        const current = this.renderRoot.querySelector<HTMLDivElement>(".map");
        if (current !== el) {
          return;
        }
        this.routeMap = mod.mountRoute(this.routeMap, el, route, dark, color);
      })
      .catch(() => undefined);
  }

  private destroyMap(): void {
    this.mapToken += 1;
    const current = this.routeMap;
    this.routeMap = undefined;
    current?.destroy();
  }
}

function activityTone(activity: string): string {
  const value = activity.toLowerCase();
  if (value === "driving") {
    return "drive";
  }
  if (value === "charging") {
    return "charge";
  }
  if (value === "asleep" || value === "offline") {
    return "idle";
  }
  return "park";
}

export { TeslaLoggerCardEditor };

if (!customElements.get("tesla-logger-card-impl")) {
  customElements.define("tesla-logger-card-impl", TeslaLoggerCard);
}
if (!customElements.get("tesla-logger-card-editor-impl")) {
  customElements.define("tesla-logger-card-editor-impl", TeslaLoggerCardEditor);
}
