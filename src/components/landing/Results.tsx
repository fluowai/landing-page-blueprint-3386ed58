import { useState } from "react";
import { Users, DollarSign, BarChart3, Clock, Quote } from "lucide-react";

const metrics = [
  { icon: Users, value: "+287%", label: "Aumento médio em leads qualificados" },
  { icon: DollarSign, value: "+215%", label: "Crescimento médio no faturamento" },
  { icon: BarChart3, value: "-62%", label: "Redução no custo de aquisição de clientes" },
  { icon: Clock, value: "+38%", label: "Aumento na taxa de conversão em vendas" },
];

const testimonials = [
  {
    text: "A Wooscale destravou o crescimento da nossa empresa. Em 6 meses, dobramos o faturamento e ganhamos previsibilidade no comercial e no marketing.",
    name: "Ricardo Mendes",
    role: "CEO – Imobiliária Moriah",
  },
  {
    text: "O método ACP 360° organizou nosso funil do topo ao pós-venda. Hoje sabemos exatamente onde investir para vender mais.",
    name: "Camila Duarte",
    role: "Diretora – Grupo Vervale",
  },
  {
    text: "Processos, tecnologia e time alinhados. O custo de aquisição caiu e a conversão subiu logo no primeiro trimestre.",
    name: "André Nogueira",
    role: "Sócio – NX Construtora",
  },
];

export function Results() {
  const [active, setActive] = useState(0);
  const item = testimonials[active] ?? testimonials[0]!;

  return (
    <section id="cases" className="mx-auto max-w-7xl px-5 py-20">
      <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr]">
        <div>
          <p className="label-eyebrow">Resultados que falam</p>
          <h2 className="mt-4 display-2 text-foreground">
            Empresas que escalaram
            <br />
            com a Wooscale
          </h2>

          <div className="mt-9 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {metrics.map(({ icon: Icon, value, label }) => (
              <div key={value} className="rounded-xl border border-border bg-surface p-6 card-hover">
                <div className="flex items-center gap-3">
                  <Icon className="h-5 w-5 text-primary" />
                  <span className="font-display text-3xl font-extrabold tracking-tight text-gradient-brand">{value}</span>
                </div>
                <p className="mt-3 text-xs leading-relaxed text-muted-foreground">{label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-border bg-surface p-8">
          <Quote className="h-8 w-8 fill-current text-primary" />
          <p className="mt-5 font-display text-lg font-medium leading-relaxed tracking-tight text-foreground/90">{item.text}</p>
          <div className="mt-8 flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-muted font-display text-sm font-bold text-primary">
              {item.name.charAt(0)}
            </span>
            <span className="text-sm leading-tight">
              <span className="block font-semibold text-foreground">{item.name}</span>
              <span className="block text-xs text-muted-foreground">{item.role}</span>
            </span>
          </div>
          <div className="mt-8 flex justify-center gap-2">
            {testimonials.map((t, i) => (
              <button
                key={t.name}
                type="button"
                aria-label={`Depoimento ${i + 1}`}
                onClick={() => setActive(i)}
                className={`h-1.5 rounded-full transition-all ${
                  i === active ? "w-6 bg-primary" : "w-3 bg-muted"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
