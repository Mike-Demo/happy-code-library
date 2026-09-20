import path from "path";
import { defineConfig } from "vite";
import tsConfigPaths from "vite-tsconfig-paths";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import { componentTagger } from "lovable-tagger";
import { mockupPreviewPlugin } from "./mockupPreviewPlugin";

export default defineConfig(({ mode }) => {
  return {
    server: {
      host: "::",
      port: 8080,
    },
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    plugins: [
      mockupPreviewPlugin(),
      tsConfigPaths({ projects: ["./tsconfig.json"] }),
      tanstackStart({
        // Static hosting: every public route is prerendered to HTML at build
        // time. Discovery stays off so the editor-only preview routes
        // (/__mockup, /__component) are never prerendered.
        pages: [
          { path: "/" },
          { path: "/colors" },
          { path: "/typography" },
          { path: "/scale" },
          { path: "/theme" },
          { path: "/icons" },
          { path: "/components" },
          { path: "/delivery" },
          { path: "/licenses" },
        ],
        prerender: { enabled: true, autoStaticPathsDiscovery: false },
      }),
      viteReact(),
      ...(mode === "development" ? [componentTagger()] : []),
    ],
  };
});
