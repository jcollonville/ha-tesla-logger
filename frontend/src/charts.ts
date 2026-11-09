import { svg } from "lit";

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
