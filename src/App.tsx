import React, { lazy, ReactElement, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navbar from "components/Navbar";
import LoadingOrError from "components/LoadingOrError";

const WordPage = lazy(() => import("pages/Word"));
const Gaps = lazy(() => import("pages/Gaps"));

export default function App(): ReactElement {
  return (
    <BrowserRouter>
      <Suspense fallback={<LoadingOrError />}>
        <Navbar />
        <Routes>
          <Route path="/" element={<WordPage />} />
          <Route path="/gaps" element={<Gaps />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
