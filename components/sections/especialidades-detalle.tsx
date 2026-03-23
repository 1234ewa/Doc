"use client";

import { useState, useCallback, useEffect } from "react";
import Container from "@/components/ui/container";
import { whatsappUrl } from "@/lib/constants";
import { ScrollReveal, ScrollRevealSection } from "@/components/ui/motion";

// Visor de imagen a pantalla completa con zoom
function LightboxImagen({
  src,
  titulo,
  onCerrar,
}: {
  src: string;
  titulo: string;
  onCerrar: () => void;
}) {
  const [zoom, setZoom] = useState(1);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [arrastrando, setArrastrando] = useState(false);
  const [inicioArr, setInicioArr] = useState({ x: 0, y: 0 });

  const zoomIn = useCallback(() => setZoom((z) => Math.min(z + 0.35, 4)), []);
  const zoomOut = useCallback(() => setZoom((z) => Math.max(z - 0.35, 0.4)), []);
  const resetZoom = useCallback(() => {
    setZoom(1);
    setPos({ x: 0, y: 0 });
  }, []);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onCerrar();
      if (e.key === "+" || e.key === "=") zoomIn();
      if (e.key === "-") zoomOut();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onCerrar, zoomIn, zoomOut]);

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    if (e.deltaY < 0) zoomIn();
    else zoomOut();
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (zoom <= 1) return;
    setArrastrando(true);
    setInicioArr({ x: e.clientX - pos.x, y: e.clientY - pos.y });
  };
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!arrastrando) return;
    setPos({ x: e.clientX - inicioArr.x, y: e.clientY - inicioArr.y });
  };
  const handleMouseUp = () => setArrastrando(false);

  return (
    <div
      className="fixed inset-0 z-[100] flex flex-col bg-black/95"
      onClick={(e) => e.target === e.currentTarget && onCerrar()}
    >
      {/* Barra superior: título y controles */}
      <div className="flex shrink-0 items-center justify-between gap-4 border-b border-white/10 px-4 py-3">
        <p className="truncate text-sm font-medium text-white md:text-base">
          {titulo}
        </p>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={zoomOut}
            className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 text-white transition hover:bg-white/20"
            aria-label="Alejar"
          >
            −
          </button>
          <span className="min-w-[3rem] text-center text-sm text-white">
            {Math.round(zoom * 100)}%
          </span>
          <button
            type="button"
            onClick={zoomIn}
            className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 text-white transition hover:bg-white/20"
            aria-label="Acercar"
          >
            +
          </button>
          <button
            type="button"
            onClick={resetZoom}
            className="rounded-lg bg-white/10 px-3 py-1.5 text-xs text-white transition hover:bg-white/20"
          >
            Reiniciar
          </button>
          <button
            type="button"
            onClick={onCerrar}
            className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 text-white transition hover:bg-white/20"
            aria-label="Cerrar"
          >
            ✕
          </button>
        </div>
      </div>

      {/* Área de la imagen con scroll y zoom — clic en el fondo cierra */}
      <div
        className="flex flex-1 items-center justify-center overflow-hidden p-4"
        onWheel={handleWheel}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onClick={(e) => e.target === e.currentTarget && onCerrar()}
        style={{ cursor: zoom > 1 && arrastrando ? "grabbing" : zoom > 1 ? "grab" : "default" }}
      >
        <img
          src={src}
          alt={titulo}
          className="max-h-full max-w-full select-none object-contain transition-transform"
          style={{
            transform: `translate(${pos.x}px, ${pos.y}px) scale(${zoom})`,
          }}
          draggable={false}
          onClick={(e) => e.stopPropagation()}
        />
      </div>

      <p className="shrink-0 pb-2 text-center text-xs text-white/60">
        Rueda del ratón o +/− para zoom · Arrastra si está ampliado · Esc para cerrar
      </p>
    </div>
  );
}

const ESPECIALIDADES = [
  {
    id: "endourologia",
    imagen: "/especialidades/endourologia.jpeg",
    titulo: "Endourología",
    descripcion: "La endourología permite diagnosticar y tratar patologías del tracto urinario mediante instrumentos mínimamente invasivos, sin incisiones grandes. Incluye procedimientos como litotricia, ureteroscopia y cirugía endoscópica de próstata.",
    causas: [
      "Cálculos en riñón, uréter o vejiga",
      "Obstrucción de la vía urinaria",
      "Tumores de vía urinaria que requieren abordaje endoscópico",
      "Sangrado urinario de origen por definir",
      "Estrecheces (estenosis) uretrales o ureterales",
    ],
  },
  {
    id: "oncologia",
    imagen: "/especialidades/oncologia.svg",
    titulo: "Oncología urológica",
    descripcion: "Diagnóstico y tratamiento del cáncer que afecta riñón, vejiga, próstata, testículo y vías urinarias. Incluye cirugía, seguimiento y coordinación con otros especialistas cuando se requiere.",
    causas: [
      "Sospecha o diagnóstico de cáncer de próstata, riñón, vejiga o testículo",
      "Sangrado en orina sin causa aparente",
      "Masas o nódulos en riñón o vejiga en estudios de imagen",
      "Antecedentes familiares de cáncer urológico",
      "Seguimiento postratamiento oncológico urológico",
    ],
  },
  {
    id: "cirugia-laparoscopica",
    imagen: "/especialidades/laparoscopica.jpeg",
    titulo: "Cirugía laparoscópica",
    descripcion: "Técnica mínimamente invasiva con pequeñas incisiones y cámara, para procedimientos como nefrectomía, prostatectomía, cirugía de glándula suprarrenal y corrección de patologías renales o ureterales.",
    causas: [
      "Tumores renales o suprarrenales candidatos a cirugía",
      "Patología prostática que requiere cirugía",
      "Enfermedad quística renal o ureteral",
      "Cirugía reconstructiva de vía urinaria",
      "Segunda opinión para cirugía urológica mínimamente invasiva",
    ],
  },
  {
    id: "laser",
    imagen: "/especialidades/laser.svg",
    titulo: "Láser en urología",
    descripcion: "Uso de tecnología láser para tratamientos de próstata (HoLEP, enucleación), litiasis (litotricia láser), estenosis y lesiones de vía urinaria, con menor sangrado y recuperación más rápida.",
    causas: [
      "Hiperplasia benigna de próstata con síntomas obstructivos",
      "Cálculos que requieren fragmentación con láser",
      "Estenosis de uretra o unión ureterovesical",
      "Tumores superficiales de vejiga",
      "Sangrado o lesiones que requieren fotocoagulación",
    ],
  },
  {
    id: "cirugia-robotica",
    imagen: "/especialidades/robotica.jpeg",
    titulo: "Cirugía robótica",
    descripcion: "Cirugía asistida por robot para máxima precisión en prostatectomía radical, nefrectomía parcial, cirugía de vejiga y procedimientos reconstructivos. Menor pérdida de sangre y recuperación más favorable en casos seleccionados.",
    causas: [
      "Cáncer de próstata candidato a prostatectomía radical",
      "Tumores renales que requieren nefrectomía parcial",
      "Cáncer de vejiga que requiere cistectomía",
      "Cirugía reconstructiva compleja (fístulas, reimplantes)",
      "Búsqueda de segunda opinión para cirugía robótica urológica",
    ],
  },
];

function MensajeWhatsApp(especialidad: string): string {
  return `Hola, me interesa solicitar evaluación en *${especialidad}*. Me gustaría agendar una cita.`;
}

export default function EspecialidadesDetalle() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lightbox, setLightbox] = useState<{ src: string; titulo: string } | null>(null);
  const [imagenError, setImagenError] = useState(false);

  const esp = ESPECIALIDADES[currentIndex];

  const goToPrevious = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? ESPECIALIDADES.length - 1 : prev - 1
    );
    setImagenError(false);
  };

  const goToNext = () => {
    setCurrentIndex((prev) =>
      prev === ESPECIALIDADES.length - 1 ? 0 : prev + 1
    );
    setImagenError(false);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setImagenError(false);
  };

  return (
    <div className="bg-[#F6F3EA]">
      <ScrollRevealSection
        id="especialidades"
        className="scroll-mt-20 border-b border-[#C2CDD5]/80 py-10 sm:py-12 md:py-16 bg-[#F6F3EA]"
      >
        <Container>
          <div className="grid gap-8 md:grid-cols-2 md:items-center md:gap-10">
            <ScrollReveal className="space-y-6">
              <h2 className="font-display text-2xl font-semibold text-zinc-900 md:text-3xl">
                {esp.titulo}
              </h2>
              <p className="text-zinc-600 md:text-lg leading-relaxed">
                {esp.descripcion}
              </p>

              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-500 md:text-base">
                  Principales motivos para acudir a un chequeo
                </h3>
                <ul className="mt-3 space-y-2">
                  {esp.causas.map((causa) => (
                    <li key={causa} className="flex items-start gap-2 text-zinc-600 md:text-lg">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      {causa}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-2">
                <a
                  href={whatsappUrl(MensajeWhatsApp(esp.titulo))}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-semibold text-white shadow-md transition duration-200 hover:-translate-y-1 hover:bg-[#B1BDC7] hover:text-[#303854] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                >
                  Completar formato y enviar por WhatsApp
                </a>
                <p className="mt-2 text-xs text-zinc-500">
                  Al hacer clic se abrirá WhatsApp. Cuando tengas el formato definitivo, aquí se enviará la información que el paciente llene.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div
                className={`relative aspect-[4/3] overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-100 ${!imagenError ? "cursor-zoom-in" : ""}`}
                role={!imagenError ? "button" : undefined}
                tabIndex={!imagenError ? 0 : undefined}
                onClick={() => !imagenError && setLightbox({ src: esp.imagen, titulo: esp.titulo })}
              >
                {!imagenError ? (
                  <>
                    <img
                      src={esp.imagen}
                      alt={`Imagen ilustrativa - ${esp.titulo}`}
                      className="absolute inset-0 h-full w-full object-cover transition hover:opacity-95"
                      onError={() => setImagenError(true)}
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition hover:bg-black/20">
                      <span className="rounded-full bg-white/90 px-3 py-1.5 text-xs font-medium text-zinc-800 opacity-0 transition hover:opacity-100">
                        Ver imagen completa
                      </span>
                    </div>
                  </>
                ) : (
                  <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-zinc-200/80 p-6 text-center text-zinc-500">
                    <span className="text-sm font-medium">Imagen ilustrativa</span>
                    <span className="text-xs">
                      Añade <code className="rounded bg-zinc-300 px-1 py-0.5">public/especialidades/{esp.id}.jpg</code>
                    </span>
                  </div>
                )}
              </div>

              {/* Navegación del carrusel */}
              <div className="mt-6 flex items-center justify-between gap-4">
                <button
                  onClick={goToPrevious}
                  className="flex h-10 w-10 items-center justify-center rounded-md border border-zinc-200 bg-white text-zinc-900 transition duration-200 hover:-translate-y-1 hover:bg-[#B1BDC7] hover:border-zinc-300"
                  aria-label="Especialidad anterior"
                >
                  ‹
                </button>

                <div className="flex gap-2">
                  {ESPECIALIDADES.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => goToSlide(idx)}
                      className={`h-2 rounded-md transition duration-200 hover:-translate-y-1 ${
                        idx === currentIndex
                          ? "w-8 bg-primary"
                          : "w-2 bg-zinc-300 hover:bg-[#B1BDC7]"
                      }`}
                      aria-label={`Ir a especialidad ${idx + 1}`}
                      aria-current={idx === currentIndex ? "true" : "false"}
                    />
                  ))}
                </div>

                <button
                  onClick={goToNext}
                  className="flex h-10 w-10 items-center justify-center rounded-md border border-zinc-200 bg-white text-zinc-900 transition duration-200 hover:-translate-y-1 hover:bg-[#B1BDC7] hover:border-zinc-300"
                  aria-label="Especialidad siguiente"
                >
                  ›
                </button>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </ScrollRevealSection>

      {lightbox && (
        <LightboxImagen
          src={lightbox.src}
          titulo={lightbox.titulo}
          onCerrar={() => setLightbox(null)}
        />
      )}

      <section
        id="consulta"
        className="scroll-mt-24 border-b border-zinc-200/80 pt-20 pb-10 sm:pt-24 sm:pb-12 md:pt-28 md:pb-16"
      >
        <Container>
          <div className="space-y-6">
            <h2 className="font-display text-2xl font-semibold text-zinc-900 md:text-3xl">
              Consulta para evaluación del Sistema Génito – Urinario
            </h2>
            <p className="max-w-2xl text-zinc-600 md:text-lg leading-relaxed">
              Consulta detallada para diagnosticar con la mayor precisión y brevedad los padecimientos relacionados. Aquí puedes ampliar la información y añadir cómo es el proceso de evaluación.
            </p>
            <a
              href={whatsappUrl("Hola, me gustaría agendar una consulta para evaluación del Sistema Génito – Urinario.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-semibold text-white shadow-md transition duration-200 hover:-translate-y-1 hover:bg-[#B1BDC7] hover:text-[#303854] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              Solicitar consulta por WhatsApp
            </a>
            <div className="h-px w-20 bg-zinc-300" />
          </div>
        </Container>
      </section>
    </div>
  );
}
