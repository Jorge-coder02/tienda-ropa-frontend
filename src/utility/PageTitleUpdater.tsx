// Este componente se encarga de actualizar el título de la página según la ruta actual.
// Utiliza el hook useLocation de react-router-dom para obtener la ruta actual y useEffect
// para actualizar el título del documento.

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function PageTitleUpdater() {
  const location = useLocation();

  useEffect(() => {
    let pageTitle = "Página no encontrada";

    if (location.pathname === "/") pageTitle = "Inicio";
    else if (location.pathname === "/catalogo") pageTitle = "Catálogo";
    else if (location.pathname === "/carrito") pageTitle = "Mi carrito";
    else if (location.pathname === "/admin") pageTitle = "Dashboard";
    else if (location.pathname.startsWith("/productos/")) {
      const slug = location.pathname.split("/")[2];
      // más amigable visualmente:
      const nombre = slug.replace(/-/g, " ");
      pageTitle = `Producto - ${nombre}`;
    }

    document.title = `${pageTitle} - UrbanwearX`;
  }, [location.pathname]);

  return null;
}
export default PageTitleUpdater;
