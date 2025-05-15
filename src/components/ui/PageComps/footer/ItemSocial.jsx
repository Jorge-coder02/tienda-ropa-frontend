function ItemSocial({ img_src, tamano = 6, enlace = "#" }) {
  // Recortar cadena de img_src (coger última parte desde el último /)
  const lastSlashIndex = img_src.lastIndexOf("/");
  const imgName = img_src.substring(lastSlashIndex + 1);

  return (
    <a href={enlace} target="_blank" className={`w-${tamano} h-${tamano}`}>
      <img
        className="rounded-lg opacity-80 hover:opacity-60 transition duration-200"
        src={img_src}
        alt={imgName}
      />
    </a>
  );
}

export default ItemSocial;
