"""
Genera public/og-image.jpg (1200x630): la imagen que se muestra al compartir
el sitio en redes sociales y WhatsApp (Open Graph / Twitter Card).

Uso (desde la raíz del proyecto):
    pip install pillow
    python scripts/make-og-image.py

Vuelve a correrlo si cambia la foto base (public/proyectos/hero.webp),
el logotipo o el texto de abajo.
"""
from PIL import Image, ImageDraw, ImageFont

W, H = 1200, 630
DARK = (17, 20, 25)          # dark-base del sitio
GOLD = (196, 152, 70)        # gold-primary del sitio
MARGIN = 64
BOTTOM = 58

PHOTO = "public/proyectos/hero.webp"
LOGO = "public/isas-contenedores-logo.webp"
OUT = "public/og-image.jpg"
TAGLINE = "Casas y oficinas en contenedores marítimos  ·  Baja California"


def load_font(size: int) -> ImageFont.FreeTypeFont:
    for path in (
        "C:/Windows/Fonts/segoeui.ttf",
        "C:/Windows/Fonts/arial.ttf",
        "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf",
    ):
        try:
            return ImageFont.truetype(path, size)
        except OSError:
            continue
    return ImageFont.load_default()


def main() -> None:
    # Foto de fondo: cover 1200x630, encuadre sesgado hacia arriba.
    photo = Image.open(PHOTO).convert("RGB")
    scale = max(W / photo.width, H / photo.height)
    photo = photo.resize((int(photo.width * scale), int(photo.height * scale)), Image.LANCZOS)
    left = (photo.width - W) // 2
    top = int((photo.height - H) * 0.22)
    canvas = photo.crop((left, top, left + W, top + H))

    # Degradado oscuro: fuerte abajo, suave desde la izquierda.
    grad = Image.new("L", (W, H), 0)
    for y in range(H):
        vy = int(255 * max(0.0, (y - H * 0.24) / (H * 0.76)) ** 1.35)
        for x in range(W):
            vx = int(150 * max(0.0, (W * 0.5 - x) / (W * 0.5)) ** 1.6)
            grad.putpixel((x, y), min(250, max(vy, vx)))
    canvas = Image.composite(Image.new("RGB", (W, H), DARK), canvas, grad)
    draw = ImageDraw.Draw(canvas)

    # Logotipo en blanco (usa el canal alfa del original).
    logo = Image.open(LOGO).convert("RGBA")
    white = Image.new("RGBA", logo.size, (255, 255, 255, 0))
    white.putalpha(logo.split()[3])
    lw = 286
    lh = int(logo.height * lw / logo.width)
    white = white.resize((lw, lh), Image.LANCZOS)

    # Layout anclado al borde inferior.
    font = load_font(33)
    bbox = draw.textbbox((0, 0), TAGLINE, font=font)
    tag_y = H - BOTTOM - (bbox[3] - bbox[1]) - bbox[1]
    logo_y = int(tag_y - 22 - lh)
    rule_y = logo_y - 30

    draw.rectangle([MARGIN, rule_y, MARGIN + 116, rule_y + 4], fill=GOLD)
    canvas.paste(white, (MARGIN, logo_y), white)
    draw.text((MARGIN, tag_y), TAGLINE, font=font, fill=(228, 233, 240))

    canvas.convert("RGB").save(OUT, quality=87, optimize=True)
    print(f"escrito {OUT} ({W}x{H})")


if __name__ == "__main__":
    main()
