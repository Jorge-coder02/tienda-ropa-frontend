import { Link } from "react-router-dom";
function Hero() {
  return (
    <section className="min-h-[calc(100dvh-76px)] flex flex-col gap-y-8 justify-center items-center pb-40 px-6">
      <h1 className="text-4xl font-semibold text-center">
        Bienvenido a UrbanwearX
      </h1>
      <Link
        className="btn bg-gray-900 hover:bg-gray-800 px-8 py-4 rounded-xl text-white text-3xl text-center"
        to={"/catalogo"}
      >
        Explora nuestro catálogo
      </Link>{" "}
      {/* styledComp */}
    </section>
  );
}

export default Hero;
