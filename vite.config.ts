import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  server: {
    port: Number(process.env.PORT || 3000),
  },
  build: {
    cssMinify: true,
    minify: true,
  },
  plugins: [tailwindcss(), reactRouter(), tsconfigPaths()],
});
