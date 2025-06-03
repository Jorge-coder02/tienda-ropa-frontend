import { useState } from "react";
import ProductsContent from "./products/ProductsContent";
import ListProduct from "./products/ListProduct";
// import AddProduct from "./products/AddProduct"

function Products() {
  const [view, setView] = useState("menu");

  // Diccionario de vistas
  const views = {
    menu: <ProductsContent />,
    listProducts: <ListProduct />,
    // addProducts: <AddProducts />,
  };

  return (
    <div className="mt-12 flex flex-col gap-y-6">
      <h1 className="text-2xl font-semibold">Productos</h1>

      <div className="bg-white p-6 rounded-2xl shadow">
        <h3 className="text-lg font-semibold mb-4">Acciones rápidas</h3>
        <ul className="space-y-2">
          <li
            onClick={() => setView("listProducts")}
            className="hover:bg-slate-50 p-2 rounded cursor-pointer"
          >
            📦 Ver todos los productos
          </li>
          <li
            onClick={() => setView("addProducts")}
            className="hover:bg-slate-50 p-2 rounded cursor-pointer"
          >
            ➕ Añadir nuevo producto
          </li>
          {/* <li className="hover:bg-slate-50 p-2 rounded cursor-pointer">
            📈 Ver estadísticas
          </li> */}
        </ul>
      </div>

      {/* Desplegable */}
      <main className="flex-1 bg-slate-100 p-8">
        {views[view] || <p>Vista no encontrada.</p>}
      </main>
    </div>
  );
}

export default Products;
