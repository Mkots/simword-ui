import App from "App";
import React from "react";
import ReactDOM from "react-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { registerSW } from "virtual:pwa-register";
import TagManager from "react-gtm-module";

import "./index.css";
import makeServer from "api/mirage";

registerSW();

const environment = process.env.NODE_ENV;

if (environment !== "production" && environment !== "e2e") {
  makeServer({ environment });
}

const tagManagerArguments = {
  gtmId: "GTM-TB2XM7N",
};

// eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-member-access
TagManager.initialize(tagManagerArguments);

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Number.POSITIVE_INFINITY,
      retry: 1,
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>,
  document.querySelector("#root")
);
