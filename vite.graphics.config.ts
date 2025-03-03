import { defineConfig } from "vite";
import { resolve } from "path";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  root: resolve(__dirname, "./src/graphics"),
  base: "./",
  build: {
    outDir: resolve(__dirname, "graphics"),
    emptyOutDir: false,
    rollupOptions: {
      input: {
        graphics: resolve(__dirname, "./src/graphics/graphics.html"),
      },
    },
  },
});
