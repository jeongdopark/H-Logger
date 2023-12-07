import { defineConfig } from "vite";
import { splitVendorChunkPlugin } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), splitVendorChunkPlugin()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id: string) {
          if (id.includes("firebase")) {
            return "@firebase";
          }
          if (id.includes("date-fns")) {
            return "@date-fns";
          }
          if (id.includes("react-router-dom") || id.includes("react-router")) {
            return "@react-router";
          }
          if (id.includes("react-datepicker")) {
            return "@react-datepicker";
          }
          if (id.includes("tanstack")) {
            return "@react-query";
          }
        },
      },
    },
  },
});
