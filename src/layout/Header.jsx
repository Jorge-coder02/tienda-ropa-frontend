import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import MobileMenu from "./MobileMenu";

function Header() {
  const cartItems = useSelector((state) => state.cart.items);
  // Calcular la cantidad total de productos (sumando la cantidad de cada producto)
  const totalQuantity = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <>
      {/* Mobile Menu */}
      <div className="lg:hidden">
        <MobileMenu />
      </div>

      {/* Pc Menu */}
      <header
        className="hidden lg:flex lg:flex-row flex-col sticky top-0 z-50 justify-between items-center px-12 [&>nav]:gap-x-4 
     [&>nav>a]:py-6 [&>nav>a]:px-2 bg-[#fff]"
      >
        <nav className="flex justify-center items-center [&>a]:p-4">
          <Link to={"/"}>
            <div className="lg:mr-8 text-orange-600 font-semibold text-xl">
              UrbanwearX
            </div>
          </Link>
          <Link to={"/"}>Home</Link>
          <Link to={"/catalogo"}>Catálogo</Link>
          <Link to={"/"}>Tienda</Link>
        </nav>
        {/* Derecha */}
        <nav className=" lg:block">
          <Link to={"/"}>🔎</Link>
          <Link to={"/"}>👤</Link>
          <Link to={"/"}>💙</Link>
          <Link to={"/carrito"}>
            <span>🛒</span>
            <span>{totalQuantity}</span>
          </Link>
        </nav>
      </header>
    </>
  );
}

export default Header;
