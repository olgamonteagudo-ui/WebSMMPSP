import { Globe, Mail, MapPin, Rss } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Logo } from "@/components/Logo";
import { FacebookIcon, LinkedinIcon, XIcon, YoutubeIcon } from "@/components/ui/SocialIcons";
import { SOCIETY } from "@/data/content";

const SOCIAL = [
  { name: "X (Twitter)", handle: SOCIETY.twitterHandle, href: SOCIETY.twitter, Icon: XIcon },
  { name: "LinkedIn", handle: SOCIETY.linkedinHandle, href: SOCIETY.linkedin, Icon: LinkedinIcon },
  { name: "Facebook", handle: "SociedadMurcianaMPySP", href: SOCIETY.facebook, Icon: FacebookIcon },
  { name: "YouTube", handle: "Canal SMMPySP", href: SOCIETY.youtube, Icon: YoutubeIcon },
  { name: "Blog", handle: "murciamedicinapreventivasaludpublica.blogspot.com", href: SOCIETY.blog, Icon: Rss },
];

export function Contact() {
  return (
    <section id="contacto" className="scroll-mt-20 py-20 sm:py-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20">
          <div>
            <SectionHeading
              eyebrow="Contacto"
              title="Hablemos"
              description="Para consultas sobre la Sociedad, actividades formativas, colaboraciones institucionales o prensa, puedes escribirnos o seguirnos en nuestras redes."
            />

            <dl className="mt-10 space-y-6">
              <div className="flex gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-800 ring-1 ring-brand-100">
                  <Mail className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <dt className="text-sm font-semibold text-stone-900">Correo electrónico</dt>
                  <dd className="mt-0.5">
                    <a href={`mailto:${SOCIETY.email}`} className="text-stone-600 hover:text-brand-800 hover:underline">
                      {SOCIETY.email}
                    </a>
                  </dd>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-800 ring-1 ring-brand-100">
                  <Globe className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <dt className="text-sm font-semibold text-stone-900">Página web</dt>
                  <dd className="mt-0.5">
                    <a
                      href={SOCIETY.web}
                      className="break-all text-stone-600 transition hover:text-brand-800 hover:underline"
                    >
                      web-smmpsp.vercel.app
                    </a>
                  </dd>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-800 ring-1 ring-brand-100">
                  <MapPin className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <dt className="text-sm font-semibold text-stone-900">Sede de actividades</dt>
                  <dd className="mt-0.5 text-stone-600">
                    {SOCIETY.venue}
                    <br />
                    {SOCIETY.city}
                  </dd>
                </div>
              </div>
            </dl>

            <ul className="mt-10 grid gap-3 sm:grid-cols-2">
              {SOCIAL.map(({ name, handle, href, Icon }) => (
                <li key={name}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3 rounded-xl border border-stone-200 bg-white px-4 py-3 transition hover:border-brand-200 hover:bg-brand-50/50"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-stone-100 text-stone-700 transition group-hover:bg-brand-800 group-hover:text-white">
                      <Icon className="h-4 w-4" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-sm font-semibold text-stone-900">{name}</span>
                      <span className="block truncate text-xs text-stone-500">{handle}</span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Tarjeta con logo */}
          <div className="relative">
            <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-brand-100 via-white to-brand-50 blur-2xl" aria-hidden="true" />
            <div className="relative flex h-full flex-col items-center justify-center rounded-3xl border border-stone-200 bg-white p-10 text-center shadow-xl shadow-stone-900/5">
              <Logo variant="full" className="w-56 sm:w-64" />
              <p className="mt-8 max-w-sm text-sm leading-relaxed text-stone-600">
                Sociedad científica médica fundada en 2007, que promueve el estudio y avance en Medicina Preventiva y
                Salud Pública desde la Región de Murcia.
              </p>
              <a
                href={`mailto:${SOCIETY.email}`}
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand-800 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-800/25 transition hover:bg-brand-700"
              >
                <Mail className="h-4 w-4" />
                Escríbenos
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
