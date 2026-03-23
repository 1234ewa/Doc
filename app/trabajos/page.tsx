import Navbar from "@/components/navbar";
import TrabajosDelDoctor from "@/components/sections/trabajos-del-doctor";
import UbicacionHorarios from "@/components/sections/ubicacion-horarios";
import CallToAction from "@/components/sections/call-to-action";
import Footer from "@/components/footer";

export const metadata = {
  title: "Trabajos y Trayectoria | Dr. Jorge Alberto Campos Castellanos",
  description: "Cirugías, patentes, congresos y participación académica del Dr. Campos",
};

export default function TrabajosPage() {
  return (
    <div className="min-h-dvh bg-[#F6F3EA] text-[#303854]">
      <Navbar />
      <main className="pt-14">
        <TrabajosDelDoctor />
        <UbicacionHorarios />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}
