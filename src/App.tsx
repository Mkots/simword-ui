import React, { lazy, ReactElement, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navbar from "components/Navbar";
import LoadingOrError from "components/LoadingOrError";

const WordPage = lazy(() => import("pages/Word"));
const GapsPage = lazy(() => import("pages/Gaps"));
const GrammarPage = lazy(() => import("pages/Grammar"));
const ReviserPage = lazy(() => import("pages/Revise"));
const PairsPage = lazy(() => import("pages/Pairs"));
const UploadPage = lazy(() => import("pages/Upload"));
const DictionaryListPage = lazy(() => import("pages/DictionaryList"));
const LoginPage = lazy(() => import("pages/Login"));

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
          <Route path="/pairs" element={<PairsPage />} />
          <Route path="/upload" element={<UploadPage />} />
          <Route path="/dictionary" element={<DictionaryListPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
