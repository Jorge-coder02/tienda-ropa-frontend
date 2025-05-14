import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import ProductDetail from "../pages/ProductDetail";
import Catalogo from "../pages/Catalogo";
import Carrito from "../pages/Carrito";
import NotFound from "../pages/NotFound";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/catalogo" element={<Catalogo />} />
        <Route path="/carrito" element={<Carrito />} />
        <Route path="/" element={<Home />} />
        <Route path="/producto/:slug" element={<ProductDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
