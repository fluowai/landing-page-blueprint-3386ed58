import { ArrowRight, Play, ClipboardCheck, Target, BarChart3 } from "lucide-react";
import heroArt from "@/assets/hero-growth.jpg";
import markAsset from "@/assets/wooscale-mark.png.asset.json";

const perks = [
  { icon: ClipboardCheck, title: "Diagnóstico 360°", sub: "gratuito" },
  { icon: Target, title: "Plano estratégico", sub: "personalizado" },
  { icon: BarChart3, title: "Resultados", sub: "mensuráveis" },
];

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 lg:grid-cols-2 lg:py-24">
        <div>
          <p className="label-eyebrow">Assessoria Estratégica 360°</p>
          <h1 className="mt-5 font-display text-4xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Estratégia que transforma esforço em{" "}
            <span className="text-primary">crescimento real.</span>
          </h1>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground sm:text-base">
            Potencializamos empresas com um método exclusivo que alinha marketing, vendas,
            tecnologia e processos para gerar resultados previsíveis e escaláveis.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#contato"
              className="inline-flex items-center gap-3 rounded-md bg-brand-gradient px-6 py-4 text-xs font-bold tracking-wider text-primary-foreground transition-opacity hover:opacity-90"
            >
              AGENDAR DIAGNÓSTICO GRATUITO
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#metodo"
              className="inline-flex items-center gap-3 rounded-md border border-border px-6 py-4 text-xs font-bold tracking-wider text-foreground transition-colors hover:border-primary"
            >
              <span className="flex h-6 w-6 items-center justify-center rounded-full border border-primary text-primary">
                <Play className="h-3 w-3 fill-current" />
              </span>
              VER COMO FUNCIONA
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-8">
            {perks.map(({ icon: Icon, title, sub }) => (
              <div key={title} className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-md border border-primary/50 text-primary">
                  <Icon className="h-4 w-4" />
                </span>
                <span className="text-xs leading-tight text-foreground">
                  {title}
                  <span className="block text-muted-foreground">{sub}</span>
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <img
            src={heroArt}
            alt="Curva de crescimento sobre skyline urbano"
            width={1024}
            height={1024}
            className="w-full rounded-2xl object-cover"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 px-6 text-center">
            <img
              src={markAsset.url}
              alt="Símbolo Wooscale"
              width={512}
              height={512}
              className="w-1/2 drop-shadow-2xl"
            />
            <div>
              <p className="font-display text-2xl font-semibold tracking-[0.25em] text-foreground sm:text-4xl">
                WOO<span className="text-primary">S</span>CALE
              </p>
              <p className="mt-2 text-[10px] tracking-[0.32em] text-foreground/80 sm:text-xs">
                ASSESSORIA <span className="text-primary">ESTRATÉGICA</span> 360°
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
