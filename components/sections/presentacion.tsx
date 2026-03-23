import Container from "@/components/ui/container";
import { ScrollReveal, ScrollRevealSection } from "@/components/ui/motion";

export default function Presentacion() {
  return (
    <ScrollRevealSection
      id="presentacion"
      className="scroll-mt-20 border-b border-[#C2CDD5] bg-[#F6F3EA] py-12 sm:py-20 md:py-28"
    >
      <Container>
        <div className="space-y-8 md:space-y-10">
          <ScrollReveal className="rounded-2xl border border-[#C2CDD5] bg-[#C2CDD5]/20 p-6 md:p-8">
            <div className="grid gap-8 md:grid-cols-12 md:gap-12">
              <div className="md:col-span-5">
                <div className="inline-flex items-center rounded-full border border-[#C2CDD5] bg-[#F6F3EA] px-3 py-1 text-xs font-medium text-[#303854]/80">
                  Presentación
                </div>
                <h2 className="mt-5 font-display text-2xl leading-tight text-[#303854] sm:text-3xl md:text-4xl">
                  ¿Qué hace un urólogo?
                </h2>
                <div className="mt-3 h-px w-20 bg-accent" />
              </div>
              <div className="md:col-span-7">
                <p className="leading-relaxed text-[#303854]/80 md:text-lg">
                  El urólogo es el especialista en el diagnóstico y tratamiento de las enfermedades del tracto urinario (riñones, uréteres, vejiga, uretra) y del sistema reproductor masculino. Realiza consultas, estudios, cirugías y seguimiento para padecimientos como infecciones, litiasis, cáncer urológico, hiperplasia prostática, disfunción eréctil, infertilidad masculina y más.
                </p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal className="rounded-2xl border border-[#C2CDD5] bg-[#F6F3EA] p-6 md:p-8">
            <div className="grid gap-8 md:grid-cols-12 md:gap-12">
              <div className="md:col-span-5">
                <div className="inline-flex items-center rounded-full border border-[#C2CDD5] bg-[#F6F3EA] px-3 py-1 text-xs font-medium text-[#303854]/80">
                  Perfil profesional
                </div>
                <h3 className="mt-5 font-display text-xl leading-tight text-[#303854] sm:text-2xl md:text-3xl">
                  Presentación del Dr. Jorge Alberto Campos Castellanos
                </h3>
                <div className="mt-6 flex justify-center md:justify-center">
                  <div className="h-[250px] w-[180px] rounded-sm border border-[#C2CDD5] bg-[#C2CDD5]/20" />
                </div>
              </div>
              <div className="md:col-span-7 md:flex md:items-center md:pt-14">
                <p className="max-w-2xl leading-relaxed text-[#303854]/80 md:text-lg">
                  Urólogo con formación en el Hospital Clinic i Provincial de Barcelona y subespecialización en Endourología (Clínica la Luz, Madrid) y Cirugía Robótica (Cleveland Clinic, Ohio). Certificado por el Consejo Mexicano de Urología desde 1990, con más de 35 años de experiencia y participación continua en congresos nacionales e internacionales, incluyendo la American Urological Association.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </ScrollRevealSection>
  );
}
