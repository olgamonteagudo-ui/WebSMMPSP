import { CalendarDays, Clock, MapPin } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Logo } from "@/components/Logo";
import { ACTIVITY_TYPES, AGENDA } from "@/data/content";

export function Activities() {
  return (
    <section id="actividades" className="scroll-mt-20 bg-stone-50 py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Actividades y formación"
          title="Qué hacemos"
          description="Congresos, cursos acreditados, webinarios y jornadas para la actualización científica y el encuentro entre profesionales de la Salud Pública."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {ACTIVITY_TYPES.map(({ icon: Icon, title, description, tag }) => (
            <article
              key={title}
              className="flex flex-col rounded-2xl border border-stone-200 bg-white p-6 transition hover:border-brand-200 hover:shadow-lg hover:shadow-brand-900/5"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-800 text-white shadow-md shadow-brand-800/25">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <span className="rounded-full bg-stone-100 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-stone-600">
                  {tag}
                </span>
              </div>
              <h3 className="mt-5 text-lg font-bold text-stone-900">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-stone-600">{description}</p>
            </article>
          ))}
        </div>

        {/* Agenda */}
        <div className="mt-20 grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div>
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand-800">
              <span className="h-px w-8 bg-brand-800" aria-hidden="true" />
              Agenda
            </span>
            <h3 className="mt-4 text-2xl font-bold tracking-tight text-stone-900 sm:text-3xl">Próximas convocatorias</h3>
            <p className="mt-4 leading-relaxed text-stone-600">
              En este espacio publicamos las próximas convocatorias de cursos, jornadas, asambleas y webinarios de la
              Sociedad, con toda la información necesaria para inscribirse.
            </p>
          </div>

          {AGENDA.length === 0 ? (
            /* Estado vacío: sin convocatorias publicadas */
            <div className="relative flex flex-col items-center justify-center overflow-hidden rounded-3xl border border-dashed border-stone-300 bg-white/70 px-8 py-14 text-center">
              <Logo
                variant="symbol"
                className="pointer-events-none absolute -bottom-8 -right-6 h-44 w-auto opacity-[0.05]"
              />
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-50 text-brand-800 ring-1 ring-brand-100">
                <CalendarDays className="h-7 w-7" aria-hidden="true" />
              </span>
              <h4 className="mt-6 text-xl font-bold text-stone-900">Sin convocatorias abiertas</h4>
              <p className="mt-3 max-w-sm text-sm leading-relaxed text-stone-600">
                En este momento no hay cursos, jornadas, asambleas ni webinarios convocados. En cuanto se publiquen,
                aparecerán aquí con sus fechas, ponentes y forma de inscripción.
              </p>
              <p className="mt-5 inline-flex items-center gap-2 rounded-full bg-stone-100 px-4 py-2 text-xs font-semibold text-stone-600">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-600" aria-hidden="true" />
                Socios y socias reciben el aviso por correo
              </p>
            </div>
          ) : (
          <ul className="space-y-4">
            {AGENDA.map((item) => (
              <li
                key={item.title}
                className="group flex gap-5 rounded-2xl border border-stone-200 bg-white p-5 transition hover:border-brand-300 hover:shadow-lg hover:shadow-brand-900/5 sm:p-6"
              >
                <div className="flex h-[4.5rem] w-[4.5rem] shrink-0 flex-col items-center justify-center rounded-xl bg-brand-50 text-brand-800 ring-1 ring-brand-100">
                  <span className="text-2xl font-extrabold leading-none">{item.day}</span>
                  <span className="mt-1 text-[11px] font-bold uppercase tracking-wider">{item.month}</span>
                </div>
                <div className="min-w-0 flex-1">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-brand-700">{item.type}</span>
                  <h4 className="mt-1 font-bold leading-snug text-stone-900">{item.title}</h4>
                  <div className="mt-3 flex flex-wrap gap-x-5 gap-y-1 text-sm text-stone-600">
                    <span className="inline-flex items-center gap-1.5">
                      <MapPin className="h-4 w-4 text-stone-400" aria-hidden="true" />
                      {item.place}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Clock className="h-4 w-4 text-stone-400" aria-hidden="true" />
                      {item.time}
                    </span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          )}
        </div>
      </Container>
    </section>
  );
}
