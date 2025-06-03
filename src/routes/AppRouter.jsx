import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import Home from "../pages/Home";

import LoadingSpinner from "../components/ui/LoadingSpinner";
import PageTitleUpdater from "../utility/PageTitleUpdater";
import CustomScrollRestoration from "../utility/CustomScrollRestoration";

// Páginas (lazy loading)
const Catalogo = lazy(() => import("../pages/Catalogo"));
const NotFound = lazy(() => import("../pages/NotFound"));
const Carrito = lazy(() => import("../pages/Carrito"));
const ProductDetail = lazy(() => import("../pages/ProductDetail"));

// Admin
import Dashboard from "../admin/Dashboard";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <CustomScrollRestoration />
      <PageTitleUpdater />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Dashboard />} />
        {/* <Route path="/admin" element={<Dashboard />} /> */}

        <Route
          path="/catalogo"
          element={
            <Suspense fallback={<LoadingSpinner delay={200} />}>
              <Catalogo />
            </Suspense>
          }
        />
        <Route
          path="/carrito"
          element={
            <Suspense fallback={<LoadingSpinner delay={200} />}>
              <Carrito />
            </Suspense>
          }
        />
        <Route
          path="*"
          element={
            <Suspense fallback={<LoadingSpinner delay={200} />}>
              <NotFound />
            </Suspense>
          }
        />
        <Route
          path="/productos/:slug"
          element={
            <Suspense fallback={<LoadingSpinner delay={200} />}>
              <ProductDetail />
            </Suspense>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
