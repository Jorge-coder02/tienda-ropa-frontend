function DashboardContent() {
  return (
    <>
      {/* Contenido principal */}
      <main className="flex-1 bg-slate-100 p-8">
        <h1 className="text-2xl font-bold mb-6">Dashboard</h1>

        {/* Grid de tarjetas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="bg-white p-4 rounded-2xl shadow text-center">
            <p className="text-gray-500">Productos activos</p>
            <h2 className="text-2xl font-semibold">128</h2>
          </div>
          <div className="bg-white p-4 rounded-2xl shadow text-center">
            <p className="text-gray-500">Pedidos hoy</p>
            <h2 className="text-2xl font-semibold">0</h2>
          </div>
          <div className="bg-white p-4 rounded-2xl shadow text-center">
            <p className="text-gray-500">Stock bajo</p>
            <h2 className="text-2xl font-semibold">5</h2>
          </div>
        </div>
      </main>
    </>
  );
}

export default DashboardContent;
