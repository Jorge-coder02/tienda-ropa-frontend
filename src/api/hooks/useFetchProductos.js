import { useState, useEffect } from "react";
import api from "../axios";

export function useFetchProductos(genero, categoria = "all") {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProductos = async () => {
      setLoading(true);
      setError(null);
      try {
        let response;
        if (!categoria || categoria === "all") {
          response = await api.get(`/productos/genero/${genero}`);
        } else {
          response = await api.get(`/productos/filtro`, {
            params: { genero, categoria },
          });
        }

        // Espera artificial de mínimo 300ms si el fetch fue instantáneo para skeleton loading
        await new Promise((res) => setTimeout(res, 450));

        setProductos(response.data);
      } catch (err) {
        setError(err);
        setProductos([]);
      } finally {
        setLoading(false);
      }
    };

    fetchProductos();
  }, [genero, categoria]);

  return { productos, loading, error };
}
