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
            <h2 className="display-3 text-primary-foreground">
              Pronto para transformar esforço em crescimento?
            </h2>
            <p className="mt-3 max-w-xl text-base leading-relaxed text-primary-foreground/85">
              Agende um diagnóstico gratuito com nossos especialistas e descubra onde estão as
              maiores oportunidades do seu negócio.
            </p>
          </div>
        </div>
        <a
          href="mailto:contato@wooscale.com.br"
          className="inline-flex shrink-0 items-center gap-3 rounded-lg bg-background px-7 py-4 text-[0.8rem] font-extrabold uppercase tracking-[0.12em] text-foreground transition-transform duration-300 hover:-translate-y-0.5"
        >
          AGENDAR MEU DIAGNÓSTICO GRATUITO
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </section>
  );
}
