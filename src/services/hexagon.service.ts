export function hexToPixel(q: number, r: number, size: number) {
  const x = size * Math.sqrt(3) * (q + r / 2);
  const y = size * 1.5 * r;
  return { x, y };
}
export const getChunkColor = ([cx, cy]: [number, number]): string => {
  const hash = Math.abs(cx * 31 + cy * 17);

  const hue = 160 + (hash % 60);
  const saturation = 70 + (hash % 15);
  const lightness = 25 + (hash % 10);

  return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
};
