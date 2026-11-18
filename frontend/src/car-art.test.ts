import { render } from "lit";
import { describe, expect, it } from "vitest";

import { carBody, carDrawing } from "./car-art";

describe("car drawing", () => {
  it("picks the console body from a model name and falls back to Model 3", () => {
    expect(carBody("Model Y")).toBe("y");
    expect(carBody("tesla_model_s")).toBe("s");
    expect(carBody("Cybertruck")).toBe("ct");
    expect(carBody(undefined)).toBe("3");
  });

  it("draws a pearl-white profile without a photo URL", () => {
    const host = document.createElement("div");
    render(carDrawing("Model Y", "Car"), host);
    const svg = host.querySelector("svg.car");
    expect(svg?.getAttribute("aria-label")).toBe("Car");
    expect(svg?.querySelector("img")).toBeNull();
    expect(host.innerHTML).not.toContain("NaN");
    expect(host.innerHTML).not.toContain("/car.png");
    expect(host.innerHTML).toContain("url(#tl-car-paint)");
  });
});
