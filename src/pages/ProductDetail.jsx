// Funcionamiento: se hace una peticion al backend con el slug del producto
// y se muestra el detalle del producto. La ruta se ha creado dinámicamente

// Para productos relacionados, se hace una petición al backend con la categoría y género
// del producto (slug.categoria y genero). **meter con lazy loading**

import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import api from "../api/axios";
// Componentes
import Layout from "../layout/Layout";
import Button from "../components/ui/btn/Button.styles";
import LoadingSpinner from "../components/ui/LoadingSpinner";
import useAddToCart from "../utility/useAddToCart";

export default function ProductDetail() {
  const { slug } = useParams(); // recojo de ItemProducto.jsx el .slug del producto pulsado
  const [cargando, setCargando] = useState(true);
  const [producto, setProducto] = useState(null);
  // Productos relacionados
  const [categoria, setCategoria] = useState(""); // Para productos relacionados
  const [genero, setGenero] = useState(""); // Para productos relacionados
  const [productosRelacionados, setProductosRelacionados] = useState(null); // productos relacionados
  const { addedToCart, handleAddToCart } = useAddToCart();

  // Petición GET producto
  useEffect(() => {
    const fetchProducto = async () => {
      setCargando(true);
      try {
        const res = await api.get(`/productos/${slug}`); // ...productos/slug-123 -> backend responde
        setProducto(res.data);
        setCategoria(res.data.categoria); // Para productos relacionados
        setGenero(res.data.genero); // Para productos relacionados
      } catch (error) {
        console.error("Error al cargar el producto:", error);
      } finally {
        setCargando(false);
      }
    };

    fetchProducto();
  }, [slug]);

  // Petición GET productos relacionados
  useEffect(() => {
    const fetchProducto = async () => {
      try {
        const res = await api.get("/productos/relacionados", {
          params: {
            categoria,
            genero,
            excludeId: producto._id, // excluir un ID
          },
        });
        setProductosRelacionados(res.data);
      } catch (error) {
        console.error("Error al cargar productos relacionados:", error);
      }
    };

    if (categoria && genero) fetchProducto();
  }, [categoria, genero, producto?._id]); // Añade producto?._id para evitar el error de undefined

  if (cargando) return <LoadingSpinner />; // Esto no parece estar funcionando
  if (!producto) return <p>Producto no encontrado</p>;

  return (
    <Layout>
      <div className="min-h-[calc(100dvh-76px)] flex flex-col gap-y-8 justify-center items-center lg:pt-12 pt-10">
        {/* Contenedor principal */}
        <div className="flex flex-col gap-y-28 justify-center items-center max-w-[60%]">
          {/* Contenedor producto */}
          <div className="flex flex-col lg:flex-row gap-x-8 justify-center items-center ">
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
              <div className="flex justify-center items-center gap-x-4 mt-6">
                <Button
                  disabled={addedToCart} // Deshabilita el botón si ya se ha añadido
                  onClick={() => handleAddToCart(producto)}
                  className="mt-4"
                >
                  {addedToCart ? "¡Añadido!" : "Añadir 🛒"}
                </Button>
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
                    <Link
                      to={`/productos/${producto.slug}`}
                      key={producto._id}
                      className="bg-[#fafafa] p-6 flex flex-col justify-between items-center shadow h-[400px]"
                    >
                      <div className="w-64 h-64 mb-4 object-contain">
                        <img
                          src={producto.imagen}
                          alt={producto.nombre}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <h3 className="text-lg font-semibold text-center">
                        {producto.nombre}
                      </h3>
                      <p className="text-center">{producto.precio} €</p>
                    </Link>
                  ))}
                </div>
              ) : (
                <p>No hay productos relacionados</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
