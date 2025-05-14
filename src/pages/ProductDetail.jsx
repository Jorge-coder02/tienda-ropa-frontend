// En este componente se va a mostrar el detalle de un producto
// y se va a poder añadir al carrito
// Funcionamiento: se hace una peticion al backend con el slug del producto
// y se muestra el detalle del producto. Se crea dinámicamente la ruta

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Layout from "../layout/Layout";

export default function ProductDetail() {
  const API_URL = import.meta.env.VITE_API_URL;
  const { slug } = useParams(); // recojo de ItemProducto.jsx el .slug del producto pulsado
  const [producto, setProducto] = useState(null);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    const fetchProducto = async () => {
      try {
        const res = await fetch(`${API_URL}/productos/${slug}`); // ...products/slug-123 -> backend responde
        const data = await res.json();
        setProducto(data);
      } catch (error) {
        console.error("Error al cargar el producto:", error);
      } finally {
        setCargando(false);
      }
    };

    fetchProducto();
  }, []);

  if (cargando) return <p>Cargando producto...</p>;
  if (!producto) return <p>Producto no encontrado</p>;

  return (
    <Layout>
      <div className="min-h-[calc(100dvh-76px)] flex flex-col gap-y-8 justify-center items-center lg:pt-20 pt-10">
        {/* Contenedor principal */}
        {/* Contenedor producto */}
        <div className="flex justify-center items-center max-w-[60%]">
          {/* Imagen */}
          <div className="flex-1 bg-[#fafafa] flex justify-center items-center py-24">
            <img src={`${producto.imagen}`} alt={`${producto.imagen}`} />
          </div>
          {/* Info */}
          <div className="flex-1 flex flex-col gap-y-4 p-4">
            <h1>{producto.nombre}</h1>
            <p>{producto.descripcion}</p>
            <p>
              <strong>Precio:</strong> {producto.precio} €
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
