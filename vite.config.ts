import path from "path";
import { defineConfig } from "vite";
import tsConfigPaths from "vite-tsconfig-paths";
import { cloudflare } from "@cloudflare/vite-plugin";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import { componentTagger } from "lovable-tagger";
import { mockupPreviewPlugin } from "./mockupPreviewPlugin";

export default defineConfig(({ command, mode }) => {
  // Cloudflare Workers plugin only on build (produces the worker output);
  // the workerd runtime isn't available for the dev server.
  //
  // The static build prerenders every page instead: its preview server needs
  // the plain server bundle, which the Workers plugin replaces, so it is off
  // whenever prerendering runs (STATIC_BUILD=0 restores the Worker output).
  const staticBuild = process.env["STATIC_BUILD"] !== "0";
  const useCloudflare = command === "build" && !staticBuild;

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
      ...(useCloudflare ? [cloudflare({ viteEnvironment: { name: "ssr" } })] : []),
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
        prerender: { enabled: staticBuild, autoStaticPathsDiscovery: false },
      }),
      viteReact(),
      ...(mode === "development" ? [componentTagger()] : []),
    ],
  };
});
