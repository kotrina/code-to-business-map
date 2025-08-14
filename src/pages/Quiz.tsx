import React, { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { QUESTIONS } from "@/data/questions";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";
import logoManfred from "@/assets/logo-manfred.svg";

export type Submission = {
  id: string;
  name?: string;
  email?: string;
  answers: string[]; // AnswerOption ids
  tech_total: number;
  business_total: number;
  x_coord: number;
  y_coord: number;
  quadrant_id: string;
  created_at: string;
};

const MAX_PER_AXIS = 30; // 10 preguntas * valor máximo 3

const QuizPage: React.FC = () => {
  const navigate = useNavigate();
  useEffect(() => {
    document.title = "Mapa de carrera Tech — Quiz";
  }, []);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [answers, setAnswers] = useState<Record<number, string>>({});

  const isComplete = useMemo(
    () => QUESTIONS.every((q) => answers[q.id]),
    [answers]
  );

  const handleSelect = (qid: number, optionId: string) => {
    setAnswers((prev) => ({ ...prev, [qid]: optionId }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isComplete) {
      toast({ title: "Faltan respuestas", description: "Responde todas las preguntas" });
      return;
    }

    // Calcular totales
    let tech_total = 0;
    let business_total = 0;

    for (const q of QUESTIONS) {
      const opt = q.options.find((o) => o.id === answers[q.id]);
      if (opt) {
        tech_total += opt.tech_value;
        business_total += opt.business_value;
      }
    }

    const x_coord = (tech_total / MAX_PER_AXIS) * 100;
    const y_coord = (business_total / MAX_PER_AXIS) * 100;

    const col = x_coord <= 33 ? 1 : x_coord <= 66 ? 2 : 3;
    const row = y_coord <= 33 ? "A" : y_coord <= 66 ? "B" : "C";
    const quadrant_id = `${row}${col}`;

    const id = crypto.randomUUID();
    const submission: Submission = {
      id,
      name: name || undefined,
      email: email || undefined,
      answers: Object.values(answers),
      tech_total,
      business_total,
      x_coord,
      y_coord,
      quadrant_id,
      created_at: new Date().toISOString(),
    };

    // Guardar en localStorage (versión inicial)
    const list = JSON.parse(localStorage.getItem("submissions") || "[]");
    list.unshift(submission);
    localStorage.setItem("submissions", JSON.stringify(list));

    toast({ title: "¡Listo!", description: "Calculamos tus resultados" });
    navigate("/result", { state: { id } });
  };

  return (
    <main className="container py-10">
      <header className="mb-8 text-center">
        <img src={logoManfred} alt="Manfred" className="h-8 md:h-10 mx-auto mb-6" />
        <h1 className="text-3xl font-bold text-primary">Cuestionario</h1>
        <p className="text-muted-foreground">Responde una opción por pregunta.</p>
      </header>

      <form onSubmit={handleSubmit} className="grid gap-6">
        <div className="manfred-card">
          <h3 className="text-lg font-semibold text-primary mb-4">Tu información</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="grid gap-2">
              <Label htmlFor="name">Nombre (opcional)</Label>
              <Input id="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Tu nombre" className="manfred-input" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email (opcional)</Label>
              <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="tucorreo@ejemplo.com" className="manfred-input" />
            </div>
          </div>
        </div>

        {QUESTIONS.map((q) => (
          <div key={q.id} className="manfred-card">
            <h3 className="text-lg font-semibold text-primary mb-4">{q.text}</h3>
            <RadioGroup value={answers[q.id]} onValueChange={(v) => handleSelect(q.id, v)}>
              <div className="grid gap-3">
                {q.options.map((opt) => (
                  <div key={opt.id} className="flex items-center gap-3 p-2 rounded-md hover:bg-muted/50 transition-colors">
                    <RadioGroupItem id={opt.id} value={opt.id} />
                    <Label htmlFor={opt.id} className="cursor-pointer flex-1">{opt.option_text}</Label>
                  </div>
                ))}
              </div>
            </RadioGroup>
          </div>
        ))}

        <div className="flex justify-end">
          <button type="submit" className="manfred-button text-lg px-8 py-4" disabled={!isComplete}>
            Ver resultados
          </button>
        </div>
      </form>
    </main>
  );
};

export default QuizPage;
