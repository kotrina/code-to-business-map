import React from "react";

interface MatrixGridProps {
  x: number; // 0-100
  y: number; // 0-100
}

// Signature moment: soft glow following the point
export const MatrixGrid: React.FC<MatrixGridProps> = ({ x, y }) => {
  return (
    <div className="relative w-full max-w-xl aspect-square select-none">
      {/* Grid */}
      <div className="absolute inset-0 grid grid-cols-3 grid-rows-3 rounded-lg border border-border overflow-hidden bg-[var(--gradient-soft)]">
        {Array.from({ length: 9 }).map((_, i) => (
          <div
            key={i}
            className="border-[0.5px] border-border/70"
            aria-hidden
          />
        ))}
      </div>

      {/* Axes labels */}
      <div className="absolute -left-2 top-1/2 -translate-y-1/2 -rotate-90 text-sm text-muted-foreground">
        Negocio
      </div>
      <div className="absolute bottom-0 left-1/2 translate-y-8 -translate-x-1/2 text-sm text-muted-foreground">
        Técnico
      </div>

      {/* Point */}
      <div
        className="absolute size-3 rounded-full bg-primary shadow-[0_0_0_6px_hsl(var(--primary)/0.2)]"
        style={{ left: `calc(${x}% - 6px)`, bottom: `calc(${y}% - 6px)` }}
        role="img"
        aria-label={`Posición en la matriz X ${Math.round(x)}, Y ${Math.round(y)}`}
      />

      {/* Glow */}
      <div
        className="pointer-events-none absolute -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_center,hsl(var(--accent)/0.35)_0%,transparent_60%)] blur-2xl"
        style={{ left: `${x}%`, bottom: `${y}%`, width: 180, height: 180 }}
        aria-hidden
      />
    </div>
  );
};

export default MatrixGrid;
