import { useState, useEffect, useRef } from "react";
import Button from "../ui/Button";
import api from "../../api/axios";
import toSlug from "../../utility/toSlug";
import LoadingSpinner from "../../components/ui/LoadingSpinner2";
import { uploadImageToCloudinary } from "../../utility/uploadImageToCloudinary";

function AddProduct() {
  const [loading, setLoading] = useState(false);
  const [successProduct, setSuccessProduct] = useState(false);
  const [error, setError] = useState("");
  const [categorias, setCategorias] = useState(null); // se recogen de la API
  const [newProduct, setNewProduct] = useState({
    // guardo los valores del nuevo producto
    nombre: "",
    slug: "",
    descripcion: "",
    precio: "",
    stock: "",
    imagen: "",
    genero: "hombre", // default
    categoria: "camisetas",
  });
  const imageInputRef = useRef(null);

  // 🚀 Fetch categorías
  useEffect(() => {
    const fetchCategorias = async () => {
      setLoading(true);
      try {
        const res = await api.get("/productos/categorias");
        setCategorias(res.data);
      } catch (error) {
        console.error("Error al buscar categorías ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCategorias();
  }, []);

  // 🚀🟢 Fetch enviar datos
  const handleAddProduct = async () => {
    setLoading(true);
    setError("");
    setSuccessProduct(false);

    try {
      const imageFile = imageInputRef.current.files[0]; // recojo imagen

      // Función que sube la imagen y devuelve { url, public_id }
      const { url: imageUrl, public_id } = await uploadImageToCloudinary(
        imageFile
      );

      const slug = toSlug(newProduct.nombre);

      const productToSend = {
        ...newProduct,
        slug,
        imagen: imageUrl,
        public_id, // <-- ahora añado public_id de la img Cloudinary
      };

      console.log("Envío: ", productToSend);

      await api.post("/productos", productToSend);
      setSuccessProduct(true);
    } catch (error) {
      const message =
        error.response?.data?.mensaje || error.message || "Error desconocido";
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col gap-y-4">
      <h2 className="text-xl font-semibold">Añadir nuevo producto</h2>
      {loading && (
        <div className="">
          <LoadingSpinner />
        </div>
      )}

      {/* Contenedor principal */}
      <div className="">
        {/* Contenedor inputs */}
        <div className="flex flex-col gap-y-4">
          {/* Arriba */}
          <div className="flex md:flex-row gap-y-2 flex-col gap-x-2">
            {/* Nombre */}
            <input
              onChange={(e) =>
                setNewProduct((prev) => ({ ...prev, nombre: e.target.value }))
              }
              type="text"
              className="p-2 w-full"
              placeholder="Nombre"
            />

            {/* Descripción */}
            <input
              onChange={(e) =>
                setNewProduct((prev) => ({
                  ...prev,
                  descripcion: e.target.value,
                }))
              }
              type="text"
              className="p-2 w-full"
              placeholder="Descripción"
            />

            {/* Imagen */}
            <input
              ref={imageInputRef}
              type="file"
              accept="image/*"
              className="p-2 w-full"
            />
          </div>
          {/* Abajo */}
          <div className="flex gap-x-2">
            {/* Precio */}
            <input
              onChange={(e) =>
                setNewProduct((prev) => ({ ...prev, precio: e.target.value }))
              }
              type="number"
              className="p-2 w-full"
              placeholder="Precio"
            />

            {/* Stock */}
            <input
              onChange={(e) =>
                setNewProduct((prev) => ({ ...prev, stock: e.target.value }))
              }
              type="number"
              className="p-2 w-full"
              placeholder="Stock"
            />
            {/* Géneros */}
            <select
              onChange={(e) =>
                setNewProduct((prev) => ({ ...prev, genero: e.target.value }))
              }
              className="w-full"
            >
              <option value="hombre">Hombre</option>
              <option value="mujer">Mujer</option>
            </select>

            {/* Categorías */}
            <select
              onChange={(e) =>
                setNewProduct((prev) => ({
                  ...prev,
                  categoria: e.target.value,
                }))
              }
              value={newProduct.categoria}
              className="w-full"
            >
              {categorias?.map((categoria) => (
                <option key={categoria} value={categoria}>
                  {categoria}
                </option>
              ))}
            </select>
          </div>

          <div className="font-semibold ">
            <Button onClick={() => handleAddProduct()} variant="primary">
              Añadir producto
            </Button>
          </div>
          {successProduct && (
            <span className="text-green-500 font-semibold">
              Producto añadido correctamente
            </span>
          )}
          {error !== "" && (
            <span className="text-red-500 font-semibold">{error}</span>
          )}
        </div>
      </div>
    </div>
  );
}

export default AddProduct;
