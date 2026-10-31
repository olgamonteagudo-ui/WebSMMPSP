import { ArrowUpRight, Rss } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { NEWS, SOCIETY } from "@/data/content";
import { cn } from "@/utils/cn";

/** Los enlaces externos se abren en pestaña nueva; los anclas internas (#…) no. */
function externalProps(href: string) {
  return href.startsWith("#") ? {} : { target: "_blank", rel: "noopener noreferrer" };
}

const CATEGORY_STYLES: Record<string, string> = {
  Reconocimiento: "bg-amber-50 text-amber-800 ring-amber-200",
  Divulgación: "bg-sky-50 text-sky-800 ring-sky-200",
  Actividad: "bg-emerald-50 text-emerald-800 ring-emerald-200",
  "In memoriam": "bg-stone-100 text-stone-700 ring-stone-300",
  Formación: "bg-brand-50 text-brand-800 ring-brand-200",
};

export function News() {
  const [featured, ...rest] = NEWS;

  return (
    <section id="noticias" className="scroll-mt-20 bg-stone-50 py-20 sm:py-28">
      <Container>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Noticias"
            title="Actualidad de la Sociedad"
            description="Novedades, convocatorias y artículos publicados por la SMMPySP y sobre la especialidad en la Región de Murcia."
          />
          <a
            href={SOCIETY.blog}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-2 rounded-full border border-stone-300 bg-white px-5 py-2.5 text-sm font-semibold text-stone-800 transition hover:border-brand-300 hover:bg-brand-50 hover:text-brand-800"
          >
            <Rss className="h-4 w-4" />
            Visitar el blog
          </a>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {/* Destacada */}
          <a
            href={featured.href}
            {...externalProps(featured.href)}
            className="group relative flex flex-col justify-end overflow-hidden rounded-3xl bg-brand-900 p-8 text-white shadow-xl shadow-brand-900/20 lg:row-span-2"
          >
            <div className="bg-dots absolute inset-0 opacity-30 [background-image:radial-gradient(rgba(255,255,255,0.25)_1px,transparent_1px)]" aria-hidden="true" />
            <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-brand-700/60 blur-3xl transition duration-500 group-hover:bg-brand-600/60" aria-hidden="true" />
            <div className="relative">
              <span className="inline-block rounded-full bg-white/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider backdrop-blur">
                {featured.category}
              </span>
              <time className="ml-3 text-xs font-medium text-brand-200">{featured.date}</time>
              <h3 className="mt-5 text-2xl font-bold leading-snug text-balance sm:text-3xl">{featured.title}</h3>
              <p className="mt-4 leading-relaxed text-brand-100/85">{featured.excerpt}</p>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold">
                Leer más
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </span>
            </div>
          </a>

          {rest.map((n) => (
            <a
              key={n.title}
              href={n.href}
              {...externalProps(n.href)}
              className="group flex flex-col rounded-2xl border border-stone-200 bg-white p-6 transition hover:-translate-y-0.5 hover:border-brand-200 hover:shadow-lg hover:shadow-brand-900/5"
            >
              <div className="flex items-center justify-between gap-3">
                <span
                  className={cn(
                    "rounded-full px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider ring-1",
                    CATEGORY_STYLES[n.category] ?? "bg-stone-100 text-stone-700 ring-stone-200",
                  )}
                >
                  {n.category}
                </span>
                <time className="text-xs font-medium text-stone-500">{n.date}</time>
              </div>
              <h3 className="mt-4 font-bold leading-snug text-stone-900 group-hover:text-brand-800">{n.title}</h3>
              <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-stone-600">{n.excerpt}</p>
              <span className="mt-auto inline-flex items-center gap-1.5 pt-4 text-sm font-semibold text-brand-800">
                Leer más
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </span>
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}
