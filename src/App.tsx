import LoadingOrError from "components/LoadingOrError";
import React, { lazy, ReactElement, Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const WordPage = lazy(() => import("pages/Word"));

export default function App(): ReactElement {
  return (
    <BrowserRouter>
      <Suspense fallback={<LoadingOrError />}>
        <Switch>
          <Route exact path="/" component={WordPage} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
}
