// En este componente se va a mostrar el detalle de un producto
// y se va a poder añadir al carrito
// Funcionamiento: se hace una peticion al backend con el slug del producto
// y se muestra el detalle del producto. Se crea dinámicamente la ruta

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function ProductDetail() {
  const API_URL = import.meta.env.VITE_API_URL;
  const { slug } = useParams();
  const [producto, setProducto] = useState(null);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    const fetchProducto = async () => {
      try {
        const res = await fetch(`${API_URL}/${slug}`); // products/slug..., en backend responder
        const data = await res.json();
        setProducto(data);
      } catch (error) {
        console.error("Error al cargar el producto:", error);
      } finally {
        setCargando(false);
      }
    };

    fetchProducto();
  }, [slug, API_URL]);

  if (cargando) return <p>Cargando producto...</p>;
  if (!producto) return <p>Producto no encontrado</p>;

  return (
    <div>
      <h1>{producto.nombre}</h1>
      <p>{producto.descripcion}</p>
      <p>
        <strong>Precio:</strong> {producto.precio} €
      </p>
    </div>
  );
}
