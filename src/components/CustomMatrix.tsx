import React from "react";
import matrixSvg from "@/assets/matriz.svg";

interface CustomMatrixProps {
  x: number; // 0-100
  y: number; // 0-100
}

const CustomMatrix: React.FC<CustomMatrixProps> = ({ x, y }) => {
  return (
    <div className="relative w-full max-w-xl mx-auto select-none">
      {/* Background SVG (provided) */}
      <img
        src={matrixSvg}
        alt="Matriz técnico vs negocio personalizada"
        className="w-full h-auto block rounded-lg border border-border bg-card"
        loading="lazy"
      />

      {/* Overlay layer for the dynamic point */}
      <div className="pointer-events-none absolute inset-0">
        {/* Point */}
        <div
          className="absolute size-3 rounded-full bg-primary shadow-[0_0_0_6px_hsl(var(--primary)/0.2)]"
          style={{ left: `calc(${x}% - 6px)`, bottom: `calc(${y}% - 6px)` }}
          role="img"
          aria-label={`Posición en la matriz X ${Math.round(x)}, Y ${Math.round(y)}`}
        />
        {/* Glow */}
        <div
          className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_center,hsl(var(--accent)/0.35)_0%,transparent_60%)] blur-2xl"
          style={{ left: `${x}%`, bottom: `${y}%`, width: 180, height: 180 }}
          aria-hidden
        />
      </div>
    </div>
  );
};

export default CustomMatrix;
