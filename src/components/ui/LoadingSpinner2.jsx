import { useState, useEffect } from "react";

export default function LoadingSpinner() {
  const [showSpinner, setShowSpinner] = useState(false);

  useEffect(() => {
    setShowSpinner(true);
  }, []);

  if (!showSpinner) return null; // No renderiza nada si no ha pasado el delay

  return (
    <div className="flex justify-center items-center">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#0c69ea]"></div>
    </div>
  );
}
