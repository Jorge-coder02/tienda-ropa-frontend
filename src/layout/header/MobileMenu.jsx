import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setGenero } from "../../store/filtroSlice";

function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const totalQuantity = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <header className="lg:hidden flex justify-around items-center px-6 py-4 bg-[#f5f5f5] sticky top-0 z-50">
      {/* Izquierda - Logo */}

      {/* Centro - Botón hamburguesa */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="justify-self-center text-2xl"
      >
        ☰
      </button>

      {/* Derecha - Carrito */}
      <Link
        to={"/carrito"}
        className="flex items-center gap-1 justify-self-end"
      >
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
            <Link to="/catalogo" onClick={() => setIsOpen(false)}>
              <span onClick={() => dispatch(setGenero("hombre"))}>
                👨 Hombre
              </span>
            </Link>
            <Link to="/catalogo" onClick={() => setIsOpen(false)}>
              <span onClick={() => dispatch(setGenero("mujer"))}>👩 Mujer</span>
            </Link>
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
