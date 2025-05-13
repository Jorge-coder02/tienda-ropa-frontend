import Layout from "../layout/Layout";
import ItemProducto from "../components/product/ItemProducto";
import { useEffect, useState } from "react";
import api from "../api/axios";
import { useSelector } from "react-redux";

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

  const cartItems = useSelector((state) => state.cart.items);

  useEffect(() => {
    console.log(cartItems);
  }, [cartItems]);

  // Console carrito
  useEffect(() => {
    console.log("Carrito:", cartItems);
  }, [cartItems]);

  // Console productos
  useEffect(() => {
    productos.map((prod) => console.log(prod));
  }, [productos]);

  return (
    <Layout>
      <div className="min-h-[calc(100dvh-76px)] flex flex-col gap-y-8 justify- items-center lg:pt-20 pt-10">
        <h1 className="text-4xl text-center">Catálogo</h1>
        {/* Contenedor principal */}
        <div className="flex flex-col justify-center gap-y-12 lg:w-[50%]">
          {/* Barra filtros */}
          <div className="flex flex-col gap-y-4 lg:flex-row justify-between items-center border-2 border-black ">
            <nav className="flex flex-wrap justify-center items-center gap-x-2">
              <input type="button" value="WOMEN" />
              <div className="">I</div>
              <input type="button" value="MEN" />
            </nav>
            <nav>
              <input type="text" placeholder="Filtro" />
              <input type="button" value="🔎" />
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
