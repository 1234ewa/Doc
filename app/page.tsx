import Navbar from "@/components/navbar";
import Hero from "@/components/sections/hero";
import Presentacion from "@/components/sections/presentacion";
import EspecialidadesDetalle from "@/components/sections/especialidades-detalle";
import About from "@/components/sections/about";
import Services from "@/components/sections/services";
import UbicacionHorarios from "@/components/sections/ubicacion-horarios";
import CallToAction from "@/components/sections/call-to-action";
import Footer from "@/components/footer";

export default function HomePage() {
  return (
    <div className="min-h-dvh bg-[#F6F3EA] text-[#303854]">
      <Navbar />
      <main>
        <Hero />
        <Presentacion />
        <About />
        <Services />
        <EspecialidadesDetalle />
        <UbicacionHorarios />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}

