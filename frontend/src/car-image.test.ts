import { describe, expect, it, vi } from "vitest";

import {
  CAR_IMAGE_SIGN_SECONDS,
  carImagePath,
  carImageTarget,
  signedCarImageUrl,
  vehicleIdOf,
} from "./car-image";
import type { HomeAssistant } from "./types";

describe("car image url", () => {
  it("uses the numeric vehicle id and ignores a VIN", () => {
    expect(vehicleIdOf(7)).toBe(7);
    expect(vehicleIdOf("12")).toBe(12);
    expect(vehicleIdOf("5YJTEST0000000001")).toBeNull();
    expect(vehicleIdOf("1.5")).toBeNull();
    expect(
      carImageTarget([
        { attributes: { vin: "5YJTEST0000000001", vehicle_id: "5YJTEST0000000001" } },
        { attributes: { config_entry_id: "entry-1", vehicle_id: 7, vin: "5YJTEST0000000001" } },
      ]),
    ).toEqual({ entryId: "entry-1", vehicleId: 7 });
    expect(carImagePath("entry-1", 7)).toBe("/api/tesla_logger/entry-1/7/car.png");
  });

  it("asks Home Assistant to sign the same-origin path", async () => {
    const callWS = vi.fn().mockResolvedValue({
      path: "/api/tesla_logger/entry-1/7/car.png?authSig=signed",
    });
    const hass = {
      states: {},
      callService: vi.fn(),
      callWS,
      hassUrl: (path: string) => `http://home.local${path}`,
    } as unknown as HomeAssistant;
    const url = await signedCarImageUrl(hass, "entry-1", 7);
    expect(callWS).toHaveBeenCalledWith({
      type: "auth/sign_path",
      path: "/api/tesla_logger/entry-1/7/car.png",
      expires: CAR_IMAGE_SIGN_SECONDS,
    });
    expect(url).toBe("http://home.local/api/tesla_logger/entry-1/7/car.png?authSig=signed");
    expect(url).not.toContain("5YJ");
    expect(await signedCarImageUrl({ ...hass, callWS: undefined }, "entry-1", 7)).toBeNull();
  });

  it("rejects a signed path that is not on this host", async () => {
    const hass = {
      states: {},
      callService: vi.fn(),
      callWS: vi.fn().mockResolvedValue({ path: "https://example.test/car.png" }),
      hassUrl: (path: string) => path,
    } as unknown as HomeAssistant;
    expect(await signedCarImageUrl(hass, "entry-1", 7)).toBeNull();
  });
});
