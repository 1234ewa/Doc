"use client";

import Container from "@/components/ui/container";
import { cn } from "@/components/ui/cn";
import { ScrollReveal, ScrollRevealSection } from "@/components/ui/motion";

const SERVICES = [
  {
    title: "Consulta integral",
    description:
      "Valoración completa, historial clínico detallado y explicación clara de cada diagnóstico.",
  },
  {
    title: "Estudios y diagnóstico",
    description:
      "Solicitud e interpretación de estudios con enfoque en medicina basada en evidencia.",
  },
  {
    title: "Planes de tratamiento",
    description:
      "Tratamientos personalizados que equilibran efectividad, comodidad y estilo de vida.",
  },
  {
    title: "Seguimiento continuo",
    description:
      "Acompañamiento cercano, ajustes de tratamiento y resolución de dudas entre consultas.",
  },
];

export default function Services() {
  return (
    <ScrollRevealSection
      id="servicios"
      className="scroll-mt-20 bg-[#F6F3EA] py-12 sm:py-20 md:py-28"
    >
      <Container>
        <ScrollReveal className="flex flex-col items-start gap-6 sm:flex-row sm:items-end sm:justify-between sm:gap-8">
          <div>
            <div className="inline-flex items-center rounded-full border border-[#C2CDD5] bg-[#F6F3EA] px-3 py-1 text-xs font-medium text-[#303854]/80">
              Servicios
            </div>
            <h2 className="mt-5 font-display text-2xl text-[#303854] sm:text-3xl md:text-4xl">
              Todo lo que necesitas
              <br />
              en un mismo lugar.
            </h2>
            <div className="mt-3 h-px w-20 bg-accent" />
          </div>
          <p className="hidden max-w-md text-sm leading-relaxed text-[#303854]/75 md:block">
            Un sistema de atención pensado para que cada paso —de la primera consulta
            al seguimiento— sea claro, ágil y humano.
          </p>
        </ScrollReveal>

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {SERVICES.map((s, index) => (
            <ScrollReveal
              key={s.title}
              transition={{ delay: index * 0.06 }}
              className={cn(
                "group flex h-full flex-col overflow-hidden rounded-[4px] border border-[#C2CDD5] bg-[#F6F3EA] p-7 transition-[border-color,box-shadow] duration-200 ease-out",
                "hover:border-[#C5A059] hover:shadow-[0_8px_24px_rgba(26,28,34,0.08)]"
              )}
            >
              <div className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-[#C5A059] bg-transparent text-xs font-semibold leading-none text-[#C5A059] transition-colors duration-200 ease-out">
                +
              </div>
              <h3 className="mt-4 text-base font-semibold text-[#1A1C22]">
                {s.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[#3E4556]">
                {s.description}
              </p>
              <div className="mt-7 h-px w-full bg-[#C2CDD5]" />
              <div className="mt-4 text-xs font-medium tracking-premium text-[#303854]/80 transition-all duration-200 ease-out group-hover:underline group-hover:underline-offset-4">
                Más información
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </ScrollRevealSection>
  );
}

