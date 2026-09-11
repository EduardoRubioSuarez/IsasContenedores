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
  | "linkedin"
  | "users";

/* -------------------------------------------------------------------------- */
/*  Datos de la empresa                                                        */
/* -------------------------------------------------------------------------- */

export const site = {
  name: "Isas Contenedores",
  // Dominio público del sitio. Actualízalo cuando se publique en el dominio
  // definitivo: de esto dependen las URLs canónicas, el sitemap y las tarjetas
  // que se generan al compartir en redes.
  url: "https://isascontenedores.mx",
  logo: {
    src: "/isas-contenedores-logo.webp",
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
  // TODO: correo real. Mientras esté vacío no se muestra en el sitio ni en los
  // datos estructurados (mejor sin correo que con uno que rebota).
  email: "",

  addressLine: "C. Toronja 561, Indeco, Donceles 28",
  addressCity: "23070 La Paz, B.C.S., México",
  // Dirección desglosada para los datos estructurados (schema.org PostalAddress).
  address: {
    street: "C. Toronja 561, Indeco, Donceles 28",
    locality: "La Paz",
    region: "Baja California Sur",
    postalCode: "23070",
    country: "MX",
  },
  // Coordenadas del patio / showroom (las mismas que usa el mapa embebido).
  geo: { lat: 24.12674, lng: -110.319677 },
  // Zona de servicio: La Paz y toda la península de Baja California
  // (estados de Baja California Sur y Baja California).
  areaServed: [
    "La Paz",
    "Los Cabos",
    "San José del Cabo",
    "Cabo San Lucas",
    "Ciudad Constitución",
    "Loreto",
    "Baja California Sur",
    "Baja California",
  ],

  // Ubicación real (Google Maps: pin "ISAS DIGITAL", La Paz)
  mapLink: "https://maps.app.goo.gl/z27CDvrZcaFbuyVn6",
  mapEmbedSrc:
    "https://www.google.com/maps?q=24.12674,-110.319677&z=16&hl=es&output=embed",

  hours: [
    { days: "Lunes a viernes", time: "9:00 a 18:00" },
    { days: "Sábado y domingo", time: "Cerrado" },
  ],

  // TODO: redes reales. Deja la lista vacía hasta tener los perfiles; así no se
  // enlazan páginas genéricas ni en el footer ni en los datos estructurados.
  social: [] as { label: string; href: string; icon: IconName }[],
};

/* -------------------------------------------------------------------------- */
/*  SEO / metadatos                                                            */
/* -------------------------------------------------------------------------- */

export const seo = {
  /** <title> del inicio. Va con keyword + zona primero y marca al final. */
  title:
    "Casas y oficinas de contenedores en Baja California | Isas Contenedores",
  /** Meta description del inicio (~155-165 caracteres). */
  description:
    "Casas, oficinas, locales y bodegas en contenedores marítimos en La Paz y toda Baja California. Calidad de obra formal en semanas, con cálculo estructural para viento y sismo.",
  keywords: [
    "casas de contenedores",
    "casas contenedor Baja California",
    "casas contenedor La Paz",
    "casas container México",
    "oficinas de contenedores",
    "módulos comerciales de contenedor",
    "bodegas de contenedor",
    "tiny house México",
    "construcción modular",
    "arquitectura con contenedores marítimos",
    "casas contenedor Los Cabos",
  ],
  /**
   * Imagen para las tarjetas al compartir en redes / WhatsApp (Open Graph +
   * Twitter). 1200x630. Regenerable desde scripts/ si cambia la foto o el texto.
   */
  ogImage: "/og-image.jpg",
  ogImageWidth: 1200,
  ogImageHeight: 630,
  ogImageAlt:
    "Vivienda de dos contenedores marítimos apilados al atardecer, con el logotipo de Isas Contenedores",
};

export const whatsappUrl = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
  site.whatsappMessage,
)}`;

export const telUrl = `tel:${site.phoneHref}`;

/* -------------------------------------------------------------------------- */
/*  Navegación                                                                 */
/* -------------------------------------------------------------------------- */

export const navLinks = [
  { label: "Financiamiento", href: "#financiamiento" },
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
  eyebrow: "Arquitectura en contenedores marítimos · Baja California",
  title: "Espacios sin límites.",
  subtitle:
    "Transformamos contenedores marítimos en arquitectura habitable y comercial —rápida de construir, resistente y sustentable— en La Paz y toda la península de Baja California/Sur.",
  primaryCta: { label: "Ver Proyectos", href: "#proyectos" },
  secondaryCta: { label: "Cotizar por WhatsApp", href: whatsappUrl },
  image: {
    src: "/proyectos/hero.webp",
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
  cta: "Cotizar",
};

export const projectShowcase: {
  tab: string;
  icon: IconName;
  title: string;
  container: string;
  description: string;
  specs: string[];
  images: { src: string; alt: string; label: string }[];
}[] = [
  {
    tab: "Casa modular",
    icon: "home",
    title: "Casas modulares y tiny houses",
    container: "40ft o 20ft High Cube",
    description:
      "Integra recámara, cocina, baño y sala en un módulo, o combina dos o más contenedores para más amplitud. Se puede dejar preparado para crecer después.",
    specs: [
      "Aislamiento de fibra de vidrio en muros, piso y techo, con acabado en tabla roca",
      "Instalación eléctrica, hidráulica y sanitaria oculta en muros y plafón",
      "Acabados a elegir: tabla roca, madera, PVC o panel cementicio",
      "Ventanas y puertas con marco de refuerzo, sellos y remates",
    ],
    images: [
      {
        src: "/proyectos/casa-modular.webp",
        alt: "Casa modular de contenedor de 40 pies con fachada de acero corrugado verde, terraza de madera y ventanales corredizos",
        label: "Contenedor 40 pies",
      },
      {
        src: "/proyectos/casa-modular-20-pies.webp",
        alt: "Casa modular de contenedor de 20 pies con acabado gris, terraza de madera, ventanal panorámico y puerta corrediza de cristal",
        label: "Contenedor 20 pies",
      },
    ],
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
    images: [
      {
        src: "/proyectos/oficina-ejecutiva.webp",
        alt: "Interior de oficina en contenedor habilitado: escritorios, plafón con luminarias, minisplit, piso de concreto pulido y ventana amplia",
        label: "",
      },
    ],
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
    images: [
      {
        src: "/proyectos/modulo-comercial.webp",
        alt: "Cafetería en contenedor negro con pared abierta, marquesina abatible, barra de madera y bancos altos al atardecer",
        label: "",
      },
    ],
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
    images: [
      {
        src: "/proyectos/bodega-industrial.webp",
        alt: "Bodega en contenedor de 20 pies gris sobre dados de concreto, con puertas de carga abiertas mostrando estantería metálica y puerta peatonal lateral",
        label: "",
      },
    ],
  },
];

/* -------------------------------------------------------------------------- */
/*  Financiamiento (promoción)                                                 */
/* -------------------------------------------------------------------------- */

export const financing = {
  title: "FINANCIAMIENTO A 8 MESES",
  description: "Aparta tu espacio hoy y paga cómodo mientras construimos tu proyecto.",

  totalLabel: "Valor total del financiamiento",
  total: "$240,000",
  totalNote: "MXN",

  paymentsLabel: "Pago mensual de",
  paymentAmount: "$20,000",

  downPaymentLabel: "Enganche para apartar tu espacio",
  downPayment: "$80,000",

  firstPaymentNote: "El primer pago arranca el 15 de octubre de 2026.",

  highlights: [
    { icon: "zap" as IconName, text: "Sin intereses" },
    { icon: "shield" as IconName, text: "No dejas garantía: solo contrato y pagarés" },
    { icon: "home" as IconName, text: "Aplica para casa básica, almacén y oficina" },
  ],

  urgencyPrefix: "Solo",
  urgencyHighlight: "10 personas",
  urgencyNote: "No te quedes sin lugar",

  cta: { label: "Más información", href: "/Financiamiento-Isas-Contenedores.pdf" },
  pdfFileName: "Financiamiento-Isas-Contenedores.pdf",
};

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
    src: "/proyectos/oficina-ejecutiva.webp",
    alt: "Fachada de edificio modular contemporáneo de líneas rectas y acabado sobrio",
  },
  // Cifras verificables, sin inflar. Nota: la sección "Nosotros" no se renderiza
  // hoy en la landing; si se agrega, ajusta estos labels al alcance real.
  stats: [
    { prefix: "", value: 100, suffix: "%", label: "proyectos con planos ejecutivos y memoria de cálculo" },
    { prefix: "", value: 4, suffix: "", label: "tipologías: vivienda, oficina, comercio y bodega" },
    { prefix: "", value: 2, suffix: "", label: "estados de cobertura en la península" },
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
  primaryCta: { label: "Escríbenos tus dudas", href: whatsappUrl },
  secondaryCta: { label: "Llamar ahora", href: telUrl },
  location: {
    title: "Patio de maniobras y showroom",
    note: "Cobertura de proyectos en La Paz, Los Cabos y toda la península de Baja California.",
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
