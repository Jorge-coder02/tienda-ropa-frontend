import { useState } from "react";
import Products from "../admin/Products";
import DashboardContent from "../admin/DashboardContent";

function Dashboard() {
  const [view, setView] = useState("dashboard");

  // Diccionario de vistas
  const views = {
    dashboard: <DashboardContent />,
    products: <Products />,
    // orders: <Orders />,
    // settings: <Settings />,
  };

  return (
    <div className="min-h-[100dvh] flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md p-6 flex flex-col gap-4">
        <h2 className="text-xl font-bold mb-6">Admin</h2>
        <nav className="flex flex-col gap-2 hover:[&>button]:underline">
          <button
            onClick={() => setView("dashboard")}
            className="text-left text-slate-700 hover:text-black"
          >
            📊 Dashboard
          </button>
          <button
            onClick={() => setView("products")}
            className="text-left text-slate-700 hover:text-black"
          >
            🛍️ Productos
          </button>
          <button
            // onClick={() => setView("orders")}
            className="text-left text-slate-700 hover:text-black"
          >
            📦 Pedidos
          </button>
          <button
            // onClick={() => setView("settings")}
            className="text-left text-slate-700 hover:text-black"
          >
            ⚙️ Configuración
          </button>
        </nav>
      </aside>

      {/* Main */}
      <main className="flex-1 bg-slate-100 p-8">
        {views[view] || <p>Vista no encontrada.</p>}
      </main>
    </div>
  );
}

export default Dashboard;
