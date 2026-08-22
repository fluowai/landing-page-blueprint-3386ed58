import { Facebook, Instagram, Linkedin, Youtube, Phone, Mail, MapPin } from "lucide-react";
import markAsset from "@/assets/wooscale-mark.png.asset.json";

const columns = [
  {
    title: "SOLUÇÕES",
    links: [
      "Marketing Estratégico",
      "Funil de Vendas",
      "Automação & CRM",
      "Social Selling",
      "Inteligência Comercial",
    ],
  },
  { title: "MÉTODO ACP", links: ["Aquisição", "Conversão", "Perpetuação", "Escala"] },
  { title: "COMPANY", links: ["Sobre Nós", "Cases", "Blog", "Carreiras", "Contato"] },
];

const socials = [Instagram, Linkedin, Facebook, Youtube];

export function Footer() {
  return (
    <footer id="blog" className="border-t border-border bg-surface">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-2 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <div className="flex items-center gap-3">
            <img src={markAsset.url} alt="Wooscale" width={40} height={40} className="h-10 w-10" />
            <span className="leading-none">
              <span className="block font-display text-lg font-semibold tracking-[0.22em] text-foreground">
                WOO<span className="text-primary">S</span>CALE
              </span>
              <span className="mt-1 block text-[9px] tracking-[0.3em] text-muted-foreground">
                ASSESSORIA <span className="text-primary">ESTRATÉGICA</span> 360°
              </span>
            </span>
          </div>
          <p className="mt-6 max-w-xs text-sm leading-relaxed text-muted-foreground">
            Unimos estratégia, marketing, tecnologia e processos para impulsionar empresas e gerar
            crescimento escalável e contínuo.
          </p>
          <div className="mt-6 flex gap-3">
            {socials.map((Icon, i) => (
              <a
                key={i}
                href="#home"
                aria-label="Rede social Wooscale"
                className="flex h-9 w-9 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        {columns.map((col) => (
          <div key={col.title}>
            <h3 className="font-display text-xs font-bold tracking-[0.18em] text-foreground">
              {col.title}
            </h3>
            <ul className="mt-5 space-y-3">
              {col.links.map((l) => (
                <li key={l}>
                  <a href="#home" className="text-sm text-muted-foreground hover:text-primary">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <h3 className="font-display text-xs font-bold tracking-[0.18em] text-foreground">
            FALE CONOSCO
          </h3>
          <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
            <li className="flex items-center gap-3">
              <Phone className="h-4 w-4 text-primary" /> (47) 99999-9999
            </li>
            <li className="flex items-center gap-3">
              <Mail className="h-4 w-4 text-primary" /> contato@wooscale.com.br
            </li>
            <li className="flex items-center gap-3">
              <MapPin className="h-4 w-4 text-primary" /> Balneário Camboriú – SC
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-5 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© 2025 Wooscale. Todos os direitos reservados.</p>
          <div className="flex gap-6">
            <a href="#home" className="hover:text-primary">
              Política de Privacidade
            </a>
            <a href="#home" className="hover:text-primary">
              Termos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
