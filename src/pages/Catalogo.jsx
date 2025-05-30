import Layout from "../layout/Layout";
import ItemProducto from "../components/ui/PageComps/catalogo/ItemProducto";
import { useEffect, useState } from "react";
import api from "../api/axios";
import { useSelector, useDispatch } from "react-redux";
import { setGenero } from "../store/filtroSlice";
import ProductSkeleton from "../utility/ProductSkeleton";
import CategorySkeleton from "../utility/CategorySkeleton";

function Catalogo() {
  const dispatch = useDispatch();
  const genero = useSelector((state) => state.filtros.filtros.genero);
  const scrollPosition = useSelector(
    (state) => state.filtros.filtros.scrollPosition
  );

  const [productos, setProductos] = useState([]);
  const [filtroSelect, setFiltroSelect] = useState("all");
  const [loading, setLoading] = useState(true);

  // 1º Mover scroll a la posición guardada en Redux
  useEffect(() => {
    if (scrollPosition) {
      // Esperar a que el contenido esté renderizado antes de hacer scroll
      const timeoutId = setTimeout(() => {
        window.scrollTo({ top: scrollPosition, behavior: "smooth" });
      }, 200);

      return () => clearTimeout(timeoutId); // Limpia timeout si el componente desmonta
    }
  }, [scrollPosition]);

  // 🚀 Petición inicial productos, también cuando género cambia
  useEffect(() => {
    const fetchProductos = async () => {
      try {
        setLoading(true);
        const response = await api.get(`/productos/genero/${genero}`); // hacer la petición de productos a un género específico
        setProductos(response.data);
      } catch (err) {
        console.error("Error al obtener productos:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProductos();
  }, [genero]);

  // 🚀📌 Consulta de filtro
  const handleClickFiltro = () => {
    // Consulta al backend con el filtro seleccionado
    api
      .get(`/productos/filtro`, {
        params: {
          genero,
          categoria: filtroSelect === "all" ? "" : filtroSelect, // Si es "all", no se filtra por categoría
        },
      })
      .then((response) => {
        setProductos(response.data);
      })
      .catch((error) => {
        console.error("Error al obtener productos filtrados:", error);
      });
  };

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
                onClick={() => dispatch(setGenero("hombre"))}
                className={`${
                  genero === "hombre" && "font-semibold"
                } cursor-pointer`}
                type="button"
                value="HOMBRE"
              />
              <span className="">|</span> {/* se cambia a bold con Mujer */}
              <input
                onClick={() => dispatch(setGenero("mujer"))}
                className={`${
                  genero === "mujer" && "font-semibold"
                } cursor-pointer`}
                type="button"
                value="MUJER"
              />
            </nav>
            {/* Barra filtro 🔎 *posibilidad de hacer una consulta para ver que categorías hay */}
            <nav className="flex flex-wrap justify-center items-center gap-x-2">
              <select
                value={filtroSelect}
                onChange={(e) => {
                  setFiltroSelect(e.target.value);
                }}
                className="py-1 px-2 rounded-lg bg-[#f5f4f4]"
              >
                <option value="all">Todas las categorías</option>
                <option value="camisetas">Camisetas</option>
                <option value="pantalones">Pantalones</option>
                <option value="zapatillas">Zapatillas</option>
              </select>
              <input
                onClick={handleClickFiltro} // Aquí puedes implementar la lógica de búsqueda
                className="bg-[#f5f4f4] p-1 cursor-pointer rounded-lg"
                type="button"
                value="🔎"
              />
            </nav>
          </div>
          {/* ❌ Si no hay productos */}
          {productos.length === 0 && !loading && (
            <div className="flex flex-col justify-center items-center w-full">
              <p className="text-center text-lg font-semibold">
                No hay productos disponibles en esta categoría 😢
              </p>
            </div>
          )}
          {/* 👚 Catálogo productos */}
          <div className="grid gap-8 2xl:grid-cols-3 lg:grid-cols-2 justify-center items-center flex-wrap">
            {/* Si hay productos */}
            {loading
              ? Array(6)
                  .fill(null)
                  .map((_, i) => <ProductSkeleton key={i} />)
              : productos.map((prod) => (
                  <ItemProducto
                    key={prod._id}
                    objeto_prod={prod} // Enviamos el objeto completo para el dispatch
                    nombre={prod.nombre}
                    imagen={prod.imagen}
                    precio={prod.precio}
                  />
                ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Catalogo;
