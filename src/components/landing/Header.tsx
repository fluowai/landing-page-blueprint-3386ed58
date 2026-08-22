import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import markAsset from "@/assets/wooscale-mark.png.asset.json";

const navItems = [
  { label: "HOME", href: "#home" },
  { label: "SOBRE", href: "#sobre" },
  { label: "SOLUÇÕES", href: "#solucoes", dropdown: true },
  { label: "MÉTODO ACP", href: "#metodo" },
  { label: "CASES", href: "#cases" },
  { label: "BLOG", href: "#blog" },
  { label: "CONTATO", href: "#contato" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-4">
        <a href="#home" className="flex items-center gap-3">
          <img src={markAsset.url} alt="Wooscale" width={40} height={40} className="h-10 w-10" />
          <span className="leading-none">
            <span className="block font-display text-lg font-extrabold tracking-[0.22em] text-foreground">
              WOO<span className="text-primary">S</span>CALE
            </span>
            <span className="mt-1 block text-[9px] tracking-[0.3em] text-muted-foreground">
              ASSESSORIA <span className="text-primary">ESTRATÉGICA</span> 360°
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {navItems.map((item, i) => (
            <a
              key={item.label}
              href={item.href}
              className={`flex items-center gap-1 text-xs font-semibold tracking-wider transition-colors hover:text-primary ${
                i === 0 ? "border-b-2 border-primary pb-1 text-primary" : "text-foreground/85"
              }`}
            >
              {item.label}
              {item.dropdown && <ChevronDown className="h-3.5 w-3.5" />}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#contato"
            className="hidden rounded-md bg-brand-gradient px-5 py-3 text-xs font-bold tracking-wider text-primary-foreground transition-opacity hover:opacity-90 sm:inline-block"
          >
            AGENDAR DIAGNÓSTICO
          </a>
          <button
            type="button"
            aria-label="Abrir menu"
            onClick={() => setOpen((v) => !v)}
            className="rounded-md border border-border p-2 text-foreground lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-border bg-background px-5 py-4 lg:hidden">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block py-2 text-sm font-semibold tracking-wider text-foreground/85 hover:text-primary"
            >
              {item.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
