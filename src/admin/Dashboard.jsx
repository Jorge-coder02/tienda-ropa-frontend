import { useState } from "react";
import Products from "../admin/Products";
import DashboardContent from "../admin/DashboardContent";
import SideBarPc from "./ui/SideBarPc";
import SideBarMobile from "./ui/SideBarMobile";

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
      {/* Sidebar PC */}
      <SideBarPc view={view} setView={setView} />

      {/* Sidebar Mobile Sandwich sticky */}
      <SideBarMobile view={view} setView={setView} />

      {/* Main */}
      <main className="flex-1 bg-slate-100 p-8">
        {views[view] || <p>Vista no encontrada.</p>}
      </main>
    </div>
  );
}

export default Dashboard;
