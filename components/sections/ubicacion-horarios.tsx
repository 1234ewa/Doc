"use client";

import Container from "@/components/ui/container";
import { UBICACION, HORARIO_ATENCION } from "@/lib/constants";
import { ScrollReveal, ScrollRevealSection } from "@/components/ui/motion";

export default function UbicacionHorarios() {
  return (
    <ScrollRevealSection
      id="ubicacion"
      className="scroll-mt-20 border-b border-[#C2CDD5] bg-[#F6F3EA] py-10 sm:py-14 md:py-20"
    >
      <Container>
        <ScrollReveal className="mb-10 text-center">
          <h2 className="font-display text-2xl font-semibold text-[#303854] md:text-3xl">
            Ubicación y horario de atención
          </h2>
          <div className="mx-auto mt-3 h-px w-20 bg-accent" />
          <p className="mt-3 text-[#303854]/80 md:text-lg">
            Te esperamos en nuestro consultorio.
          </p>
        </ScrollReveal>

        <div className="grid gap-8 lg:grid-cols-5">
          <ScrollReveal className="overflow-hidden rounded-2xl border border-[#C2CDD5] bg-[#C2CDD5]/20 shadow-sm lg:col-span-3">
            <h3 className="border-b border-[#C2CDD5] bg-[#F6F3EA] px-6 py-4 font-display text-lg font-semibold text-[#303854]">
              {UBICACION.nombre}
            </h3>
            <p className="px-6 pt-4 text-[#303854]/80 leading-relaxed">
              {UBICACION.direccion}
            </p>
            {/*
              Embed del mapa:
              - Si hay API Key (NEXT_PUBLIC_GOOGLE_MAPS_EMBED_API_KEY), usamos Embed API (v1/place) para mostrar
                la tarjeta de información del lugar.
              - Si no hay API Key, usamos el embed estándar (embed?pb=...), que no requiere key.
            */}
            <iframe
              title="Mapa - Ubicación"
              src={
                process.env.NEXT_PUBLIC_GOOGLE_MAPS_EMBED_API_KEY
                  ? `https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_EMBED_API_KEY}&q=place_id:${UBICACION.placeId}`
                  : UBICACION.mapsEmbedUrl
              }
              width="100%"
              height="450"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="p-4">
              <a
                href={UBICACION.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition hover:underline"
              >
                Abrir en Google Maps →
              </a>
            </div>
          </ScrollReveal>

          <ScrollReveal className="rounded-2xl border border-zinc-200 bg-zinc-50/50 p-6 shadow-sm lg:col-span-2">
            <h3 className="font-display text-lg font-semibold text-[#303854]">
              Horario de atención
            </h3>
            <ul className="mt-4 space-y-2 text-[#303854]/80">
              {HORARIO_ATENCION.map((linea) => (
                <li key={linea} className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  {linea}
                </li>
              ))}
            </ul>
          </ScrollReveal>
        </div>
      </Container>
    </ScrollRevealSection>
  );
}
