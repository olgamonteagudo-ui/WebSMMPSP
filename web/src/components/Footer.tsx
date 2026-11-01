import { Globe, Mail, Rss } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/Logo";
import { FacebookIcon, LinkedinIcon, XIcon, YoutubeIcon } from "@/components/ui/SocialIcons";
import { NAV_LINKS, SOCIETY } from "@/data/content";

const SOCIAL = [
  { label: `X (${SOCIETY.twitterHandle})`, href: SOCIETY.twitter, Icon: XIcon },
  { label: "LinkedIn", href: SOCIETY.linkedin, Icon: LinkedinIcon },
  { label: "Facebook", href: SOCIETY.facebook, Icon: FacebookIcon },
  { label: "YouTube", href: SOCIETY.youtube, Icon: YoutubeIcon },
  { label: "Blog", href: SOCIETY.blog, Icon: Rss },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-brand-950 text-brand-100">
      <div
        className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-brand-800/40 blur-3xl"
        aria-hidden="true"
      />
      <Container className="relative">
        <div className="grid gap-12 py-16 lg:grid-cols-[1.3fr_1fr_1fr]">
          <div>
            <a href="#inicio" className="inline-flex items-center gap-4" aria-label="Ir al inicio">
              <Logo variant="white" className="h-14 w-auto" />
              <span className="flex flex-col leading-tight">
                <span className="text-xs font-medium text-brand-200/80">Sociedad Murciana de</span>
                <span className="text-lg font-bold text-white">Medicina Preventiva</span>
                <span className="text-lg font-bold text-white">y Salud Pública</span>
              </span>
            </a>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-brand-100/75">
              Sociedad científica creada en 2007 que busca promover la mejora de la salud de la población desde la
              Medicina Preventiva y la Salud Pública en la Región de Murcia.
            </p>
            <ul className="mt-6 flex gap-3">
              {SOCIAL.map(({ label, href, Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white hover:text-brand-900"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <nav aria-label="Pie de página">
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-300">Navegación</h3>
            <ul className="mt-5 grid grid-cols-2 gap-x-6 gap-y-3 text-sm">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-brand-100/80 transition hover:text-white">
                    {l.label}
                  </a>
                </li>
              ))}
              <li>
                <a href="#enlaces" className="text-brand-100/80 transition hover:text-white">
                  Enlaces de interés
                </a>
              </li>
            </ul>
          </nav>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-300">Contacto</h3>
            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <a
                  href={SOCIETY.web}
                  className="inline-flex items-center gap-2 text-brand-100/80 transition hover:text-white"
                >
                  <Globe className="h-4 w-4" />
                  web-smmpsp.vercel.app
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SOCIETY.email}`}
                  className="inline-flex items-center gap-2 text-brand-100/80 transition hover:text-white"
                >
                  <Mail className="h-4 w-4" />
                  {SOCIETY.email}
                </a>
              </li>
              <li className="text-brand-100/80">
                {SOCIETY.venue}
                <br />
                {SOCIETY.city}
              </li>
            </ul>
            <a
              href="#socios"
              className="mt-6 inline-flex items-center rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-brand-900 transition hover:bg-brand-100"
            >
              Hazte socio
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-white/10 py-6 text-xs text-brand-200/70 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {SOCIETY.name} ({SOCIETY.acronym}). Todos los derechos reservados.
          </p>
          <ul className="flex flex-wrap gap-x-5 gap-y-1">
            <li>
              <a href="#" className="transition hover:text-white">
                Aviso legal
              </a>
            </li>
            <li>
              <a href="#" className="transition hover:text-white">
                Política de privacidad
              </a>
            </li>
            <li>
              <a href="#" className="transition hover:text-white">
                Cookies
              </a>
            </li>
          </ul>
        </div>
      </Container>
    </footer>
  );
}
