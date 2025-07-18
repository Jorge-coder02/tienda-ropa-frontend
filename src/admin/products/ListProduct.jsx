/* eslint-disable no-unused-vars */
// Este componente realiza una petición a la API y muestra todos los productos.
// Menú CRUD que permite editar/eliminar productos

// Posibles mejoras: Editar producto -> hacer una segunda copia del producto para compararla
// al confirmar y ver si hay cambios antes del fetch

import { useState } from "react";
import { useProductos } from "../../api/hooks/useProductos";

// UI
import Button from "../ui/Button";
import LoadingSpinner from "../../components/ui/LoadingSpinner2";
import GeneroButton from "../ui/GeneroButton";

function ListProduct() {
  const [inputSearch, setInputSearch] = useState(""); // 🔎 input búsqueda
  const [generoBtnActive, setGeneroBtnActive] = useState("todos"); // Género activo para filtrar

  const {
    productos,
    loading,
    buscarPorNombre,
    eliminarProducto,
    handleEditProduct,
    handleConfirmChanges,
    editableValues,
    setEditableValues,
    editingProductId,
    ordenarPorCampo,
    campoOrden,
    ordenAscendente,
    fetchProductosPorGenero,
    fetchProductos,
  } = useProductos();

  // ✖ Manejo del delete (confirmación y llamada a la API)
  const handleDeleteClick = async (prod) => {
    const respuesta = window.confirm(
      `¿Estás seguro de eliminar este producto? ${prod.nombre}`
    );
    if (respuesta) {
      try {
        await eliminarProducto(prod);
      } catch (error) {
        alert("Error al eliminar producto:", error.message);
      }
    }
  };

  return (
    <div className="flex flex-col gap-y-6">
      {/* Listado productos */}
      <h2 className="text-xl font-semibold">Listado de productos</h2>
      {/* 🔎 Barra búsqueda */}
      <div className="flex gap-x-2 max-w-7xl">
        <div className="relative lg:w-1/2">
          <input
            type="text"
            value={inputSearch}
            onChange={(e) => setInputSearch(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                buscarPorNombre(inputSearch);
              }
            }}
            placeholder="🔎 Buscar por nombre"
            className="w-full px-4 py-2 pr-10 bg-white text-black rounded-xl"
          />
          {inputSearch && (
            <button
              onClick={() => setInputSearch("")}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-black"
            >
              ✖
            </button>
          )}
        </div>
        <Button onClick={() => buscarPorNombre(inputSearch)} variant="primary">
          Buscar
        </Button>
        {loading && (
          <div className="w-12 h-12">
            <LoadingSpinner delay={0} />
          </div>
        )}
      </div>

      {/* Botones de género */}
      <div className="flex gap-x-1 [&>input]:text-white hover:[&>input]:cursor-pointer [&>input]:p-2 [&>input]:rounded-md">
        <GeneroButton
          value="Todos"
          color="slate"
          active={generoBtnActive === "todos"}
          onClick={() => {
            fetchProductos();
            setGeneroBtnActive("todos");
          }}
        />
        <GeneroButton
          value="Hombre"
          color="blue"
          active={generoBtnActive === "hombre"}
          onClick={() => {
            fetchProductosPorGenero("hombre");
            setGeneroBtnActive("hombre");
          }}
        />
        <GeneroButton
          value="Mujer"
          color="pink"
          active={generoBtnActive === "mujer"}
          onClick={() => {
            fetchProductosPorGenero("mujer");
            setGeneroBtnActive("mujer");
          }}
        />
      </div>

      {/* Tabla */}
      <div className="flex flex-col w-full md:max-w-7xl max-w-full">
        {/* Cabecera */}
        <ul className="grid grid-cols-2 md:grid-cols-5 gap-4 font-semibold bg-slate-200 p-2 border border-gray-400 text-left text-sm">
          <li
            className="cursor-pointer text-center flex justify-center items-center gap-x-1 bg-slate-400 hover:bg-slate-500 text-white rounded-md transition-colors duration-200 mx-8 px-2 py-1"
            onClick={() => ordenarPorCampo("nombre")}
          >
            Nombre
          </li>
          <li
            className="cursor-pointer text-center flex justify-center items-center gap-x-1 bg-slate-400 hover:bg-slate-500 text-white rounded-md transition-colors duration-200 mx-8 px-2 py-1"
            onClick={() => ordenarPorCampo("stock")}
          >
            Stock
          </li>
          <li
            className="cursor-pointer text-center flex justify-center items-center gap-x-1 bg-slate-400 hover:bg-slate-500 text-white rounded-md transition-colors duration-200 mx-8 px-2 py-1"
            onClick={() => ordenarPorCampo("imagen")}
          >
            Imagen
          </li>
          <li
            className="cursor-pointer text-center flex justify-center items-center gap-x-1 bg-slate-400 hover:bg-slate-500 text-white rounded-md transition-colors duration-200 mx-8 px-2 py-1"
            onClick={() => ordenarPorCampo("precio")}
          >
            Precio
          </li>
          <li className="text-center">Acciones</li>
        </ul>

        {/* Filas */}
        {productos &&
          productos.map((prod) => (
            <ul
              key={prod._id}
              className="grid grid-cols-2 lg:grid-cols-5 gap-4 items-center p-2 border-b border-gray-300 text-sm"
            >
              {/* Nombre */}
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
                  className={`border p-1 ${
                    editingProductId === prod._id
                      ? "border-black bg-slate-50 "
                      : "border-transparent"
                  }`}
                />
              </li>
              {/* Stock */}
              <li className="text-center ">
                <input
                  onChange={(e) =>
                    setEditableValues((prev) => ({
                      ...prev,
                      stock: e.target.value,
                    }))
                  }
                  disabled={editingProductId !== prod._id}
                  type="text"
                  value={
                    editingProductId === prod._id
                      ? editableValues.stock
                      : prod.stock
                  }
                  className={`text-center border p-1 ${
                    editingProductId === prod._id
                      ? "border-black bg-slate-50"
                      : "border-transparent"
                  }`}
                />
              </li>
              {/* Género */}
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
              {/* Precio */}
              <li className="text-center flex justify-center items-center gap-x-1">
                <input
                  onChange={(e) =>
                    setEditableValues((prev) => ({
                      ...prev,
                      precio: e.target.value,
                    }))
                  }
                  disabled={editingProductId !== prod._id}
                  type="text"
                  value={
                    editingProductId === prod._id
                      ? editableValues.precio
                      : prod.precio
                  }
                  className={`text-center border p-1 max-w-[70px] ${
                    editingProductId === prod._id
                      ? "border-black bg-slate-50"
                      : "border-transparent"
                  }`}
                />{" "}
                €
              </li>

              {/* Botones */}
              <li className="flex justify-center items-center gap-x-2">
                {editingProductId !== prod._id ? (
                  // 🖍 Botón editar
                  <Button
                    onClick={() => handleEditProduct(prod)}
                    variant="success"
                  >
                    🖊
                  </Button>
                ) : (
                  // ✔ Botón confirmar
                  <Button
                    onClick={() => handleConfirmChanges()}
                    variant="primary"
                  >
                    ✔
                  </Button>
                )}

                <Button
                  onClick={() => handleDeleteClick(prod)} // ❌ Eliminar prod
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
