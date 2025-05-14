import Button from "../ui/Button.styles";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/cartSlice";
import { Link } from "react-router-dom";

function ItemProducto({ objeto_prod, nombre, precio, imagen }) {
  const dispatch = useDispatch();

  return (
    <Link
      to={`/producto/${objeto_prod.slug}`}
      className="flex flex-col justify-between items-center
     bg-[#b4956d63] shadow p-6 min-h-[200px] lg:h-[380px]"
    >
      {/* Imagen */}
      <div className="w-48 h-48 mb-4">
        <img
          className="w-full h-full object-contain"
          src={`${imagen}`}
          alt={imagen}
        />
      </div>
      {/* Info */}
      <div className="flex flex-col items-center justify-center gap-y-2">
        <div className="text-center">
          <h2>{nombre}</h2>
          <span>{precio} €</span>
        </div>
        <Button onClick={() => dispatch(addToCart(objeto_prod))}>
          Añadir 🛒
        </Button>
      </div>
    </Link>
  );
}

export default ItemProducto;
