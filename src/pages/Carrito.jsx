import { useEffect } from "react";
import { useSelector } from "react-redux";
// Componentes
import Layout from "../layout/Layout";
import Button from "../components/ui/btn/Button.styles";
import ItemCartProduct from "../components/ui/carrito/ItemCartProduct";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);

  // Mostrar los productos en el carrito
  useEffect(() => {
    console.log(cartItems);
  }, [cartItems]);

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.precio * item.quantity,
    0
  );

  if (cartItems.length === 0) {
    // Mejorar este diseño vacío
    return (
      <div className="cart-empty">
        <h2>Tu carrito está vacío</h2>
      </div>
    );
  }

  return (
    <Layout>
      <div className="cart flex flex-col gap-y-8 justify-center items-center lg:pt-20 pt-10 py-20">
        {/* Contenedor principal */}
        <div className="lg:w-[50%] flex flex-col items-center justify-center gap-y-8">
          <h1 className="text-4xl text-center">Carrito</h1>
          {/* Contenedor todos productos 🛒 */}
          <div className="flex flex-col items-center justify-center gap-y-12 p-8 w-full ">
            {/* Contenedor producto */}
            {cartItems.map((item) => (
              <ItemCartProduct key={item._id} item={item} />
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-y-2 items-center justify-center">
          <h3>Total: € {totalPrice.toFixed(2)}</h3>
          <Button variant="secondary">Finalizar compra</Button>
        </div>
      </div>
    </Layout>
  );
};

export default Cart;
