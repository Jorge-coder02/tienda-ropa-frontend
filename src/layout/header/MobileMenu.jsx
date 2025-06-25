import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const cartItems = useSelector((state) => state.cart.items);
  const totalQuantity = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <header className="lg:hidden flex items-center justify-between px-6 py-4 bg-[#f5f5f5] sticky top-0 z-50">
      {/* Izquierda - Logo */}
      <Link to={"/"}>
        <div className="text-orange-600 font-semibold text-xl">UrbanwearX</div>
      </Link>

      {/* Centro - Botón hamburguesa */}
      <button onClick={() => setIsOpen(!isOpen)} className="text-2xl">
        ☰
      </button>

      {/* Derecha - Carrito */}
      <Link to={"/carrito"} className="flex items-center gap-1">
        <span>🛒</span>
        <span>{totalQuantity}</span>
      </Link>

      {/* Menú desplegable */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-t z-40 shadow-md">
          <nav className="flex flex-col items-start p-4 gap-y-2">
            <Link to="/" onClick={() => setIsOpen(false)}>
              🏠 Home
            </Link>
            <Link to="/catalogo" onClick={() => setIsOpen(false)}>
              🛍️ Catálogo
            </Link>
            <span className="text-gray-400">👨 Hombre (en desarrollo)</span>
            <span className="text-gray-400">👩 Mujer (en desarrollo)</span>
            <Link to="/admin" onClick={() => setIsOpen(false)}>
              🔧 Admin
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

export default MobileMenu;
