import { transformSync } from "esbuild";
import { readFileSync, readdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";
import { brotliCompressSync, constants, gzipSync } from "node:zlib";
import type { Plugin } from "vite";
import { defineConfig } from "vitest/config";

const root = fileURLToPath(new URL(".", import.meta.url));
const outDir = fileURLToPath(new URL("../custom_components/tesla_logger/www", import.meta.url));
const manifest = JSON.parse(
  readFileSync(new URL("../custom_components/tesla_logger/manifest.json", import.meta.url), "utf8"),
) as { version: string };
const cardVersion = manifest.version;
const banner = "/* Tesla Logger Lovelace card. Built from frontend/. Do not edit. */\n";

function gzipDeterministic(data: Buffer): Buffer {
  const compressed = gzipSync(data, { level: 9 });
  // Zero the gzip mtime so rebuilds of the same bytes stay identical.
  compressed.writeUInt32LE(0, 4);
  return compressed;
}

function versionQuery(file: string): string {
  return file.includes("?") ? file : `${file}?v=${cardVersion}`;
}

/** Append the manifest version to chunk URLs and write .gz/.br siblings. */
function versionedPrecompressedChunks(): Plugin {
  return {
    name: "versioned-precompressed-chunks",
    apply: "build",
    generateBundle(_options, bundle) {
      for (const item of Object.values(bundle)) {
        if (item.type !== "chunk") {
          continue;
        }
        item.code = item.code
          .replace(
            /(\bimport\s*\(\s*["'`])(\.\/[^"'`]+\.js)(["'`]\s*\))/g,
            (_match, open: string, file: string, close: string) =>
              `${open}${versionQuery(file)}${close}`,
          )
          .replace(
            /(\bfrom\s*["'`])(\.\/[^"'`]+\.js)(["'`])/g,
            (_match, open: string, file: string, close: string) =>
              `${open}${versionQuery(file)}${close}`,
          );
      }
    },
    closeBundle() {
      for (const name of readdirSync(outDir)) {
        if (!name.endsWith(".js")) {
          continue;
        }
        const file = join(outDir, name);
        // ES library builds keep whitespace. Minify again so Leaflet stays small.
        const minified = transformSync(readFileSync(file, "utf8"), {
          minify: true,
          legalComments: "none",
          target: "es2022",
        });
        writeFileSync(file, banner + minified.code);
        const data = readFileSync(file);
        writeFileSync(`${file}.gz`, gzipDeterministic(data));
        writeFileSync(
          `${file}.br`,
          brotliCompressSync(data, {
            params: { [constants.BROTLI_PARAM_QUALITY]: 11 },
          }),
        );
      }
    },
  };
}

export default defineConfig({
  test: {
    environment: "happy-dom",
    include: ["src/**/*.test.ts"],
  },
  base: "./",
  plugins: [versionedPrecompressedChunks()],
  build: {
    // Library mode skips Vite's preload helper, which would otherwise make
    // every chunk import the loader. ES output still code-splits.
    lib: {
      entry: `${root}src/loader.ts`,
      formats: ["es"],
      fileName: () => "tesla-logger-card.js",
    },
    outDir,
    emptyOutDir: true,
    sourcemap: false,
    cssCodeSplit: false,
    minify: "esbuild",
    modulePreload: false,
    rollupOptions: {
      external: () => false,
      output: {
        format: "es",
        inlineDynamicImports: false,
        entryFileNames: "tesla-logger-card.js",
        chunkFileNames: "[name]-[hash].js",
        manualChunks(id) {
          if (id.includes("/leaflet-map") || id.includes("node_modules/leaflet")) {
            return "leaflet";
          }
        },
      },
    },
  },
});
