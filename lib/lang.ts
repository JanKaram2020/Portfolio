export const e2a = (s: string) =>
  s.replace(/\d/g, (d) => `${"٠١٢٣٤٥٦٧٨٩"[+d]}`);

export const a2e = (s: string) =>
  s.replace(/[٠-٩]/g, (d) => `${"٠١٢٣٤٥٦٧٨٩".indexOf(d)}`);
