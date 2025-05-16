import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../btn/Button.styles";

function ItemEstilo({ nombre, imagen, descripcion }) {
  const imagePath = `img/outfits/${imagen}`;
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative cursor-pointer  rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
    >
      {/* Imagen (siempre visible) */}
      <img
        src={imagePath}
        alt={nombre}
        className="w-full h-auto object-cover rounded-lg"
      />

      {/* Overlay info (onHover) */}
      <div
        className={`
          absolute inset-0 
          bg-[#e9e9e9] bg-opacity-90 
          p-4 rounded-lg 
          flex flex-col gap-y-4 justify-center items-center
          transition-opacity duration-300 
          ${isHovered ? "opacity-100" : "opacity-0"}
        `}
      >
        <h2 className="text-2xl font-semibold">{nombre}</h2>
        <p className="text-gray-700 text-center">{descripcion}</p>
        <Button to="/catalogo" variant="secondary">
          Explorar más
        </Button>
      </div>
    </div>
  );
}

export default ItemEstilo;
