import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AREAS } from "@/data/content";

export function Areas() {
  return (
    <section id="areas" className="scroll-mt-20 bg-stone-50 py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Áreas de trabajo"
          title="Los ámbitos propios de la especialidad"
          description="La Sociedad desarrolla sus actividades dentro del área de conocimiento médico de la Medicina Preventiva y Salud Pública, una especialidad transversal que actúa sobre la salud de toda la población."
          align="center"
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {AREAS.map(({ icon: Icon, title, description }) => (
            <article
              key={title}
              className="group relative overflow-hidden rounded-2xl border border-stone-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-xl hover:shadow-brand-900/10"
            >
              <div
                className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-brand-50 opacity-0 transition duration-300 group-hover:opacity-100"
                aria-hidden="true"
              />
              <div className="relative inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-800 ring-1 ring-brand-100 transition group-hover:bg-brand-800 group-hover:text-white">
                <Icon className="h-6 w-6" aria-hidden="true" />
              </div>
              <h3 className="relative mt-5 text-lg font-bold text-stone-900">{title}</h3>
              <p className="relative mt-2 text-sm leading-relaxed text-stone-600">{description}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
