import { describe, expect, it } from "vitest";

import { chargeRow, listQuery, readPosition, routeRoads } from "./present";

describe("readPosition", () => {
  it("accepts a finite pair and rejects everything else", () => {
    expect(readPosition(0, 0)).toEqual({ lat: 0, lon: 0 });
    expect(readPosition(null, 2)).toBeNull();
    expect(readPosition(91, 0)).toBeNull();
    expect(readPosition(0, Number.NaN)).toBeNull();
  });
});

describe("routeRoads", () => {
  it("projects a path and does not print the source coordinates", () => {
    const roads = routeRoads([
      { recorded_at: "2026-11-01T00:00:00Z", latitude: 0, longitude: 0 },
      { recorded_at: "2026-11-01T00:01:00Z", latitude: 0.02, longitude: 0.03 },
    ]);
    expect(roads).toHaveLength(1);
    expect(roads[0]).toMatch(/^M/);
    expect(roads.join(" ")).not.toContain("0.02");
    expect(roads.join(" ")).not.toContain("0.03");
  });
});

describe("listQuery", () => {
  it("omits bounds for the whole history", () => {
    expect(listQuery("all", "UTC")).toEqual({});
  });
});

describe("chargeRow", () => {
  it("drops placeholder charger types", () => {
    expect(chargeRow({ id: 1, start_at: "2026-11-01T00:00:00Z", charger_type: "<invalid>" }).charger_type).toBeNull();
    expect(chargeRow({ id: 1, start_at: "2026-11-01T00:00:00Z", charger_type: " AC " }).charger_type).toBe("AC");
    expect(chargeRow({ id: 1, start_at: "2026-11-01T00:00:00Z", charger_type: "NULL" }).charger_type).toBeNull();
  });
});
