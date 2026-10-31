import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Logo } from "@/components/Logo";
import { BOARD_ROLES, PAST_PRESIDENTS, PRESIDENT } from "@/data/content";
import { cn } from "@/utils/cn";

/** Iniciales a partir del nombre (ignora el tratamiento Dr./Dra. y las partículas). */
function initials(fullName: string): string {
  const parts = fullName
    .replace(/^Dra?\.\s*/i, "")
    .split(/\s+/)
    .filter((p) => p && !/^(de|del|la|las|los|y)$/i.test(p));
  if (parts.length === 0) return "";
  // Primera letra del nombre + primera letra del primer apellido
  // (para nombres compuestos, el primer apellido es el penúltimo token)
  const first = parts[0][0];
  const surname = parts.length >= 3 ? parts[parts.length - 2][0] : (parts[1]?.[0] ?? "");
  return (first + surname).toUpperCase();
}

export function Board() {
  return (
    <section id="junta" className="scroll-mt-20 py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Junta Directiva"
          title="Órganos de gobierno"
          description="La Junta Directiva es elegida por la Asamblea General de socios y socias, y se encarga de impulsar las actividades científicas, formativas y de representación de la Sociedad."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-[1fr_1.4fr]">
          {/* Presidencia */}
          <article className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-800 to-brand-950 p-8 text-white shadow-xl shadow-brand-900/25 sm:p-10">
            <Logo
              variant="white"
              className="pointer-events-none absolute -bottom-8 -right-6 h-56 w-auto opacity-[0.07]"
            />
            <span className="inline-block rounded-full bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider backdrop-blur">
              {PRESIDENT.role}
            </span>
            <div className="mt-6 flex items-center gap-4">
              <div
                className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-2xl font-bold ring-1 ring-white/20"
                aria-hidden="true"
              >
                {initials(PRESIDENT.name)}
              </div>
              <h3 className="text-xl font-bold leading-tight sm:text-2xl">{PRESIDENT.name}</h3>
            </div>
            <p className="mt-6 leading-relaxed text-brand-100/90">{PRESIDENT.bio}</p>

            <div className="mt-8 border-t border-white/15 pt-6">
              <p className="text-xs font-semibold uppercase tracking-wider text-brand-200">Presidencias anteriores</p>
              <ul className="mt-3 space-y-2">
                {PAST_PRESIDENTS.map((p) => (
                  <li key={p.name} className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                    <span className="font-medium">{p.name}</span>
                    <span className="text-sm text-brand-200/80">{p.period}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>

          {/* Resto de cargos */}
          <div className="grid gap-4 sm:grid-cols-2">
            {BOARD_ROLES.map((r, i) => (
              <article
                key={r.role}
                className={cn(
                  "flex gap-4 rounded-2xl border bg-white p-5 transition hover:shadow-md",
                  r.name ? "border-stone-200 hover:border-brand-300" : "border-dashed border-stone-300 hover:border-stone-400",
                )}
              >
                <span
                  className={cn(
                    "flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-sm font-bold ring-1",
                    r.name
                      ? "bg-gradient-to-br from-brand-700 to-brand-900 text-white ring-brand-900/10 shadow-md shadow-brand-900/20"
                      : "bg-brand-50 text-brand-800 ring-brand-100",
                  )}
                  aria-hidden="true"
                >
                  {r.name ? initials(r.name) : String(i + 2).padStart(2, "0")}
                </span>
                <div className="min-w-0">
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-brand-800">{r.role}</p>
                  {r.name ? (
                    <h3 className="mt-0.5 text-base font-bold leading-snug text-stone-900">{r.name}</h3>
                  ) : (
                    <h3 className="mt-0.5 text-base font-bold leading-snug text-stone-500">Vocalía</h3>
                  )}
                  <p className="mt-1.5 text-sm leading-relaxed text-stone-600">{r.description}</p>
                </div>
              </article>
            ))}
            <p className="text-sm leading-relaxed text-stone-500 sm:col-span-2">
              La Junta Directiva se renueva periódicamente en Asamblea General. Para cualquier consulta dirigida a sus
              miembros, escribe a la Secretaría a través del correo de la Sociedad.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
