import { svg, type SVGTemplateResult } from "lit";

/**
 * Side-profile fallback used when the official render cannot be loaded.
 * The silhouette matches the tesla-rs console drawing (profile points and a
 * Catmull-Rom spline). It is not Tesla artwork. Paint stays pearl white
 * because the card does not receive an exterior colour.
 */

type Body = "3" | "y" | "s" | "x" | "ct";

interface Profile {
  top: ReadonlyArray<readonly [number, number]>;
  glass: ReadonlyArray<readonly [number, number]>;
  wheels: readonly [number, number];
  wheelY: number;
  radius: number;
  pillar: number;
  angular: boolean;
}

const MODEL_3: Profile = {
  top: [
    [27, 121],
    [15, 111],
    [16, 99],
    [40, 89],
    [96, 80],
    [142, 73],
    [178, 54],
    [216, 46],
    [254, 47],
    [292, 56],
    [336, 69],
    [367, 76],
    [383, 84],
    [386, 104],
    [377, 121],
  ],
  glass: [
    [152, 73.5],
    [180, 57.5],
    [216, 50],
    [254, 51],
    [288, 59],
    [327, 71.5],
  ],
  wheels: [87, 316],
  wheelY: 113,
  radius: 27,
  pillar: 238,
  angular: false,
};

const MODEL_Y: Profile = {
  top: [
    [25, 117],
    [13, 104],
    [14, 88],
    [40, 76],
    [96, 67],
    [138, 59],
    [176, 38],
    [214, 28],
    [262, 29],
    [306, 37],
    [346, 52],
    [372, 61],
    [386, 73],
    [389, 99],
    [380, 116],
  ],
  glass: [
    [148, 60],
    [180, 42],
    [214, 32.5],
    [262, 33.5],
    [302, 41.5],
    [336, 55],
  ],
  wheels: [86, 316],
  wheelY: 109,
  radius: 29,
  pillar: 240,
  angular: false,
};

const MODEL_S: Profile = {
  top: [
    [26, 121],
    [12, 110],
    [14, 98],
    [44, 88],
    [110, 80],
    [154, 72],
    [188, 54],
    [224, 46],
    [264, 47],
    [302, 56],
    [345, 68],
    [372, 75],
    [386, 83],
    [389, 103],
    [380, 120],
  ],
  glass: [
    [164, 72.5],
    [190, 57.5],
    [224, 50],
    [264, 51],
    [298, 59],
    [337, 70.5],
  ],
  wheels: [84, 326],
  wheelY: 113,
  radius: 27,
  pillar: 250,
  angular: false,
};

const MODEL_X: Profile = {
  top: [
    [25, 118],
    [12, 104],
    [14, 89],
    [44, 78],
    [104, 69],
    [142, 61],
    [178, 40],
    [216, 31],
    [264, 31],
    [308, 38],
    [348, 50],
    [373, 58],
    [387, 70],
    [389, 99],
    [381, 117],
  ],
  glass: [
    [152, 62],
    [182, 43.5],
    [216, 35.5],
    [264, 35.5],
    [304, 42.5],
    [342, 55.5],
  ],
  wheels: [85, 322],
  wheelY: 110.5,
  radius: 29.5,
  pillar: 244,
  angular: false,
};

const CYBERTRUCK: Profile = {
  top: [
    [22, 120],
    [12, 108],
    [14, 92],
    [200, 36],
    [388, 70],
    [390, 106],
    [382, 120],
  ],
  glass: [
    [118, 67],
    [200, 42],
    [282, 56],
    [282, 66],
  ],
  wheels: [84, 320],
  wheelY: 110,
  radius: 30,
  pillar: 214,
  angular: true,
};

const PROFILES: Record<Body, Profile> = {
  "3": MODEL_3,
  y: MODEL_Y,
  s: MODEL_S,
  x: MODEL_X,
  ct: CYBERTRUCK,
};

const PAINT = "#e8e9eb";

/** Console rule: unknown cars use the Model 3 profile. */
export function carBody(model: string | undefined): Body {
  const key = (model || "")
    .toLowerCase()
    .replace(/[_\s-]/g, "")
    .replace(/^tesla/, "")
    .replace(/^model/, "");
  if (key === "y") {
    return "y";
  }
  if (key === "s") {
    return "s";
  }
  if (key === "x") {
    return "x";
  }
  if (key === "cybertruck" || key === "ct") {
    return "ct";
  }
  return "3";
}

function shade(hex: string, amount: number): string {
  const value = Number.parseInt(hex.replace("#", ""), 16);
  const channel = (shift: number) => {
    const base = (value >> shift) & 0xff;
    const target = amount >= 0 ? 255 : 0;
    const mixed = base + (target - base) * Math.abs(amount);
    return Math.round(Math.min(255, Math.max(0, mixed)))
      .toString(16)
      .padStart(2, "0");
  };
  return `#${channel(16)}${channel(8)}${channel(0)}`;
}

function spline(points: ReadonlyArray<readonly [number, number]>, angular: boolean): string {
  if (angular) {
    return points
      .slice(1)
      .map((point) => ` L${point[0].toFixed(1)} ${point[1].toFixed(1)}`)
      .join("");
  }
  let path = "";
  for (let index = 0; index < points.length - 1; index += 1) {
    const p0 = points[Math.max(0, index - 1)];
    const p1 = points[index];
    const p2 = points[index + 1];
    const p3 = points[Math.min(points.length - 1, index + 2)];
    const c1x = p1[0] + (p2[0] - p0[0]) / 6;
    const c1y = p1[1] + (p2[1] - p0[1]) / 6;
    const c2x = p2[0] - (p3[0] - p1[0]) / 6;
    const c2y = p2[1] - (p3[1] - p1[1]) / 6;
    path += ` C${c1x.toFixed(1)} ${c1y.toFixed(1)} ${c2x.toFixed(1)} ${c2y.toFixed(1)} ${p2[0].toFixed(1)} ${p2[1].toFixed(1)}`;
  }
  return path;
}

function bodyPath(shape: Profile): string {
  const first = shape.top[0];
  const last = shape.top[shape.top.length - 1];
  let path = `M${first[0].toFixed(1)} ${first[1].toFixed(1)}${spline(shape.top, shape.angular)}`;
  const sill = Math.max(last[1], first[1]);
  const arch = shape.radius + 4;
  const drop = Math.min(arch - 1, Math.max(0, sill - shape.wheelY));
  const half = Math.sqrt(arch * arch - drop * drop);
  const [front, rear] = shape.wheels;
  path += ` L${(rear + half).toFixed(1)} ${sill.toFixed(1)} A${arch.toFixed(1)} ${arch.toFixed(1)} 0 1 0 ${(rear - half).toFixed(1)} ${sill.toFixed(1)} L${(front + half).toFixed(1)} ${sill.toFixed(1)} A${arch.toFixed(1)} ${arch.toFixed(1)} 0 1 0 ${(front - half).toFixed(1)} ${sill.toFixed(1)} Z`;
  return path;
}

function glassPath(shape: Profile): string {
  const first = shape.glass[0];
  return `M${first[0].toFixed(1)} ${first[1].toFixed(1)}${spline(shape.glass, shape.angular)} Z`;
}

function well(cx: number, shape: Profile): string {
  const arch = shape.radius + 4;
  return `M${(cx - arch).toFixed(1)} ${shape.wheelY.toFixed(1)} A${arch.toFixed(1)} ${arch.toFixed(1)} 0 0 1 ${(cx + arch).toFixed(1)} ${shape.wheelY.toFixed(1)} Z`;
}

function spokes(cx: number, cy: number, radius: number): SVGTemplateResult[] {
  const lines: SVGTemplateResult[] = [];
  for (let index = 0; index < 5; index += 1) {
    const angle = (index * Math.PI * 2) / 5 - 0.3;
    const cos = Math.cos(angle);
    const sin = Math.sin(angle);
    lines.push(svg`
      <line
        x1=${(cx + cos * radius * 0.2).toFixed(1)}
        y1=${(cy + sin * radius * 0.2).toFixed(1)}
        x2=${(cx + cos * radius * 0.55).toFixed(1)}
        y2=${(cy + sin * radius * 0.55).toFixed(1)}
        stroke="#8d939b"
        stroke-opacity="0.6"
        stroke-width="2"
        stroke-linecap="round"
      ></line>
    `);
  }
  return lines;
}

/** Pearl-white side profile. `label` is the accessible name, never a VIN. */
export function carDrawing(model: string | undefined, label: string): SVGTemplateResult {
  const shape = PROFILES[carBody(model)];
  const body = bodyPath(shape);
  const glass = glassPath(shape);
  const belt = shape.glass[0][1];
  const sill = Math.max(shape.top[0][1], shape.top[shape.top.length - 1][1]);
  const nose = shape.top[2];
  const tail = shape.top[shape.top.length - 3];
  const pillarTop = Math.min(...shape.glass.map((point) => point[1]));
  return svg`
    <svg class="car" viewBox="0 0 400 160" role="img" aria-label=${label} focusable="false">
      <defs>
        <linearGradient id="tl-car-paint" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stop-color=${shade(PAINT, 0.28)}></stop>
          <stop offset="0.38" stop-color=${PAINT}></stop>
          <stop offset="0.72" stop-color=${shade(PAINT, -0.12)}></stop>
          <stop offset="1" stop-color=${shade(PAINT, -0.42)}></stop>
        </linearGradient>
        <linearGradient id="tl-car-glass" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stop-color="#4a525e"></stop>
          <stop offset="0.45" stop-color="#181b21"></stop>
          <stop offset="1" stop-color="#0a0b0d"></stop>
        </linearGradient>
        <radialGradient id="tl-car-floor" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stop-color="#000" stop-opacity="0.38"></stop>
          <stop offset="1" stop-color="#000" stop-opacity="0"></stop>
        </radialGradient>
        <radialGradient id="tl-car-rim" cx="0.4" cy="0.35" r="0.75">
          <stop offset="0" stop-color="#7d838c"></stop>
          <stop offset="0.6" stop-color="#3b3f46"></stop>
          <stop offset="1" stop-color="#22252a"></stop>
        </radialGradient>
      </defs>
      <ellipse class="car-floor" cx="200" cy="141" rx="196" ry="9" fill="url(#tl-car-floor)"></ellipse>
      ${shape.wheels.map((x) => svg`<path class="car-well" d=${well(x, shape)} fill="#0c0d0f"></path>`)}
      <path class="car-body" d=${body} fill="url(#tl-car-paint)"></path>
      <path class="car-glass" d=${glass} fill="url(#tl-car-glass)"></path>
      <line
        class="car-pillar"
        x1=${(shape.pillar - 3).toFixed(1)}
        y1=${pillarTop.toFixed(1)}
        x2=${shape.pillar.toFixed(1)}
        y2=${(belt + 1).toFixed(1)}
        stroke="#0b0c0e"
        stroke-width="3.2"
      ></line>
      <path
        class="car-line"
        d=${`M${(nose[0] + 14).toFixed(1)} ${(nose[1] - 1).toFixed(1)} Q200 ${(belt + 4).toFixed(1)} ${(tail[0] - 6).toFixed(1)} ${(tail[1] + 3).toFixed(1)}`}
        fill="none"
        stroke="#ffffff"
        stroke-opacity="0.22"
        stroke-width="1.2"
      ></path>
      <path
        class="car-line"
        d=${`M${shape.pillar.toFixed(1)} ${(belt + 3).toFixed(1)} L${(shape.pillar + 2).toFixed(1)} ${(sill - 6).toFixed(1)}`}
        fill="none"
        stroke="#000"
        stroke-opacity="0.2"
        stroke-width="0.8"
      ></path>
      <rect class="car-handle" x=${(shape.pillar - 34).toFixed(1)} y=${(belt + 8).toFixed(1)} width="15" height="2.6" rx="1.3" fill="#000" fill-opacity="0.28"></rect>
      <rect class="car-handle" x=${(shape.pillar + 30).toFixed(1)} y=${(belt + 9).toFixed(1)} width="15" height="2.6" rx="1.3" fill="#000" fill-opacity="0.28"></rect>
      <path class="car-lamp" d=${`M${(nose[0] + 4).toFixed(1)} ${(nose[1] - 1).toFixed(1)} q16 -6 32 -7 q-14 6 -30 10 z`} fill="#f4f7fb" fill-opacity="0.85"></path>
      <path class="car-lamp rear" d=${`M${(tail[0] - 21).toFixed(1)} ${(tail[1] + 1).toFixed(1)} q10 1 17 5 l-1 3.5 q-8 -3 -16.5 -5 z`} fill="#c3212f"></path>
      ${shape.wheels.map(
        (x) => svg`
          <g class="car-wheel">
            <circle cx=${x} cy=${shape.wheelY} r=${shape.radius} fill="#141518"></circle>
            <circle cx=${x} cy=${shape.wheelY} r=${(shape.radius * 0.7).toFixed(1)} fill="url(#tl-car-rim)"></circle>
            <circle cx=${x} cy=${shape.wheelY} r=${(shape.radius * 0.6).toFixed(1)} fill="none" stroke="#a9aeb5" stroke-opacity="0.55" stroke-width="1"></circle>
            ${spokes(x, shape.wheelY, shape.radius)}
            <circle cx=${x} cy=${shape.wheelY} r=${(shape.radius * 0.14).toFixed(1)} fill="#55595f"></circle>
          </g>
        `,
      )}
    </svg>
  `;
}
