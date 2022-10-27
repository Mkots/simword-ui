import React, { lazy, ReactElement, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navbar from "components/Navbar";
import LoadingOrError from "components/LoadingOrError";

const WordPage = lazy(() => import("pages/Word"));
const GapsPage = lazy(() => import("pages/Gaps"));
const GrammarPage = lazy(() => import("pages/Grammar"));
const ReviserPage = lazy(() => import("pages/Revise"));

export default function App(): ReactElement {
  return (
    <BrowserRouter>
      <Suspense fallback={<LoadingOrError />}>
        <Navbar />
        <Routes>
          <Route path="/" element={<WordPage />} />
          <Route path="/gaps" element={<GapsPage />} />
          <Route path="/grammar" element={<GrammarPage />} />
          <Route path="/revise" element={<ReviserPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
