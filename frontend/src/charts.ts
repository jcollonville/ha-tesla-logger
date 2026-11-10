import { svg } from "lit";
import type { Lang } from "./i18n";
import type { Period } from "./types";

/** Buckets requested for each chart period. Oldest to newest. */
export const SERIES_COUNT: Record<Period, number> = {
  week: 12,
  month: 12,
  year: 6,
};

const CHART_WIDTH = 360;
const CHART_HEIGHT = 168;
const PLOT_LEFT = 42;
const PLOT_RIGHT = 10;
const PLOT_TOP = 12;
const PLOT_BOTTOM = 28;

export interface ChartPoint {
  label: string;
  value: number | null;
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

export function seriesChart(
  points: ChartPoint[],
  kind: "bar" | "line",
  label: string,
  formatTick: (value: number) => string,
) {
  const finite = points
    .map((point) => point.value)
    .filter((value): value is number => value != null && Number.isFinite(value) && value > 0);
  const max = niceMax(finite.length ? Math.max(...finite) : 0);
  const plotWidth = CHART_WIDTH - PLOT_LEFT - PLOT_RIGHT;
  const plotHeight = CHART_HEIGHT - PLOT_TOP - PLOT_BOTTOM;
  const slot = points.length > 0 ? plotWidth / points.length : plotWidth;
  const yOf = (value: number) => PLOT_TOP + plotHeight - (value / max) * plotHeight;
  const baseline = yOf(0);
  const ticks = [max, max / 2, 0];
  const slots = points.map((point, index) => {
    const x = PLOT_LEFT + slot * index + slot / 2;
    const value = point.value != null && Number.isFinite(point.value) ? point.value : null;
    const y = value == null ? null : yOf(Math.max(0, value));
    return { ...point, x, y, value };
  });
  const labelStep = points.length > 8 ? 2 : 1;
  const bars =
    kind === "bar"
      ? slots.map((point) => {
          const barWidth = Math.min(22, slot * 0.62);
          const y = point.y ?? baseline;
          const height = Math.max(0, baseline - y);
          return svg`
            <g>
              <title>${point.title}</title>
              <rect
                class="hit"
                x=${(point.x - slot / 2).toFixed(1)}
                y=${PLOT_TOP}
                width=${slot.toFixed(1)}
                height=${plotHeight}
              ></rect>
              <rect
                class="bar"
                x=${(point.x - barWidth / 2).toFixed(1)}
                y=${y.toFixed(1)}
                width=${barWidth.toFixed(1)}
                height=${height.toFixed(1)}
                rx="2"
              ></rect>
            </g>
          `;
        })
      : [];
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
      ? slots
          .filter((point) => point.y != null)
          .map(
            (point) => svg`
              <g>
                <title>${point.title}</title>
                <circle class="dot" cx=${point.x.toFixed(1)} cy=${point.y!.toFixed(1)} r="3.5"></circle>
              </g>
            `,
          )
      : [];
  return svg`
    <svg
      class="series-chart"
      viewBox="0 0 ${CHART_WIDTH} ${CHART_HEIGHT}"
      role="img"
      aria-label=${label}
      preserveAspectRatio="xMidYMid meet"
    >
      ${ticks.map((tick) => {
        const y = yOf(tick);
        return svg`
          <line class="grid" x1=${PLOT_LEFT} y1=${y.toFixed(1)} x2=${CHART_WIDTH - PLOT_RIGHT} y2=${y.toFixed(1)}></line>
          <text class="y-label" x=${PLOT_LEFT - 6} y=${(y + 4).toFixed(1)} text-anchor="end">
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
            ? svg`<text class="x-label" x=${point.x.toFixed(1)} y=${CHART_HEIGHT - 8} text-anchor="middle">${point.label}</text>`
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
