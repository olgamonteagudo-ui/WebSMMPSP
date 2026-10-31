import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MILESTONES } from "@/data/content";
import { cn } from "@/utils/cn";

export function Timeline() {
  return (
    <section id="historia" className="scroll-mt-20 py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Historia"
          title="Casi dos décadas al servicio de la Salud Pública murciana"
          description="Desde su constitución en 2007, una de las líneas principales de actuación de la Sociedad ha sido la realización de actividades científicas y de formación continuada."
        />

        <ol className="relative mt-16">
          {/* Línea vertical */}
          <div
            className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-brand-200 via-brand-300 to-transparent sm:left-1/2 sm:-translate-x-px"
            aria-hidden="true"
          />

          {MILESTONES.map((m, i) => {
            const left = i % 2 === 0;
            return (
              <li key={m.year + m.title} className="relative mb-10 pl-12 last:mb-0 sm:pl-0">
                {/* Punto */}
                <span
                  className="absolute left-4 top-6 flex h-4 w-4 -translate-x-1/2 items-center justify-center rounded-full bg-white ring-4 ring-brand-100 sm:left-1/2"
                  aria-hidden="true"
                >
                  <span className="h-2 w-2 rounded-full bg-brand-800" />
                </span>

                <div className="sm:grid sm:grid-cols-2 sm:gap-16">
                  <div className={cn(left ? "sm:col-start-1 sm:text-right" : "sm:col-start-2")}>
                    <article className="group rounded-2xl border border-stone-200 bg-white p-6 shadow-sm transition hover:border-brand-200 hover:shadow-lg hover:shadow-brand-900/5">
                      <time className="inline-block rounded-full bg-brand-800 px-3 py-1 text-xs font-bold tracking-wide text-white">
                        {m.year}
                      </time>
                      <h3 className="mt-3 text-lg font-bold text-stone-900">{m.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-stone-600">{m.description}</p>
                    </article>
                  </div>
                </div>
              </li>
            );
          })}
        </ol>
      </Container>
    </section>
  );
}
