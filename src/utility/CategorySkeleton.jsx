import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function CategorySkeleton() {
  return (
    <div className="space-y-4 mb-6">
      {/* Título principal */}
      <Skeleton height={32} width={200} />

      {/* Descripción corta */}
      {/* <Skeleton height={20} width={300} /> */}

      {/* Barra de filtros simulada */}
      {/* <div className="flex gap-4">
        <Skeleton height={36} width={100} />
        <Skeleton height={36} width={120} />
        <Skeleton height={36} width={80} />
      </div> */}
    </div>
  );
}
