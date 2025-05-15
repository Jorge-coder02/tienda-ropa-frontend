import { useDispatch } from "react-redux";
import { removeFromCart } from "../../../store/cartSlice";
import { Link } from "react-router-dom";
// Componentes
import BtnDelete from "../btn/BtnDelete.styles";

function ItemCartProduct({ item }) {
  const dispatch = useDispatch();

  return (
    // Contenedor principal
    <div
      key={item._id}
      className="flex gap-x-8 lg:gap-x-0 border-2 border-gray-400 rounded-lg p-4 
      w-full lg:w-[80%] min-h-[120px] items-center justify-between"
    >
      {/* Contenedor imagen */}
      <div className="flex justify-center items-center w-40 h-40 object-contain">
        <img src={item.imagen} alt={item.nombre} className="cart-item-image" />
      </div>
      {/* Contenedor info */}
      <div className="flex lg:pl-20 flex-col gap-y-2 w-full h-full items-start justify-center">
        <div className="flex flex-col gap-y-1">
          <Link className="hover:underline" to={`/productos/${item.slug}`}>
            <h3 className="font-semibold">{item.nombre}</h3>
          </Link>
          <p className="text-sm">Cantidad: {item.quantity}</p>
          <p className="text-sm">Precio unidad: ${item.precio}</p>
        </div>
        <p>Total: ${(item.precio * item.quantity).toFixed(2)}</p>
        <BtnDelete
          variant="tertiary"
          onClick={() => dispatch(removeFromCart(item._id))}
        >
          Eliminar
        </BtnDelete>
      </div>
    </div>
  );
}

export default ItemCartProduct;
