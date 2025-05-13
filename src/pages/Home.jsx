import Layout from "../layout/Layout";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <Layout>
      <div className="min-h-[calc(100dvh-76px)] flex flex-col gap-y-8 justify-center items-center pb-20 px-6">
        <h1 className="text-3xl text-center">Inicio</h1>
        <Link
          className="btn bg-gray-900 px-8 py-4 rounded-xl text-white text-3xl text-center"
          to={"/catalogo"}
        >
          Explora nuestro catálogo
        </Link>{" "}
        {/* styledComp */}
      </div>
    </Layout>
  );
}
