/* eslint-disable no-unused-vars */
// Este componente realiza una petición a la API y muestra todos los productos.
// Menú CRUD que permite editar/eliminar productos

import { useEffect, useState } from "react";
import api from "../../api/axios";
import Button from "../ui/Button";

function ListProduct() {
  const [productos, setProductos] = useState([]); // guardo productos
  const [editableValues, setEditableValues] = useState({}); // guardar temporalmente los datos del prod al Editar
  const [loading, setLoading] = useState(false); // cargas API
  const [editingProductId, setEditingProductId] = useState(null); // 🖊 botón Editar producto clicado

  // 🚀 Petición API productos
  useEffect(() => {
    const fetchProductos = async () => {
      try {
        setLoading(true);
        const response = await api.get(`/productos`);
        setProductos(response.data);
      } catch (err) {
        console.error("Error al obtener productos:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProductos();
  }, []);

  // 🚀❌ Delete product
  const handleDeleteProduct = async (prod) => {
    const respuesta = window.confirm(
      `¿Estás seguro de eliminar este producto? ${prod.nombre}`
    );
    if (respuesta) {
      const { _id } = prod;
      try {
        setLoading(true);
        const res = await api.delete(`/productos/${_id}`);
        setProductos((prev) => prev.filter((prod) => prod._id !== _id));
      } catch (err) {
        console.error("Error al eliminar:", err);
      } finally {
        setLoading(false);
      }
    }
  };

  // 🔄 Modo edición
  const handleEditProduct = (prod) => {
    const { _id, nombre, slug, precio } = prod;
    console.log("Modo edición");
    setEditingProductId(_id); // guardo producto id que estoy editando
    setEditableValues({ nombre, slug, precio }); // guardo los valores actuales del producto
  };

  // 🚀🔄 Confirmar cambios
  const handleConfirmChanges = async () => {
    const respuesta = window.confirm(
      `¿Estás seguro de modificar este producto? ${editingProductId}`
    );
    if (respuesta) {
      // Validar que ha habido cambios en los campos, para no saturar todos
      try {
        setLoading(true);
        const res = await api.put(
          `/productos/${editingProductId}`,
          editableValues
        );

        // 👁 Actualizar cambios visualmente
        setProductos((prev) =>
          prev.map((prod) =>
            prod._id === editingProductId
              ? { ...prod, ...editableValues }
              : prod
          )
        );
      } catch (err) {
        console.error("Error al actualizar datos: ", err);
      } finally {
        setLoading(false);
        // resetear campos
        setEditableValues({});
        setEditingProductId(null);
        console.log("Cambios confirmados: ", editableValues);
      }
    }

    // 🚀 Update cambios
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
              <li>
                <input
                  onChange={(e) =>
                    setEditableValues((prev) => ({
                      ...prev,
                      nombre: e.target.value,
                    }))
                  }
                  disabled={editingProductId !== prod._id}
                  type="text"
                  value={
                    editingProductId === prod._id
                      ? editableValues.nombre
                      : prod.nombre
                  }
                  className={`bg-transparent border-b ${
                    editingProductId === prod._id
                      ? "border-black"
                      : "border-transparent"
                  }`}
                />
              </li>
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
                {editingProductId !== prod._id ? (
                  <Button
                    onClick={() => handleEditProduct(prod)} // 🖊 Editar campos
                    variant="success"
                  >
                    🖊
                  </Button>
                ) : (
                  <Button
                    onClick={() => handleConfirmChanges()} // ✅ Confirmar cambios
                    variant="primary"
                  >
                    ✔
                  </Button>
                )}

                <Button
                  onClick={() => handleDeleteProduct(prod)} // ❌ Eliminar prod
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
