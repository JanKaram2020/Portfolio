type Enumerate<
  N extends number,
  Acc extends number[] = [],
> = Acc["length"] extends N
  ? Acc[number]
  : Enumerate<N, [...Acc, Acc["length"]]>;
type IntRange<F extends number, T extends number> = Exclude<
  Enumerate<T>,
  Enumerate<F>
>;
type month = `${0}${IntRange<1, 10>}` | `${1}${IntRange<0, 3>}`;
type year = `20${IntRange<1, 3>}${IntRange<0, 10>}`;
type date = `${month}/${year}`;
type JobType<T extends date | "Present"> = {
  title: string;
  company: string;
  time: `${date} - ${T}`;
  location: "Remote" | `${string} - ${"Remote" | "Hybrid" | "Onsite"}`;
} & (
  | {
      company: "Freelance, Self Employed";
      points?: never;
    }
  | {
      company: string;
      points: string[];
    }
);
export type JobsArray = [JobType<"Present">, ...JobType<date>[]];
