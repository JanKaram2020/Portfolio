import GithubSlugger from "github-slugger";

export default function getHeadings(source: string) {
  const slugs = new GithubSlugger();

  // Get each line individually, and filter out anything that
  // isn't a heading.
  const headingLines = source.split("\n").filter((line) => {
    return line.match(/^###*\s/);
  });

  // Transform the string '## Some text' into an object
  // with the shape '{ text: 'Some text', level: 2 }'
  return headingLines.map((raw) => {
    const text = raw
      .replace(/^###*\s/, "")
      .replace("\\", "")
      .replace(/\{:(.*?)\}/, "")
      .replaceAll("`", "");
    // I only care about h2 and h3.
    // If I wanted more levels, I'd need to count the
    // number of #s.
    const level = raw.slice(0, 3) === "###" ? 3 : 2;

    return { text, level, id: slugs.slug(text) };
  });
}
