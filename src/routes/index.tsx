import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { ProblemPromise } from "@/components/landing/ProblemPromise";
import { Method } from "@/components/landing/Method";
import { Results } from "@/components/landing/Results";
import { CtaBand } from "@/components/landing/CtaBand";
import { Footer } from "@/components/landing/Footer";

const title = "Wooscale — Assessoria Estratégica 360°";
const description =
  "Método ACP 360°: aquisição, conversão, perpetuação e escala para transformar esforço em crescimento previsível. Agende um diagnóstico gratuito.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main>
      <Header />
      <Hero />
      <ProblemPromise />
      <Method />
      <Results />
      <CtaBand />
      <Footer />
    </main>
  );
}
