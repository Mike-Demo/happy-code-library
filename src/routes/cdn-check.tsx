import { createFileRoute } from "@tanstack/react-router";

import { WebAwesomeLoader } from "@/webawesome/setup";

export const Route = createFileRoute("/cdn-check")({
  component: () => (
    <div>
      <WebAwesomeLoader source="cdn" />
      <wa-button variant="brand">Hi</wa-button>
      <wa-icon name="wand-magic-sparkles"></wa-icon>
    </div>
  ),
});
