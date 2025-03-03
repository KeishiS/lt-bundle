import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  root: resolve(__dirname, "./src/extension"),
  base: "./",
  build: {
    outDir: resolve(__dirname, "extension"),
    emptyOutDir: true,
    lib: {
      entry: resolve(__dirname, "./src/extension/index.ts"),
      name: "Extension",
      fileName: "index",
    },
  },
});
