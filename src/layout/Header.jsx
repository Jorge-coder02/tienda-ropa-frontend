import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import MobileMenu from "./header/MobileMenu";

function Header() {
  const cartItems = useSelector((state) => state.cart.items);
  // Calcular la cantidad total de productos (sumando la cantidad de cada producto)
  const totalQuantity = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  // Console carrito
  return (
    <>
      {/* 📱 Mobile Menu */}
      <div className="lg:hidden">
        <MobileMenu />
      </div>

      {/* 💻 Pc Menu */}
      <header
        className="hidden lg:flex lg:flex-row flex-col sticky top-0 z-50 justify-between items-center px-12 [&>nav]:gap-x-4 
     [&>nav>a]:py-6 [&>nav>a]:px-2 bg-[#f5f5f5]"
      >
        <nav className="flex justify-center items-center ">
          <Link className=" !opacity-100" to={"/"}>
            <div className="lg:mr-8 text-orange-600 font-bold text-xl">
              UrbanwearX
            </div>
          </Link>
          <div className="[&>*]:p-4 [&>*]:font-medium [&>*]:text-gray-500 hover:[&>*]:text-black">
            <Link to={"/"}>HOME</Link>
            <Link className="" to={"/catalogo"}>
              CATÁLOGO
            </Link>
            <div className="group relative inline-block">
              <Link
                to="/hombre"
                className="opacity-50 pointer-events-none cursor-default"
                aria-disabled="true"
              >
                HOMBRE
              </Link>
              <span
                className="absolute invisible group-hover:visible bg-gray-800 text-white text-xs rounded 
              py-1 px-2 bottom-1/2 left-1/2 transform -translate-x-1/2 mb-2 whitespace-nowrap"
              >
                🔧En desarrollo
                <span className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-t-gray-800 border-transparent"></span>
              </span>
            </div>
            <div className="group relative inline-block">
              <Link
                to="/hombre"
                className="opacity-50 pointer-events-none cursor-default"
                aria-disabled="true"
              >
                MUJER
              </Link>
              <span
                className="absolute invisible group-hover:visible bg-gray-800 text-white text-xs rounded 
              py-1 px-2 bottom-1/2 left-1/2 transform -translate-x-1/2 mb-2 whitespace-nowrap"
              >
                🔧En desarrollo
                <span className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-t-gray-800 border-transparent"></span>
              </span>
            </div>
          </div>
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
