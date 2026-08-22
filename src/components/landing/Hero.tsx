import { ArrowRight, Play, ClipboardCheck, Target, BarChart3 } from "lucide-react";
import heroArt from "@/assets/hero-growth.jpg";

const perks = [
  { icon: ClipboardCheck, title: "Diagnóstico 360°", sub: "gratuito" },
  { icon: Target, title: "Plano estratégico", sub: "personalizado" },
  { icon: BarChart3, title: "Resultados", sub: "mensuráveis" },
];

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden radial-spot">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 lg:grid-cols-2 lg:py-28">
        <div className="reveal">
          <p className="label-eyebrow inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5">
            Assessoria Estratégica 360°
          </p>
          <h1 className="mt-6 display-1 text-foreground">
            Estratégia que transforma esforço em{" "}
            <span className="text-gradient-brand">crescimento real.</span>
          </h1>
          <p className="mt-7 max-w-xl lead">
            Potencializamos empresas com um método exclusivo que alinha marketing, vendas,
            tecnologia e processos para gerar resultados previsíveis e escaláveis.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#contato"
              className="inline-flex items-center gap-3 rounded-lg bg-brand-gradient px-7 py-4 text-[0.8rem] font-extrabold uppercase tracking-[0.12em] text-primary-foreground shadow-brand-glow transition-transform duration-300 hover:-translate-y-0.5"
            >
              Agendar diagnóstico gratuito
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#metodo"
              className="inline-flex items-center gap-3 rounded-lg border border-border px-7 py-4 text-[0.8rem] font-extrabold uppercase tracking-[0.12em] text-foreground transition-colors duration-300 hover:border-primary hover:text-primary"
            >
              <span className="flex h-6 w-6 items-center justify-center rounded-full border border-primary text-primary">
                <Play className="h-3 w-3 fill-current" />
              </span>
              Ver como funciona
            </a>
          </div>

          <div className="mt-12 flex flex-wrap gap-x-10 gap-y-6 border-t border-border pt-8">
            {perks.map(({ icon: Icon, title, sub }) => (
              <div key={title} className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-primary/40 bg-primary/10 text-primary">
                  <Icon className="h-4 w-4" />
                </span>
                <span className="text-sm font-semibold leading-tight text-foreground">
                  {title}
                  <span className="block text-xs font-normal text-muted-foreground">{sub}</span>
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative reveal [animation-delay:120ms]">
          <div className="pointer-events-none absolute -inset-6 rounded-[2rem] bg-brand-gradient opacity-15 blur-3xl" />
          <img
            src={heroArt}
            alt="Curva de crescimento sobre skyline urbano"
            width={1024}
            height={1024}
            className="relative w-full rounded-3xl border border-border object-cover"
          />
        </div>
      </div>
    </section>
  );
}
