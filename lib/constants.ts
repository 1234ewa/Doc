// Número de WhatsApp (con código de país, sin +). Ejemplo: 5215512345678
export const WHATSAPP_NUMBER = "5215512345678";

export function whatsappUrl(mensaje: string): string {
  const text = encodeURIComponent(mensaje);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
}

// Ubicación (hospital y consultorio en un solo lugar) y horarios
// Para el mapa: Google Maps → busca el lugar → Compartir → Insertar un mapa → copia la URL del iframe (src="...")
export const UBICACION = {
  nombre: "Hospital Ángeles Lomas",
  direccion: "Vialidad de la Barranca s/n, Hacienda de las Palmas, 52763 Jesús del Monte, Méx.",
  placeId: "ChIJ_T9WXcwG0oUR7kwlWk7fDPc",
  mapsUrl: "https://maps.app.goo.gl/6EG5QHst5hRrQxmb6",
  mapsEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3763.514631313361!2d-99.274351!3d19.390141!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d206cc5d563ffd%3A0xf70cddee5a254bee!2sHospital%20%C3%81ngeles%20Lomas!5e0!3m2!1ses-419!2smx!4v1711145000000!5m2!1ses-419!2smx",
};

export const HORARIO_ATENCION = [
  "Hospital: Abierto 24 horas",
  "Lunes a Viernes (consulta): 9:00-19:00",
  "Sábados (consulta): 9:00-13:00",
];
