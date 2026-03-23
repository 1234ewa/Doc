"use client";

import { useState } from "react";
import Image from "next/image";
import { MotionSection, MotionDiv } from "@/components/ui/motion";
import Container from "@/components/ui/container";

export default function Hero() {
  const [doctorError, setDoctorError] = useState(false);
  const [logoError, setLogoError] = useState(false);
  const [hospitalError, setHospitalError] = useState(false);

  return (
    <MotionSection
      id="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="relative overflow-hidden pt-14"
    >
      {/* Parte superior: fondo hospital + solo imágenes y nombre del doctor */}
      <div className="relative min-h-[320px] sm:min-h-[380px] md:min-h-[420px]">
        <div className="absolute inset-0 bg-[#303854]/80">
          {!hospitalError ? (
            <Image
              src="/hospital.jpg"
              alt=""
              fill
              className="object-cover opacity-75"
              sizes="100vw"
              priority
              onError={() => setHospitalError(true)}
            />
          ) : (
            <div className="h-full w-full bg-[#303854]" />
          )}
        </div>

        <Container className="relative z-10 flex h-full min-h-[280px] sm:min-h-[340px] items-start pt-6 sm:pt-8 md:pt-10">
          <div className="flex w-full flex-col items-center gap-5 sm:gap-8 md:flex-row md:justify-between md:gap-12">
            {/* Foto del doctor */}
            <MotionDiv
              initial={{ y: 12, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="shrink-0 self-center md:self-start md:mb-[-10px]"
            >
              <div className="relative h-[140px] w-[120px] sm:h-[220px] sm:w-[180px] md:h-[280px] md:w-[220px]">
                {!doctorError ? (
                  <Image
                    src="/doctor.jpg"
                    alt="Dr. Jorge Alberto Campos Castellanos"
                    fill
                    className="object-cover object-top"
                    sizes="220px"
                    onError={() => setDoctorError(true)}
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-zinc-200 text-center text-xs text-zinc-500">
                    doctor.jpg
                  </div>
                )}
              </div>
            </MotionDiv>

            {/* Solo el nombre del doctor en el área de las imágenes */}
            <MotionDiv
              initial={{ y: 12, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="max-w-full text-center md:text-left"
            >
              <p className="font-display text-lg font-bold leading-tight text-[#F6F3EA] [text-shadow:0_2px_12px_rgba(0,0,0,0.6)] sm:text-2xl md:text-4xl lg:text-5xl">
                Dr. Jorge Alberto Campos Castellanos
              </p>
            </MotionDiv>

            {/* Logo */}
            <MotionDiv
              initial={{ y: 12, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="shrink-0"
            >
              <div className="relative h-32 w-32 sm:h-52 sm:w-52 md:h-72 md:w-72 lg:h-96 lg:w-96">
                {!logoError ? (
                  <Image
                    src="/logo.png"
                    alt="Urología Innovadora"
                    fill
                    className="object-contain"
                    sizes="384px"
                    onError={() => setLogoError(true)}
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center rounded-xl border-2 border-white/30 bg-white/10 text-sm text-white/60">
                    logo.png
                  </div>
                )}
              </div>
            </MotionDiv>
          </div>
        </Container>
      </div>

      {/* Parte inferior: especialidades y consulta centrados */}
      <div className="border-t border-zinc-200 bg-[#F6F3EA] py-6 sm:py-8 md:py-10">
        <Container>
          <div className="flex flex-col items-center gap-4 text-center sm:gap-5 md:gap-6">
            <p className="font-display text-base font-semibold tracking-[0.08em] text-[#1A1C22] sm:text-lg md:text-xl">
              Médico Urólogo de Alta Especialidad
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-3">
              {[
                { href: "#endourologia", label: "Endourología" },
                { href: "#oncologia", label: "Oncología" },
                { href: "#cirugia-laparoscopica", label: "Cirugía Laparoscópica" },
                { href: "#laser", label: "Láser" },
                { href: "#cirugia-robotica", label: "Cirugía Robótica" },
              ].map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="min-h-[48px] min-w-[44px] rounded-sm border border-transparent bg-[#C2CDD5] px-4 py-3 text-sm font-semibold text-[#303854] shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(0,0,0,0.12),inset_0_-2px_0_#C5A059] focus:outline-none focus:ring-2 focus:ring-[#303854] focus:ring-offset-2 md:px-5 md:py-3 md:text-base"
                >
                  {item.label}
                </a>
              ))}
            </div>
            <a
              href="#consulta"
              className="block max-w-3xl px-2 py-1 text-center font-display text-sm font-medium tracking-[0.02em] text-[#1A1C22] transition-colors duration-300 hover:text-[#303854] focus:outline-none md:text-base"
            >
              <span>
                Consulta para evaluación del Sistema Génito – Urinario detallada para diagnosticar con la mayor precisión y brevedad los padecimientos relacionados.
              </span>
            </a>
          </div>
        </Container>
      </div>
    </MotionSection>
  );
}
