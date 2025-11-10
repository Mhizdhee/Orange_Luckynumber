import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  // server: {
  //   proxy: {
  //     "/api": {
  //       // target: "https://api.ydplatform.com:5542",
  //       // target: "https://84.200.73.130:5542",
  //       target: "https://mtnghlnapi.ydaplatform.com",
  //       changeOrigin: true,
  //       secure: false,
  //       // rewrite: (path) => path.replace(/^\/api/, ""),
  //       rewrite: (path) => path.replace(/^\/api/, "/api"),
  //     },
  //     "/LN": {
  //       // target: "https://api.ydplatform.com:5542",
  //       // target: "https://84.200.73.130: 5542",
  //       target: "https://mtnghlnapi.ydaplatform.com",
  //       changeOrigin: true,
  //       secure: false,
  //       rewrite: (path) => path.replace(/^\/LN/, "/LN"),
  //       // rewrite: (path) => path.replace(/^\/LN/, ""),
  //     },
  //   },
  // },
});
// uncomment winnerContext as well
