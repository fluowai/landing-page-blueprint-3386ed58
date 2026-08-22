# Landing Page Wooscale — Assessoria Estratégica 360°

Reproduzir fielmente o mockup enviado: página única, tema escuro com laranja, logo anexa aplicada no header e no rodapé.

## Identidade visual

- Fundo escuro (#0b0b0b / preto carvão), seção do Método em fundo claro (#f5f4f2)
- Laranja de marca (#F26A1B) para destaques, botões e detalhes
- Tipografia sans geométrica (títulos pesados, corpo leve)
- Cantos suaves, bordas sutis, brilho laranja discreto no hero
- Logo enviada hospedada como asset e usada no header/footer

## Seções (na ordem do mockup)

1. **Header fixo** — logo à esquerda; menu HOME, SOBRE, SOLUÇÕES (dropdown), MÉTODO ACP, CASES, BLOG, CONTATO; botão laranja "AGENDAR DIAGNÓSTICO"; menu mobile
2. **Hero** — eixo esquerdo: rótulo "ASSESSORIA ESTRATÉGICA 360°", título "Estratégia que transforma esforço em crescimento real." (última linha em laranja), parágrafo, dois CTAs (sólido + outline com ícone play), três micro-benefícios com ícones. Eixo direito: arte com logo grande e curva de crescimento
3. **Problema vs Promessa** — card escuro em duas colunas, lista com X vermelho/laranja à esquerda e checks laranja à direita, conector pontilhado com o símbolo da marca no centro
4. **Método ACP 360°** — faixa clara, título central, 4 pilares (Aquisição, Conversão, Perpetuação, Escala) com número fantasma, ícone, título e descrição, separados por setas
5. **Resultados** — título, 4 cards de métricas (+287%, +215%, -62%, +38%) e carrossel de depoimentos com aspas, texto, avatar, nome/cargo e indicadores clicáveis
6. **CTA final** — bloco laranja com ícone de calendário, headline, subtexto e botão escuro
7. **Rodapé** — logo, texto institucional, ícones sociais e 4 colunas de links (Soluções, Método ACP, Company, Fale Conosco com telefone, e-mail e endereço) + barra de copyright e links legais

## Detalhes técnicos

- Rota única em `src/routes/index.tsx` (substitui o placeholder), com seções componentizadas em `src/components/landing/`
- Tokens de cor/tipografia definidos em `src/styles.css` (@theme + :root), sem cores hardcoded nos componentes
- Fonte carregada via `<link>` no `__root.tsx`
- Logo enviada publicada via Lovable Assets e importada por pointer JSON; arte do hero gerada como imagem
- Ícones: lucide-react; carrossel de depoimentos com estado local em React
- Responsivo (mobile, tablet, desktop) e head() da rota com título/descrição/OG próprios em pt-BR

## Fora do escopo desta etapa

Páginas internas (Sobre, Cases, Blog, Contato) e envio real de formulário/backend — os CTAs apenas ancoram na seção de contato por enquanto.
