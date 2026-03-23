"use client";

import { useState } from "react";
import Container from "@/components/ui/container";
import {
  FORMACION_PRINCIPAL,
  SUBESPECIALIDADES_FORMACION,
  EXPERIENCIA_HOSPITALARIA,
  ESTUDIOS_ESPECIALIDAD_CURSOS,
  SOCIEDADES,
} from "@/lib/doctor-cv";

const ESTUDIOS_VISIBLES_INICIAL = 6;

export default function PresentacionDetalle() {
  const [verMasEstudios, setVerMasEstudios] = useState(false);
  const estudiosMostrados = verMasEstudios
    ? ESTUDIOS_ESPECIALIDAD_CURSOS
    : ESTUDIOS_ESPECIALIDAD_CURSOS.slice(0, ESTUDIOS_VISIBLES_INICIAL);

  return (
    <section className="border-b border-[#C2CDD5] bg-[#F6F3EA] py-12 sm:py-20 md:py-28">
      <Container>
        <div className="mx-auto max-w-5xl space-y-6">
          <div className="rounded-2xl border border-[#C2CDD5] bg-[#C2CDD5]/20 p-6 md:p-8">
            <h3 className="font-display text-lg font-semibold text-[#303854] md:text-xl">
              Formación en Urología
            </h3>
            <p className="mt-2 font-medium text-[#303854]">
              {FORMACION_PRINCIPAL.institucion}
            </p>
            <p className="mt-1 text-[#303854]/80">
              Catedrático de Urología: {FORMACION_PRINCIPAL.catedratico}
            </p>
            <p className="mt-2 font-medium text-primary">
              {FORMACION_PRINCIPAL.calificacion}
            </p>
            <p className="text-sm text-[#303854]/70">
              {FORMACION_PRINCIPAL.calificacionEn}
            </p>
          </div>

          <div className="rounded-2xl border border-[#C2CDD5] bg-[#F6F3EA] p-6 md:p-8">
            <h3 className="font-display text-lg font-semibold text-[#303854] md:text-xl">
              Sub-especialidades de Urología
            </h3>
            <p className="mt-1 text-sm text-zinc-500">
              Subspecialties in Urology
            </p>
            <ul className="mt-4 space-y-4">
              {SUBESPECIALIDADES_FORMACION.map((sub) => (
                <li key={sub.id} className="rounded-xl border border-[#C2CDD5] bg-[#C2CDD5]/20 p-4">
                  <p className="font-medium text-[#303854]">
                    {sub.tituloEs} / {sub.tituloEn}
                  </p>
                  <p className="mt-1 text-[#303854]/80">{sub.institucion}</p>
                  <p className="mt-1 text-sm text-[#303854]/80">
                    {sub.cargo}: {sub.profesor}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-[#C2CDD5] bg-[#F6F3EA] p-6 md:p-8">
            <h3 className="font-display text-lg font-semibold text-[#303854] md:text-xl">
              Estudios de especialidad, cursos de entrenamiento y subespecialidades
            </h3>
            <p className="mt-1 text-sm text-zinc-500">
              Specialty studies, training courses, training subspecialties at other urology departments
            </p>
            <ol className="mt-4 list-decimal space-y-3 pl-5 text-[#303854]/80">
              {estudiosMostrados.map((e) => (
                <li key={e.numero}>
                  <span className="font-medium text-[#303854]">{e.es}</span>
                  {e.fecha && <span className="block text-sm text-[#303854]/70">{e.fecha}</span>}
                  <span className="block text-sm text-[#303854]/70">{e.en}</span>
                </li>
              ))}
            </ol>
            {ESTUDIOS_ESPECIALIDAD_CURSOS.length > ESTUDIOS_VISIBLES_INICIAL && (
              <button
                type="button"
                onClick={() => setVerMasEstudios(!verMasEstudios)}
                className="mt-4 font-medium text-primary hover:underline"
              >
                {verMasEstudios ? "Ver menos" : `Ver todos (${ESTUDIOS_ESPECIALIDAD_CURSOS.length} ítems)`}
              </button>
            )}
          </div>

          <div className="rounded-2xl border border-[#C2CDD5] bg-[#F6F3EA] p-6 md:p-8">
            <h3 className="font-display text-lg font-semibold text-[#303854] md:text-xl">
              Sociedades a las que pertenece
            </h3>
            <p className="mt-1 text-sm text-zinc-500">
              Medical societies
            </p>
            <ul className="mt-4 space-y-2 text-[#303854]/80">
              {SOCIEDADES.map((s, i) => (
                <li key={i} className="rounded-lg border border-[#C2CDD5] bg-[#C2CDD5]/20 px-4 py-2">
                  <span className="font-medium text-[#303854]">{s.es}</span>
                  <span className="block text-sm text-[#303854]/70">{s.en}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-[#C2CDD5] bg-[#F6F3EA] p-6 md:p-8">
            <h3 className="font-display text-lg font-semibold text-[#303854] md:text-xl">
              Experiencia hospitalaria
            </h3>
            <p className="mt-1 text-sm text-zinc-500">
              Hospital experience
            </p>
            <ul className="mt-4 space-y-3">
              {EXPERIENCIA_HOSPITALARIA.map((h, i) => (
                <li key={i} className="flex flex-col gap-0.5 rounded-xl border border-[#C2CDD5] bg-[#C2CDD5]/20 p-4">
                  <span className="font-medium text-[#303854]">{h.institucion}</span>
                  <span className="text-[#303854]/80">{h.detalle}</span>
                  <span className="text-sm text-[#303854]/70">{h.detalleEn}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-[#C2CDD5] bg-[#C2CDD5]/20 p-6 md:p-8">
            <h3 className="font-display text-lg font-semibold text-[#303854] md:text-xl">
              Experiencia
            </h3>
            <ul className="mt-4 space-y-2 text-[#303854]/80 md:text-lg">
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                Más de 35 años de experiencia en urología
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                Formación en Hospital Clinic Barcelona, Clínica la Luz Madrid y Cleveland Clinic Ohio
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                Asistencia consecutiva a 35 congresos de la American Urological Association (1990-2025)
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                Certificación y re-certificación por el Consejo Mexicano de Urología (última: enero 2025)
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
