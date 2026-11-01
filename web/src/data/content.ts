import type { LucideIcon } from "lucide-react";
import {
  Activity,
  Building2,
  FlaskConical,
  HeartPulse,
  Leaf,
  ShieldCheck,
  Syringe,
  Microscope,
  BookOpen,
  Users,
  Megaphone,
  GraduationCap,
  Presentation,
  Video,
  Award,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Datos de contacto y redes                                         */
/* ------------------------------------------------------------------ */

export const SOCIETY = {
  name: "Sociedad Murciana de Medicina Preventiva y Salud Pública",
  acronym: "SMMPySP",
  founded: "17 de enero de 2007",
  email: "smmpysp@commurcia.es",
  blog: "https://murciamedicinapreventivasaludpublica.blogspot.com",
  /** Perfil en X (antes Twitter): @SMPSPRM */
  twitter: "https://x.com/smpsprm",
  twitterHandle: "@smpsprm",
  /**
   * Perfil en LinkedIn de la Sociedad. Si se conoce la URL exacta de la página
   * (p. ej. https://www.linkedin.com/company/…), basta con sustituirla aquí.
   */
  linkedin:
    "https://www.linkedin.com/search/results/all/?keywords=Sociedad%20Murciana%20de%20Medicina%20Preventiva%20y%20Salud%20P%C3%BAblica",
  linkedinHandle: "Sociedad Murciana de Medicina Preventiva y Salud Pública",
  facebook: "https://www.facebook.com/SociedadMurcianaMPySP/",
  youtube: "https://youtube.com/@sdad.murcianamedicinaprevenSP",
  venue: "Ilustre Colegio Oficial de Médicos de la Región de Murcia",
  city: "Murcia, España",
};

/* ------------------------------------------------------------------ */
/*  Navegación                                                         */
/* ------------------------------------------------------------------ */

export const NAV_LINKS = [
  { href: "#sociedad", label: "La Sociedad" },
  { href: "#areas", label: "Áreas" },
  { href: "#webinario", label: "Webinario" },
  { href: "#historia", label: "Historia" },
  { href: "#actividades", label: "Actividades" },
  { href: "#junta", label: "Junta Directiva" },
  { href: "#noticias", label: "Noticias" },
  { href: "#socios", label: "Hazte socio" },
  { href: "#contacto", label: "Contacto" },
];

/* ------------------------------------------------------------------ */
/*  Cifras                                                             */
/* ------------------------------------------------------------------ */

export const STATS = [
  { value: 2007, suffix: "", label: "Año de fundación" },
  { value: 60, suffix: "+", label: "Socios y socias" },
  { value: 2, suffix: "", label: "Congresos regionales" },
  { value: 15, suffix: "+", label: "Cursos y jornadas" },
];

/* ------------------------------------------------------------------ */
/*  Áreas de trabajo                                                   */
/* ------------------------------------------------------------------ */

export interface Area {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const AREAS: Area[] = [
  {
    icon: Microscope,
    title: "Epidemiología",
    description:
      "Estudio de la distribución y los determinantes de la salud y la enfermedad en la población de la Región de Murcia.",
  },
  {
    icon: ShieldCheck,
    title: "Medicina Preventiva hospitalaria",
    description:
      "Prevención y control de la infección relacionada con la asistencia sanitaria, seguridad del paciente y calidad asistencial.",
  },
  {
    icon: Syringe,
    title: "Vacunas e inmunización",
    description:
      "Programas de vacunación, consultas de vacunas y asesoramiento al viajero internacional.",
  },
  {
    icon: Activity,
    title: "Vigilancia en Salud Pública",
    description:
      "Detección precoz, investigación y respuesta ante alertas, brotes y emergencias sanitarias.",
  },
  {
    icon: Building2,
    title: "Administración sanitaria",
    description:
      "Planificación, gestión y evaluación de servicios y políticas de salud basadas en la evidencia.",
  },
  {
    icon: Leaf,
    title: "Salud ambiental y laboral",
    description:
      "Protección frente a riesgos ambientales, alimentarios y laborales que afectan a la salud colectiva.",
  },
  {
    icon: HeartPulse,
    title: "Promoción de la salud",
    description:
      "Fomento de estilos de vida saludables, cribados poblacionales y reducción de desigualdades en salud.",
  },
  {
    icon: FlaskConical,
    title: "Investigación y docencia",
    description:
      "Colaboración con la Universidad de Murcia, el IMIB y las unidades docentes de la especialidad.",
  },
];

/* ------------------------------------------------------------------ */
/*  Historia                                                           */
/* ------------------------------------------------------------------ */

export interface Milestone {
  year: string;
  title: string;
  description: string;
}

export const MILESTONES: Milestone[] = [
  {
    year: "2007",
    title: "Constitución de la Sociedad",
    description:
      "El 17 de enero de 2007 se constituye la SMMPySP en Murcia, con el objetivo de fomentar el estudio y conocimiento de la Medicina Preventiva y la Salud Pública en todos sus ámbitos.",
  },
  {
    year: "2008",
    title: "Primer curso de formación continuada",
    description:
      "Arranca en el Colegio Oficial de Médicos de Murcia el curso «Perspectivas Actuales en Salud Pública», germen del actual programa «Avances en Salud Pública».",
  },
  {
    year: "2010",
    title: "I Congreso de la SMMPySP",
    description:
      "Celebrado en abril en el Edificio Moneo del Ayuntamiento de Murcia, con la participación de la Consejería de Sanidad, el Ayuntamiento y la Universidad de Murcia.",
  },
  {
    year: "2012",
    title: "Jornada «La Salud Pública en tiempos de crisis»",
    description:
      "Encuentro celebrado en la Facultad de Ciencias de la Empresa de la Universidad Politécnica de Cartagena.",
  },
  {
    year: "2022",
    title: "II Congreso: «Con Salud Pública, más Salud»",
    description:
      "Los días 18, 19 y 20 de mayo, de nuevo en el Edificio Moneo, con expertos nacionales e internacionales y la colaboración del Colegio de Médicos.",
  },
  {
    year: "2023 – 2024",
    title: "Webinarios y formación online",
    description:
      "Ciclo de webinarios abiertos sobre temas de actualidad en Salud Pública (enfermedades desatendidas, VRS, calidad del aire, alcohol…) y curso online de formación en Medicina Preventiva y Salud Pública.",
  },
  {
    year: "2026",
    title: "Webinario conjunto con la SEMPSPGS",
    description:
      "El 3 de febrero la SMMPySP y la Sociedad Española de Medicina Preventiva, Salud Pública y Gestión Sanitaria celebran el webinario «Actualizaciones de las recomendaciones No Hacer», impartido por el Dr. Jesús María Aranaz Andrés.",
  },
];

/* ------------------------------------------------------------------ */
/*  Actividades y formación                                            */
/* ------------------------------------------------------------------ */

export interface ActivityType {
  icon: LucideIcon;
  title: string;
  description: string;
  tag: string;
}

export const ACTIVITY_TYPES: ActivityType[] = [
  {
    icon: Presentation,
    title: "Congresos regionales",
    tag: "Cada 4 años aprox.",
    description:
      "Punto de encuentro de profesionales de la Salud Pública de la Región: ponencias, mesas redondas, comunicaciones orales y pósteres.",
  },
  {
    icon: GraduationCap,
    title: "Curso «Avances en Salud Pública»",
    tag: "Formación continuada",
    description:
      "Programa acreditado impartido en el Colegio de Médicos de Murcia, de la medición del riesgo a la prevención de la enfermedad.",
  },
  {
    icon: Video,
    title: "Webinarios SMMPySP",
    tag: "Online · gratuitos",
    description:
      "Sesiones online de una hora con profesionales de referencia, moderadas por miembros de la Junta Directiva.",
  },
  {
    icon: Users,
    title: "Jornadas y asambleas",
    tag: "Socios y socias",
    description:
      "Jornadas temáticas y Asamblea General anual donde se decide la actividad y el rumbo de la Sociedad.",
  },
  {
    icon: BookOpen,
    title: "Apoyo a residentes MIR",
    tag: "Docencia",
    description:
      "Acompañamiento a los médicos residentes de MPySP de la Región y vínculo con el Máster en Salud Pública de la UMU.",
  },
  {
    icon: Megaphone,
    title: "Divulgación y posicionamiento",
    tag: "Sociedad",
    description:
      "Artículos de opinión, comunicados y presencia en medios para dar a conocer la especialidad y defender la Salud Pública.",
  },
];

export interface AgendaItem {
  day: string;
  month: string;
  title: string;
  type: string;
  place: string;
  time: string;
}

/**
 * Agenda de próximas convocatorias.
 * Mientras no haya nada programado, la sección «Actividades» muestra un mensaje de
 * «Sin convocatorias abiertas». Para publicar una nueva convocatoria basta con añadir
 * aquí un objeto con la siguiente estructura:
 *
 * {
 *   day: "20",
 *   month: "MAY",
 *   title: "Título de la convocatoria",
 *   type: "Webinario",
 *   place: "Online (Microsoft Teams)",
 *   time: "17:00 – 18:00 h",
 * }
 */
export const AGENDA: AgendaItem[] = [];

/* ------------------------------------------------------------------ */
/*  Webinario destacado · colaboración SEMPSPGS                        */
/* ------------------------------------------------------------------ */

export const SEMPSPGS = {
  name: "Sociedad Española de Medicina Preventiva, Salud Pública y Gestión Sanitaria",
  acronym: "SEMPSPGS",
  href: "https://sempspgs.es",
};

export const FEATURED_WEBINAR = {
  eyebrow: "Webinario online · SEMPSPGS × SMMPySP",
  title: "Actualizaciones de las recomendaciones «No Hacer»",
  subtitle:
    "Webinario conjunto de la Sociedad Española de Medicina Preventiva, Salud Pública y Gestión Sanitaria (SEMPSPGS) y la Sociedad Murciana de Medicina Preventiva y Salud Pública (SMMPySP).",
  status: "Celebrado",
  date: "3 de febrero de 2026",
  dateShort: { day: "03", month: "FEB", year: "2026" },
  time: "18:00 h",
  format: "Online · retransmisión en directo",
  organizers: "SEMPSPGS y SMMPySP",
  audience: "Especialistas y residentes de MPySP, profesionales de calidad asistencial y gestión sanitaria",
  description:
    "Sesión dedicada a conocer las últimas actualizaciones de las recomendaciones «No Hacer» de la SEMPSPGS, elaboradas por su Comité de Estudio en el marco del Compromiso por la Calidad de las Sociedades Científicas. El Dr. Jesús María Aranaz Andrés repasó los cambios más relevantes y su aplicación práctica, ofreciendo herramientas clave para la toma de decisiones en la práctica clínica y la gestión sanitaria.",
  topics: [
    "Origen y evolución de las recomendaciones «No Hacer» de la SEMPSPGS dentro del Compromiso por la Calidad de las Sociedades Científicas (Ministerio de Sanidad · GuíaSalud).",
    "Novedades y cambios más relevantes de la última actualización.",
    "Aplicación práctica en los servicios de Medicina Preventiva: prevención de la infección relacionada con la asistencia sanitaria y uso adecuado de pruebas y tratamientos.",
    "Herramientas para la toma de decisiones en la práctica clínica y en la gestión sanitaria.",
    "Medición de la adherencia y resultados de cumplimiento de las recomendaciones.",
  ],
  speaker: {
    name: "Dr. Jesús María Aranaz Andrés",
    role: "Coordinador del Comité de Estudio «No Hacer» de la SEMPSPGS",
    bio: "Catedrático de Ciencias de la Salud. Jefe de Servicio de Medicina Preventiva y Salud Pública del Hospital Universitario Ramón y Cajal (Madrid). Investigador del Instituto Ramón y Cajal de Investigación Sanitaria (IRYCIS) y del CIBERESP. Referente nacional en seguridad del paciente y adecuación de la práctica clínica, director de los estudios ENEAS y APEAS sobre efectos adversos en la asistencia sanitaria.",
    initials: "JA",
  },
  links: {
    info: "https://sempspgs.es/webinario-online-actualizaciones-de-las-recomendaciones-no-hacer-de-la-sempsgps-y-smmpysp/",
    /* URL original del documento «No Hacer» de la SEMPSPGS.
       La descarga automática del botón se realiza con la copia incrustada en la web
       (src/assets/no-hacer-pdf.ts), idéntica a este archivo, para que funcione sin
       depender de peticiones externas. */
    committee:
      "https://sempspgs.es/wp-content/uploads/2026/02/Recomendaciones-NO-HACER-de-la-Sociedad-Espanola-de-Medicina-Preventiva.pdf",
    partner: SEMPSPGS.href,
  },
};

/* ------------------------------------------------------------------ */
/*  Histórico de webinarios (grabaciones en el canal de YouTube)       */
/* ------------------------------------------------------------------ */

export interface PastWebinar {
  date: string;
  title: string;
  speakers?: string;
  youtubeId?: string;
  href?: string;
  partner?: string;
}

export const PAST_WEBINARS: PastWebinar[] = [
  {
    date: "03/02/2026",
    title: "Actualizaciones de las recomendaciones «No Hacer»",
    speakers: "Dr. Jesús María Aranaz Andrés",
    partner: "Con la SEMPSPGS",
    href: FEATURED_WEBINAR.links.info,
  },
  {
    date: "20/05/2024",
    title: "Políticas de prevención del consumo de alcohol y el reto de los determinantes comerciales",
    speakers: "Soledad Justo Gil e Inés Zuza Santacilia · Ministerio de Sanidad",
    youtubeId: "3W1YpYx64og",
  },
  {
    date: "29/04/2024",
    title: "Nuevos retos en la calidad del aire y su relevancia en Salud Pública",
    youtubeId: "caOViQJXi5E",
  },
  {
    date: "18/03/2024",
    title: "Prevención frente a la infección por virus respiratorio sincitial (VRS): las nuevas herramientas",
    youtubeId: "WJuAi2KfXyU",
  },
  {
    date: "26/02/2024",
    title: "Dieta mediterránea, vino y alcohol",
    youtubeId: "KrHbGJR2Cws",
  },
  {
    date: "29/01/2024",
    title: "Enfermedades desatendidas: perspectiva global y de salud pública. El ejemplo de la enfermedad del sueño",
    speakers: "Dr. Olaf Valverde · DNDi",
    youtubeId: "XgVGnxOz26M",
  },
  {
    date: "13/12/2023",
    title: "Mesa-coloquio: Prevención, vigilancia y control de las IRAS. Hacia un abordaje integral",
    youtubeId: "VMKGL5Lv3Oc",
  },
];

/* ------------------------------------------------------------------ */
/*  Junta directiva                                                    */
/* ------------------------------------------------------------------ */

export const PRESIDENT = {
  name: "Dra. María Dolores Chirlaque López",
  role: "Presidenta",
  bio: "Especialista en Medicina Preventiva y Salud Pública. Epidemióloga de referencia en la Región de Murcia y una de las investigadoras sanitarias más prolíficas de la Comunidad, con una amplia trayectoria en vigilancia epidemiológica, registro de cáncer y cohortes poblacionales.",
};

export interface BoardRole {
  role: string;
  /** Titular del cargo. Si no se indica, se muestra el cargo sin nombre. */
  name?: string;
  description: string;
}

export const BOARD_ROLES: BoardRole[] = [
  {
    role: "Vicepresidencia",
    name: "Dr. Enrique Aguinaga Ontoso",
    description: "Sustituye a la Presidencia y coordina las relaciones institucionales.",
  },
  {
    role: "Secretaría",
    name: "Dra. Natalia Alejandra Cabrera Castro",
    description: "Gestión de socios, actas y comunicaciones oficiales de la Sociedad.",
  },
  {
    role: "Tesorería",
    name: "Dra. Olga Monteagudo Piqueras",
    description: "Administración económica, cuotas y presupuestos anuales.",
  },
  {
    role: "Vocalía de Investigación",
    name: "Dra. Eva Morales Bartolomé",
    description: "Fomento de los proyectos de investigación, las colaboraciones con la universidad y los centros sanitarios, y la difusión de los resultados científicos de la Sociedad.",
  },
  {
    role: "Vocalía de Formación",
    name: "Dra. Rocío García Pina",
    description: "Programa de cursos, webinarios y jornadas científicas de la Sociedad, y acompañamiento a los residentes de la especialidad.",
  },
  {
    role: "Vocalía de Residentes",
    description: "Representación de los médicos internos residentes de la especialidad.",
  },
  {
    role: "Vocalía de Comunicación",
    description: "Blog, redes sociales y relación con los medios.",
  },
];

export const PAST_PRESIDENTS = [
  { name: "Dr. José Jesús Guillén Pérez", period: "Presidente fundador · 2007" },
  { name: "Dra. Carmen Navarro Sánchez", period: "Presidenta · II Congreso 2022" },
];

/* ------------------------------------------------------------------ */
/*  Noticias                                                           */
/* ------------------------------------------------------------------ */

export interface NewsItem {
  date: string;
  category: string;
  title: string;
  excerpt: string;
  href: string;
}

export const NEWS: NewsItem[] = [
  {
    date: "Febrero 2026",
    category: "Formación",
    title: "La SMMPySP y la SEMPSPGS celebran un webinario conjunto sobre las recomendaciones «No Hacer»",
    excerpt:
      "El Dr. Jesús María Aranaz Andrés, coordinador del Comité de Estudio «No Hacer» de la Sociedad Española de Medicina Preventiva, Salud Pública y Gestión Sanitaria, repasó las últimas actualizaciones y su aplicación práctica en la clínica y la gestión sanitaria.",
    href: "#webinario",
  },
  {
    date: "Marzo 2025",
    category: "Reconocimiento",
    title: "La presidenta de la SMMPySP, la investigadora en sanidad más prolífica de la Región de Murcia",
    excerpt:
      "La Dra. María Dolores Chirlaque López encabeza la clasificación de publicaciones científicas en sanidad de la Región. Toda la Sociedad celebra este merecido reconocimiento.",
    href: SOCIETY.twitter,
  },
  {
    date: "Febrero 2025",
    category: "Divulgación",
    title: "La importancia de la especialidad de Medicina Preventiva y Salud Pública",
    excerpt:
      "Artículo publicado en La Verdad en el que se abordan las particularidades de una especialidad en la que la promoción de la salud y la prevención de la enfermedad son pilares fundamentales.",
    href: SOCIETY.blog,
  },
  {
    date: "Diciembre 2024",
    category: "Actividad",
    title: "Participación de la SMMPySP en las II Jornadas de Salud Pública",
    excerpt:
      "Miembros de la Junta Directiva representaron a la Sociedad en unas jornadas dedicadas al papel de la Salud Pública en la Región de Murcia.",
    href: `${SOCIETY.blog}/2024/12/participacion-de-la-smmpysp-en-las-ii.html`,
  },
  {
    date: "Agosto 2024",
    category: "In memoriam",
    title: "Pedro Marset Campos: una vida dedicada a grandes causas",
    excerpt:
      "La Sociedad honra la memoria de su socio fundador (socio nº 7), catedrático de Historia de la Medicina y vocal de la primera Junta Directiva hasta 2022.",
    href: SOCIETY.blog,
  },
  {
    date: "Mayo 2024",
    category: "Formación",
    title: "Nuevo webinario de la SMMPySP",
    excerpt:
      "Sesión online abierta a profesionales interesados en la Salud Pública, con inscripción gratuita a través del blog de la Sociedad.",
    href: SOCIETY.blog,
  },
  {
    date: "Octubre 2023",
    category: "Formación",
    title: "Curso online de formación en Medicina Preventiva y Salud Pública",
    excerpt:
      "La SMMPySP ofrece, en el marco de la formación continuada del Colegio de Médicos de la Región de Murcia, un curso online acreditado.",
    href: `${SOCIETY.blog}/2023/10/la-smmpysp-ofrece-un-curso-de.html`,
  },
];

/* ------------------------------------------------------------------ */
/*  Ventajas de asociarse                                              */
/* ------------------------------------------------------------------ */

export const MEMBER_BENEFITS = [
  { icon: Award, text: "Cuota reducida o gratuita en congresos, cursos y jornadas de la Sociedad." },
  { icon: Users, text: "Red profesional con especialistas de hospitales, Consejería, Ayuntamientos y Universidad." },
  { icon: Video, text: "Acceso preferente a webinarios y a las grabaciones del canal de YouTube." },
  { icon: Megaphone, text: "Voz y voto en la Asamblea General y posibilidad de formar parte de la Junta Directiva." },
  { icon: BookOpen, text: "Información puntual sobre convocatorias, becas, plazas y novedades de la especialidad." },
  { icon: ShieldCheck, text: "Defensa de la dignidad del ejercicio profesional de la Salud Pública en todas sus vertientes." },
];

/* ------------------------------------------------------------------ */
/*  Enlaces de interés                                                 */
/* ------------------------------------------------------------------ */

export const LINKS = [
  {
    name: "SEMPSPGS",
    description: "Sociedad Española de Medicina Preventiva, Salud Pública y Gestión Sanitaria",
    href: "https://www.sempspgs.es",
  },
  {
    name: "SESPAS",
    description: "Sociedad Española de Salud Pública y Administración Sanitaria",
    href: "https://sespas.es",
  },
  {
    name: "Consejería de Salud",
    description: "Región de Murcia · Dirección General de Salud Pública y Adicciones",
    href: "https://www.murciasalud.es",
  },
  {
    name: "Servicio Murciano de Salud",
    description: "Red asistencial pública de la Región de Murcia",
    href: "https://www.murciasalud.es/sms",
  },
  {
    name: "Colegio de Médicos de Murcia",
    description: "Ilustre Colegio Oficial de Médicos de la Región de Murcia",
    href: "https://www.commurcia.es",
  },
  {
    name: "Universidad de Murcia",
    description: "Máster Universitario en Salud Pública · Facultad de Medicina",
    href: "https://www.um.es",
  },
  {
    name: "Ministerio de Sanidad",
    description: "Dirección General de Salud Pública · Gobierno de España",
    href: "https://www.sanidad.gob.es",
  },
  {
    name: "ECDC",
    description: "Centro Europeo para la Prevención y el Control de las Enfermedades",
    href: "https://www.ecdc.europa.eu",
  },
];
