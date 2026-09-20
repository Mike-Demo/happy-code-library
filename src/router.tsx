import { QueryClient, timeoutManager } from "@tanstack/react-query";
import { createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

// During the static prerender pass, query cache timers armed while rendering
// would keep the build process alive after every page is written. Unref them so
// the build exits.
const isPrerendering =
  typeof process !== "undefined" && process.env["TSS_PRERENDERING"] === "true";

if (isPrerendering) {
  const unref = (id: unknown): unknown => {
    (id as { unref?: () => void }).unref?.();
    return id;
  };
  timeoutManager.setTimeoutProvider({
    setTimeout: (cb, ms) => unref(setTimeout(cb, ms)) as ReturnType<typeof setTimeout>,
    clearTimeout: (id) => clearTimeout(id as ReturnType<typeof setTimeout>),
    setInterval: (cb, ms) => unref(setInterval(cb, ms)) as ReturnType<typeof setInterval>,
    clearInterval: (id) => clearInterval(id as ReturnType<typeof setInterval>),
  });
}

export const getRouter = () => {
  const queryClient = new QueryClient();

  const router = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
  });

  return router;
};
