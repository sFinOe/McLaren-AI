import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import million from "million/compiler";
import eslint from "@rollup/plugin-eslint";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    million.vite({ auto: true, mute: true }),
    {
      ...eslint({
        include: ["src/**/*.+(js|jsx|ts)"],
        exclude: ["node_modules/**", "dist/**", "src/imageEditing/**"],
      }),
      enforce: "pre",
    },
  ],
  resolve: {
    alias: {
      "@components": path.resolve(__dirname, "src/components"),
      "@utils": path.resolve(__dirname, "src/utils"),
      "@pages": path.resolve(__dirname, "src/pages"),
      "@routing": path.resolve(__dirname, "src/routing"),
      "@assets": path.resolve(__dirname, "src/assets"),
      "@styles": path.resolve(__dirname, "src/styles"),
      "@config": path.resolve(__dirname, "src/config"),
      "@api": path.resolve(__dirname, "src/api"),
      "@context": path.resolve(__dirname, "src/context"),
    },
  },
  server: {
    headers: {
      "Cross-Origin-Opener-Policy": "same-origin",
      "Cross-Origin-Embedder-Policy": "credentialless",
    },
    host: "0.0.0.0",
    proxy: {
      "/api": {
        target: "http://localhost:3000",
        changeOrigin: true,
        secure: false,
      },
      "/socket.io": {
        target: "http://localhost:3000",
        ws: true,
      },
    },
  },
  preview: {
    port: 80,
  },
});
