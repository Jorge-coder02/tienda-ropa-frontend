import Layout from "../layout/Layout";
import ItemProducto from "../components/ui/PageComps/catalogo/ItemProducto";
import { useEffect, useState } from "react";
import api from "../api/axios";

function Catalogo() {
  const [productos, setProductos] = useState([]);

  const [genero, setGenero] = useState("hombre"); // estado para género de productos seleccionado

  useEffect(() => {
    console.log("Género actual: ", genero);
  }, [genero]);

  // 🚀 Petición inicial productos al back
  /* Crear un endpoint en backend con /productos/:genero  -> cuidado no haya colisión
    { genero } = req.params
     find({genero: hombre})
  */
  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const response = await api.get(`/productos/${genero}`); // hacer la petición de productos a un género específico
        setProductos(response.data);
      } catch (err) {
        console.error("Error al obtener productos:", err);
      }
    };

    fetchProductos();
  }, [genero]);

  return (
    <Layout>
      <div className="min-h-[calc(100dvh-76px)] flex flex-col gap-y-8 items-center lg:pt-20 pt-10">
        <h1 className="text-4xl font-semibold text-center">Catálogo</h1>
        {/* Contenedor principal */}
        <div className="flex flex-col justify-center gap-y-12 lg:w-[50%]">
          {/* Barra género - filtros */}
          <div className="flex flex-col gap-y-4 lg:flex-row justify-between items-center rounded-lg p-4">
            {/* Contenedor género 👫 */}
            <nav className="flex flex-wrap justify-center items-center gap-x-2">
              <input
                onClick={() => setGenero("hombre")}
                className={`${
                  genero === "hombre" && "font-semibold"
                } cursor-pointer`}
                type="button"
                value="MEN"
              />
              <span className="">|</span> {/* se cambia a bold con Mujer */}
              <input
                onClick={() => setGenero("mujer")}
                className={`${
                  genero === "mujer" && "font-semibold"
                } cursor-pointer`}
                type="button"
                value="WOMEN"
              />
            </nav>
            {/* Barra filtro 🔎 */}
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
          {/* Catálogo productos 👚 */}
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
