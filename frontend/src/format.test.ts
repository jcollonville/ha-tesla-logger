import { describe, expect, it } from "vitest";

import {
  chargeHistory,
  datePrefsFromHass,
  detailLine,
  displayChargerType,
  driveHistory,
  formatListRange,
  formatListTimestamp,
} from "./format";

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
    expect(formatListTimestamp(local.toISOString(), "fr")).toBe("mar. 10 nov., 03:30");
    expect(formatListTimestamp(local.toISOString(), "en")).toBe("Tue, Nov 10, 03:30 AM");
  });

  it("returns text that is not a date", () => {
    expect(formatListTimestamp("not-a-date", "fr")).toBe("not-a-date");
  });

  it("follows French and English clocks and the Home Assistant time zone", () => {
    const instant = "2026-11-10T15:14:00Z";
    expect(formatListTimestamp(instant, { language: "fr", hour12: false, timeZone: "UTC" })).toBe(
      "mar. 10 nov., 15:14",
    );
    expect(formatListTimestamp(instant, { language: "en", hour12: true, timeZone: "UTC" })).toBe(
      "Tue, Nov 10, 3:14 PM",
    );
    expect(
      formatListTimestamp(instant, { language: "en", hour12: false, timeZone: "UTC" }),
    ).toBe("Tue, Nov 10, 15:14");
    expect(
      formatListTimestamp(instant, {
        language: "fr",
        hour12: false,
        timeZone: "America/New_York",
      }),
    ).toBe("mar. 10 nov., 10:14");
    const fromHass = datePrefsFromHass({
      locale: { language: "fr", time_format: "24", time_zone: "server" },
      config: { time_zone: "UTC" },
    });
    expect(formatListTimestamp(instant, fromHass)).toBe("mar. 10 nov., 15:14");
    const localZone = datePrefsFromHass({
      locale: { language: "en", time_format: "12", time_zone: "local" },
      config: { time_zone: "Pacific/Auckland" },
    });
    expect(localZone.timeZone).toBeUndefined();
    expect(localZone.hour12).toBe(true);
  });
});

describe("formatListRange", () => {
  it("appends the end time on the same day and the full stamp across days", () => {
    const start = new Date(2026, 10, 10, 3, 30).toISOString();
    const sameDay = new Date(2026, 10, 10, 4, 10).toISOString();
    const nextDay = new Date(2026, 10, 11, 8, 0).toISOString();
    expect(formatListRange(start, undefined, "fr")).toBe("mar. 10 nov., 03:30");
    expect(formatListRange(start, sameDay, "fr")).toBe("mar. 10 nov., 03:30–04:10");
    expect(formatListRange(start, nextDay, "fr")).toBe(
      "mar. 10 nov., 03:30 – mer. 11 nov., 08:00",
    );
  });

  it("formats a French and an English range in the chosen zone", () => {
    const start = "2026-11-10T15:14:00Z";
    const end = "2026-11-10T15:29:00Z";
    expect(formatListRange(start, end, { language: "fr", hour12: false, timeZone: "UTC" })).toBe(
      "mar. 10 nov., 15:14–15:29",
    );
    expect(formatListRange(start, end, { language: "en", hour12: true, timeZone: "UTC" })).toBe(
      "Tue, Nov 10, 3:14 PM–3:29 PM",
    );
  });
});

describe("history rows", () => {
  it("puts distance on the drive figure and SOC ahead of energy used", () => {
    const start = new Date(2026, 10, 9, 8, 0).toISOString();
    const row = driveHistory(
      {
        id: 7,
        start_at: start,
        end_at: new Date(2026, 10, 9, 8, 30).toISOString(),
        duration_s: 1800,
        distance_km: 18.4,
        energy_used_kwh: 3.2,
        start_battery_level: 70,
        end_battery_level: 64,
        start_address: " Maison ",
        end_address: "Bureau",
      },
      "fr",
    );
    expect(row.when).toBe("lun. 9 nov., 08:00–08:30");
    expect(row.details).toEqual(["30 min", "174 Wh/km", "70 → 64 %"]);
    expect(row.place).toBe("Maison → Bureau");
    expect(row.figure).toBe("18,4 km");
    expect(row.detail).toBe("30 min · 174 Wh/km · 70 → 64 %");
    const fallback = driveHistory(
      { id: 8, start_at: start, duration_s: 600, energy_used_kwh: 1.5 },
      "fr",
    );
    expect(fallback.place).toBeNull();
    expect(fallback.figure).toBeNull();
    expect(fallback.detail).toBe("10 min · 1,5 kWh");
  });

  it("puts charge energy on the figure and keeps AC/DC with the secondary line", () => {
    const start = new Date(2026, 10, 10, 3, 30).toISOString();
    const row = chargeHistory(
      {
        id: 1,
        start_at: start,
        duration_s: 2400,
        energy_added_kwh: 6.5,
        max_power_kw: 11,
        charger_type: " AC ",
        start_battery_level: 20,
        end_battery_level: 55,
        address: " Maison ",
      },
      "fr",
    );
    expect(row.place).toBe("Maison");
    expect(row.figure).toBe("6,5 kWh");
    expect(row.detail).toBe("40 min · 20 → 55 % · 11 kW · AC");
    const named = chargeHistory(
      {
        id: 2,
        start_at: start,
        duration_s: 900,
        energy_added_kwh: 22,
        is_dc: true,
        charger_type: "Supercharger",
        max_power_kw: 120,
      },
      "fr",
    );
    expect(named.place).toBe("Supercharger");
    expect(named.detail).toBe("15 min · 120 kW · DC");
    expect(
      chargeHistory({ id: 3, start_at: start, charger_type: "<invalid>" }, "fr").place,
    ).toBeNull();
  });
});

describe("detailLine", () => {
  it("joins present pieces with a middle dot", () => {
    expect(detailLine(["30 min", null, " 18,4 km ", undefined, ""])).toBe("30 min · 18,4 km");
  });
});
