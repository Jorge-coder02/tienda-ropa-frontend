import { useProductos } from "../api/hooks/useProductos";
import ResumenBox from "./ui/ResumenBox";

function DashboardContent() {
  const { productos } = useProductos();

  // Calcular estadísticas de productos
  const precios = productos.map((p) => p.precio).sort((a, b) => a - b);

  const precioMin = precios[0] ?? 0;
  const precioMax = precios[precios.length - 1] ?? 0;
  const precioMediana =
    precios.length > 0 ? precios[Math.floor(precios.length / 2)] : 0;

  const formatearPrecio = (valor) =>
    valor.toLocaleString("es-ES", {
      style: "currency",
      currency: "EUR",
      minimumFractionDigits: 2,
    });

  return (
    <>
      {/* Contenido principal */}
      <main className="flex-1 bg-slate-100 p-8">
        <h1 className="text-2xl font-bold mb-6">Dashboard</h1>

        {/* Grid de tarjetas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <ResumenBox label="Productos activos" value={productos.length} />

          <ResumenBox
            label="Stock total"
            value={productos.reduce((total, prod) => total + prod.stock, 0)}
          />
          <ResumenBox label="Pedidos hoy" value={0} />

          <ResumenBox
            label="Producto más barato"
            bgColor="bg-slate-200"
            value={formatearPrecio(precioMin)}
          />
          <ResumenBox
            label="Producto más caro"
            bgColor="bg-slate-200"
            value={formatearPrecio(precioMax)}
          />
          <ResumenBox
            label="Mediana de precio"
            bgColor="bg-slate-200"
            value={formatearPrecio(precioMediana)}
          />
        </div>
      </main>
    </>
  );
}

export default DashboardContent;
