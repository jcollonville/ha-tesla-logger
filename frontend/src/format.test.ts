import { describe, expect, it } from "vitest";

import { detailLine, displayChargerType, formatListTimestamp } from "./format";

describe("displayChargerType", () => {
  it("returns a trimmed real charger type", () => {
    expect(displayChargerType(" AC ")).toBe("AC");
    expect(displayChargerType("Wall Connector")).toBe("Wall Connector");
    expect(displayChargerType("AC <fast>")).toBe("AC <fast>");
  });

  it("hides empty, placeholder, none, and null values", () => {
    expect(displayChargerType("")).toBeNull();
    expect(displayChargerType("   ")).toBeNull();
    expect(displayChargerType(null)).toBeNull();
    expect(displayChargerType(undefined)).toBeNull();
    expect(displayChargerType("<invalid>")).toBeNull();
    expect(displayChargerType(" <INVALID> ")).toBeNull();
    expect(displayChargerType("<>")).toBeNull();
    expect(displayChargerType("none")).toBeNull();
    expect(displayChargerType(" None ")).toBeNull();
    expect(displayChargerType("NULL")).toBeNull();
  });
});

describe("formatListTimestamp", () => {
  it("formats a compact locale date and time", () => {
    const local = new Date(2026, 10, 10, 3, 30);
    expect(formatListTimestamp(local.toISOString(), "fr")).toBe("mar. 10 nov. 03:30");
    expect(formatListTimestamp(local.toISOString(), "en")).toBe("Tue Nov 10 03:30 AM");
  });

  it("returns text that is not a date", () => {
    expect(formatListTimestamp("not-a-date", "fr")).toBe("not-a-date");
  });
});

describe("detailLine", () => {
  it("joins present pieces with a middle dot", () => {
    expect(detailLine(["30 min", null, " 18,4 km ", undefined, ""])).toBe("30 min · 18,4 km");
  });
});
