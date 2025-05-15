import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
// Removed duplicate import of MobileMenu

function MobileMenu() {
  const cartItems = useSelector((state) => state.cart.items);
  // Calcular la cantidad total de productos (sumando la cantidad de cada producto)
  const totalQuantity = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <header
      className="flex lg:flex-row flex-col sticky top-0 z-50 justify-between items-center px-12 [&>nav]:gap-x-4 
     [&>nav>a]:py-6 [&>nav>a]:px-2 bg-[#f5f5f5]"
    >
      <nav className="flex justify-center items-center [&>a]:p-4">
        {/* Izquierda */}
        <Link to={"/"}>
          <div className="lg:mr-8 text-orange-600 font-semibold text-xl">
            UrbanwearX
          </div>
        </Link>

        {/* Derecha */}
        <Link to={"/carrito"}>
          <span>🛒</span>
          <span>{totalQuantity}</span>
        </Link>
      </nav>
    </header>
  );
}

export default MobileMenu;
