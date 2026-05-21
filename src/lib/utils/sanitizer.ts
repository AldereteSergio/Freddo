export function sanitizeCoreOutput(rawContent: string): string {
  if (!rawContent) return '';
  // Purga estructurada de tags residuales (como <citation>) y cualquier otro tag HTML
  return rawContent
    .replace(/<\/?citation[^>]*>/g, '')
    .replace(/<[^>]*>?/gm, '')
    .trim();
}
