import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { faqs } from "@/lib/seo/faqs";

export function Faq() {
  return (
    <section className="py-24 md:py-32 bg-secondary/15">
      <div className="container mx-auto px-6">
        <SectionHeading eyebrow="Preguntas frecuentes" title="Resolvemos tus dudas" />

        <div className="mt-16 max-w-2xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-b border-border/60">
                <AccordionTrigger className="font-display text-lg text-left hover:no-underline py-5">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed text-base">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
