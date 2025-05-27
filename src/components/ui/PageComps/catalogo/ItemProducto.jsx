import Button from "../../btn/Button.styles";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setScrollPosition } from "../../../../store/filtroSlice";
import useAddToCart from "../../../../utility/useAddToCart";

function ItemProducto({ objeto_prod, nombre, precio, imagen }) {
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Uso esto en lugar del <Link>
  const { addedToCart, handleAddToCart } = useAddToCart();

  const handleClick = () => {
    dispatch(setScrollPosition(window.scrollY)); // Guarda scroll actual primero
    navigate(`/productos/${objeto_prod.slug}`); // Navega después
  };

  return (
    <div className="flex flex-col gap-y-4 justify-between items-center bg-[#f5f4f4] shadow p-6 min-h-[200px] lg:h-[380px]">
      {/* Imagen y título son un div clicable */}
      <div
        onClick={handleClick}
        className="w-full flex flex-col items-center cursor-pointer"
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
      </div>

      {/* Botón separado */}
      <Button
        disabled={addedToCart} // Deshabilita el botón si ya se ha añadido
        onClick={() => handleAddToCart(objeto_prod)}
        className="mt-4"
      >
        {addedToCart ? "¡Añadido!" : "Añadir 🛒"}
      </Button>
    </div>
  );
}

export default ItemProducto;
