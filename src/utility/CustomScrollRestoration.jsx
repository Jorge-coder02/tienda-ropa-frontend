import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function CustomScrollRestoration() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Fuerza el scroll al inicio al cambiar de ruta
  }, [pathname]);

  return null;
}
