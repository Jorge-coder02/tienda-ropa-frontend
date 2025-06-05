export const uploadImageToCloudinary = async (file) => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", "tienda_unsigned"); // tienda_unsigned -> (Cloudinary > Settings > Upload presets)

  try {
    // Subo img a Cloudinary
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/duos0mjwd/image/upload", // ruta en -> CLOUDINARY_API @
      {
        method: "POST",
        body: formData,
      }
    );

    // Cloudinary devuelve una URL
    const data = await res.json();
    return {
      url: data.secure_url,
      public_id: data.public_id,
    };
  } catch (error) {
    console.error("Error subiendo imagen a Cloudinary", error);
    return null;
  }
};
