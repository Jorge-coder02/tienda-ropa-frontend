import Titulo from "../../otros/Titulo.styles";
import ItemEstilo from "../../PageComps/home/ItemEstilo";
function Estilos() {
  return (
    <section className="min-h-[80dvh] flex flex-col gap-y-12 justify-center items-center py-32 px-6 bg-[#f3f3f3]">
      <div className="max-w-[50%]">
        <Titulo variant="secondary" duration={1.6} steps={25}>
          CONOCE TU ESTILO
        </Titulo>
      </div>
      {/* Estilos */}
      <div className="max-w-[80%] grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-8 ">
        {/* Componente estilo */}
        <ItemEstilo
          nombre={"Urban milimalist"}
          descripcion={"Perfecto para un día casual pero con estilo."}
          imagen={"estilo1.webp"}
        ></ItemEstilo>
        <ItemEstilo
          nombre={"Summer Edge"}
          descripcion={
            "La mejor opción para un look callejero sin perder el estilo."
          }
          imagen={"estilo4.webp"}
        ></ItemEstilo>
        <ItemEstilo
          nombre={"Boho Chic"}
          descripcion={"Ideal para un look relajado y bohemio."}
          imagen={"estilo2.webp"}
        ></ItemEstilo>
      </div>
    </section>
  );
}

export default Estilos;
