import { CheckCircle2, Quote } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Logo } from "@/components/Logo";
import { SOCIETY } from "@/data/content";

const AIMS = [
  "Fomentar el estudio y el conocimiento de la Medicina Preventiva y de la Salud Pública en todos sus ámbitos.",
  "Posibilitar los medios adecuados para la formación continuada y la actualización científica de sus miembros.",
  "Defender la dignidad del ejercicio profesional de la Salud Pública en todas sus vertientes.",
  "Contribuir a la mejora de la salud de la población de la Región de Murcia desde la evidencia científica.",
  "Servir de interlocutor con las administraciones sanitarias, la universidad y otras sociedades científicas.",
];

export function About() {
  return (
    <section id="sociedad" className="scroll-mt-20 py-20 sm:py-28">
      <Container>
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionHeading
              eyebrow="La Sociedad"
              title="Quiénes somos"
              description={`La ${SOCIETY.name} (${SOCIETY.acronym}) es una sociedad científica médica fundada el ${SOCIETY.founded}, que promueve el estudio y el avance de la Medicina Preventiva y la Salud Pública desde la Región de Murcia.`}
            />

            <p className="mt-6 leading-relaxed text-stone-600">
              Su campo de acción abarca los ámbitos propios de la <strong className="font-semibold text-stone-800">epidemiología</strong>,
              la <strong className="font-semibold text-stone-800">administración sanitaria</strong>, la{" "}
              <strong className="font-semibold text-stone-800">medicina preventiva</strong>, la{" "}
              <strong className="font-semibold text-stone-800">salud ambiental y laboral</strong> y la{" "}
              <strong className="font-semibold text-stone-800">promoción de la salud</strong>. Está integrada por cerca
              de 60 socios y socias, en su gran mayoría médicos especialistas en Medicina Preventiva y Salud Pública,
              junto a otros profesionales que ejercen en el campo de la Salud Pública.
            </p>

            <ul className="mt-8 space-y-3">
              {AIMS.map((aim) => (
                <li key={aim} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-700" aria-hidden="true" />
                  <span className="text-stone-700">{aim}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-6">
            <figure className="relative overflow-hidden rounded-3xl bg-brand-800 p-8 text-white shadow-xl shadow-brand-900/20 sm:p-10">
              <Quote className="absolute right-6 top-6 h-16 w-16 text-white/10" aria-hidden="true" />
              <Logo variant="white" className="h-14 w-auto opacity-90" />
              <blockquote className="mt-6 text-xl font-medium leading-relaxed text-balance sm:text-2xl">
                «La promoción de la salud y la prevención de la enfermedad son los pilares fundamentales de nuestra
                especialidad. Trabajamos para que la Salud Pública ocupe el lugar que merece en la Región de Murcia.»
              </blockquote>
              <figcaption className="mt-6 text-sm text-brand-100/80">
                Junta Directiva de la SMMPySP
              </figcaption>
            </figure>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-stone-200 bg-stone-50 p-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-brand-800">Ámbito</p>
                <p className="mt-2 text-lg font-bold text-stone-900">Región de Murcia</p>
                <p className="mt-1 text-sm text-stone-600">
                  Hospitales, Consejería de Salud, Ayuntamientos, Universidad y centros de investigación.
                </p>
              </div>
              <div className="rounded-2xl border border-stone-200 bg-stone-50 p-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-brand-800">Sede social</p>
                <p className="mt-2 text-lg font-bold text-stone-900">Colegio de Médicos</p>
                <p className="mt-1 text-sm text-stone-600">
                  Las actividades formativas se celebran en el Ilustre Colegio Oficial de Médicos de la Región de Murcia.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
