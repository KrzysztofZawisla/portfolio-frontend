import reactPlugin from "@vitejs/plugin-react";
import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [reactPlugin()],
  define: {
    global: "window",
  },
  resolve: {
    alias: {
      "~frontend": resolve(__dirname),
    },
  },
});
