"use client";

import { useState } from "react";
import Container from "@/components/ui/container";
import { cn } from "@/components/ui/cn";
import {
  EXAMENES_ACREDITADOS,
  CONGRESOS,
  CONGRESOS_ORGANIZADOS,
  CONTRIBUCION_CIENTIFICA,
  PREMIOS_NACIONALES,
  CERTIFICACIONES_INTERNACIONALES,
  COMUNICACIONES_CONGRESOS,
} from "@/lib/doctor-cv";

const BLOQUES = [
  {
    id: "cirugias",
    titulo: "Cirugías",
    descripcion:
      "Procedimientos en endourología, laparoscopia, láser y cirugía robótica. Formación en centros de referencia internacional (Clínica la Luz, Cleveland Clinic).",
  },
  {
    id: "patentes",
    titulo: "Patentes",
    descripcion:
      "United States Patent Trademark Office. Dos patentes únicas en la historia de la Urología mexicana.",
  },
  {
    id: "conferencias",
    titulo: "Conferencias y participación académica",
    descripcion:
      "Ponencias, congresos, cursos y colaboración en docencia. Más de 35 años de participación en la American Urological Association y cursos organizados (Avances en Urología, Endourología con cirugía en vivo, Física aplicada a la Urología).",
  },
];

const CONGRESOS_VISIBLES_INICIAL = 12;

export default function TrabajosDelDoctor() {
  const [verMasCongresos, setVerMasCongresos] = useState(false);
  const [expandidoComunicacion, setExpandidoComunicacion] = useState<number | null>(null);
  const congresosMostrados = verMasCongresos
    ? CONGRESOS
    : CONGRESOS.slice(0, CONGRESOS_VISIBLES_INICIAL);

  return (
    <section
      id="trabajos"
      className="scroll-mt-20 border-b border-[#C2CDD5] bg-[#F6F3EA] py-10 sm:py-14 md:py-20"
    >
      <Container>
        <div className="mb-10 text-center">
          <h2 className="font-display text-2xl font-semibold text-[#303854] md:text-3xl">
            Trabajos y trayectoria
          </h2>
          <div className="mx-auto mt-3 h-px w-20 bg-accent" />
          <p className="mx-auto mt-3 max-w-2xl text-[#303854]/80 md:text-lg">
            Cirugías, patentes, exámenes acreditados, congresos y participación
            en la comunidad urológica.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {BLOQUES.map((bloque) => (
            <div
              key={bloque.id}
              className={cn(
                "rounded-2xl border border-[#C2CDD5] bg-[#C2CDD5]/20 p-6 shadow-sm transition hover:shadow-md"
              )}
            >
              <h3 className="font-display text-lg font-semibold text-[#303854]">
                {bloque.titulo}
              </h3>
              <p className="mt-3 text-[#303854]/80">{bloque.descripcion}</p>
            </div>
          ))}
        </div>

        {/* Contribución científica */}
        <div className="mt-12 rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm md:p-8">
          <h3 className="font-display text-xl font-semibold text-zinc-900">
            Contribución científica
          </h3>
          <p className="mt-1 text-sm text-zinc-500">
            Scientific contribution
          </p>

          <div className="mt-6 space-y-6">
            {/* Journal of Urology */}
            <div className="rounded-xl border border-zinc-200 bg-primary/5 p-4">
              <h4 className="font-display font-semibold text-zinc-900">
                {CONTRIBUCION_CIENTIFICA.journalOfUrology.titulo}
              </h4>
              <p className="mt-2 text-zinc-600">
                {CONTRIBUCION_CIENTIFICA.journalOfUrology.es}
              </p>
              <p className="mt-1 text-sm text-zinc-500">
                {CONTRIBUCION_CIENTIFICA.journalOfUrology.en}
              </p>
            </div>

            {/* AUA */}
            <div className="rounded-xl border border-zinc-200 bg-zinc-50/80 p-4">
              <h4 className="font-display font-semibold text-zinc-900">
                {CONTRIBUCION_CIENTIFICA.aua.titulo}
              </h4>
              <p className="mt-2 text-zinc-600">
                {CONTRIBUCION_CIENTIFICA.aua.es}
              </p>
            </div>

            {/* Congresos mundiales - temas */}
            <div>
              <h4 className="font-display font-semibold text-zinc-900">
                Congresos mundiales
              </h4>
              <p className="mt-1 text-sm text-zinc-500">
                Presentación de trabajos de super alta especialidad en Urología
              </p>
              <ul className="mt-3 space-y-2 text-zinc-600">
                {CONTRIBUCION_CIENTIFICA.congresosMundiales.map((item, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="shrink-0 text-primary">•</span>
                    <span>
                      {item.es}
                      <span className="block text-sm text-zinc-500">
                        {item.en}
                      </span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* La Física Aplicada a la Urología */}
            <div className="rounded-xl border border-zinc-200 bg-zinc-50/80 p-4">
              <h4 className="font-display font-semibold text-zinc-900">
                {CONTRIBUCION_CIENTIFICA.fisicaAplicada.tituloEs}
              </h4>
              <p className="mt-1 text-sm text-zinc-500">
                {CONTRIBUCION_CIENTIFICA.fisicaAplicada.tituloEn} —{" "}
                {CONTRIBUCION_CIENTIFICA.fisicaAplicada.totalCursos} congresos
                organizados
              </p>
              <div className="mt-4 grid gap-4 sm:grid-cols-1 md:grid-cols-3">
                <div>
                  <p className="text-xs font-medium uppercase tracking-wide text-zinc-500">
                    Colaboradores
                  </p>
                  <ul className="mt-2 space-y-1 text-zinc-600">
                    {CONTRIBUCION_CIENTIFICA.fisicaAplicada.colaboradores.map(
                      (c, i) => (
                        <li key={i}>{c}</li>
                      )
                    )}
                  </ul>
                </div>
                <div>
                  <p className="text-xs font-medium uppercase tracking-wide text-zinc-500">
                    Empresas médicas
                  </p>
                  <ul className="mt-2 space-y-2 text-zinc-600">
                    {CONTRIBUCION_CIENTIFICA.fisicaAplicada.empresasMedicas.map(
                      (e, i) => (
                        <li key={i}>
                          <span className="font-medium">{e.nombre}.</span>{" "}
                          {e.descripcion}
                          {"url" in e && e.url && (
                            <a
                              href={e.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="ml-1 text-primary hover:underline"
                            >
                              Ver video
                            </a>
                          )}
                        </li>
                      )
                    )}
                  </ul>
                </div>
                <div>
                  <p className="text-xs font-medium uppercase tracking-wide text-zinc-500">
                    Empresas automotrices
                  </p>
                  <p className="mt-2 text-zinc-600">
                    {CONTRIBUCION_CIENTIFICA.fisicaAplicada.empresasAutomotrices.join(
                      ", "
                    )}
                  </p>
                </div>
              </div>
            </div>

            {/* Patentes */}
            <div className="rounded-xl border border-primary/20 bg-primary/5 p-4">
              <h4 className="font-display font-semibold text-zinc-900">
                P A T E N T E S
              </h4>
              <p className="mt-1 font-medium text-zinc-700">
                {CONTRIBUCION_CIENTIFICA.patentes.oficina}
              </p>
              <p className="mt-2 text-zinc-600">
                {CONTRIBUCION_CIENTIFICA.patentes.es}
              </p>
              <p className="mt-1 text-sm text-zinc-500">
                {CONTRIBUCION_CIENTIFICA.patentes.en}
              </p>
            </div>

            {/* Premios nacionales */}
            <div className="rounded-xl border border-zinc-200 bg-zinc-50/80 p-4">
              <h4 className="font-display font-semibold text-zinc-900">
                Premios nacionales
              </h4>
              <p className="mt-2 text-zinc-600">
                Patentes: {PREMIOS_NACIONALES.patentes}
              </p>
            </div>

            {/* Certificaciones internacionales */}
            <div className="rounded-xl border border-zinc-200 bg-zinc-50/80 p-4">
              <h4 className="font-display font-semibold text-zinc-900">
                Certificaciones internacionales
              </h4>
              <ul className="mt-2 list-inside list-disc space-y-1 text-zinc-600">
                {CERTIFICACIONES_INTERNACIONALES.map((c, i) => (
                  <li key={i}>{c}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Exámenes acreditados */}
        <div className="mt-12 rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm md:p-8">
          <h3 className="font-display text-xl font-semibold text-zinc-900">
            Exámenes acreditados
          </h3>
          <p className="mt-1 text-sm text-zinc-500">
            Accredited exams
          </p>
          <ol className="mt-4 list-decimal space-y-3 pl-5 text-zinc-600 md:text-lg">
            {EXAMENES_ACREDITADOS.map((item, idx) => (
              <li key={idx}>
                <span className="font-medium text-zinc-800">{item.es}</span>
                <span className="block text-sm text-zinc-500">{item.en}</span>
              </li>
            ))}
          </ol>
        </div>

        {/* Congresos y reuniones */}
        <div className="mt-8 rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm md:p-8">
          <h3 className="font-display text-xl font-semibold text-zinc-900">
            Congresos y reuniones
          </h3>
          <p className="mt-1 text-sm text-zinc-500">
            Congress and meetings
          </p>
          <ul className="mt-4 space-y-2 text-zinc-600 md:text-base">
            {congresosMostrados.map((c) => (
              <li key={c.numero} className="flex gap-2">
                <span className="shrink-0 font-medium text-zinc-500">
                  {c.numero}.
                </span>
                <span>
                  {c.es}
                  {c.fecha && (
                    <span className="text-zinc-500"> {c.fecha}</span>
                  )}
                </span>
              </li>
            ))}
          </ul>
          {CONGRESOS.length > CONGRESOS_VISIBLES_INICIAL && (
            <button
              type="button"
              onClick={() => setVerMasCongresos(!verMasCongresos)}
              className="mt-4 text-primary font-medium hover:underline"
            >
              {verMasCongresos
                ? "Ver menos"
                : `Ver todos (${CONGRESOS.length} congresos)`}
            </button>
          )}

          <div className="mt-8 border-t border-zinc-200 pt-6">
            <h4 className="font-display text-lg font-semibold text-zinc-900">
              Congresos organizados
            </h4>
            <p className="mt-1 text-sm text-zinc-500">
              Organized meetings and congresses
            </p>
            <ul className="mt-4 space-y-4 text-zinc-600">
              {CONGRESOS_ORGANIZADOS.map((org, idx) => (
                <li key={idx} className="rounded-lg bg-zinc-50 p-4">
                  <p className="font-medium text-zinc-800">{org.tituloEs}</p>
                  <p className="text-sm text-zinc-500">{org.tituloEn}</p>
                  <p className="mt-1 text-sm">{org.detalle}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Comunicaciones y videos presentados en congresos */}
        <div className="mt-8 rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm md:p-8">
          <h3 className="font-display text-xl font-semibold text-zinc-900">
            Ponente en congresos
          </h3>
          <p className="mt-1 text-sm text-zinc-500">
            Comunicaciones y videos presentados en congresos / Meeting podium and video presentations
          </p>
          <div className="mt-4 space-y-2">
            {COMUNICACIONES_CONGRESOS.map((com) => (
              <div
                key={com.numero}
                className="rounded-xl border border-zinc-200 bg-zinc-50/50 overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() =>
                    setExpandidoComunicacion(
                      expandidoComunicacion === com.numero ? null : com.numero
                    )
                  }
                  className="flex min-h-[48px] w-full items-center justify-between gap-2 px-4 py-3 text-left hover:bg-zinc-100/80 active:bg-zinc-100"
                >
                  <span className="min-w-0 flex-1 text-left text-sm font-medium text-zinc-800 sm:text-base">
                    {com.numero}. {com.reunion}
                    {com.fecha && (
                      <span className="ml-1 text-zinc-500 sm:ml-2">{com.fecha}</span>
                    )}
                  </span>
                  <span className="shrink-0 text-zinc-400">
                    {expandidoComunicacion === com.numero ? "▼" : "▶"}
                  </span>
                </button>
                {expandidoComunicacion === com.numero && (
                  <div className="border-t border-zinc-200 bg-white px-4 py-3">
                    <p className="mb-2 text-sm text-zinc-500">
                      {com.reunionEn}
                    </p>
                    <ul className="space-y-2 text-sm text-zinc-600">
                      {com.trabajos.map((t, i) => (
                        <li key={i} className="flex gap-2">
                          {t.tipo && (
                            <span className="shrink-0 rounded bg-primary/10 px-1.5 py-0.5 text-xs font-medium text-primary">
                              {t.tipo}
                            </span>
                          )}
                          <span>
                            {t.titulo}
                            {t.tituloEn && (
                              <span className="block text-zinc-500">
                                {t.tituloEn}
                              </span>
                            )}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
