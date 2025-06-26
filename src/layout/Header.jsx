import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import MobileMenu from "./header/MobileMenu";
import { setGenero } from "../store/filtroSlice";
import { useDispatch } from "react-redux";

function Header() {
  // Determina si la ruta coincide
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  const dispatch = useDispatch();
  // Obtener los productos del carrito desde el estado de Redux
  const cartItems = useSelector((state) => state.cart.items);

  // Calcular la cantidad total de productos (sumando la cantidad de cada producto)
  const totalQuantity = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <>
      {/* 📱 Mobile Menu */}
      <MobileMenu />
      {/* 💻 Pc Menu */}
      <header
        className="hidden lg:flex lg:flex-row flex-col sticky top-0 z-50 justify-between items-center px-12 
          [&>nav]:gap-x-4 [&>nav>a]:py-6 [&>nav>a]:px-2 bg-[#f5f5f5]"
      >
        <nav className="flex justify-center items-center ">
          <Link className="" to={"/"}>
            <div className="lg:mr-8 text-orange-600 font-bold text-xl">
              UrbanwearX
            </div>
          </Link>
          <div className="[&>*]:p-4 [&>*]:font-medium hover:[&>*]:text-gray-800">
            <Link
              to={"/"}
              className={isActive("/") ? "text-gray-800" : "text-gray-400"}
            >
              HOME
            </Link>
            <Link
              to={"/catalogo"}
              className={
                isActive("/catalogo") ? "text-gray-800" : "text-gray-400"
              }
            >
              CATÁLOGO
            </Link>
            <div className="group relative inline-block">
              <Link
                to="/catalogo"
                className={
                  isActive("/hombre") ? "text-gray-800" : "text-gray-400"
                }
                onClick={() => dispatch(setGenero("hombre"))}
              >
                HOMBRE
              </Link>
            </div>
            <div className="group relative inline-block">
              <Link
                to="/catalogo"
                className={
                  isActive("/mujer") ? "text-gray-800" : "text-gray-400"
                }
                onClick={() => dispatch(setGenero("mujer"))}
              >
                MUJER
              </Link>
            </div>
          </div>
        </nav>
        {/* Derecha */}
        <nav className=" lg:block">
          <Link to={"/"}>👤</Link>
          <Link to={"/admin"}>🔨</Link>
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
