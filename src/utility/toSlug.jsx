export default function toSlug(str) {
  return str
    .toLowerCase()
    .trim()
    .normalize("NFD") // descompone letras acentuadas
    .replace(/[\u0300-\u036f]/g, "") // elimina los acentos
    .replace(/[^a-z0-9\s-]/g, "") // elimina caracteres especiales
    .replace(/\s+/g, "-") // reemplaza espacios por guiones
    .replace(/-+/g, "-") // elimina múltiples guiones seguidos
    .replace(/^-|-$/g, ""); // elimina guiones iniciales/finales
}
