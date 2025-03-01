import { defineConfig } from "vite";
import { resolve } from "path";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: ".",
    emptyOutDir: false,
    rollupOptions: {
      input: {
        "graphics/graphics": resolve(__dirname, "src/graphics/graphics.html"),
      },
    },
  },
});
