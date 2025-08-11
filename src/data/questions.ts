export type Question = {
  id: number;
  text: string;
  options: {
    id: string;
    option_text: string;
    tech_value: number;
    business_value: number;
  }[];
};

export const QUESTIONS: Question[] = [
  {
    id: 1,
    text: "¿Qué parte del trabajo disfrutas más?",
    options: [
      { id: "1a", option_text: "Codificar APIs", tech_value: 3, business_value: 0 },
      { id: "1b", option_text: "Hacer demos a clientes", tech_value: 0, business_value: 3 },
      { id: "1c", option_text: "Escribir documentación técnica", tech_value: 1, business_value: 2 },
      { id: "1d", option_text: "Diseñar experiencia de usuario", tech_value: 0, business_value: 2 },
    ],
  },
  {
    id: 2,
    text: "¿Qué te resultaría más satisfactorio?",
    options: [
      { id: "2a", option_text: "Optimizar el rendimiento de una función", tech_value: 3, business_value: 0 },
      { id: "2b", option_text: "Resolver un problema de cliente", tech_value: 0, business_value: 3 },
      { id: "2c", option_text: "Formar a compañeros", tech_value: 1, business_value: 2 },
      { id: "2d", option_text: "Planificar un roadmap", tech_value: 0, business_value: 2 },
    ],
  },
  {
    id: 3,
    text: "¿Con qué actividad te sientes más cómodo?",
    options: [
      { id: "3a", option_text: "Programando todo el día", tech_value: 3, business_value: 0 },
      { id: "3b", option_text: "Haciendo presentaciones", tech_value: 0, business_value: 3 },
      { id: "3c", option_text: "Traduciendo requerimientos técnicos", tech_value: 2, business_value: 2 },
      { id: "3d", option_text: "Organizando entregas", tech_value: 1, business_value: 2 },
    ],
  },
  {
    id: 4,
    text: "¿Qué charla darías con más ganas?",
    options: [
      { id: "4a", option_text: "Cómo escalar un backend", tech_value: 3, business_value: 0 },
      { id: "4b", option_text: "Cómo vender soluciones técnicas", tech_value: 0, business_value: 3 },
      { id: "4c", option_text: "Cómo formar a juniors", tech_value: 1, business_value: 2 },
      { id: "4d", option_text: "Cómo liderar equipos técnicos", tech_value: 2, business_value: 2 },
    ],
  },
  {
    id: 5,
    text: "¿Qué prefieres resolver?",
    options: [
      { id: "5a", option_text: "Un bug crítico en producción", tech_value: 3, business_value: 0 },
      { id: "5b", option_text: "Una objeción comercial", tech_value: 0, business_value: 3 },
      { id: "5c", option_text: "Un malentendido entre equipos", tech_value: 1, business_value: 2 },
      { id: "5d", option_text: "Un problema de prioridades", tech_value: 1, business_value: 2 },
    ],
  },
  {
    id: 6,
    text: "¿Tu día ideal?",
    options: [
      { id: "6a", option_text: "Código, café y editor", tech_value: 3, business_value: 0 },
      { id: "6b", option_text: "Reuniones, demos y algo de tech", tech_value: 1, business_value: 2 },
      { id: "6c", option_text: "Coaching, escribir, hablar", tech_value: 0, business_value: 3 },
      { id: "6d", option_text: "Usar conocimiento técnico sin programar", tech_value: 1, business_value: 2 },
    ],
  },
  {
    id: 7,
    text: "¿Qué valoras más en un rol?",
    options: [
      { id: "7a", option_text: "Profundidad técnica", tech_value: 3, business_value: 0 },
      { id: "7b", option_text: "Impacto en negocio", tech_value: 0, business_value: 3 },
      { id: "7c", option_text: "Comunicación e influencia", tech_value: 0, business_value: 2 },
      { id: "7d", option_text: "Equilibrio tech-personas", tech_value: 1, business_value: 2 },
    ],
  },
  {
    id: 8,
    text: "¿Qué tipo de contenido crearías?",
    options: [
      { id: "8a", option_text: "Tutorial con código", tech_value: 2, business_value: 1 },
      { id: "8b", option_text: "Caso de éxito con cliente", tech_value: 0, business_value: 3 },
      { id: "8c", option_text: "Guía de onboarding técnico", tech_value: 1, business_value: 2 },
      { id: "8d", option_text: "Wireframes/flows", tech_value: 0, business_value: 2 },
    ],
  },
  {
    id: 9,
    text: "¿Cómo reaccionas ante legacy?",
    options: [
      { id: "9a", option_text: "Quiero refactorizar ya", tech_value: 3, business_value: 0 },
      { id: "9b", option_text: "Prefiero explicarlo a alguien", tech_value: 1, business_value: 2 },
      { id: "9c", option_text: "Miro el impacto general", tech_value: 0, business_value: 2 },
      { id: "9d", option_text: "Lo entiendo pero no lo toco", tech_value: 0, business_value: 2 },
    ],
  },
  {
    id: 10,
    text: "¿Qué frase te representa más?",
    options: [
      { id: "10a", option_text: "“Sin tests no hay paraíso”", tech_value: 3, business_value: 0 },
      { id: "10b", option_text: "“Lo importante es que el cliente lo entienda”", tech_value: 0, business_value: 3 },
      { id: "10c", option_text: "“Soy puente entre tech y personas”", tech_value: 2, business_value: 2 },
      { id: "10d", option_text: "“Prefiero liderar sin tocar código”", tech_value: 0, business_value: 3 },
    ],
  },
];
