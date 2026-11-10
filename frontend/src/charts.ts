import { svg, type SVGTemplateResult } from "lit";
import { bucketInPeriod } from "./format";
import type { Lang } from "./i18n";
import type { Period } from "./types";

/** Buckets requested for each chart period. Oldest to newest. */
export const SERIES_COUNT: Record<Period, number> = {
  week: 12,
  month: 12,
  year: 5,
};

/** Width below which charts use the shorter frame. */
const NARROW_WIDTH = 480;

export interface ChartFrame {
  width: number;
  height: number;
  left: number;
  right: number;
  top: number;
  bottom: number;
}

/**
 * Pixel frame for a chart. Height stays in a fixed band so a wide popup
 * cannot scale the drawing; 1 user unit is meant to match 1 CSS pixel.
 */
export function chartFrame(width: number | undefined, compact = false): ChartFrame {
  const fallback = compact ? 200 : 360;
  const safe = width != null && Number.isFinite(width) && width >= 64 ? width : fallback;
  const narrow = safe < NARROW_WIDTH;
  const height = compact ? (narrow ? 116 : 132) : narrow ? 184 : 208;
  return {
    width: safe,
    height,
    left: compact ? 32 : 42,
    right: compact ? 8 : 12,
    top: compact ? 8 : 12,
    bottom: compact ? 22 : 28,
  };
}

export interface ChartPoint {
  label: string;
  value: number | null;
  /** Second segment drawn above `value` for stacked bars. */
  stack?: number | null;
  title: string;
}

export function niceMax(max: number): number {
  if (!Number.isFinite(max) || max <= 0) {
    return 1;
  }
  const pow = 10 ** Math.floor(Math.log10(max));
  const fraction = max / pow;
  const nice = fraction <= 1 ? 1 : fraction <= 2 ? 2 : fraction <= 5 ? 5 : 10;
  return nice * pow;
}

export function currentBucketIndex(
  starts: readonly string[],
  period: Period,
  now = new Date(),
): number {
  let found = -1;
  starts.forEach((start, index) => {
    if (bucketInPeriod(start, period, now)) {
      found = index;
    }
  });
  return found >= 0 ? found : Math.max(0, starts.length - 1);
}

export function bucketLabel(start: string, period: Period, lang: Lang): string {
  const date = new Date(start);
  if (Number.isNaN(date.getTime())) {
    return start;
  }
  const locale = lang === "fr" ? "fr-FR" : "en-US";
  if (period === "year") {
    return new Intl.DateTimeFormat(locale, { year: "numeric" }).format(date);
  }
  if (period === "month") {
    return new Intl.DateTimeFormat(locale, { month: "short" })
      .format(date)
      .replace(/\.$/, "");
  }
  return new Intl.DateTimeFormat(locale, { day: "numeric", month: "short" })
    .format(date)
    .replace(/,/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

export interface SeriesChartOptions {
  /** Measured CSS width of the plot. Omit to use the narrow fallback. */
  width?: number;
  selected?: number;
  onSelect?: (index: number) => void;
  compact?: boolean;
}

export function seriesChart(
  points: ChartPoint[],
  kind: "bar" | "line" | "stack",
  label: string,
  formatTick: (value: number) => string,
  options: SeriesChartOptions = {},
) {
  const box = chartFrame(options.width, options.compact);
  const magnitudes = points.map((point) => {
    if (kind === "stack") {
      return Math.max(0, point.value ?? 0) + Math.max(0, point.stack ?? 0);
    }
    return point.value != null && Number.isFinite(point.value) && point.value > 0 ? point.value : 0;
  });
  const positive = magnitudes.filter((value) => value > 0);
  const max = niceMax(positive.length ? Math.max(...positive) : 0);
  const plotWidth = box.width - box.left - box.right;
  const plotHeight = box.height - box.top - box.bottom;
  const slot = points.length > 0 ? plotWidth / points.length : plotWidth;
  const yOf = (value: number) => box.top + plotHeight - (value / max) * plotHeight;
  const baseline = yOf(0);
  const ticks = [max, max / 2, 0];
  const slots = points.map((point, index) => {
    const x = box.left + slot * index + slot / 2;
    const value = point.value != null && Number.isFinite(point.value) ? point.value : null;
    const y = value == null ? null : yOf(Math.max(0, value));
    return { ...point, x, y, value };
  });
  const labelStep = points.length > 8 ? 2 : 1;
  const selectable = (index: number, title: string, body: SVGTemplateResult) => {
    if (!options.onSelect) {
      return svg`<g><title>${title}</title>${body}</g>`;
    }
    const selected = options.selected === index;
    return svg`
      <g
        class=${selected ? "selected" : ""}
        role="button"
        tabindex="0"
        aria-pressed=${selected ? "true" : "false"}
        aria-label=${title}
        @click=${() => options.onSelect?.(index)}
        @keydown=${(event: KeyboardEvent) => {
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            options.onSelect?.(index);
          }
        }}
      >
        <title>${title}</title>
        ${body}
      </g>
    `;
  };
  const bars =
    kind === "line"
      ? []
      : slots.map((point, index) => {
          const barWidth = Math.min(options.compact ? 16 : 22, slot * 0.62);
          const x = (point.x - barWidth / 2).toFixed(1);
          const hit = svg`
            <rect
              class="hit"
              x=${(point.x - slot / 2).toFixed(1)}
              y=${box.top}
              width=${slot.toFixed(1)}
              height=${plotHeight}
            ></rect>
          `;
          if (kind === "stack") {
            const segments = [
              { amount: Math.max(0, point.value ?? 0), className: "bar ac" },
              { amount: Math.max(0, point.stack ?? 0), className: "bar dc" },
            ];
            let cursor = 0;
            const rects = segments.map((segment) => {
              const bottom = yOf(cursor);
              cursor += segment.amount;
              const top = yOf(cursor);
              const height = Math.max(0, bottom - top);
              if (height <= 0) {
                return svg``;
              }
              return svg`
                <rect
                  class=${segment.className}
                  x=${x}
                  y=${top.toFixed(1)}
                  width=${barWidth.toFixed(1)}
                  height=${height.toFixed(1)}
                  rx="2"
                ></rect>
              `;
            });
            return selectable(index, point.title, svg`${hit}${rects}`);
          }
          const y = point.y ?? baseline;
          const height = Math.max(0, baseline - y);
          return selectable(
            index,
            point.title,
            svg`
              ${hit}
              <rect
                class="bar"
                x=${x}
                y=${y.toFixed(1)}
                width=${barWidth.toFixed(1)}
                height=${height.toFixed(1)}
                rx="2"
              ></rect>
            `,
          );
        });
  const lineParts: string[] = [];
  let penDown = false;
  if (kind === "line") {
    for (const point of slots) {
      if (point.y == null) {
        penDown = false;
        continue;
      }
      lineParts.push(`${penDown ? "L" : "M"}${point.x.toFixed(1)},${point.y.toFixed(1)}`);
      penDown = true;
    }
  }
  const lineDots =
    kind === "line"
      ? slots.map((point, index) => {
          if (point.y == null) {
            return svg``;
          }
          return selectable(
            index,
            point.title,
            svg`
              <circle class="hit" cx=${point.x.toFixed(1)} cy=${point.y!.toFixed(1)} r="12"></circle>
              <circle class="dot" cx=${point.x.toFixed(1)} cy=${point.y!.toFixed(1)} r="3.5"></circle>
            `,
          );
        })
      : [];
  return svg`
    <svg
      class=${options.compact ? "series-chart compact" : "series-chart"}
      viewBox=${`0 0 ${box.width} ${box.height}`}
      width="100%"
      height=${String(box.height)}
      role="group"
      aria-label=${label}
      preserveAspectRatio="xMinYMin meet"
    >
      ${ticks.map((tick) => {
        const y = yOf(tick);
        return svg`
          <line class="grid" x1=${box.left} y1=${y.toFixed(1)} x2=${box.width - box.right} y2=${y.toFixed(1)}></line>
          <text class="y-label" x=${box.left - 4} y=${(y + 4).toFixed(1)} text-anchor="end">
            ${formatTick(tick)}
          </text>
        `;
      })}
      ${bars}
      ${lineParts.length > 1 ? svg`<path class="line" d=${lineParts.join(" ")}></path>` : svg``}
      ${lineDots}
      ${slots.map(
        (point, index) =>
          index % labelStep === 0 || index === slots.length - 1
            ? svg`<text class="x-label" x=${point.x.toFixed(1)} y=${box.height - 6} text-anchor="middle">${point.label}</text>`
            : svg``,
      )}
    </svg>
  `;
}

export function seriesValues(points: ReadonlyArray<object>, key: string): number[] {
  const values: number[] = [];
  for (const point of points) {
    const raw = (point as Record<string, unknown>)[key];
    if (typeof raw === "number" && Number.isFinite(raw)) {
      values.push(raw);
    }
  }
  return values;
}

export function sparkline(values: number[], width = 320, height = 56) {
  if (values.length < 2) {
    return svg``;
  }
  const min = Math.min(...values);
  const max = Math.max(...values);
  const span = max - min || 1;
  const step = width / (values.length - 1);
  const coords = values
    .map((value, index) => {
      const x = index * step;
      const y = height - 4 - ((value - min) / span) * (height - 8);
      return `${x.toFixed(1)},${y.toFixed(1)}`;
    })
    .join(" ");
  return svg`
    <svg class="chart" viewBox="0 0 ${width} ${height}" preserveAspectRatio="none" aria-hidden="true">
      <polyline points=${coords}></polyline>
    </svg>
  `;
}
