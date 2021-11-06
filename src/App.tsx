import LoadingOrError from "components/LoadingOrError";
import React, { lazy, ReactElement, Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const WordPage = lazy(() => import("pages/Word"));
const Gaps = lazy(() => import("pages/Gaps"));

export default function App(): ReactElement {
  return (
    <BrowserRouter>
      <Suspense fallback={<LoadingOrError />}>
        <Switch>
          <Route exact path="/" component={WordPage} />
          <Route exact path="/gaps" component={Gaps} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
}
