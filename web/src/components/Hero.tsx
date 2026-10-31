import { ArrowRight, CalendarDays, MapPin } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/Logo";
import { SOCIETY } from "@/data/content";

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-gradient-to-b from-brand-50/70 via-white to-white pt-[4.5rem]">
      {/* Decoración */}
      <div className="bg-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_75%)]" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -right-32 top-24 h-[28rem] w-[28rem] rounded-full bg-brand-200/40 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -left-40 bottom-0 h-[22rem] w-[22rem] rounded-full bg-brand-100/60 blur-3xl"
        aria-hidden="true"
      />

      <Container className="relative grid items-center gap-14 py-16 sm:py-20 lg:grid-cols-[1.1fr_0.9fr] lg:py-28">
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white/80 px-4 py-1.5 text-xs font-semibold tracking-wide text-brand-800 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-500 opacity-70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-700" />
            </span>
            Sociedad científica · Región de Murcia · desde 2007
          </span>

          <h1 className="mt-6 text-4xl font-extrabold leading-[1.08] tracking-tight text-stone-900 text-balance sm:text-5xl lg:text-6xl">
            Con <span className="text-brand-800">Salud Pública</span>, más salud para la Región de Murcia
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-stone-600 text-pretty">
            La <strong className="font-semibold text-stone-800">{SOCIETY.name}</strong> ({SOCIETY.acronym}) reúne a
            los profesionales que trabajan por promover la salud de la población desde la epidemiología, la prevención,
            la promoción de la salud y la administración sanitaria.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#socios"
              className="group inline-flex items-center gap-2 rounded-full bg-brand-800 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-800/25 transition hover:bg-brand-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-800 focus-visible:ring-offset-2"
            >
              Hazte socio
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#actividades"
              className="inline-flex items-center gap-2 rounded-full border border-stone-300 bg-white px-6 py-3.5 text-sm font-semibold text-stone-800 transition hover:border-brand-300 hover:bg-brand-50 hover:text-brand-800"
            >
              <CalendarDays className="h-4 w-4" />
              Próximas actividades
            </a>
          </div>

          {/* Aviso: webinario conjunto con la SEMPSPGS */}
          <a
            href="#webinario"
            className="group mt-8 inline-flex max-w-xl items-center gap-3 rounded-2xl border border-brand-200 bg-white/90 px-4 py-3 text-sm shadow-sm backdrop-blur transition hover:border-brand-400 hover:shadow-md"
          >
            <span className="shrink-0 rounded-full bg-brand-800 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
              Destacado
            </span>
            <span className="text-stone-700">
              Webinario con la <strong className="font-semibold text-stone-900">SEMPSPGS</strong>: «Actualizaciones de
              las recomendaciones No Hacer» · Dr. J. M.ª Aranaz
            </span>
            <ArrowRight className="h-4 w-4 shrink-0 text-brand-800 transition-transform group-hover:translate-x-0.5" />
          </a>

          <dl className="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-stone-200 pt-8">
            <div>
              <dt className="text-xs font-medium uppercase tracking-wider text-stone-500">Fundación</dt>
              <dd className="mt-1 text-2xl font-bold text-stone-900">2007</dd>
            </div>
            <div>
              <dt className="text-xs font-medium uppercase tracking-wider text-stone-500">Socios/as</dt>
              <dd className="mt-1 text-2xl font-bold text-stone-900">+60</dd>
            </div>
            <div>
              <dt className="text-xs font-medium uppercase tracking-wider text-stone-500">Sede</dt>
              <dd className="mt-1 flex items-center gap-1 text-2xl font-bold text-stone-900">
                <MapPin className="h-5 w-5 text-brand-800" /> Murcia
              </dd>
            </div>
          </dl>
        </div>

        {/* Logo oficial */}
        <div className="animate-fade-in relative mx-auto w-full max-w-md lg:max-w-none [animation-delay:200ms]">
          <div className="relative">
            <div
              className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-br from-brand-200/60 via-white to-brand-100/50 blur-2xl"
              aria-hidden="true"
            />
            <div className="relative overflow-hidden rounded-[2rem] border border-white bg-white p-6 shadow-2xl shadow-brand-900/15 ring-1 ring-stone-200/70 sm:p-10">
              <Logo variant="hd" className="mx-auto aspect-square w-full max-w-sm" />
            </div>

            {/* Etiquetas flotantes */}
            <div className="absolute -left-4 top-10 hidden rounded-2xl border border-stone-200 bg-white/95 px-4 py-3 shadow-lg backdrop-blur sm:block lg:-left-10">
              <p className="text-[11px] font-medium uppercase tracking-wider text-stone-500">Especialidad</p>
              <p className="text-sm font-semibold text-stone-900">Medicina Preventiva y Salud Pública</p>
            </div>
            <div className="absolute -bottom-5 -right-2 hidden rounded-2xl border border-stone-200 bg-white/95 px-4 py-3 shadow-lg backdrop-blur sm:block lg:-right-8">
              <p className="text-[11px] font-medium uppercase tracking-wider text-stone-500">Lema II Congreso</p>
              <p className="text-sm font-semibold text-brand-800">«Con Salud Pública, más Salud»</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
