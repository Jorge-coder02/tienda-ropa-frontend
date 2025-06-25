import { useState } from "react";
import Products from "../admin/Products";
import DashboardContent from "../admin/DashboardContent";
import AsideButton from "./ui/AsideButton";

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
    <div className="min-h-[100dvh] flex flex-col md:flex-row">
      {/* Sidebar */}
      <aside className="w-80 bg-white shadow-md p-6 flex flex-col gap-4">
        <h2 className="text-xl font-bold mb-6">Admin</h2>
        <nav className="flex flex-col gap-2">
          <AsideButton
            texto="📊 Dashboard"
            onClick={() => setView("dashboard")}
          />
          <AsideButton
            texto="🛍️ Productos"
            onClick={() => setView("products")}
          />
          <AsideButton texto="📦 Pedidos" onClick={() => setView("orders")} />
          <AsideButton
            texto="⚙️ Configuración"
            onClick={() => setView("settings")}
          />
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
