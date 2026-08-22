import { ArrowRight, CalendarDays } from "lucide-react";

export function CtaBand() {
  return (
    <section id="contato" className="mx-auto max-w-7xl px-5 pb-20">
      <div className="flex flex-col items-start gap-8 rounded-2xl bg-brand-gradient p-8 shadow-brand-glow sm:p-10 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex items-center gap-6">
          <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl border border-primary-foreground/25 text-primary-foreground">
            <CalendarDays className="h-7 w-7" />
          </span>
          <div>
            <h2 className="font-display text-xl font-bold text-primary-foreground sm:text-2xl">
              Pronto para transformar esforço em crescimento?
            </h2>
            <p className="mt-2 max-w-xl text-sm text-primary-foreground/80">
              Agende um diagnóstico gratuito com nossos especialistas e descubra onde estão as
              maiores oportunidades do seu negócio.
            </p>
          </div>
        </div>
        <a
          href="mailto:contato@wooscale.com.br"
          className="inline-flex shrink-0 items-center gap-3 rounded-md bg-background px-6 py-4 text-xs font-bold tracking-wider text-foreground transition-opacity hover:opacity-90"
        >
          AGENDAR MEU DIAGNÓSTICO GRATUITO
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </section>
  );
}
