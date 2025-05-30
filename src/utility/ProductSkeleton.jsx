import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function ProductSkeleton() {
  return (
    <div className="flex flex-col gap-y-4 justify-between items-center bg-[#f5f4f4] shadow p-6 min-h-[200px] lg:h-[380px]">
      <div className="w-full flex flex-col items-center">
        {/* Imagen */}
        <div className="w-48 h-48 mb-4">
          <Skeleton height="100%" width="100%" />
        </div>

        {/* Nombre y precio */}
        <div className="text-center w-full px-4">
          <Skeleton height={20} width="80%" className="mx-auto mb-2" />
          <Skeleton height={20} width="40%" className="mx-auto" />
        </div>
      </div>

      {/* Botón */}
      <Skeleton height={40} width={120} className="mt-4" />
    </div>
  );
}

export default ProductSkeleton;
