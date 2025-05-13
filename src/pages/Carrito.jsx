import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../store/cartSlice"; // Asegúrate de importar la acción correctamente
import Layout from "../layout/Layout";
import Button from "../components/ui/Button.styles";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  // Mostrar los productos en el carrito
  useEffect(() => {
    console.log(cartItems);
  }, [cartItems]);

  const handleRemoveItem = (id) => {
    dispatch(removeFromCart({ id }));
  };

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.precio * item.quantity,
    0
  );

  if (cartItems.length === 0) {
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
        <div className="lg:w-[50%] flex flex-col items-center justify-center gap-y-12">
          <h1 className="text-4xl text-center">Carrito</h1>
          {/* Contenedor carrito */}
          <div className="flex flex-col items-center justify-center gap-y-12 p-8 w-full ">
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item flex gap-x-4">
                <div className="w-40 h-40 object-contain">
                  <img
                    src={item.imagen}
                    alt={item.nombre}
                    className="cart-item-image"
                  />
                </div>
                <div className="cart-item-info">
                  <h3>{item.nombre}</h3>
                  <p>Precio: ${item.precio}</p>
                  <p>Cantidad: {item.quantity}</p>
                  <p>Total: ${item.precio * item.quantity}</p>
                  <button onClick={() => handleRemoveItem(item.id)}>
                    Eliminar
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-y-2 items-center justify-center">
          <h3>Total: € {totalPrice.toFixed(2)}</h3>
          <Button>Finalizar compra</Button>
        </div>
      </div>
    </Layout>
  );
};

export default Cart;
