import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import BackgroundGlow from "@/components/BackgroundGlow";
import logoManfred from "@/assets/logo-manfred.svg";

const Index = () => {
  useEffect(() => {
    document.title = "Mapa de carrera Tech — Bienvenida";
  }, []);

  return (
    <main className="relative min-h-screen flex items-center justify-center">
      <BackgroundGlow />
      <section className="relative z-10 container mx-auto py-24 text-center">
        <img src={logoManfred} alt="Manfred" className="h-12 md:h-16 mx-auto mb-8" />
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-primary">
          Mapa de carrera Tech
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
          Un test de 10 preguntas para ubicarte entre lo técnico y lo de negocio.
          Descubre tu cuadrante y los roles que mejor encajan contigo.
        </p>
        <div className="flex items-center justify-center gap-3">
          <Button asChild variant="hero" size="lg">
            <Link to="/quiz">Empezar</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <a href="#como-funciona">¿Cómo funciona?</a>
          </Button>
        </div>

        <div id="como-funciona" className="mt-16 grid md:grid-cols-3 gap-6 text-left">
          <div className="manfred-card">
            <h2 className="text-xl font-semibold mb-2 text-primary">1. Responde</h2>
            <p className="text-muted-foreground">10 preguntas de opción múltiple + tu nombre y email (opcional).</p>
          </div>
          <div className="manfred-card">
            <h2 className="text-xl font-semibold mb-2 text-primary">2. Calculamos</h2>
            <p className="text-muted-foreground">Sumamos valores técnicos y de negocio, normalizamos y te ubicamos en la matriz 3x3.</p>
          </div>
          <div className="manfred-card">
            <h2 className="text-xl font-semibold mb-2 text-primary">3. Descubre</h2>
            <p className="text-muted-foreground">Verás tu punto en la matriz y una lista de roles sugeridos.</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Index;
