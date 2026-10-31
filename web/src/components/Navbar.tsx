import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/utils/cn";
import { NAV_LINKS } from "@/data/content";
import { Container } from "@/components/ui/Container";
import { LogoLockup } from "@/components/Logo";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Resalta el enlace de la sección visible
  useEffect(() => {
    const ids = NAV_LINKS.map((l) => l.href.slice(1));
    const sections = ids.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(`#${visible.target.id}`);
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: [0, 0.25, 0.5] },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  // Bloquea el scroll del body cuando el menú móvil está abierto
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled || open
          ? "border-b border-stone-200/70 bg-white/90 shadow-sm backdrop-blur-md"
          : "bg-white/60 backdrop-blur-sm",
      )}
    >
      <Container className="flex h-[4.5rem] items-center justify-between gap-6">
        <LogoLockup />

        <nav className="hidden items-center gap-0.5 xl:flex" aria-label="Principal">
          {NAV_LINKS.filter((l) => l.href !== "#socios").map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={cn(
                "whitespace-nowrap rounded-full px-3 py-2 text-sm font-medium transition-colors",
                active === link.href
                  ? "bg-brand-50 text-brand-800"
                  : "text-stone-600 hover:bg-stone-100 hover:text-stone-900",
              )}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#socios"
            className="ml-3 inline-flex items-center rounded-full bg-brand-800 px-5 py-2.5 text-sm font-semibold text-white shadow-sm shadow-brand-800/30 transition hover:bg-brand-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-800 focus-visible:ring-offset-2"
          >
            Hazte socio
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full text-stone-700 transition hover:bg-stone-100 xl:hidden"
          aria-expanded={open}
          aria-controls="menu-movil"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </Container>

      {/* Menú móvil */}
      <div
        id="menu-movil"
        className={cn(
          "xl:hidden overflow-hidden transition-[max-height,opacity] duration-300 ease-out",
          open ? "max-h-[40rem] opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <nav className="border-t border-stone-200/70 bg-white px-5 pb-6 pt-3 sm:px-8" aria-label="Móvil">
          <ul className="flex flex-col">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "flex items-center justify-between rounded-xl px-3 py-3 text-base font-medium transition-colors",
                    link.href === "#socios"
                      ? "mt-2 bg-brand-800 text-white hover:bg-brand-700"
                      : active === link.href
                        ? "bg-brand-50 text-brand-800"
                        : "text-stone-700 hover:bg-stone-100",
                  )}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
