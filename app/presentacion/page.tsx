import Navbar from "@/components/navbar";
import Presentacion from "@/components/sections/presentacion";
import PresentacionDetalle from "@/components/sections/presentacion-detalle";
import UbicacionHorarios from "@/components/sections/ubicacion-horarios";
import CallToAction from "@/components/sections/call-to-action";
import Footer from "@/components/footer";

export const metadata = {
  title: "Presentación | Dr. Jorge Alberto Campos Castellanos",
  description: "Formación, subespecialidades, experiencia hospitalaria y trayectoria profesional del Dr. Campos.",
};

export default function PresentacionPage() {
  return (
    <div className="min-h-dvh bg-[#F6F3EA] text-[#303854]">
      <Navbar />
      <main className="pt-14">
        <Presentacion />
        <PresentacionDetalle />
        <UbicacionHorarios />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}
