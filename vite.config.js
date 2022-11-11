import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";

// https://vitejs.dev/config/
export default defineConfig({
  base: "",
  plugins: [
    svelte({
      emitCss: true,
    }),
  ],
  build: {
    outDir: "public",
    manifest: true,
    emptyOutDir: false,
    sourcemap: true,
  },
});
