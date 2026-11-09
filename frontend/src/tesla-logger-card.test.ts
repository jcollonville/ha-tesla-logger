import { describe, expect, it, vi } from "vitest";

import { safeError } from "./format";
import { TeslaLoggerCard } from "./tesla-logger-card";
import type { HomeAssistant } from "./types";

const HISTORY_ERROR = {
  code: "home_assistant_error",
  message: "The action requires responses and must be called with return_response=True.",
};

describe("safeError", () => {
  it("shows the message from a Home Assistant error object", () => {
    expect(safeError(HISTORY_ERROR, "Could not load history.")).toBe(HISTORY_ERROR.message);
  });

  it("shows Error and string messages", () => {
    expect(safeError(new Error("network down"), "Could not load history.")).toBe("network down");
    expect(safeError("plain failure", "Could not load history.")).toBe("plain failure");
  });

  it("hides token-like text", () => {
    expect(safeError({ code: "unknown", message: "token tl_secret failed" }, "fallback")).toBe(
      "fallback",
    );
  });
});

describe("TeslaLoggerCard service calls", () => {
  it("requests a service response and reads it back", async () => {
    const callService = vi.fn().mockResolvedValue({
      response: { data: [], page: 1, per_page: 20, total: 0 },
    });
    const card = new TeslaLoggerCard();
    card.hass = {
      states: {},
      entities: {
        "sensor.tesla_location": { device_id: "device-1" },
      },
      callService,
    } as HomeAssistant;
    card.setConfig({ entity: "sensor.tesla_location" });

    const payload = await (
      card as unknown as {
        call(service: string, data: Record<string, unknown>): Promise<unknown>;
      }
    ).call("get_drives", { page: 1 });

    expect(callService).toHaveBeenCalledTimes(1);
    const args = callService.mock.calls[0];
    expect(args[0]).toBe("tesla_logger");
    expect(args[1]).toBe("get_drives");
    expect(args[2]).toEqual({ device_id: "device-1", page: 1 });
    expect(args[4]).toBe(false);
    expect(args[5]).toBe(true);
    expect(payload).toEqual({ data: [], page: 1, per_page: 20, total: 0 });
  });
});
