import { ChevronRight, Magnet, Filter, RefreshCw, TrendingUp } from "lucide-react";

const pillars = [
  {
    n: "01",
    icon: Magnet,
    title: "AQUISIÇÃO",
    text: "Atraímos as pessoas certas com estratégias que geram leads qualificados todos os dias.",
  },
  {
    n: "02",
    icon: Filter,
    title: "CONVERSÃO",
    text: "Transformamos leads em clientes com processos, ferramentas e abordagem comercial de alta performance.",
  },
  {
    n: "03",
    icon: RefreshCw,
    title: "PERPETUAÇÃO",
    text: "Fidelizamos clientes e geramos novas oportunidades dentro da sua própria base.",
  },
  {
    n: "04",
    icon: TrendingUp,
    title: "ESCALA",
    text: "Estruturamos e otimizamos para que o crescimento seja contínuo, escalável e sólido.",
  },
];

export function Method() {
  return (
    <section id="metodo" className="bg-light-band py-20 text-light-band-foreground">
      <div className="mx-auto max-w-7xl px-5">
        <p className="label-eyebrow text-center">Método ACP 360°</p>
        <h2 className="mx-auto mt-4 max-w-4xl text-center display-2 text-light-band-foreground">
          Um método. Quatro pilares. Resultados previsíveis.
        </h2>

        <div className="mt-14 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {pillars.map(({ n, icon: Icon, title, text }, i) => (
            <div key={n} className="relative flex flex-col items-center text-center">
              <div className="relative flex h-24 items-center justify-center">
                <span className="absolute -left-10 font-display text-7xl font-black tracking-tighter text-ghost-number">
                  {n}
                </span>
                <Icon className="relative h-14 w-14 text-primary" strokeWidth={1.6} />
              </div>
              <h3 className="mt-5 font-display text-base font-extrabold uppercase tracking-[0.2em] text-light-band-foreground">
                {title}
              </h3>
              <p className="mt-3 max-w-[15rem] text-sm leading-relaxed text-light-band-muted">
                {text}
              </p>
              {i < pillars.length - 1 && (
                <ChevronRight className="absolute -right-3 top-10 hidden h-5 w-5 text-light-band-muted/50 lg:block" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
