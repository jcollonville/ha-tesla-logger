import { describe, expect, it } from "vitest";

import {
  SHOW_DEFAULTS,
  chartsVisible,
  fallbackView,
  seriesNeeded,
  showFlags,
} from "./show-config";

describe("showFlags", () => {
  it("shows every block when show is omitted", () => {
    expect(showFlags({ entity: "sensor.car" })).toEqual(SHOW_DEFAULTS);
    expect(showFlags(undefined)).toEqual(SHOW_DEFAULTS);
  });

  it("merges a partial map and ignores non-booleans", () => {
    const flags = showFlags({
      entity: "sensor.car",
      show: {
        drives: false,
        chart_energy: false,
        totals: "yes" as unknown as boolean,
      },
    });
    expect(flags.drives).toBe(false);
    expect(flags.chart_energy).toBe(false);
    expect(flags.totals).toBe(true);
    expect(flags.charges).toBe(true);
    expect(flags.consumption_vs_temp).toBe(true);
    expect(flags.status).toBe(true);
  });
});

describe("chart visibility", () => {
  it("hides the charts tab only when every chart block is off", () => {
    const hidden = showFlags({
      entity: "sensor.car",
      show: {
        chart_consumption: false,
        chart_distance: false,
        chart_energy: false,
        totals: false,
        battery_health: false,
        charging_split: false,
        vampire_drain: false,
        consumption_vs_temp: false,
      },
    });
    expect(chartsVisible(hidden)).toBe(false);
    expect(seriesNeeded(hidden)).toBe(false);
    expect(fallbackView("charts", hidden)).toBe("status");

    const tempOnly = showFlags({
      entity: "sensor.car",
      show: {
        chart_consumption: false,
        chart_distance: false,
        chart_energy: false,
        totals: false,
        battery_health: false,
        charging_split: false,
        vampire_drain: false,
      },
    });
    expect(chartsVisible(tempOnly)).toBe(true);
    expect(seriesNeeded(tempOnly)).toBe(false);
    expect(fallbackView("drives", showFlags({ entity: "sensor.car", show: { drives: false } }))).toBe(
      "status",
    );
  });
});
