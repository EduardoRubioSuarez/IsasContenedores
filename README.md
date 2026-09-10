# Isas Contenedores | Landing Page

Landing page one-page para **Isas Contenedores**: venta, habilitación y transformación
arquitectónica de contenedores marítimos (viviendas, oficinas, módulos comerciales y bodegas).

Lenguaje visual "blueprint de contenedor" inspirado en el logotipo: esquinas rectas,
marcos de hilo dorado, esquinas recortadas a 45 grados, bandas de corrugado vertical y
líneas en perspectiva. Animaciones de aparición al hacer scroll con framer-motion.

## Stack

- **Next.js 14** (App Router) + **TypeScript**
- **Tailwind CSS 3.4**
- **framer-motion** para animaciones de entrada, parallax y contadores
- **lucide-react** para iconografía
- **next/image** con imágenes de Unsplash + el logo local

## Requisitos

- Node.js 18.17 o superior

## Puesta en marcha

```bash
npm install
npm run dev
```

Abre http://localhost:3000

```bash
npm run build   # build de producción
npm run start   # sirve el build
npm run lint    # eslint
```

## Estructura

```
public/
└── isas-contenedores-logo.png   # logo (usado en Navbar y Footer)
src/
├── app/
│   ├── layout.tsx        # fuentes, metadata, Navbar + Footer + FloatingContact
│   ├── page.tsx          # composición de secciones
│   ├── icon.svg          # favicon
│   └── globals.css       # Tailwind + sistema visual + utilidades deco + reduced-motion
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx           # barra fija con logo, nav y CTA angular
│   │   ├── Footer.tsx
│   │   └── FloatingContact.tsx  # botón WhatsApp angular (grafito + borde ocre)
│   ├── sections/
│   │   ├── Hero.tsx       # parallax + wireframe del contenedor + métricas
│   │   ├── Benefits.tsx   # ventajas vs. obra tradicional
│   │   ├── Services.tsx   # 4 tipologías detalladas (specs)
│   │   ├── Projects.tsx   # galería visual "así se ven" (4 tipos, sección chica)
│   │   ├── About.tsx      # nosotros + contadores animados
│   │   ├── FAQ.tsx        # acordeón
│   │   └── Contact.tsx    # solo datos de contacto (sin formulario) + mapa placeholder
│   └── ui/
│       ├── Button.tsx
│       ├── Icon.tsx
│       ├── Reveal.tsx             # entrada al scroll con respaldo por temporizador
│       ├── SectionHeading.tsx
│       ├── Counter.tsx            # número que cuenta de 0 al valor
│       ├── Corrugated.tsx         # banda de barras verticales animadas
│       └── BlueprintContainer.tsx # contenedor en perspectiva, líneas que se trazan
└── data/
    └── content.ts        # TODO el contenido editable del sitio
```

## Personalización

Casi todo el contenido vive en **`src/data/content.ts`**: textos, servicios, tipos de
proyecto, FAQs y datos de contacto, sin tocar los componentes.

### Antes de publicar (marcados con `TODO` en `content.ts`)

- `site.phoneDisplay` / `site.phoneHref` — teléfono real
- `site.whatsapp` — número de WhatsApp en formato internacional sin `+`
- `site.email` — correo real
- `site.addressLine` / `site.addressCity` — dirección del patio de maniobras
- `site.social` — URLs reales de redes sociales
- `about.stats` — cifras reales de la empresa
- `footer.company` — razón social y RFC reales
- `footer.legalLinks` — enlaces a aviso de privacidad y términos

### Logo

`public/isas-contenedores-logo.png` (fondo transparente, recortado a su contenido).
En el Navbar se usa a color; en el Footer se muestra en blanco con el filtro
`brightness-0 invert`. Para reemplazarlo, sustituye el archivo y ajusta
`site.logo.width` / `site.logo.height` en `content.ts` con las dimensiones nuevas.

### Imágenes

Son URLs de Unsplash (`content.ts`, helper `img()`). Sustitúyelas por fotografía propia
de proyectos entregados. Si cambias de dominio de imágenes, añade el host en
`next.config.mjs` (`images.remotePatterns`).

### Contacto

`Contact.tsx` no tiene formulario: muestra los datos de contacto y dos botones
(WhatsApp con mensaje prellenado y llamada directa), más un placeholder de mapa.
Para incrustar un mapa real, reemplaza ese bloque por un `<iframe>` de Google Maps.

### Sistema visual (globals.css)

- Esquinas rectas por defecto. Acentos angulares con `.clip-corner` / `.clip-corner-sm`.
- Texturas: `.deco-corrugated`, `.deco-corrugated-strong`, `.deco-grid`.
- Toda animación por encima de un fade respeta `prefers-reduced-motion`.

### Paleta (tailwind.config.ts)

| Token          | Hex       | Uso                                  |
| -------------- | --------- | ------------------------------------ |
| `gold-primary` | `#C49846` | Acentos, líneas, botones de acción   |
| `gold-light`   | `#D6AB57` | Hover / acento sobre fondo oscuro    |
| `gold-dark`    | `#9A7228` | Acento sobre fondo claro             |
| `dark-base`    | `#111419` | Fondo grafito, texto principal       |
| `dark-surface` | `#1A1F26` | Sección oscura de contraste          |
| `slate-muted`  | `#64748B` | Textos secundarios                   |
| `border-light` | `#E2E8F0` | Bordes finos en claro                |
| `border-line`  | `#2D3748` | Bordes finos en secciones oscuras    |
| `light-bg`     | `#F8F9FA` | Fondo base                           |

### Nota sobre el icono de WhatsApp

`lucide-react` ya no incluye iconos de marca, por eso el botón flotante usa
`MessageCircle`. Si necesitas el glifo exacto de WhatsApp, añade `react-icons`
y usa `FaWhatsapp`.
