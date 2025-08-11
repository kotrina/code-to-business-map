export type Quadrant = {
  id: string; // A1..C3
  name: string;
  description: string;
  roles: string[];
  x_min: number;
  x_max: number;
  y_min: number;
  y_max: number;
};

export const QUADRANTS: Record<string, Quadrant> = {
  A1: {
    id: "A1",
    name: "Negocio bajo · Técnico bajo",
    description: "Perfiles de comunicación técnica y apoyo interno.",
    roles: ["Tech Writer", "Formación interna"],
    x_min: 0, x_max: 33, y_min: 0, y_max: 33,
  },
  A2: {
    id: "A2",
    name: "Negocio bajo · Técnico medio",
    description: "Perfiles técnicos con foco en comunidad y calidad.",
    roles: ["DevRel (técnico)", "QA Manual avanzado", "Docu técnica avanzada"],
    x_min: 34, x_max: 66, y_min: 0, y_max: 33,
  },
  A3: {
    id: "A3",
    name: "Negocio bajo · Técnico alto",
    description: "Especialistas técnicos y roles senior de plataforma.",
    roles: ["Backend/Infra", "DevOps/SRE", "Arquitecto SW", "Staff Engineer"],
    x_min: 67, x_max: 100, y_min: 0, y_max: 33,
  },
  B1: {
    id: "B1",
    name: "Negocio medio · Técnico bajo",
    description: "Gestión con sensibilidad técnica y user research.",
    roles: ["Project Manager", "Marketing Tech", "UX Researcher"],
    x_min: 0, x_max: 33, y_min: 34, y_max: 66,
  },
  B2: {
    id: "B2",
    name: "Negocio medio · Técnico medio",
    description: "Perfiles híbridos tech-negocio.",
    roles: ["DevRel híbrido", "Product Designer", "Data Analyst", "Formador técnico"],
    x_min: 34, x_max: 66, y_min: 34, y_max: 66,
  },
  B3: {
    id: "B3",
    name: "Negocio medio · Técnico alto",
    description: "Ingeniería aplicada a negocio y calidad automatizada.",
    roles: ["QA Automation", "Data Engineer", "Internal Tooling"],
    x_min: 67, x_max: 100, y_min: 34, y_max: 66,
  },
  C1: {
    id: "C1",
    name: "Negocio alto · Técnico bajo",
    description: "Orientación comercial con base técnica.",
    roles: ["Account Manager", "Tech Recruiter", "Product Marketing"],
    x_min: 0, x_max: 33, y_min: 67, y_max: 100,
  },
  C2: {
    id: "C2",
    name: "Negocio alto · Técnico medio",
    description: "Producto y preventa con fuerte contexto tech.",
    roles: ["Product Manager", "Product Owner", "Pre-Sales", "Customer Success"],
    x_min: 34, x_max: 66, y_min: 67, y_max: 100,
  },
  C3: {
    id: "C3",
    name: "Negocio alto · Técnico alto",
    description: "Consultoría técnica y venta de soluciones.",
    roles: ["Sales Engineer", "Solution/Tech Consultant", "Product Engineer"],
    x_min: 67, x_max: 100, y_min: 67, y_max: 100,
  },
};

export function getQuadrantFromCoords(x: number, y: number): string {
  const col = x <= 33 ? 1 : x <= 66 ? 2 : 3;
  const row = y <= 33 ? "A" : y <= 66 ? "B" : "C";
  return `${row}${col}`;
}
