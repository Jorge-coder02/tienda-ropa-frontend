import Layout from "../layout/Layout";
import ItemProducto from "../components/product/ItemProducto";
import { useEffect, useState } from "react";
import api from "../api/axios";

function Catalogo() {
  const [productos, setProductos] = useState([]);

  // Petición productos al back
  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const response = await api.get("/productos");
        setProductos(response.data);
      } catch (err) {
        console.error("Error al obtener productos:", err);
      }
    };

    fetchProductos();
  }, []);

  return (
    <Layout>
      <div className="min-h-[calc(100dvh-76px)] flex flex-col gap-y-8 items-center lg:pt-20 pt-10">
        <h1 className="text-4xl text-center">Catálogo</h1>
        {/* Contenedor principal */}
        <div className="flex flex-col justify-center gap-y-12 lg:w-[50%]">
          {/* Barra filtros */}
          <div className="flex flex-col gap-y-4 lg:flex-row justify-between items-center rounded-lg p-4">
            <nav className="flex flex-wrap justify-center items-center gap-x-2">
              <input type="button" value="WOMEN" />
              <div className="">|</div>
              <input type="button" value="MEN" />
            </nav>
            <nav className="flex flex-wrap justify-center items-center gap-x-2">
              <input
                className="bg-[#f5f4f4] py-1 rounded-lg px-4"
                type="text"
                placeholder="Filtro"
              />
              <input
                className="bg-[#f5f4f4] p-1 cursor-pointer rounded-lg"
                type="button"
                value="🔎"
              />
            </nav>
          </div>
          {/* Productos */}
          <div className="grid gap-8 2xl:grid-cols-3 lg:grid-cols-2 justify-center items-center flex-wrap">
            {productos.map((prod) => (
              <ItemProducto
                key={prod._id}
                objeto_prod={prod} // Enviamos el objeto completo para el dispatch
                nombre={prod.nombre}
                imagen={prod.imagen}
                precio={prod.precio}
              ></ItemProducto>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Catalogo;
