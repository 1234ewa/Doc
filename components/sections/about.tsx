"use client";

import Container from "@/components/ui/container";
import { ScrollReveal, ScrollRevealSection } from "@/components/ui/motion";

export default function About() {
  return (
    <ScrollRevealSection
      id="acerca"
      className="scroll-mt-20 bg-[#F6F3EA] py-12 sm:py-20 md:py-28"
    >
      <Container>
        <ScrollReveal className="grid gap-10 md:grid-cols-12 md:gap-14">
          <div className="md:col-span-5">
            <div className="inline-flex items-center rounded-full border border-[#C2CDD5] bg-[#F6F3EA] px-3 py-1 text-xs font-medium text-[#303854]/80">
              Sobre mí
            </div>
            <h2 className="mt-5 font-display text-2xl leading-tight text-[#303854] sm:text-3xl md:text-4xl">
              Medicina basada en evidencia,
              <br />
              explicada con cercanía.
            </h2>
            <div className="mt-3 h-px w-20 bg-accent" />
          </div>

          <div className="space-y-5 text-base leading-relaxed text-[#303854]/80 md:col-span-7 md:text-[1.05rem]">
            <p>
              El Dr. Jorge Alberto Campos Castellanos es urólogo de alta
              especialidad con formación en el Hospital Clinic de Barcelona
              (calificación Sobresaliente), subespecialización en Endourología
              en Clínica la Luz (Madrid) y en Cirugía Robótica en Cleveland
              Clinic (Ohio). Certificado por el Consejo Mexicano de Urología
              desde 1990 y con más de 35 años de experiencia.
            </p>
            <p>
              Cada consulta está diseñada para escuchar con calma, explicar con
              claridad y proponer un plan de tratamiento realista, cómodo y alineado
              con tu estilo de vida.
            </p>
          </div>
        </ScrollReveal>
      </Container>
    </ScrollRevealSection>
  );
}

