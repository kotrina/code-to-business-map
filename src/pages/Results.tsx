import React, { useEffect, useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import CustomMatrix from "@/components/CustomMatrix";
import { QUADRANTS } from "@/data/quadrants";
import { Button } from "@/components/ui/button";

const ResultsPage: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    document.title = "Mapa de carrera Tech — Resultados";
  }, []);

  const submission = useMemo(() => {
    const id = (location.state as any)?.id as string | undefined;
    const list = JSON.parse(localStorage.getItem("submissions") || "[]");
    if (id) return list.find((s: any) => s.id === id) ?? list[0];
    return list[0];
  }, [location.state]);

  if (!submission) {
    return (
      <main className="container py-16 text-center">
        <h1 className="text-3xl font-bold mb-4">Sin resultados</h1>
        <p className="text-muted-foreground mb-6">Realiza el test para ver tu posición en la matriz.</p>
        <Button variant="hero" size="lg" onClick={() => navigate("/quiz")}>Ir al quiz</Button>
      </main>
    );
  }

  const { x_coord, y_coord, quadrant_id } = submission as any;
  const quad = QUADRANTS[quadrant_id];

  return (
    <main className="container py-10 grid gap-10">
      <header className="grid gap-2">
        <h1 className="text-3xl font-bold">Tus resultados</h1>
        <p className="text-muted-foreground">Coordenadas: X {Math.round(x_coord)} · Y {Math.round(y_coord)} — Cuadrante: {quadrant_id}</p>
      </header>

      <section className="grid lg:grid-cols-2 gap-8 items-center">
        <div className="flex items-center justify-center">
          <CustomMatrix x={x_coord} y={y_coord} />
        </div>
        <div className="rounded-lg border p-6 bg-card shadow-[var(--shadow-elevated)]">
          <h2 className="text-2xl font-semibold mb-2">{quadrant_id}: {quad?.name}</h2>
          <p className="text-muted-foreground mb-4">{quad?.description}</p>
          <h3 className="text-lg font-semibold mb-2">Roles sugeridos</h3>
          <ul className="list-disc pl-5 space-y-1">
            {quad?.roles.map((r) => (
              <li key={r}>{r}</li>
            ))}
          </ul>
          <div className="mt-6 flex gap-3">
            <Button variant="outline" onClick={() => navigate("/quiz")}>Repetir test</Button>
            <Button variant="hero" onClick={() => navigator.share ? navigator.share({ title: "Mi Mapa de carrera Tech", text: `Estoy en el cuadrante ${quadrant_id}`, url: location.pathname }) : window.print()}>Compartir</Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ResultsPage;
