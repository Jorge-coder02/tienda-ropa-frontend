import { useDispatch } from "react-redux";
import {
  // removeFromCart,
  removeOneFromCart,
  addOneToCart,
} from "../../../../store/cartSlice";
import { Link } from "react-router-dom";
// Componentes
import BtnDelete from "../../btn/BtnDelete.styles";

function ItemCartProduct({ item }) {
  const dispatch = useDispatch();

  // const handleDelete = (item) => {
  //   console.log("Eliminando producto... ❌", item._id);
  //   dispatch(removeFromCart(item._id));
  // };

  return (
    // Contenedor principal
    <div
      key={item._id}
      className="flex gap-x-8 lg:gap-x-0 border- border-gray-200 rounded-lg px-4 
      w-full lg:w-[80%] py-2 items-center justify-between"
    >
      {/* Contenedor izquierda */}
      <div className="flex flex-[4] lg:flex-row flex-col gap-x-8 items-center justify-between">
        <div className="flex gap-x-3 justify-center items-center">
          {/* imagen */}
          <Link
            className="object-contain w-16 h-16 hover:underline"
            to={`/productos/${item.slug}`}
          >
            <img
              src={item.imagen}
              alt={item.nombre}
              className="p-2 bg-slate-100 hover:bg-slate-200 rounded-lg w-full h-full object-cover transition duration-100 ease-in-out"
            />{" "}
          </Link>
          {/* info */}
          <div className="flex flex-col gap-y-1">
            <Link className="hover:underline" to={`/productos/${item.slug}`}>
              <h3 className="font-semibold">{item.nombre}</h3>
            </Link>
            <p className="text-sm text-gray-500">
              unidad: {item.precio.toFixed(2)}€
            </p>
          </div>
        </div>
      </div>

      {/* Contenedor derecha */}
      <div className="flex flex-[1] lg:pl-20 flex-col gap-y-2 w-full h-full items-start justify-center">
        {/* Cantidad */}
        <div className="flex items-center gap-x-2">
          <button
            onClick={() => dispatch(removeOneFromCart(item._id))}
            className="w-8 h-8 rounded-full border text-center text-lg font-semibold bg-[#f5f5f5] hover:bg-[#e0e0e0]"
            aria-label="Remove one item from cart"
            type="button"
          >
            -
          </button>
          <p className="text-sm">{item.quantity}</p>
          <div className="flex justify-center items-center gap-x-1">
            <button
              onClick={() => dispatch(addOneToCart(item._id))}
              className="w-8 h-8 rounded-full border text-center text-lg font-semibold bg-[#f5f5f5] hover:bg-[#e0e0e0]"
              aria-label="Add one item to cart"
              type="button"
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemCartProduct;
