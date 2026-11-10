import { render } from "lit";
import { describe, expect, it } from "vitest";

import { bucketLabel, niceMax, seriesChart, type ChartPoint } from "./charts";

function mount(points: ChartPoint[], kind: "bar" | "line") {
  const host = document.createElement("div");
  render(
    seriesChart(points, kind, "Consommation", (value) => String(Math.round(value))),
    host,
  );
  return host;
}

describe("niceMax", () => {
  it("rounds the axis up to a readable tick", () => {
    expect(niceMax(0)).toBe(1);
    expect(niceMax(180)).toBe(200);
    expect(niceMax(20)).toBe(20);
    expect(niceMax(100)).toBe(100);
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
});
