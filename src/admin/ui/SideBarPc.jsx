import AsideButton from "./AsideButton";

function SideBarPc({ view, setView }) {
  return (
    <aside className="hidden md:flex w-80 bg-white shadow-md p-6 flex-col gap-4">
      <h2 className="text-xl font-bold mb-6">Admin</h2>
      <nav className="flex flex-col gap-2">
        <AsideButton
          texto="📊 Dashboard"
          onClick={() => setView("dashboard")}
          isActive={view === "dashboard"}
        />
        <AsideButton
          texto="🛍️ Productos"
          onClick={() => setView("products")}
          isActive={view === "products"}
        />
        <AsideButton
          texto="📦 Pedidos"
          onClick={() => setView("orders")}
          isActive={view === "orders"}
        />
        <AsideButton
          texto="⚙️ Configuración"
          onClick={() => setView("settings")}
          isActive={view === "settings"}
        />
      </nav>
    </aside>
  );
}

export default SideBarPc;
