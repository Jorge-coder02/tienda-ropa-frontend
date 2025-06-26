import { Link } from "react-router-dom";
function Hero() {
  return (
    <section className="relative min-h-[calc(100dvh-62px)] flex flex-col gap-y-8 justify-center items-center pb-40 px-6 overflow-hidden">
      {/* Capa de fondo con blur (pseudo-elemento) */}
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center"
        style={{
          backgroundImage: "url('/img/outfits/hero.webp')",
        }}
      >
        {/* Esta es la capa que aplica el blur al fondo */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/img/outfits/hero.webp')",
            filter: "blur(0px)", // Blur solo para la imagen
          }}
        />
      </div>
      {/* Botón central */}
      <Link
        className="mt-12 bg-[#d6672d] hover:bg-[#dd8454] shadow-lg hover:shadow-xl px-8 py-4 rounded-xl
         text-white font-semibold text-3xl text-center transition ease-in-out duration-200"
        to={"/catalogo"}
      >
        Explora nuestro catálogo
      </Link>{" "}
    </section>
  );
}

export default Hero;
