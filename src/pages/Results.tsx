import React, { useEffect, useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import CustomMatrix from "@/components/CustomMatrix";
import { QUADRANTS } from "@/data/quadrants";
import logoManfred from "@/assets/logo-manfred.svg";

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
        <button className="manfred-button text-lg px-8 py-4" onClick={() => navigate("/quiz")}>Ir al quiz</button>
      </main>
    );
  }

  const { x_coord, y_coord, quadrant_id } = submission as any;
  const quad = QUADRANTS[quadrant_id];

  return (
    <main className="container py-10 grid gap-10">
      <header className="grid gap-2 text-center">
        <img src={logoManfred} alt="Manfred" className="h-8 md:h-10 mx-auto mb-4" />
        <h1 className="text-3xl font-bold text-primary">Tus resultados</h1>
        <p className="text-muted-foreground">Coordenadas: X {Math.round(x_coord)} · Y {Math.round(y_coord)} — Cuadrante: {quadrant_id}</p>
      </header>

      <section className="grid lg:grid-cols-2 gap-8 items-center">
        <div className="flex items-center justify-center">
          <CustomMatrix x={x_coord} y={y_coord} />
        </div>
        <div className="manfred-card">
          <h2 className="text-2xl font-semibold mb-2 text-primary">{quadrant_id}: {quad?.name}</h2>
          <p className="text-muted-foreground mb-6">{quad?.description}</p>
          <h3 className="text-lg font-semibold mb-4 text-primary">Roles sugeridos</h3>
          <ul className="space-y-2">
            {quad?.roles.map((r) => (
              <li key={r} className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>{r}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8 flex gap-4">
            <button 
              className="px-6 py-3 border border-primary text-primary rounded-md hover:bg-primary/10 transition-all duration-200"
              onClick={() => navigate("/quiz")}
            >
              Repetir test
            </button>
            <button 
              className="manfred-button"
              onClick={() => navigator.share ? navigator.share({ title: "Mi Mapa de carrera Tech", text: `Estoy en el cuadrante ${quadrant_id}`, url: location.pathname }) : window.print()}
            >
              Compartir
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ResultsPage;
