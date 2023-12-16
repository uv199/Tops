import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@component": path.resolve(__dirname, "src/2.component"),
      "@style": path.resolve(__dirname, "src/3.style"),
    },
  },
});
