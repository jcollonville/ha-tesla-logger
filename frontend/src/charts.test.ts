import { render } from "lit";
import { describe, expect, it } from "vitest";

import {
  bucketLabel,
  chartFrame,
  currentBucketIndex,
  niceMax,
  seriesChart,
  type ChartPoint,
} from "./charts";

function mount(
  points: ChartPoint[],
  kind: "bar" | "line" | "stack",
  width?: number,
  compact?: boolean,
) {
  const host = document.createElement("div");
  render(
    seriesChart(points, kind, "Consommation", (value) => String(Math.round(value)), {
      width,
      compact,
    }),
    host,
  );
  return host;
}

function viewBox(host: HTMLElement): number[] {
  return (host.querySelector("svg")?.getAttribute("viewBox") ?? "")
    .split(" ")
    .map((part) => Number(part));
}

describe("niceMax", () => {
  it("rounds the axis up to a readable tick", () => {
    expect(niceMax(0)).toBe(1);
    expect(niceMax(180)).toBe(200);
    expect(niceMax(20)).toBe(20);
    expect(niceMax(100)).toBe(100);
  });
});

describe("currentBucketIndex", () => {
  it("prefers the bucket that falls in the current month", () => {
    const now = new Date(2026, 10, 10, 12);
    const starts = [
      new Date(2026, 9, 1).toISOString(),
      new Date(2026, 10, 1).toISOString(),
    ];
    expect(currentBucketIndex(starts, "month", now)).toBe(1);
    expect(currentBucketIndex([starts[0]], "month", now)).toBe(0);
  });
});

describe("bucketLabel", () => {
  it("formats months and weeks in French", () => {
    const month = new Date(2026, 10, 15).toISOString();
    expect(bucketLabel(month, "month", "fr").toLowerCase()).toContain("nov");
    expect(bucketLabel(month, "year", "fr")).toBe("2026");
    const week = bucketLabel(month, "week", "fr");
    expect(week.toLowerCase()).toContain("nov");
    expect(week).toContain("15");
  });

  it("uses the locale's month name and the selected time zone", () => {
    const december = "2026-12-01T12:00:00Z";
    expect(bucketLabel(december, "month", { language: "en", timeZone: "UTC" })).toBe("Dec");
    expect(bucketLabel(december, "month", { language: "fr", timeZone: "UTC" }).toLowerCase()).toBe(
      "déc",
    );
    const nearMidnight = "2026-12-01T00:30:00Z";
    expect(
      bucketLabel(nearMidnight, "month", { language: "fr", timeZone: "America/New_York" })
        .toLowerCase(),
    ).toContain("nov");
    expect(bucketLabel(nearMidnight, "week", { language: "en", timeZone: "UTC" })).toMatch(/Dec/);
    expect(bucketLabel(nearMidnight, "week", { language: "en", timeZone: "UTC" })).not.toMatch(
      /déc/i,
    );
  });
});

describe("seriesChart", () => {
  const points: ChartPoint[] = [
    { label: "oct", value: 180, title: "oct · 180 Wh/km" },
    { label: "nov", value: null, title: "nov · —" },
    { label: "déc", value: 90, title: "déc · 90 Wh/km" },
  ];

  it("draws a line that breaks on missing consumption", () => {
    const host = mount(points, "line");
    const path = host.querySelector("path.line")?.getAttribute("d") ?? "";
    expect(path).not.toMatch(/L/);
    expect(host.querySelectorAll("circle.dot")).toHaveLength(2);
    expect(host.querySelector("svg")?.getAttribute("aria-label")).toBe("Consommation");
    const titles = Array.from(host.querySelectorAll("title"), (node) => node.textContent);
    expect(titles).toContain("oct · 180 Wh/km");
    expect(titles).not.toContain("nov · —");
  });

  it("draws a bar for every bucket, including zero", () => {
    const host = mount(
      [
        { label: "oct", value: 100, title: "oct · 100 km" },
        { label: "nov", value: 0, title: "nov · 0 km" },
      ],
      "bar",
    );
    expect(host.querySelectorAll("rect.bar")).toHaveLength(2);
    const titles = Array.from(host.querySelectorAll("title"), (node) => node.textContent);
    expect(titles).toEqual(["oct · 100 km", "nov · 0 km"]);
    const labels = Array.from(host.querySelectorAll(".y-label"), (node) => node.textContent?.trim());
    expect(labels).toContain("0");
    expect(labels).toContain("100");
  });

  it("stacks AC under DC", () => {
    const host = mount(
      [
        { label: "oct", value: 12, stack: 8, title: "oct · AC 12 · DC 8" },
        { label: "nov", value: 5, stack: 0, title: "nov · AC 5 · DC 0" },
      ],
      "stack",
    );
    expect(host.querySelectorAll("rect.bar.ac")).toHaveLength(2);
    expect(host.querySelectorAll("rect.bar.dc")).toHaveLength(1);
  });

  it("keeps height, type, and stroke geometry fixed when the plot grows wider", () => {
    const narrow = mount(points, "line", 360);
    const mid = mount(points, "line", 1000);
    const wide = mount(points, "line", 1600);
    const narrowBox = viewBox(narrow);
    const midBox = viewBox(mid);
    const wideBox = viewBox(wide);
    expect(narrowBox[2]).toBe(360);
    expect(wideBox[2]).toBe(1600);
    expect(narrowBox[3]).toBe(chartFrame(360).height);
    expect(midBox[3]).toBe(chartFrame(1600).height);
    expect(wideBox[3]).toBe(midBox[3]);
    expect(narrowBox[3]).toBeGreaterThanOrEqual(170);
    expect(narrowBox[3]).toBeLessThan(midBox[3]);
    expect(wideBox[3]).toBeLessThanOrEqual(220);
    expect(wideBox[3]).toBeLessThan((1600 / 360) * narrowBox[3]);
    expect(wide.querySelector("svg")?.getAttribute("height")).toBe(String(wideBox[3]));
    expect(narrow.querySelector("circle.dot")?.getAttribute("r")).toBe("3.5");
    expect(wide.querySelector("circle.dot")?.getAttribute("r")).toBe("3.5");
    const yOf = (host: HTMLElement) => host.querySelector("circle.dot")?.getAttribute("cy");
    expect(yOf(wide)).toBe(yOf(mid));
    const compactNarrow = viewBox(mount(points, "bar", 360, true));
    const compactWide = viewBox(mount(points, "bar", 1600, true));
    expect(compactNarrow[3]).toBe(chartFrame(360, true).height);
    expect(compactWide[3]).toBe(chartFrame(1600, true).height);
    expect(compactWide[3]).toBeLessThan(narrowBox[3]);
    expect(compactWide[3]).toBeLessThanOrEqual(150);
  });
});
