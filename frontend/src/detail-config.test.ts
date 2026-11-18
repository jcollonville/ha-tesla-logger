import { describe, expect, it } from "vitest";

import {
  CHARGE_DETAIL_DEFAULTS,
  DRIVE_DETAIL_DEFAULTS,
  chargeDetailFlags,
  driveDetailFlags,
  pageSize,
} from "./detail-config";

describe("pageSize", () => {
  it("defaults to 10 and clamps the editor value", () => {
    expect(pageSize(undefined)).toBe(10);
    expect(pageSize({ entity: "sensor.car" })).toBe(10);
    expect(pageSize({ entity: "sensor.car", page_size: 25 })).toBe(25);
    expect(pageSize({ entity: "sensor.car", page_size: 0 })).toBe(1);
    expect(pageSize({ entity: "sensor.car", page_size: 80.4 })).toBe(50);
  });
});

describe("detail flags", () => {
  it("keeps every metric when the block is omitted", () => {
    expect(driveDetailFlags({ entity: "sensor.car" })).toEqual(DRIVE_DETAIL_DEFAULTS);
    expect(chargeDetailFlags(undefined)).toEqual(CHARGE_DETAIL_DEFAULTS);
  });

  it("merges booleans and ignores anything else", () => {
    const drive = driveDetailFlags({
      entity: "sensor.car",
      drive_detail: { map: false, speed: "no" as unknown as boolean },
    });
    expect(drive.map).toBe(false);
    expect(drive.speed).toBe(true);
    expect(drive.distance).toBe(true);
    const charge = chargeDetailFlags({
      entity: "sensor.car",
      charge_detail: { curve: false, cost: false },
    });
    expect(charge.curve).toBe(false);
    expect(charge.cost).toBe(false);
    expect(charge.soc).toBe(true);
  });
});
