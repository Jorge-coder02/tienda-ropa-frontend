// En este componente se va a mostrar el detalle de un producto
// y se va a poder añadir al carrito
// Funcionamiento: se hace una peticion al backend con el slug del producto
// y se muestra el detalle del producto. Se crea dinámicamente la ruta

// Para productos relacionados, se hace una petición al backend con la categoría
// del producto. Pero con lazy loading

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Layout from "../layout/Layout";
import Button from "../components/ui/Button.styles";

export default function ProductDetail() {
  const API_URL = import.meta.env.VITE_API_URL;
  const { slug } = useParams(); // recojo de ItemProducto.jsx el .slug del producto pulsado
  const [cargando, setCargando] = useState(true);

  const [producto, setProducto] = useState(null);
  // Productos relacionados
  const [categoria, setCategoria] = useState(""); // Para productos relacionados
  const [productosRelacionados, setProductosRelacionados] = useState(null); // productos relacionados

  // Petición GET producto
  useEffect(() => {
    const fetchProducto = async () => {
      try {
        const res = await fetch(`${API_URL}/productos/${slug}`); // ...products/slug-123 -> backend responde
        const data = await res.json();
        setProducto(data);
        setCategoria(data.categoria); // Para productos relacionados
        console.log(data.categoria);
      } catch (error) {
        console.error("Error al cargar el producto:", error);
      } finally {
        setCargando(false);
      }
    };

    fetchProducto();
  }, []);

  // Petición GET productos relacionados
  useEffect(() => {
    const fetchProducto = async () => {
      try {
        const res = await fetch(`${API_URL}/productos/categoria`); // ...products/categoria -> backend responde
        const data = await res.json();
        setProductosRelacionados(data);
      } catch (error) {
        console.error("Error al cargar el producto:", error);
      } finally {
        setCargando(false);
      }
    };

    fetchProducto();
  }, [categoria]);

  if (cargando) return <p>Cargando producto...</p>;
  if (!producto) return <p>Producto no encontrado</p>;

  return (
    <Layout>
      <div className="min-h-[calc(100dvh-76px)] flex flex-col gap-y-8 justify-center items-center lg:pt-0 pt-10">
        {/* Contenedor principal */}
        {/* Contenedor producto */}
        <div className="flex flex-col lg:flex-row gap-x-8 justify-center items-center max-w-[60%]">
          {/* Imagen */}
          <div className="flex-[2] bg-[#fafafa] flex justify-center items-center py-24">
            <img src={`${producto.imagen}`} alt={`${producto.imagen}`} />
          </div>
          {/* Info */}
          <div className="flex-[2] flex flex-col gap-y-4 p-4">
            <div className="">
              <h1 className="text-xl font-semibold">{producto.nombre}</h1>
              <p>{producto.precio} €</p>
            </div>
            <p>{producto.descripcion}</p>
            <div className="flex justify-center items-center gap-x-4">
              <Button>Añadir al carrito 🛒</Button>
            </div>
          </div>
        </div>
        {/* Contenedor productos relacionados */}
        <div className="flex flex-col gap-y-4">
          <h2 className="text-xl font-semibold">Productos relacionados</h2>
          {/* Contenedor productos relacionados */}
          <div className="">
            {Array.isArray(productosRelacionados) &&
            productosRelacionados.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {productosRelacionados.map((producto) => (
                  <div
                    key={producto._id || producto.id}
                    className="bg-[#fafafa] p-4"
                  >
                    <img
                      src={producto.imagen}
                      alt={producto.nombre}
                      className="w-full h-auto"
                    />
                    <h3 className="text-lg font-semibold">{producto.nombre}</h3>
                    <p>{producto.precio} €</p>
                  </div>
                ))}
              </div>
            ) : (
              <p>No hay productos relacionados</p>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}
