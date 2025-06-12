import { useState, useEffect } from "react";
import api from "../axios";

// export const fetchProductos = () => api.get("/productos");

export function useProductos() {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(false);

  // 🚀 Fetch inicial de productos
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

  // 💬 Fetch búsqueda por nombre
  const buscarPorNombre = async (nombre) => {
    try {
      setLoading(true);
      const res = nombre.trim()
        ? await api.get(`/productos/nombre/${nombre}`)
        : await api.get("/productos");
      setProductos(res.data);
    } catch (error) {
      console.error("Error al buscar productos:", error);
    } finally {
      setLoading(false);
    }
  };

  const eliminarProducto = async (prod) => {
    const respuesta = window.confirm(
      `¿Estás seguro de eliminar este producto? ${prod.nombre}`
    );
    if (respuesta) {
      try {
        setLoading(true);
        await api.delete(`/productos/${prod._id}`);
        setProductos((prev) => prev.filter((p) => p._id !== prod._id));
      } catch (error) {
        console.error("Error al eliminar producto:", error);
        if (error.response) {
          throw new Error(
            error.response.data?.msg ||
              error.response.data?.message ||
              "Error desconocido"
          );
        } else if (error.request) {
          throw new Error(
            "No se recibió respuesta del servidor. Verifica tu conexión."
          );
        } else {
          throw new Error(`Error de configuración: ${error.message}`);
        }
      } finally {
        setLoading(false);
      }
    }
  };

  return {
    productos,
    loading,
    buscarPorNombre,
    eliminarProducto,
  };
}
