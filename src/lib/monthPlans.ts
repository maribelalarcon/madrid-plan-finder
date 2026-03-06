export interface Plan {
  title: string;
  description: string;
  image: string;
  location: string;
  date?: string;
  tags: string[];
}

const MONTHS_ES = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];

const MONTHS_SLUG = [
  "enero",
  "febrero",
  "marzo",
  "abril",
  "mayo",
  "junio",
  "julio",
  "agosto",
  "septiembre",
  "octubre",
  "noviembre",
  "diciembre",
];

const FALLBACK_IMAGE = "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&auto=format&fit=crop";

const cleanMarkdownText = (value: string) =>
  value
    .replace(/\[(.*?)\]\(.*?\)/g, "$1")
    .replace(/【\d+†/g, "")
    .replace(/†[^】]*】/g, "")
    .replace(/】/g, "")
    .replace(/\*\*/g, "")
    .replace(/\s+/g, " ")
    .trim();

const looksLikeImageUrl = (url: string) =>
  /\.(?:jpg|jpeg|png|webp|avif)(?:\?|$)/i.test(url) ||
  /wp-content\/uploads/i.test(url) ||
  /offloadmedia\.feverup\.com/i.test(url);

const extractReferenceUrlMap = (content: string) => {
  const map = new Map<string, string>();
  const lines = content.split("\n");

  for (const line of lines) {
    const classicRef = line.match(/^\[(\d+)\]:\s*(https?:\/\/\S+)/);
    if (classicRef) {
      map.set(classicRef[1], classicRef[2]);
    }

    const jinaRef = line.match(/^【(\d+)†[^】]*】:\s*(https?:\/\/\S+)/);
    if (jinaRef) {
      map.set(jinaRef[1], jinaRef[2]);
    }
  }

  return map;
};

const extractImageFromBlock = (blockText: string, referenceUrls: Map<string, string>) => {
  const directUrlMatch = blockText.match(/https?:\/\/\S+/g) ?? [];
  const directImage = directUrlMatch.find((url) => looksLikeImageUrl(url));
  if (directImage) return directImage;

  const refMatches = [...blockText.matchAll(/【(\d+)†[^】]*】/g)];
  for (const match of refMatches) {
    const refUrl = referenceUrls.get(match[1]);
    if (refUrl && looksLikeImageUrl(refUrl)) {
      return refUrl;
    }
  }

  return FALLBACK_IMAGE;
};

const getTagsFromTitle = (title: string): string[] => {
  const normalized = title.toLowerCase();
  const tags: string[] = [];

  if (normalized.includes("festival")) tags.push("Festival");
  if (normalized.includes("concierto") || normalized.includes("candlelight")) tags.push("Música");
  if (normalized.includes("feria")) tags.push("Feria");
  if (normalized.includes("fórmula") || normalized.includes("formula")) tags.push("Deporte");
  if (normalized.includes("teatro") || normalized.includes("teatralia")) tags.push("Teatro");

  if (tags.length === 0) tags.push("Plan");
  tags.push("Madrid");
  return tags.slice(0, 3);
};

export const getMonthInfoWithOffset = (offset = 0, date = new Date()) => {
  const monthIndex = (date.getMonth() + offset + 12) % 12;
  return {
    monthName: MONTHS_ES[monthIndex],
    monthSlug: MONTHS_SLUG[monthIndex],
  };
};

export const getCurrentMonthInfo = (date = new Date()) => getMonthInfoWithOffset(0, date);

export const fetchMonthPlansFromMadridSecreto = async (monthSlug: string, limit = 6): Promise<Plan[]> => {
  const monthPathOverrides: Record<string, string> = {
    abril: "planes-abril/",
  };
  const articlePath = monthPathOverrides[monthSlug] ?? `planes-${monthSlug}-madrid/`;
  const articleUrl = `https://madridsecreto.co/${articlePath}`;
  const proxyUrl = `https://r.jina.ai/http://${articleUrl.replace(/^https?:\/\//, "")}`;
  const response = await fetch(proxyUrl);

  if (!response.ok) {
    throw new Error(`No se pudo cargar el contenido mensual (${response.status})`);
  }

  const content = await response.text();
  const lines = content.split("\n");
  const referenceUrls = extractReferenceUrlMap(content);
  const sections: Plan[] = [];

  for (let index = 0; index < lines.length; index += 1) {
    const headingLine = lines[index].trim();
    if (!headingLine.startsWith("## ")) continue;

    const rawTitle = headingLine.replace(/^##\s+/, "");
    const title = cleanMarkdownText(rawTitle);

    if (!title || title.toLowerCase().includes("cosas increíbles")) continue;

    const block = lines.slice(index + 1, index + 14).map((line) => line.trim()).filter(Boolean);
    const dateLine = block.find((line) => /\d{1,2}\s+de\s+\w+/.test(line) || /20\d{2}/.test(line));
    const locationLine = block.find((line) =>
      /madrid|ubicaciones|teatro|hip[oó]dromo|jarama|matadero|casa encendida|museo|centro/i.test(line),
    );
    const descriptionLine = block.find(
      (line) =>
        !line.startsWith("Desde ") &&
        !line.includes("Guardar") &&
        !line.startsWith(">") &&
        !line.startsWith("Leer más") &&
        line.length > 70,
    );

    const image = extractImageFromBlock(block.join(" "), referenceUrls);

    if (!descriptionLine) continue;

    sections.push({
      title,
      description: cleanMarkdownText(descriptionLine),
      image,
      location: locationLine ? cleanMarkdownText(locationLine) : "Madrid",
      date: dateLine ? cleanMarkdownText(dateLine) : undefined,
      tags: getTagsFromTitle(title),
    });

    if (sections.length >= limit) break;
  }

  return sections;
};
