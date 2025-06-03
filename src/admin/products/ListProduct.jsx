/* eslint-disable no-unused-vars */
// Este componente realiza una petición a la API y muestra todos los productos.
// Menú CRUD que permite editar/eliminar productos

import { useEffect, useState } from "react";
import api from "../../api/axios";
import Button from "../ui/Button";

function ListProduct() {
  const [productos, setProductos] = useState([]); // guardo productos
  const [loading, setLoading] = useState(false);

  // 🚀 Petición API productos
  useEffect(() => {
    const fetchProductos = async () => {
      try {
        setLoading(true);
        const response = await api.get(`/productos`); //
        console.log("Respuesta: ", response);
        setProductos(response.data);
      } catch (err) {
        console.error("Error al obtener productos:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProductos();
  }, []);

  //   🚀❌ Delete product
  const handleDeleteProduct = async (prod) => {
    const { _id } = prod;
    try {
      setLoading(true);
      console.log("Borrando producto... ", _id);
      const res = await api.delete(`/productos/${_id}`);
      console.log("Producto eliminado: ", res.data);
    } catch (err) {
      console.error("Error al eliminar:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col gap-y-6">
      {/* Listado productos */}
      <h2 className="text-xl font-semibold">Listado de productos</h2>
      {/* Barra búsqueda */}
      <div className="flex gap-x-2 max-w-7xl">
        <input
          type="text"
          placeholder="🔎 Buscar por nombre"
          className="w-1/2 px-4 py-2 bg-white text-black rounded-xl"
        />
        <Button
          onClick={() => console.log("Buscando producto...")}
          variant="primary"
        >
          Buscar
        </Button>
      </div>

      {/* Tabla */}
      <div className="flex flex-col w-full max-w-7xl">
        {/* Cabecera */}
        <ul className="grid grid-cols-5 gap-4 font-semibold bg-slate-200 p-2 border border-gray-400 text-left">
          <li>Nombre</li>
          <li>Slug</li>
          <li className="text-center">Imagen</li>
          <li>Precio</li>
          <li className="text-center">Acciones</li>
        </ul>

        {/* Filas */}
        {productos &&
          productos.map((prod) => (
            <ul
              key={prod._id}
              className="grid grid-cols-5 gap-4 items-center p-2 border-b border-gray-300"
            >
              <li>{prod.nombre}</li>
              <li>{prod.slug}</li>
              <li className="flex justify-center items-center">
                <div
                  className={`w-12 h-12 p-1 rounded-full overflow-hidden ${
                    prod.genero === "hombre" ? "bg-blue-200" : "bg-pink-200"
                  }`}
                >
                  <img
                    src={prod.imagen}
                    alt="img"
                    className="w-full h-full object-contain"
                  />
                </div>
              </li>
              <li>{prod.precio} €</li>

              <li className="flex justify-center items-center gap-x-2">
                <Button variant="success">🖊</Button>
                <Button
                  onClick={() => handleDeleteProduct(prod)}
                  variant="danger"
                >
                  x
                </Button>
              </li>
            </ul>
          ))}
      </div>
    </div>
  );
}

export default ListProduct;
