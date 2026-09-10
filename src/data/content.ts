/**
 * Contenido centralizado de la landing de Isas Contenedores.
 *
 * Todo lo que aparece en el sitio (textos, servicios, tipos de proyecto,
 * FAQs y datos de contacto) vive aquí para que el equipo lo edite sin
 * tocar los componentes.
 *
 * Los valores marcados con TODO son placeholders: reemplázalos por la
 * información real antes de publicar.
 */

export type IconName =
  | "zap"
  | "leaf"
  | "shield"
  | "truck"
  | "timer"
  | "thermometer"
  | "mapPin"
  | "home"
  | "briefcase"
  | "store"
  | "warehouse"
  | "phone"
  | "mail"
  | "clock"
  | "instagram"
  | "facebook"
  | "linkedin";

/* -------------------------------------------------------------------------- */
/*  Helpers                                                                    */
/* -------------------------------------------------------------------------- */

/** Construye una URL de Unsplash con parámetros de optimización. */
const img = (id: string, w = 1400): string =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;

/* -------------------------------------------------------------------------- */
/*  Datos de la empresa                                                        */
/* -------------------------------------------------------------------------- */

export const site = {
  name: "Isas Contenedores",
  logo: {
    src: "/isas-contenedores-logo.png",
    alt: "Isas Contenedores",
    width: 819,
    height: 350,
  },
  description:
    "Venta, habilitación y transformación arquitectónica de contenedores marítimos: viviendas de diseño, oficinas ejecutivas, módulos comerciales y bodegas industriales.",

  phoneDisplay: "+52 612 117 7002",
  phoneHref: "+526121177002",
  // TODO: confirmar que este número recibe WhatsApp (se asume el mismo teléfono)
  whatsapp: "526121177002", // formato internacional, sin "+" ni espacios
  whatsappMessage:
    "Hola, vengo del sitio web y quiero cotizar un proyecto con contenedores.",
  email: "contacto@isascontenedores.mx", // TODO: correo real
  addressLine: "C. Toronja 561, Indeco, Donceles 28",
  addressCity: "23070 La Paz, B.C.S., México",

  // Ubicación real (Google Maps: pin "ISAS DIGITAL", La Paz)
  mapLink: "https://maps.app.goo.gl/z27CDvrZcaFbuyVn6",
  mapEmbedSrc:
    "https://www.google.com/maps?q=24.12674,-110.319677&z=16&hl=es&output=embed",

  hours: [
    { days: "Lunes a viernes", time: "9:00 a 18:00" },
    { days: "Sábado y domingo", time: "Cerrado" },
  ],

  social: [
    { label: "Instagram", href: "https://instagram.com", icon: "instagram" as IconName },
    { label: "Facebook", href: "https://facebook.com", icon: "facebook" as IconName },
    { label: "LinkedIn", href: "https://linkedin.com", icon: "linkedin" as IconName },
  ],
};

export const whatsappUrl = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
  site.whatsappMessage,
)}`;

export const telUrl = `tel:${site.phoneHref}`;

/* -------------------------------------------------------------------------- */
/*  Navegación                                                                 */
/* -------------------------------------------------------------------------- */

export const navLinks = [
  { label: "Ventajas", href: "#ventajas" },
  { label: "Servicios", href: "#servicios" },
  { label: "FAQ", href: "#faq" },
  { label: "Contacto", href: "#contacto" },
];

export const navCta = { label: "Cotizar Proyecto", href: "#contacto" };

/* -------------------------------------------------------------------------- */
/*  Hero                                                                       */
/* -------------------------------------------------------------------------- */

export const hero = {
  title: "Espacios sin límites.",
  subtitle:
    "Transformamos contenedores marítimos en arquitectura habitable y comercial: rápida de construir, resistente y sustentable.",
  primaryCta: { label: "Ver Proyectos", href: "#proyectos" },
  secondaryCta: { label: "Cotizar por WhatsApp", href: whatsappUrl },
  image: {
    src: "/proyectos/hero.png",
    alt: "Vivienda de dos contenedores marítimos apilados con ventanales de piso a techo, terraza de madera y vista al mar al atardecer",
  },
};

/* -------------------------------------------------------------------------- */
/*  Ventajas modulares (vs. obra tradicional)                                  */
/* -------------------------------------------------------------------------- */

export const benefitsSection = {
  eyebrow: "Modular vs. tradicional",
  title: "La misma calidad de obra, otra relación con el tiempo",
  description:
    "Estructura certificable y acabados de construcción formal, sin sus plazos, su residuo ni su dependencia del terreno.",
};

export const benefits: {
  icon: IconName;
  title: string;
  description: string;
  metric: string;
}[] = [
  {
    icon: "zap",
    title: "Rapidez de instalación",
    description:
      "Gran parte del trabajo ocurre en taller mientras preparas el terreno: cortes, refuerzos, aislamiento, muros e instalaciones. En sitio quedan la cimentación, la colocación y las conexiones finales.",
    metric: "Semanas, no meses",
  },
  {
    icon: "leaf",
    title: "Huella de carbono reducida",
    description:
      "Reutilizamos una estructura de acero que ya existe y usamos mucho menos concreto. Menos residuo de obra y menos consumo de agua.",
    metric: "Menos concreto y residuo",
  },
  {
    icon: "shield",
    title: "Estructura calculada para viento y sismo",
    description:
      "El contenedor es una estructura de acero ISO hecha para apilarse y resistir transporte. En cuanto se hacen cortes o se suben niveles, cada proyecto se recalcula con refuerzos, anclajes y cimentación.",
    metric: "Con cálculo estructural",
  },
  {
    icon: "truck",
    title: "Movilidad y reubicación",
    description:
      "Si se prevé desde el diseño, un módulo puede desconectarse de servicios, izarse y reinstalarse en otro predio. La obra fija no se mueve.",
    metric: "Reubicable",
  },
];

/* -------------------------------------------------------------------------- */
/*  Servicios / Tipos de proyecto (sección con pestañas)                       */
/* -------------------------------------------------------------------------- */

export const showcaseSection = {
  title: "Un contenedor, muchas formas de habitarlo",
  description:
    "Elige una tipología y mira cómo se ve, qué contenedor usa y qué incluye. El proyecto final se adapta a tu terreno y a tu marca.",
  cta: "Cotizar este tipo",
};

export const projectShowcase: {
  tab: string;
  icon: IconName;
  title: string;
  container: string;
  description: string;
  specs: string[];
  image: string;
  alt: string;
}[] = [
  {
    tab: "Casa modular",
    icon: "home",
    title: "Casas modulares y tiny houses",
    container: "40ft High Cube",
    description:
      "Integra recámara, cocina, baño y sala en un módulo, o combina dos o más contenedores para más amplitud. Se puede dejar preparado para crecer después.",
    specs: [
      "Aislamiento de fibra de vidrio en muros, piso y techo, con acabado en tabla roca",
      "Instalación eléctrica, hidráulica y sanitaria oculta en muros y plafón",
      "Acabados a elegir: tabla roca, madera, PVC o panel cementicio",
      "Ventanas y puertas con marco de refuerzo, sellos y remates",
    ],
    image: "/proyectos/casa-modular.png",
    alt: "Casa modular de contenedor de 40 pies con fachada de acero corrugado verde, terraza de madera y ventanales corredizos",
  },
  {
    tab: "Oficina ejecutiva",
    icon: "briefcase",
    title: "Oficinas ejecutivas y casetas de supervisión",
    container: "40ft High Cube",
    description:
      "Espacios de trabajo climatizados para obra, corporativo o punto de venta. El aislamiento es clave para reducir la ganancia de calor del acero.",
    specs: [
      "Aislamiento de fibra de vidrio con acabado en tabla roca",
      "Centro de carga, contactos, iluminación, red de datos y preparación para minisplit",
      "Plafón para ocultar instalaciones y alojar iluminación",
      "Puerta de seguridad y ventanas con marco reforzado",
    ],
    image: "/proyectos/oficina-ejecutiva.png",
    alt: "Interior de oficina en contenedor habilitado: escritorios, plafón con luminarias, minisplit, piso de concreto pulido y ventana amplia",
  },
  {
    tab: "Módulo comercial",
    icon: "store",
    title: "Módulos comerciales: cafeterías, bares y showrooms",
    container: "2x 20ft High Cube",
    description:
      "Locales para food service y retail. El diseño parte del equipo real que se instalará y de los requisitos sanitarios, de gas y contra incendio del giro.",
    specs: [
      "Ventanilla de servicio con marco reforzado y cubierta exterior",
      "Agua potable, drenaje, ventilación sanitaria y extracción de grasa",
      "Instalación eléctrica y de gas dimensionada para el equipo de cocina",
      "Superficies lavables, piso antiderrapante y manejo de residuos",
    ],
    image: "/proyectos/modulo-comercial.png",
    alt: "Cafetería en contenedor negro con pared abierta, marquesina abatible, barra de madera y bancos altos al atardecer",
  },
  {
    tab: "Bodega industrial",
    icon: "warehouse",
    title: "Bodegas y almacenes de seguridad",
    container: "20ft High Cube",
    description:
      "Resguardo de herramienta, inventario y equipo en predios sin construcción. El nivel de aislamiento depende de lo que se vaya a almacenar.",
    specs: [
      "Envolvente de acero; puertas originales conservables para carga",
      "Ventilación natural o mecánica y control de humedad y condensación",
      "Acabado industrial o aislamiento según lo almacenado",
      "Refuerzo de piso para estantería pesada o carga concentrada",
    ],
    image: "/proyectos/bodega-industrial.png",
    alt: "Bodega en contenedor de 20 pies gris sobre dados de concreto, con puertas de carga abiertas mostrando estantería metálica y puerta peatonal lateral",
  },
];

/* -------------------------------------------------------------------------- */
/*  Nosotros                                                                   */
/* -------------------------------------------------------------------------- */

export const about = {
  eyebrow: "Nosotros",
  title: "Estándar de obra, en una fracción del tiempo",
  paragraphs: [
    "Isas Contenedores diseña, habilita y transforma contenedores marítimos en espacios que se sienten y funcionan como construcción tradicional, sin sus plazos ni su desperdicio.",
    "Cada proyecto se desarrolla con planos ejecutivos, materiales certificables y equipo propio de estructura, aislamiento e instalaciones. Nada se subcontrata a ciegas.",
  ],
  points: [
    "Proyecto ejecutivo y memoria de cálculo estructural",
    "Garantía escrita en estructura, impermeabilización e instalaciones",
    "Acompañamiento en permisos y trámites municipales",
    "Diseño 100% personalizado, sin catálogo rígido",
  ],
  image: {
    src: img("1486406146926-c627a92ad1ab", 1200),
    alt: "Fachada de edificio modular contemporáneo de líneas rectas y acabado sobrio",
  },
  // TODO: ajustar a cifras reales de la empresa
  stats: [
    { prefix: "+", value: 120, suffix: "", label: "módulos entregados" },
    { prefix: "", value: 9, suffix: " años", label: "habilitando contenedores" },
    { prefix: "", value: 100, suffix: "%", label: "proyectos con planos ejecutivos" },
  ],
};

/* -------------------------------------------------------------------------- */
/*  Preguntas frecuentes                                                       */
/* -------------------------------------------------------------------------- */

export const faqSection = {
  eyebrow: "Antes de arrancar",
  title: "Preguntas frecuentes",
  description:
    "Reunimos las dudas más comunes sobre estructura, permisos, aislamiento y tiempos de entrega. Si tu pregunta no está en la lista, escríbenos y te respondemos sin compromiso.",
};

export const faqs: { question: string; answer: string }[] = [
  {
    question: "¿Cómo aíslan el contenedor?",
    answer:
      "Nuestro sistema base es estructura interior con fibra de vidrio y acabado en panel de yeso o tabla roca. El acero transmite el calor muy rápido; un aislamiento bien instalado mejora el confort, baja la carga del aire acondicionado y ayuda con el ruido. El espesor se ajusta al clima y al uso.",
  },
  {
    question: "¿Necesito permiso para instalar un contenedor modificado?",
    answer:
      "Puede requerirse licencia de construcción, uso de suelo, protección civil u otras autorizaciones según el municipio, el uso y si la instalación será temporal o permanente. Se verifica con la autoridad local antes de ejecutar; te entregamos los planos para el trámite.",
  },
  {
    question: "¿Necesita cimentación?",
    answer:
      "Para una instalación permanente, sí. Puede resolverse con dados, zapatas, losa o pilotes según el suelo, las cargas, el viento y el sismo. Los puntos de apoyo deben quedar nivelados para evitar torsiones del módulo y problemas en las puertas.",
  },
  {
    question: "¿Se pueden unir varios contenedores o abrir ventanales grandes?",
    answer:
      "Sí. Se pueden colocar contenedores lado a lado y abrir parcialmente sus paredes para lograr espacios más amplios, y también instalar puertas corredizas y ventanales. Como la lámina corrugada aporta rigidez, cada apertura grande se diseña con un marco de refuerzo de acero.",
  },
  {
    question: "¿Lo entregan terminado? ¿Qué incluye la cotización?",
    answer:
      "Podemos entregar desde una modificación básica hasta un módulo completamente terminado. Gran parte del trabajo se hace en taller (cortes, refuerzos, pintura, aislamiento, muros, instalaciones y acabados); en sitio quedan la cimentación, la colocación, las uniones y las conexiones finales. La cotización especifica qué incluye y qué no: unidad, estructura, aislamiento, tabla roca, pintura, instalaciones, ventanas, puertas, transporte, grúa y trabajos en sitio.",
  },
  {
    question: "¿Se oxida? ¿Qué mantenimiento lleva?",
    answer:
      "Es una estructura de acero, así que requiere protección anticorrosiva y mantenimiento, sobre todo en zonas costeras. Conviene inspeccionar de forma periódica el techo, los sellos de puertas y ventanas, las soldaduras, la pintura, las juntas entre módulos y los anclajes, y reparar de inmediato cualquier punto de óxido.",
  },
];

/* -------------------------------------------------------------------------- */
/*  Contacto (solo datos, sin formulario)                                      */
/* -------------------------------------------------------------------------- */

export const contactSection = {
  eyebrow: "Contacto",
  title: "Hablemos de tu proyecto",
  description:
    "Escríbenos por WhatsApp o llámanos. Te respondemos con una propuesta de precio cerrado y tiempo de entrega estimado.",
  primaryCta: { label: "Escribir por WhatsApp", href: whatsappUrl },
  secondaryCta: { label: "Llamar ahora", href: telUrl },
  location: {
    title: "Patio de maniobras y showroom",
    note: "",
  },
};

/* -------------------------------------------------------------------------- */
/*  Footer                                                                     */
/* -------------------------------------------------------------------------- */

export const footer = {
  tagline:
    "Arquitectura modular en acero: viviendas, oficinas, comercios y bodegas a partir de contenedores marítimos.",
  legalLinks: [
    { label: "Aviso de privacidad", href: "#" },
    { label: "Términos y condiciones", href: "#" },
  ],
  credits: "Sitio diseñado y desarrollado a la medida.",
};
