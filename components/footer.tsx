import Link from "next/link";

const LINKS = [
  { href: "#home", label: "Home" },
  { href: "#presentacion", label: "Presentación" },
  { href: "#servicios", label: "Servicios" },
  { href: "#trabajos", label: "Trabajos" },
  { href: "#ubicacion", label: "Ubicación" },
  { href: "#acerca", label: "Acerca de mí" },
  { href: "#opiniones", label: "Opiniones" },
  { href: "#contacto", label: "Contacto" },
];

export default function Footer() {
  return (
    <footer className="border-t border-[#C2CDD5] bg-[#F6F3EA] text-[#303854]">
      <div className="container py-8 sm:py-12">
        <div className="flex flex-col gap-8 sm:gap-10 md:flex-row md:items-start md:justify-between">
          <div className="space-y-3">
            <div className="text-xs font-semibold tracking-premium text-[#1A1C22]">
              DR. JORGE ALBERTO CAMPOS CASTELLANOS
            </div>
            <p className="max-w-sm text-sm text-[#303854]/85">
              Consulta especializada con enfoque humano y tecnología de última generación
              para el cuidado integral de la salud.
            </p>
            <p className="text-xs text-[#303854]/75">© {new Date().getFullYear()}</p>
          </div>

          <div className="grid grid-cols-2 gap-6 sm:gap-10 md:grid-cols-3">
            <div className="space-y-3">
              <div className="text-xs font-semibold text-[#1A1C22]">Navegación</div>
              <div className="flex flex-col gap-2">
                {LINKS.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    className="text-sm text-[#303854]/80 transition hover:text-[#1A1C22]"
                  >
                    {l.label}
                  </a>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <div className="text-xs font-semibold text-[#1A1C22]">Redes</div>
              <div className="flex flex-col gap-2">
                <Link
                  href="/"
                  className="text-sm text-[#303854]/80 transition hover:text-[#1A1C22]"
                >
                  Instagram
                </Link>
                <Link
                  href="/"
                  className="text-sm text-[#303854]/80 transition hover:text-[#1A1C22]"
                >
                  LinkedIn
                </Link>
                <Link
                  href="/"
                  className="text-sm text-[#303854]/80 transition hover:text-[#1A1C22]"
                >
                  Behance
                </Link>
              </div>
            </div>

            <div className="space-y-3">
              <div className="text-xs font-semibold text-[#1A1C22]">Contacto</div>
              <div className="text-sm text-[#303854]/80">
                <div>contacto@clinicadeldoctor.example</div>
                <div>Ciudad • País</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

