/**
 * Check the vendored @jcollonville/tesla-logger-ui tarball before install or build.
 *
 * Bump:
 * 1. Download `jcollonville-tesla-logger-ui-X.Y.Z.tgz` and `SHA256SUMS` from the
 *    `ui-vX.Y.Z` GitHub release into `frontend/vendor/`.
 * 2. Update `frontend/vendor/ui-package.json` (version, file, sha256, urls).
 * 3. Point `frontend/package.json` at `file:vendor/<tarball>`.
 * 4. Run `npm install` in `frontend/` and commit the lockfile, tarball, and sums.
 * Never load the package from a Tesla Logger server at runtime.
 */
import { createHash } from "node:crypto";
import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const vendor = join(dirname(fileURLToPath(import.meta.url)), "../vendor");
const pin = JSON.parse(readFileSync(join(vendor, "ui-package.json"), "utf8"));
const lines = readFileSync(join(vendor, "SHA256SUMS"), "utf8")
  .split("\n")
  .map((line) => line.trim())
  .filter(Boolean);

if (lines.length === 0) {
  console.error("SHA256SUMS is empty");
  process.exit(1);
}

let failed = false;
const seen = new Set();
for (const line of lines) {
  const match = /^([a-f0-9]{64})\s+\*?(\S+)$/i.exec(line);
  if (!match) {
    console.error(`Bad SHA256SUMS line: ${line}`);
    failed = true;
    continue;
  }
  const name = match[2];
  seen.add(name);
  const digest = createHash("sha256").update(readFileSync(join(vendor, name))).digest("hex");
  if (digest !== match[1].toLowerCase()) {
    console.error(`${name}: checksum mismatch`);
    failed = true;
  } else {
    console.log(`${name}: OK`);
  }
}

if (!seen.has(pin.file)) {
  console.error(`SHA256SUMS has no entry for ${pin.file}`);
  failed = true;
}
const pinned = createHash("sha256").update(readFileSync(join(vendor, pin.file))).digest("hex");
if (pinned !== pin.sha256) {
  console.error("ui-package.json sha256 does not match the tarball");
  failed = true;
}
const expectedFile = `jcollonville-tesla-logger-ui-${pin.version}.tgz`;
if (pin.file !== expectedFile || pin.tag !== `ui-v${pin.version}`) {
  console.error(`ui-package.json pin ${pin.tag} ${pin.file} does not match version ${pin.version}`);
  failed = true;
}

const pkg = JSON.parse(readFileSync(join(vendor, "../package.json"), "utf8"));
const spec = pkg.dependencies?.["@jcollonville/tesla-logger-ui"];
if (spec !== `file:vendor/${pin.file}`) {
  console.error(`package.json must depend on file:vendor/${pin.file}`);
  failed = true;
}

if (failed) {
  process.exit(1);
}
