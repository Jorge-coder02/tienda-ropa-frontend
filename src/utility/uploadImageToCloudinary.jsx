export const uploadImageToCloudinary = async (file) => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", "tienda_unsigned"); // tienda_unsigned -> (Cloudinary > Settings > Upload presets)

  const res = await fetch(
    // Cloudinary devuelve una URL
    "https://api.cloudinary.com/v1_1/duos0mjwd/image/upload", // en CLOUDINARY_API @
    {
      method: "POST",
      body: formData,
    }
  );

  const data = await res.json();
  return data.secure_url; // esta URL es la que guardarás como `imagen` en tu producto
};
