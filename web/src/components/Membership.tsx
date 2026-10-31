import { useState, type FormEvent } from "react";
import { CheckCircle2, Loader2, Mail, Send } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MEMBER_BENEFITS, SOCIETY } from "@/data/content";
import { cn } from "@/utils/cn";

interface FormState {
  nombre: string;
  apellidos: string;
  email: string;
  telefono: string;
  centro: string;
  perfil: string;
  mensaje: string;
  privacidad: boolean;
}

const INITIAL: FormState = {
  nombre: "",
  apellidos: "",
  email: "",
  telefono: "",
  centro: "",
  perfil: "",
  mensaje: "",
  privacidad: false,
};

const PERFILES = [
  "Especialista en Medicina Preventiva y Salud Pública",
  "Médico/a residente (MIR) de MPySP",
  "Otro/a profesional de la Salud Pública",
  "Estudiante / investigador/a",
];

const inputClass =
  "w-full rounded-xl border border-stone-300 bg-white px-4 py-3 text-sm text-stone-900 placeholder:text-stone-400 transition focus:border-brand-700 focus:outline-none focus:ring-4 focus:ring-brand-800/10";

export function Membership() {
  const [form, setForm] = useState<FormState>(INITIAL);
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});

  const update = <K extends keyof FormState>(key: K, value: FormState[K]) => {
    setForm((f) => ({ ...f, [key]: value }));
    if (errors[key]) setErrors((e) => ({ ...e, [key]: undefined }));
  };

  const validate = () => {
    const e: typeof errors = {};
    if (!form.nombre.trim()) e.nombre = "Indica tu nombre";
    if (!form.apellidos.trim()) e.apellidos = "Indica tus apellidos";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Introduce un correo válido";
    if (!form.perfil) e.perfil = "Selecciona tu perfil";
    if (!form.privacidad) e.privacidad = "Debes aceptar la política de privacidad";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const onSubmit = (ev: FormEvent) => {
    ev.preventDefault();
    if (!validate()) return;
    setStatus("sending");

    const subject = encodeURIComponent(`Solicitud de alta como socio/a – ${form.nombre} ${form.apellidos}`);
    const body = encodeURIComponent(
      [
        `Nombre: ${form.nombre} ${form.apellidos}`,
        `Correo electrónico: ${form.email}`,
        `Teléfono: ${form.telefono || "—"}`,
        `Centro de trabajo: ${form.centro || "—"}`,
        `Perfil: ${form.perfil}`,
        "",
        "Mensaje:",
        form.mensaje || "—",
      ].join("\n"),
    );

    // Abre el cliente de correo con la solicitud cumplimentada
    window.setTimeout(() => {
      window.location.href = `mailto:${SOCIETY.email}?subject=${subject}&body=${body}`;
      setStatus("sent");
    }, 600);
  };

  return (
    <section id="socios" className="scroll-mt-20 relative overflow-hidden py-20 sm:py-28">
      <div className="bg-dots pointer-events-none absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)]" aria-hidden="true" />
      <Container className="relative">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          <div>
            <SectionHeading
              eyebrow="Hazte socio"
              title="Forma parte de la SMMPySP"
              description="Pueden asociarse los médicos especialistas y residentes de Medicina Preventiva y Salud Pública, así como otros profesionales que ejercen en el campo de la Salud Pública en la Región de Murcia."
            />

            <ul className="mt-10 space-y-5">
              {MEMBER_BENEFITS.map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-start gap-4">
                  <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-800 ring-1 ring-brand-100">
                    <Icon className="h-4.5 w-4.5" aria-hidden="true" />
                  </span>
                  <span className="leading-relaxed text-stone-700">{text}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10 rounded-2xl border border-brand-100 bg-brand-50/60 p-6">
              <p className="text-sm font-semibold text-brand-900">¿Prefieres escribirnos directamente?</p>
              <a
                href={`mailto:${SOCIETY.email}`}
                className="mt-2 inline-flex items-center gap-2 font-semibold text-brand-800 hover:underline"
              >
                <Mail className="h-4 w-4" />
                {SOCIETY.email}
              </a>
            </div>
          </div>

          {/* Formulario */}
          <div className="rounded-3xl border border-stone-200 bg-white p-6 shadow-xl shadow-stone-900/5 sm:p-8">
            {status === "sent" ? (
              <div className="flex h-full min-h-[28rem] flex-col items-center justify-center text-center">
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 ring-8 ring-emerald-50/60">
                  <CheckCircle2 className="h-8 w-8" />
                </span>
                <h3 className="mt-6 text-2xl font-bold text-stone-900">¡Gracias por tu interés!</h3>
                <p className="mt-3 max-w-sm leading-relaxed text-stone-600">
                  Se ha abierto tu cliente de correo con la solicitud cumplimentada. Si no se abre automáticamente,
                  escríbenos a{" "}
                  <a href={`mailto:${SOCIETY.email}`} className="font-semibold text-brand-800 hover:underline">
                    {SOCIETY.email}
                  </a>
                  . La Secretaría se pondrá en contacto contigo para completar el alta.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setForm(INITIAL);
                    setStatus("idle");
                  }}
                  className="mt-8 rounded-full border border-stone-300 px-5 py-2.5 text-sm font-semibold text-stone-700 transition hover:bg-stone-50"
                >
                  Enviar otra solicitud
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} noValidate className="space-y-5">
                <div>
                  <h3 className="text-xl font-bold text-stone-900">Solicitud de alta</h3>
                  <p className="mt-1 text-sm text-stone-500">Los campos marcados con * son obligatorios.</p>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Nombre *" error={errors.nombre}>
                    <input
                      className={cn(inputClass, errors.nombre && "border-red-400")}
                      value={form.nombre}
                      onChange={(e) => update("nombre", e.target.value)}
                      autoComplete="given-name"
                      placeholder="María"
                    />
                  </Field>
                  <Field label="Apellidos *" error={errors.apellidos}>
                    <input
                      className={cn(inputClass, errors.apellidos && "border-red-400")}
                      value={form.apellidos}
                      onChange={(e) => update("apellidos", e.target.value)}
                      autoComplete="family-name"
                      placeholder="García López"
                    />
                  </Field>
                  <Field label="Correo electrónico *" error={errors.email}>
                    <input
                      type="email"
                      className={cn(inputClass, errors.email && "border-red-400")}
                      value={form.email}
                      onChange={(e) => update("email", e.target.value)}
                      autoComplete="email"
                      placeholder="nombre@ejemplo.es"
                    />
                  </Field>
                  <Field label="Teléfono">
                    <input
                      type="tel"
                      className={inputClass}
                      value={form.telefono}
                      onChange={(e) => update("telefono", e.target.value)}
                      autoComplete="tel"
                      placeholder="+34 600 000 000"
                    />
                  </Field>
                </div>

                <Field label="Centro de trabajo / institución">
                  <input
                    className={inputClass}
                    value={form.centro}
                    onChange={(e) => update("centro", e.target.value)}
                    placeholder="Hospital, Consejería, Ayuntamiento, Universidad…"
                  />
                </Field>

                <Field label="Perfil profesional *" error={errors.perfil}>
                  <select
                    className={cn(inputClass, "appearance-none", errors.perfil && "border-red-400", !form.perfil && "text-stone-400")}
                    value={form.perfil}
                    onChange={(e) => update("perfil", e.target.value)}
                  >
                    <option value="" disabled>
                      Selecciona una opción
                    </option>
                    {PERFILES.map((p) => (
                      <option key={p} value={p} className="text-stone-900">
                        {p}
                      </option>
                    ))}
                  </select>
                </Field>

                <Field label="Mensaje">
                  <textarea
                    className={cn(inputClass, "min-h-[6rem] resize-y")}
                    value={form.mensaje}
                    onChange={(e) => update("mensaje", e.target.value)}
                    placeholder="Cuéntanos brevemente tu interés en la Sociedad…"
                  />
                </Field>

                <label className="flex items-start gap-3 text-sm text-stone-600">
                  <input
                    type="checkbox"
                    checked={form.privacidad}
                    onChange={(e) => update("privacidad", e.target.checked)}
                    className="mt-0.5 h-4 w-4 rounded border-stone-300 accent-brand-800"
                  />
                  <span>
                    He leído y acepto la política de privacidad. Mis datos serán tratados únicamente para gestionar mi
                    solicitud de alta en la SMMPySP.
                    {errors.privacidad && <span className="block text-xs font-medium text-red-600">{errors.privacidad}</span>}
                  </span>
                </label>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-800 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-800/25 transition hover:bg-brand-700 disabled:cursor-not-allowed disabled:opacity-70 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-800 focus-visible:ring-offset-2"
                >
                  {status === "sending" ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" /> Preparando solicitud…
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" /> Enviar solicitud
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-stone-700">{label}</span>
      {children}
      {error && <span className="mt-1 block text-xs font-medium text-red-600">{error}</span>}
    </label>
  );
}
