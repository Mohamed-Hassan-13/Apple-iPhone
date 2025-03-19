import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import * as Sentry from "@sentry/react";

// Sentry.init({
//   dsn: "https://2d00dd45dbc35eb491346cc0584b78a1@o4509004341641216.ingest.us.sentry.io/4509004343345152",
//   integrations: [
//     Sentry.browserTracingIntegration(),
//     Sentry.metrics.metricsAggregatorIntegration(),
//     Sentry.reactRouterV6BrowserTracingIntegration({
//       useEffect: React.useEffect,
//     }),
//     Sentry.replayIntegration({
//       maskAllText: false,
//       blockAllMedia: false,
//     }),
//   ],
//   tracesSampleRate: 1.0,
//   tracePropagationTargets: ["localhost", /^https:\/\/yourserver\.io\/api/],
//   replaysSessionSampleRate: 0.1,
//   replaysOnErrorSampleRate: 1.0,
// });

Sentry.init({
  dsn: "https://2d00dd45dbc35eb491346cc0584b78a1@o4509004341641216.ingest.us.sentry.io/4509004343345152",
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
