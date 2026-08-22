import { Check, X } from "lucide-react";
import markAsset from "@/assets/wooscale-mark.png.asset.json";

const problems = [
  "Leads que não viram clientes",
  "Marketing que não gera retorno",
  "Processos desalinhados",
  "Falta de previsibilidade no crescimento",
];

const promises = [
  "Aquisição inteligente de clientes",
  "Conversão muito mais eficiente",
  "Perpetuação e crescimento contínuo",
  "Performance que se mantém no longo prazo",
];

export function ProblemPromise() {
  return (
    <section id="sobre" className="mx-auto max-w-7xl px-5 pb-20">
      <div className="grid items-center gap-10 rounded-2xl border border-border bg-surface p-8 sm:p-12 lg:grid-cols-[1fr_auto_1fr]">
        <div>
          <p className="label-eyebrow">O problema</p>
          <h2 className="mt-4 font-display text-2xl font-bold leading-snug text-foreground sm:text-3xl">
            Muito esforço.
            <br />
            Pouco resultado.
          </h2>
          <ul className="mt-7 space-y-3">
            {problems.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                <X className="mt-0.5 h-4 w-4 shrink-0 text-destructive" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center justify-center gap-3">
          <span className="hidden h-px w-16 border-t border-dashed border-primary/60 lg:block" />
          <span className="flex h-20 w-20 items-center justify-center rounded-full border border-border bg-card">
            <img src={markAsset.url} alt="" width={48} height={48} className="h-11 w-11" />
          </span>
          <span className="hidden h-px w-16 border-t border-dashed border-primary/60 lg:block" />
        </div>

        <div>
          <p className="label-eyebrow">A nossa promessa</p>
          <h2 className="mt-4 font-display text-2xl font-bold leading-snug text-foreground sm:text-3xl">
            Estratégia certa.
            <br />
            Resultados reais.
          </h2>
          <ul className="mt-7 space-y-3">
            {promises.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
