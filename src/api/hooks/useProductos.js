import { useState, useEffect } from "react";
import api from "../axios";

// export const fetchProductos = () => api.get("/productos");

export function useProductos() {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [editableValues, setEditableValues] = useState({});
  const [editingProductId, setEditingProductId] = useState(null);

  // 🚀 Petición inicial productos
  const fetchProductos = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await api.get(`/productos`);
      setProductos(response.data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProductos();
  }, []);

  // 💬 Buscar por nombre
  const buscarPorNombre = async (nombre) => {
    setLoading(true);
    setError(null);
    try {
      const res = nombre.trim()
        ? await api.get(`/productos/nombre/${nombre}`)
        : await api.get("/productos");
      setProductos(res.data);
    } catch (err) {
      // Si es 404, limpiar productos
      if (err.response && err.response.status === 404) {
        setProductos([]); // limpio la lista
        setError("No se encontraron productos");
      } else {
        setError(err.message || "Error inesperado");
      }
    } finally {
      setLoading(false);
    }
  };

  // ✖ Eliminar producto
  const eliminarProducto = async (prod) => {
    setLoading(true);
    setError(null);
    try {
      await api.delete(`/productos/${prod._id}`);
      setProductos((prev) => prev.filter((p) => p._id !== prod._id));
    } catch (err) {
      setError(err);
      throw err; // para que el componente también pueda reaccionar
    } finally {
      setLoading(false);
    }
  };

  // 🖍 Mientras se está editando
  const handleEditProduct = (prod) => {
    const { _id, nombre, stock, precio } = prod;
    setEditingProductId(_id);
    setEditableValues({ nombre, stock, precio });
  };

  // 🖍✔ Confirmar edición
  const handleConfirmChanges = async () => {
    setLoading(true);
    setError(null);
    try {
      await api.put(`/productos/${editingProductId}`, editableValues);
      setProductos((prev) =>
        prev.map((prod) =>
          prod._id === editingProductId ? { ...prod, ...editableValues } : prod
        )
      );
      setEditingProductId(null);
      setEditableValues({});
    } catch (err) {
      setError(err);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return {
    productos,
    loading,
    error,
    buscarPorNombre,
    eliminarProducto,
    handleEditProduct,
    handleConfirmChanges,
    editableValues,
    setEditableValues,
    editingProductId,
    setEditingProductId,
    fetchProductos,
  };
}
