import {
  ArrowUpRight,
  CalendarDays,
  CheckCircle2,
  Clock,
  FileText,
  Handshake,
  Mail,
  Mic,
  MonitorPlay,
  PlayCircle,
  Users,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Logo } from "@/components/Logo";
import { FEATURED_WEBINAR, PAST_WEBINARS, SEMPSPGS, SOCIETY } from "@/data/content";
import { logoSempspgs } from "@/assets/logos";

const W = FEATURED_WEBINAR;

export function FeaturedWebinar() {
  const mailSubject = encodeURIComponent(`Grabación y material del webinario «No Hacer» (SEMPSPGS · SMMPySP)`);

  return (
    <section id="webinario" className="scroll-mt-20 relative overflow-hidden py-20 sm:py-28">
      {/* Fondo decorativo */}
      <div
        className="bg-grid pointer-events-none absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent_60%)]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -left-24 top-40 h-80 w-80 rounded-full bg-brand-50 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-24 bottom-20 h-80 w-80 rounded-full bg-brand-100/70 blur-3xl"
        aria-hidden="true"
      />

      <Container className="relative">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Colaboración destacada"
            title="Webinario conjunto con la SEMPSPGS"
            description="La SMMPySP y la Sociedad Española de Medicina Preventiva, Salud Pública y Gestión Sanitaria unen esfuerzos en una sesión formativa online sobre la adecuación de la práctica clínica."
          />
          {/* Sello de colaboración */}
          <div className="flex items-center gap-4 self-start rounded-2xl border border-stone-200 bg-white/90 px-5 py-3 shadow-sm backdrop-blur lg:self-auto">
            <Logo variant="symbol" className="h-10 w-auto" />
            <Handshake className="h-5 w-5 text-stone-400" aria-hidden="true" />
            <img src={logoSempspgs} alt={SEMPSPGS.name} className="h-9 w-auto object-contain" draggable={false} />
          </div>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          {/* ---------- Tarjeta principal ---------- */}
          <article className="overflow-hidden rounded-3xl border border-stone-200 bg-white shadow-2xl shadow-brand-900/10">
            <div className="relative overflow-hidden bg-gradient-to-br from-brand-800 via-brand-900 to-brand-950 p-8 text-white sm:p-10">
              <Logo
                variant="white"
                className="pointer-events-none absolute -bottom-10 -right-4 h-64 w-auto opacity-[0.06]"
              />
              <div className="relative flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-400/20 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-emerald-200 ring-1 ring-emerald-300/40">
                  <CheckCircle2 className="h-3.5 w-3.5" aria-hidden="true" />
                  {W.status}
                </span>
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-200">{W.eyebrow}</span>
              </div>

              <h3 className="relative mt-5 text-3xl font-extrabold leading-tight tracking-tight text-balance sm:text-4xl">
                {W.title}
              </h3>
              <p className="relative mt-4 max-w-2xl leading-relaxed text-brand-100/85">{W.subtitle}</p>

              {/* Ponente destacado */}
              <div className="relative mt-6 inline-flex items-center gap-3 rounded-2xl bg-white/10 py-2 pl-2 pr-5 ring-1 ring-white/15 backdrop-blur">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-sm font-bold text-brand-900">
                  {W.speaker.initials}
                </span>
                <div className="leading-tight">
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-brand-200">Ponente</p>
                  <p className="text-base font-bold text-white sm:text-lg">{W.speaker.name}</p>
                </div>
              </div>

              {/* Fecha grande */}
              <div className="relative mt-8 flex flex-wrap items-center gap-6">
                <div className="flex items-center gap-4 rounded-2xl bg-white/10 px-5 py-4 ring-1 ring-white/15 backdrop-blur">
                  <div className="text-center leading-none">
                    <span className="block text-4xl font-extrabold">{W.dateShort.day}</span>
                    <span className="mt-1 block text-[11px] font-bold uppercase tracking-widest text-brand-200">
                      {W.dateShort.month} {W.dateShort.year}
                    </span>
                  </div>
                  <div className="h-12 w-px bg-white/20" aria-hidden="true" />
                  <div className="space-y-1 text-sm">
                    <p className="inline-flex items-center gap-2 font-semibold">
                      <Clock className="h-4 w-4 text-brand-200" aria-hidden="true" /> {W.time}
                    </p>
                    <p className="flex items-center gap-2 text-brand-100/85">
                      <MonitorPlay className="h-4 w-4 text-brand-200" aria-hidden="true" /> {W.format}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-lg">
                  <Logo variant="symbol" className="h-9 w-auto" />
                  <span className="text-lg font-light text-stone-300">×</span>
                  <img src={logoSempspgs} alt={SEMPSPGS.name} className="h-8 w-auto object-contain" draggable={false} />
                </div>
              </div>
            </div>

            <div className="p-8 sm:p-10">
              <p className="leading-relaxed text-stone-700">{W.description}</p>

              <dl className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                <div className="rounded-2xl bg-brand-50 p-4 ring-1 ring-brand-100">
                  <dt className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-brand-800">
                    <Mic className="h-4 w-4" aria-hidden="true" /> Ponente
                  </dt>
                  <dd className="mt-2 font-semibold text-stone-900">{W.speaker.name}</dd>
                </div>
                <div className="rounded-2xl bg-stone-50 p-4 ring-1 ring-stone-200">
                  <dt className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-stone-500">
                    <CalendarDays className="h-4 w-4 text-brand-800" aria-hidden="true" /> Fecha y hora
                  </dt>
                  <dd className="mt-2 font-semibold text-stone-900">
                    {W.date} · {W.time}
                  </dd>
                </div>
                <div className="rounded-2xl bg-stone-50 p-4 ring-1 ring-stone-200">
                  <dt className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-stone-500">
                    <Handshake className="h-4 w-4 text-brand-800" aria-hidden="true" /> Organizan
                  </dt>
                  <dd className="mt-2 font-semibold text-stone-900">{W.organizers}</dd>
                </div>
                <div className="rounded-2xl bg-stone-50 p-4 ring-1 ring-stone-200">
                  <dt className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-stone-500">
                    <Users className="h-4 w-4 text-brand-800" aria-hidden="true" /> Dirigido a
                  </dt>
                  <dd className="mt-2 text-sm font-medium leading-snug text-stone-800">{W.audience}</dd>
                </div>
              </dl>

              <h4 className="mt-10 text-sm font-bold uppercase tracking-wider text-brand-800">Contenidos del webinario</h4>
              <ul className="mt-4 space-y-3">
                {W.topics.map((t) => (
                  <li key={t} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-700" aria-hidden="true" />
                    <span className="leading-relaxed text-stone-700">{t}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-10 flex flex-wrap gap-3">
                <a
                  href={W.links.info}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 rounded-full bg-brand-800 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-800/25 transition hover:bg-brand-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-800 focus-visible:ring-offset-2"
                >
                  Ficha en la web de la SEMPSPGS
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
                <a
                  href={`mailto:${SOCIETY.email}?subject=${mailSubject}`}
                  className="inline-flex items-center gap-2 rounded-full border border-stone-300 bg-white px-6 py-3 text-sm font-semibold text-stone-800 transition hover:border-brand-300 hover:bg-brand-50 hover:text-brand-800"
                >
                  <Mail className="h-4 w-4" />
                  Solicitar grabación y material
                </a>
                <a
                  href={W.links.committee}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full px-4 py-3 text-sm font-semibold text-brand-800 transition hover:bg-brand-50"
                >
                  <FileText className="h-4 w-4" />
                  Documento del Comité «No Hacer» (PDF)
                </a>
              </div>
            </div>
          </article>

          {/* ---------- Columna lateral ---------- */}
          <div className="flex flex-col gap-6 lg:sticky lg:top-24 lg:self-start">
            {/* Ponente */}
            <article className="rounded-3xl border border-stone-200 bg-white p-7 shadow-lg shadow-stone-900/5">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-800">Ponente</p>
              <div className="mt-4 flex items-center gap-4">
                <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-700 to-brand-900 text-xl font-bold text-white shadow-md shadow-brand-900/20">
                  {W.speaker.initials}
                </span>
                <div>
                  <h4 className="text-lg font-bold leading-tight text-stone-900">{W.speaker.name}</h4>
                  <p className="mt-1 text-sm font-medium text-brand-800">{W.speaker.role}</p>
                </div>
              </div>
              <p className="mt-5 text-sm leading-relaxed text-stone-600">{W.speaker.bio}</p>

              {/* Ficha oficial (texto literal de la SEMPSPGS) */}
              <blockquote className="mt-5 rounded-2xl border-l-4 border-brand-800 bg-stone-50 p-4 text-sm leading-relaxed text-stone-700">
                <p className="text-[11px] font-semibold uppercase tracking-wider text-stone-500">Ficha oficial · sempspgs.es</p>
                <p className="mt-2">
                  <strong className="font-semibold text-stone-900">Fecha:</strong> 3 de febrero ·{" "}
                  <strong className="font-semibold text-stone-900">Hora:</strong> 18:00 h ·{" "}
                  <strong className="font-semibold text-stone-900">Ponente:</strong> Dr. Jesús María Aranaz Andrés
                </p>
                <p className="mt-2 italic">
                  «El Dr. Jesús María Aranaz Andrés repasará los cambios más relevantes y su aplicación práctica,
                  ofreciendo herramientas clave para la toma de decisiones en la práctica clínica y la gestión
                  sanitaria.»
                </p>
                <a
                  href={W.links.info}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-brand-800 hover:underline"
                >
                  Ver la ficha en la web de la SEMPSPGS
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </blockquote>
            </article>
          </div>
        </div>

        {/* ---------- Histórico de webinarios ---------- */}
        <div className="mt-20">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand-800">
                <span className="h-px w-8 bg-brand-800" aria-hidden="true" />
                Ciclo de webinarios
              </span>
              <h3 className="mt-4 text-2xl font-bold tracking-tight text-stone-900 sm:text-3xl">
                Webinarios de la SMMPySP
              </h3>
              <p className="mt-3 max-w-2xl text-stone-600">
                Las grabaciones de las sesiones están disponibles en el canal de YouTube de la Sociedad.
              </p>
            </div>
            <a
              href={SOCIETY.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center gap-2 rounded-full border border-stone-300 bg-white px-5 py-2.5 text-sm font-semibold text-stone-800 transition hover:border-brand-300 hover:bg-brand-50 hover:text-brand-800"
            >
              <PlayCircle className="h-4 w-4" />
              Canal de YouTube
            </a>
          </div>

          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {PAST_WEBINARS.map((w) => {
              const href = w.youtubeId ? `https://www.youtube.com/watch?v=${w.youtubeId}` : w.href;
              const isFeatured = !w.youtubeId && w.partner;
              return (
                <li key={w.title}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex h-full flex-col overflow-hidden rounded-2xl border border-stone-200 bg-white transition hover:-translate-y-0.5 hover:border-brand-200 hover:shadow-lg hover:shadow-brand-900/5"
                  >
                    <div className="relative aspect-video overflow-hidden bg-stone-100">
                      {w.youtubeId ? (
                        <>
                          <img
                            src={`https://i.ytimg.com/vi/${w.youtubeId}/mqdefault.jpg`}
                            alt=""
                            loading="lazy"
                            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                          />
                          <span className="absolute inset-0 flex items-center justify-center bg-black/20 transition group-hover:bg-black/30">
                            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/90 text-brand-800 shadow-lg">
                              <PlayCircle className="h-7 w-7" aria-hidden="true" />
                            </span>
                          </span>
                        </>
                      ) : (
                        <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-gradient-to-br from-brand-800 to-brand-950 p-4 text-white">
                          <div className="flex items-center gap-2 rounded-xl bg-white px-3 py-2">
                            <Logo variant="symbol" className="h-7 w-auto" />
                            <span className="text-stone-300">×</span>
                            <img src={logoSempspgs} alt="" className="h-6 w-auto object-contain" />
                          </div>
                          {isFeatured && (
                            <span className="text-[11px] font-semibold uppercase tracking-wider text-brand-200">
                              {w.partner}
                            </span>
                          )}
                        </div>
                      )}
                    </div>
                    <div className="flex flex-1 flex-col p-5">
                      <time className="text-xs font-semibold text-brand-800">{w.date}</time>
                      <h4 className="mt-2 text-sm font-bold leading-snug text-stone-900 group-hover:text-brand-800">
                        {w.title}
                      </h4>
                      {w.speakers && <p className="mt-2 text-xs leading-relaxed text-stone-500">{w.speakers}</p>}
                      <span className="mt-auto inline-flex items-center gap-1.5 pt-4 text-xs font-semibold text-stone-700">
                        {w.youtubeId ? "Ver grabación" : "Más información"}
                        <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                      </span>
                    </div>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </Container>
    </section>
  );
}
