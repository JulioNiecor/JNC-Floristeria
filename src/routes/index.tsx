import { createFileRoute } from "@tanstack/react-router";
import { Suspense, lazy } from "react";
import { Hero } from "@/components/sections/Hero";
import { Intro } from "@/components/sections/Intro";
import { InitialLoader } from "@/components/layout/InitialLoader";
import { faqs } from "@/lib/seo/faqs";

const ServicesGrid = lazy(() => import("@/components/sections/ServicesGrid").then(m => ({ default: m.ServicesGrid })));
const Gallery = lazy(() => import("@/components/sections/Gallery").then(m => ({ default: m.Gallery })));
const WhyUs = lazy(() => import("@/components/sections/WhyUs").then(m => ({ default: m.WhyUs })));
const Testimonials = lazy(() => import("@/components/sections/Testimonials").then(m => ({ default: m.Testimonials })));
const Faq = lazy(() => import("@/components/sections/Faq").then(m => ({ default: m.Faq })));
const Cta = lazy(() => import("@/components/sections/Cta").then(m => ({ default: m.Cta })));
import heroImg from "@/assets/hero.webp";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Jardín Secreto — Floristería artesanal en Ubrique, Cádiz" },
      { name: "description", content: "Ramos personalizados, bodas y decoración floral artesanal. Flores que transforman momentos en recuerdos." },
      { property: "og:title", content: "Jardín Secreto — Floristería artesanal" },
      { property: "og:description", content: "Ramos personalizados, bodas y decoración floral artesanal en Ubrique, Cádiz." },
      { property: "og:url", content: "/" },
      { property: "og:image", content: heroImg },
      { name: "twitter:image", content: heroImg },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <InitialLoader />
      <Hero />
      <Intro />
      <Suspense fallback={<div className="h-64 flex items-center justify-center"><div className="w-8 h-8 rounded-full border-4 border-primary border-t-transparent animate-spin" /></div>}>
        <ServicesGrid />
        <Gallery />
        <WhyUs />
        <Testimonials />
        <Faq />
        <Cta />
      </Suspense>
    </>
  );
}
