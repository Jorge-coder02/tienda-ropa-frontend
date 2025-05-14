import Button from "../ui/Button.styles";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/cartSlice";
import { Link } from "react-router-dom";

function ItemProducto({ objeto_prod, nombre, precio, imagen }) {
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col gap-y-4 justify-between items-center bg-[#f5f4f4] shadow p-6 min-h-[200px] lg:h-[380px]">
      {/* Imagen y título envueltos en Link */}
      <Link
        to={`/productos/${objeto_prod.slug}`}
        className="w-full flex flex-col items-center"
      >
        <div className="w-48 h-48 mb-4">
          <img
            className="w-full h-full object-contain"
            src={imagen}
            alt={nombre}
          />
        </div>
        <div className="text-center">
          <h2>{nombre}</h2>
          <span>{precio} €</span>
        </div>
      </Link>

      {/* Botón separado */}
      <Button
        variant=""
        onClick={() => dispatch(addToCart(objeto_prod))}
        className="mt-4"
      >
        Añadir 🛒
      </Button>
    </div>
  );
}

export default ItemProducto;
