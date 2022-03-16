import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/api": {
        target: "https://bio.torre.co/",
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
      "/torreco": {
        target: "https://torre.co/",
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/torreco/, ""),
      },
    },
  },
  plugins: [react()],
});
