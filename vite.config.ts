import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    proxy: {
      "/api": {
        target: "https://api.ydplatform.com",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
        // rewrite: (path) => path.replace(/^\/api/, "/api"),
      },
      "/LN": {
        target: "https://api.ydplatform.com",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/LN/, "/LN"),
      },
    },
  },
});
// uncomment winnerContext as well
