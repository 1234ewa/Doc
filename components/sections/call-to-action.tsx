"use client";

import Container from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { ScrollRevealSection } from "@/components/ui/motion";

export default function CallToAction() {
  return (
    <ScrollRevealSection
      id="contacto"
      className="scroll-mt-20 bg-[#F6F3EA] py-12 sm:py-20 md:py-28"
    >
      <Container>
        <div className="relative overflow-hidden rounded-2xl border border-[#F6F3EA]/20 bg-[radial-gradient(circle_at_center,_#303854_0%,_#1A1C22_70%)] p-8 sm:p-10 md:p-14">
          <div className="grid gap-10 md:grid-cols-12 md:items-end">
            <div className="md:col-span-8">
              <div className="text-xs font-medium tracking-premium text-[#F6F3EA]/80">
                AGENDA TU CONSULTA
              </div>
              <h2 className="mt-5 font-display text-3xl leading-relaxed text-[#F6F3EA] md:text-4xl">
                Un espacio tranquilo
                <br />
                pensado para tu salud.
              </h2>
              <div className="mt-3 h-px w-20 bg-accent" />
              <p className="mt-5 max-w-2xl text-sm leading-relaxed text-[#F6F3EA]/80 md:text-base">
                Elige el día y horario que mejor se adapte a ti. Te responderemos con la
                confirmación de tu cita y, si es necesario, indicaciones previas a la
                consulta.
              </p>
            </div>

            <div className="flex flex-col gap-3 md:col-span-4 md:items-end">
              <Button
                href="#contacto"
                variant="ghost"
                size="lg"
                className="w-full rounded-md bg-[#C5A059] text-[#1A1C22] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#b8924d] md:w-auto"
              >
                Agendar cita
              </Button>
              <div className="text-xs text-[#F6F3EA]/80 md:text-right">
                contacto@clinicadeldoctor.example
              </div>
            </div>
          </div>
        </div>
      </Container>
    </ScrollRevealSection>
  );
}

