import React from "react";

export const BackgroundGlow: React.FC = () => {
  React.useEffect(() => {
    const root = document.documentElement;
    const onMove = (e: MouseEvent) => {
      root.style.setProperty("--cursor-x", `${e.clientX}px`);
      root.style.setProperty("--cursor-y", `${e.clientY}px`);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 [background:radial-gradient(600px_circle_at_var(--cursor-x,_50%)_var(--cursor-y,_50%),hsl(var(--accent)/0.18),transparent_60%)]"
    />
  );
};

export default BackgroundGlow;
