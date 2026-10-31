import { ExternalLink } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { LINKS } from "@/data/content";

export function Links() {
  return (
    <section id="enlaces" className="scroll-mt-20 bg-stone-50 py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Enlaces de interés"
          title="Instituciones y sociedades afines"
          description="Organismos con los que la SMMPySP colabora o que resultan de referencia para los profesionales de la Salud Pública."
          align="center"
        />
        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {LINKS.map((l) => (
            <li key={l.name}>
              <a
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col rounded-2xl border border-stone-200 bg-white p-5 transition hover:-translate-y-0.5 hover:border-brand-200 hover:shadow-lg hover:shadow-brand-900/5"
              >
                <div className="flex items-center justify-between">
                  <span className="font-bold text-stone-900 group-hover:text-brand-800">{l.name}</span>
                  <ExternalLink className="h-4 w-4 text-stone-400 transition group-hover:text-brand-700" aria-hidden="true" />
                </div>
                <p className="mt-2 text-sm leading-relaxed text-stone-600">{l.description}</p>
              </a>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
