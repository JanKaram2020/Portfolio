export default function readingDuration(
  text: string,
  wordsPerMinute = 200,
): string {
  const words = text.split(/\s+/).length;
  const readingTime = Math.ceil(words / wordsPerMinute);

  return `${readingTime} min read`;
}
