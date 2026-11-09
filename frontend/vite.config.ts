import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";

const root = fileURLToPath(new URL(".", import.meta.url));

export default defineConfig({
  build: {
    lib: {
      entry: `${root}src/tesla-logger-card.ts`,
      formats: ["es"],
      fileName: () => "tesla-logger-card.js",
    },
    outDir: `${root}../custom_components/tesla_logger/www`,
    emptyOutDir: true,
    sourcemap: false,
    cssCodeSplit: false,
    minify: "esbuild",
    rollupOptions: {
      external: () => false,
      output: {
        inlineDynamicImports: true,
        banner:
          "/* Tesla Logger Lovelace card. Built from frontend/. Do not edit. */",
      },
    },
  },
});
