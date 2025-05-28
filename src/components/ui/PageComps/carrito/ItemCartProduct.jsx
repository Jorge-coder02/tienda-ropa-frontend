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
      className="flex gap-x-8 lg:flex-row flex-col border-gray-200 rounded-lg px-4 py-4
  w-full lg:w-[80%] items-center justify-between"
    >
      {/* Parte izquierda */}
      <div className="flex items-center gap-x-4 w-full lg:w-auto">
        {/* Imagen (cuadro fijo y centrado) */}
        <Link
          to={`/productos/${item.slug}`}
          className="w-14 h-14 bg-slate-100 hover:bg-slate-200 rounded-lg overflow-hidden flex items-center justify-center shrink-0"
        >
          <img
            src={item.imagen}
            alt={item.nombre}
            className="object-contain w-full h-full"
          />
        </Link>

        {/* Info producto */}
        <div className="flex flex-col justify-center gap-y-1">
          <Link className="hover:underline" to={`/productos/${item.slug}`}>
            <h3 className="font-semibold">{item.nombre}</h3>
          </Link>
          <p className="text-sm text-gray-500">
            unidad: {item.precio.toFixed(2)}€
          </p>
        </div>
      </div>

      {/* Parte derecha (cantidad) */}
      <div className="flex flex-col gap-y-2 items-center justify-center mt-4 lg:mt-0">
        <div className="flex justify-center items-center gap-x-2">
          <button
            onClick={() => dispatch(removeOneFromCart(item._id))}
            className="w-8 h-8 rounded-full border text-center text-lg font-semibold bg-[#f5f5f5] hover:bg-[#e0e0e0]"
          >
            -
          </button>
          <p className="text-sm">{item.quantity}</p>
          <button
            onClick={() => dispatch(addOneToCart(item._id))}
            className="w-8 h-8 rounded-full border text-center text-lg font-semibold bg-[#f5f5f5] hover:bg-[#e0e0e0]"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}

export default ItemCartProduct;
