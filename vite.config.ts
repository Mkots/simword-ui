import reactRefresh from "@vitejs/plugin-react-refresh";
import istanbul from "vite-plugin-istanbul";
import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";
import tsconfigPaths from "vite-tsconfig-paths";
import { visualizer } from "rollup-plugin-visualizer";

export default defineConfig(({ mode }) => ({
  plugins: [
    tsconfigPaths(),
    visualizer(),
    reactRefresh(),
    VitePWA({
      registerType: "autoUpdate",
      mode: "development",
      base: "/",
      strategies: "generateSW",
      filename: "sw.js",
      injectRegister: "script",
      manifest: {
        theme_color: "#BD34FE",
        icons: [
          {
            src: "/android-chrome-192x192.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "any maskable",
          },
          {
            src: "/android-chrome-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
    }),
    mode === "test" &&
      istanbul({
        include: ["src/**/*.tsx"],
      }),
  ],
}));
