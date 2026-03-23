"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { cn } from "@/components/ui/cn";

const NAV_ITEMS = [
  { href: "#home", label: "Home" },
  { href: "/presentacion", label: "Presentación" },
  { href: "#servicios", label: "Servicios" },
  { href: "/trabajos", label: "Trabajos" },
  { href: "#ubicacion", label: "Ubicación" },
  { href: "#acerca", label: "Acerca de mí" },
  { href: "#contacto", label: "Contacto" },
];

function IconMenu({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
    </svg>
  );
}

function IconClose({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [menuAbierto, setMenuAbierto] = useState(false);
  const [activeHref, setActiveHref] = useState(
    pathname === "/trabajos" || pathname === "/presentacion" ? pathname : "#home"
  );

  const sectionHrefs = useMemo(
    () => NAV_ITEMS.filter((item) => item.href.startsWith("#")).map((item) => item.href),
    []
  );

  useEffect(() => {
    if (!menuAbierto) return;
    const cerrar = () => setMenuAbierto(false);
    window.addEventListener("scroll", cerrar, { passive: true });
    window.addEventListener("resize", cerrar);
    return () => {
      window.removeEventListener("scroll", cerrar);
      window.removeEventListener("resize", cerrar);
    };
  }, [menuAbierto]);

  useEffect(() => {
    if (menuAbierto) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuAbierto]);

  useEffect(() => {
    if (pathname === "/trabajos" || pathname === "/presentacion") {
      setActiveHref(pathname);
      return;
    }

    const updateFromHash = () => {
      const hash = window.location.hash;
      if (hash && sectionHrefs.includes(hash)) {
        setActiveHref(hash);
      } else {
        setActiveHref("#home");
      }
    };

    updateFromHash();

    const sections = sectionHrefs
      .map((href) => document.getElementById(href.slice(1)))
      .filter((section): section is HTMLElement => Boolean(section));

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (!visibleEntries.length) return;

        setActiveHref(`#${visibleEntries[0].target.id}`);
      },
      {
        rootMargin: "-30% 0px -55% 0px",
        threshold: [0.2, 0.4, 0.6],
      }
    );

    sections.forEach((section) => observer.observe(section));
    window.addEventListener("hashchange", updateFromHash);

    return () => {
      observer.disconnect();
      window.removeEventListener("hashchange", updateFromHash);
    };
  }, [pathname, sectionHrefs]);

  const navigateToSection = (href: string) => {
    setMenuAbierto(false);

    if (pathname !== "/") {
      router.push(`/${href}`);
      return;
    }

    const target = document.getElementById(href.slice(1));
    if (!target) return;

    setActiveHref(href);
    window.history.replaceState(null, "", href);
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const getLinkClasses = (href: string, mobile = false) => {
    const isActive = activeHref === href;
    const isAcerca = href === "#acerca";

    return cn(
      mobile
        ? "w-full rounded-md border-b-2 border-transparent px-4 py-4 text-center text-base font-medium text-[#1A1C22] transition-all duration-300 hover:border-[#C5A059]"
        : "rounded-md border-b-2 border-transparent px-3 py-2 text-sm font-medium transition-all duration-300",
      isActive
        ? mobile
          ? isAcerca
            ? "bg-[#303854] text-[#F6F3EA] hover:bg-[#262d44] hover:border-[#C5A059]"
            : "bg-[#C2CDD5] text-[#1A1C22]"
          : isAcerca
            ? "bg-[#303854] text-[#F6F3EA] hover:bg-[#262d44] hover:border-[#C5A059]"
            : "bg-[#303854] text-[#F6F3EA] hover:bg-[#262d44]"
        : mobile
          ? isAcerca
            ? "text-[#1A1C22] hover:bg-transparent active:bg-transparent"
            : "text-[#1A1C22] hover:bg-[#C2CDD5]/35 active:bg-[#C2CDD5]/35"
          : isAcerca
            ? "text-[#1A1C22] hover:border-[#C5A059] hover:text-[#1A1C22]"
            : "text-[#1A1C22] hover:border-[#C5A059] hover:text-[#1A1C22]"
    );
  };

  return (
    <header className="fixed inset-x-0 top-0 z-[90] border-b border-[#C2CDD5] bg-[#F6F3EA]">
      <div className="container">
        <nav className="flex h-14 items-center justify-between md:justify-center md:gap-4 lg:gap-6">
          <div className="hidden md:flex md:flex-1 md:items-center md:justify-center md:gap-2">
            {NAV_ITEMS.map((item) =>
              item.href.startsWith("#") ? (
                <button
                  key={item.href}
                  type="button"
                  onClick={() => navigateToSection(item.href)}
                  className={getLinkClasses(item.href)}
                >
                  {item.label}
                </button>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className={getLinkClasses(item.href)}
                  onClick={() => {
                    setMenuAbierto(false);
                    setActiveHref(item.href);
                  }}
                >
                  {item.label}
                </Link>
              )
            )}
          </div>

          <div className="flex flex-1 md:hidden" />
          <button
            type="button"
            onClick={() => setMenuAbierto(!menuAbierto)}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-[#303854] transition hover:bg-[#C2CDD5]/40 md:hidden"
            aria-expanded={menuAbierto}
            aria-label={menuAbierto ? "Cerrar menú" : "Abrir menú"}
          >
            {menuAbierto ? <IconClose className="h-6 w-6" /> : <IconMenu className="h-6 w-6" />}
          </button>
        </nav>
      </div>

      <div
        className={cn(
          "fixed inset-0 z-[110] bg-[#F6F3EA] transition-opacity duration-200 md:hidden",
          menuAbierto ? "opacity-100" : "pointer-events-none opacity-0"
        )}
      >
        <div className="relative flex h-full flex-col overflow-auto px-4 pb-8 pt-16">
          <button
            type="button"
            onClick={() => setMenuAbierto(false)}
            className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-md border border-[#C2CDD5] bg-[#F6F3EA] text-[#1A1C22] transition duration-300 hover:bg-[#C2CDD5]/35"
            aria-label="Cerrar menú"
          >
            <IconClose className="h-6 w-6" />
          </button>

          <div className="mt-4 flex flex-col items-center gap-2">
          {NAV_ITEMS.map((item) =>
            item.href.startsWith("#") ? (
              <button
                key={item.href}
                type="button"
                onClick={() => navigateToSection(item.href)}
                className={getLinkClasses(item.href, true)}
              >
                {item.label}
              </button>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => {
                  setMenuAbierto(false);
                  setActiveHref(item.href);
                }}
                className={getLinkClasses(item.href, true)}
              >
                {item.label}
              </Link>
            )
          )}
          </div>
        </div>
      </div>
    </header>
  );
}