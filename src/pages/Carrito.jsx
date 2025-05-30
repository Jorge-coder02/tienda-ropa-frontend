import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
// Componentes
import Layout from "../layout/Layout";
import Button from "../components/ui/btn/Button.styles";
import ItemCartProduct from "../components/ui/PageComps/carrito/ItemCartProduct";
import { clearCart } from "../store/cartSlice";
import { useDispatch } from "react-redux";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  // bien esto aquíi sin effect?
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.precio * item.quantity,
    0
  );

  return (
    <Layout>
      <div className="flex flex-col gap-y-8 justify-center items-center lg:pt-20 pt-10 py-20">
        {/* Contenedor principal */}
        <div className="lg:w-[50%] flex flex-col items-center justify-center gap-y-8">
          {/* Carrito vacío ❌🛒 */}
          {cartItems.length === 0 ? (
            <>
              {/* Contenedor principal */}
              <div className="min-h-[calc(00dvh-76px)] flex flex-col gap-y-8 items-center justify-center">
                <h2 className="font-bold text-4xl text-center">
                  Tu carrito está vacío
                </h2>
                {/* Contenedor contenido  */}
                <div className="flex flex-col justify-center items-center gap-y-12">
                  {/* Contenedor icono carrito  */}
                  <div className="">
                    <img src="/img/icons/carrito.jpg" alt="carrito" />
                  </div>
                  {/* Contenedor ir al catálogo */}
                  <div className="flex flex-col gap-y-4 items-center justify-center">
                    <span className="text-xl font-medium">
                      Añade productos para completar tu carrito
                    </span>
                    <Link
                      className="px-4 py-2 bg-orange-500 rounded-lg text-[#fff] font-semibold"
                      to={`/catalogo`}
                    >
                      Ir al catálogo
                    </Link>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              {/* Carrito con productos ✅🛒 */}
              <div className="flex flex-col items-center justify-center gap-y-4 p-8 w-full">
                <h1 className="font-semibold text-3xl text-center mb-4">
                  Carrito
                </h1>
                {/* Contenedor producto */}
                {cartItems.map((item) => (
                  <ItemCartProduct key={item._id} item={item} />
                ))}
                <Button
                  variant="delete"
                  onClick={() => {
                    if (
                      window.confirm("¿Seguro que deseas vaciar tu carrito?")
                    ) {
                      dispatch(clearCart()); // El usuario hace clic en "Aceptar" (Sí)
                    }
                  }}
                >
                  Vaciar carrito
                </Button>
              </div>

              {/* Resumen */}
              <div className="flex flex-col gap-y-12 items-center justify-center w-full p-8">
                <h2 className="text-3xl font-semibold text-center">Resumen</h2>
                {/* Contenedor */}
                <div className="flex flex-col gap-y-4 items-center justify-between w-[70%] border-">
                  <div className="flex flex- gap-y-2 items-center justify-between w-full border-b-2">
                    <span className="text-gray-500">Subtotal </span>
                    <span>{totalPrice.toFixed(2)}€</span>
                  </div>
                  <div className="flex flex- items-center justify-between w-full border-b-2">
                    <span className="text-gray-500">Envío </span>
                    <span>Gratis</span>
                  </div>
                  <div className="flex flex- gap-y-2 items-center justify-between w-full border-b-2 font-semibold">
                    <span className="text-gray-500">Total </span>
                    <span>{totalPrice.toFixed(2)}€</span>
                  </div>
                </div>
                <Button variant="secondary">Finalizar compra</Button>
              </div>
            </>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Cart;
