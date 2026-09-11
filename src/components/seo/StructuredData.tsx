type JsonLd = Record<string, unknown>;

/**
 * Renderiza uno o varios bloques de datos estructurados (JSON-LD) de schema.org.
 * Es un componente de servidor: no envía JavaScript al cliente, solo un
 * <script type="application/ld+json"> que Google lee al rastrear la página.
 */
export default function StructuredData({ data }: { data: JsonLd | JsonLd[] }) {
  const blocks = Array.isArray(data) ? data : [data];

  return (
    <>
      {blocks.map((block, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(block) }}
        />
      ))}
    </>
  );
}
