import AsideButton from "./AsideButton";

function SideBarMobile({ view, setView }) {
  return (
    <aside className="md:hidden fixed bottom-0 left-0 right-0 bg-white shadow-md p-4 flex justify-around z-50">
      <AsideButton
        texto="📊"
        onClick={() => setView("dashboard")}
        isActive={view === "dashboard"}
      />
      <AsideButton
        texto="🛍️"
        onClick={() => setView("products")}
        isActive={view === "products"}
      />
      <AsideButton
        texto="📦"
        onClick={() => setView("orders")}
        isActive={view === "orders"}
      />
      <AsideButton
        texto="⚙️"
        onClick={() => setView("settings")}
        isActive={view === "settings"}
      />
    </aside>
  );
}

export default SideBarMobile;
