"use client";
import DesktopTimeline from "./Desktop";
import MobileTimeline from "./Mobile";

export type TimelineEvent = {
  year: string;
  title: string;
  description: string;
  position?: "top" | "bottom";
  imageRatio: number;
};

export type TimelineEvents = [
  ...TimelineEvent[],
  {
    year: string;
    title: string;
    description: string;
    position?: "top" | "bottom";
    loading: true;
  },
];

export default function CoupleTimeline({
  lang = "en",
}: {
  lang?: "en" | "ar";
}) {
  const events = lang === "en" ? EnglishEvents : ArabicEvents;

  return (
    <div
      className="coming_soon_area pt-20 pb-70"
      dir={lang === "en" ? "rtl" : "ltr"}
    >
      <div className="coming_soon_shape_1" style={{ zIndex: 1 }}>
        <img src="/assets/images/shape-1.png" alt="shape" />
      </div>
      <div className="text-center mb-5">
        <h1 className="display-4 fst-italic">
          {lang === "en" ? "Our Story" : "قصتنا"}
        </h1>
      </div>

      <MobileTimeline events={events} lang={lang} />
      <DesktopTimeline events={events} />
      <div className="coming_soon_shape_2" style={{ zIndex: 1 }}>
        <img src="/assets/images/shape-2.png" alt="shape" />
      </div>
    </div>
  );
}

const EnglishEvents: TimelineEvents = [
  {
    year: "2018",
    title: "We First Met",
    description:
      "We first got to know each other—just a spark, a glance, and something clicked.",
    position: "bottom",
    imageRatio: 2183 / 1226,
  },
  {
    year: "2019",
    title: "We Started Dating",
    description:
      "Our story truly began. Countless memories, adventures, and late-night talks.",
    position: "top",
    imageRatio: 960 / 1280,
  },
  {
    year: "2020",
    title: "We Grow Closer",
    description:
      "Through highs and extreme lows, we became stronger together and deepened our bond.",
    position: "bottom",
    imageRatio: 960 / 1280,
  },
  {
    year: "2021",
    title: "We Dreamed Together",
    description:
      "We began imagining a future together—making plans, sharing visions, and hopes.",
    position: "top",
    imageRatio: 1488 / 1984,
  },
  {
    year: "2022",
    title: "We Got Engaged",
    description: 'One big "Yes!" sealed with love and a promise for forever.',
    position: "bottom",
    imageRatio: 960 / 1280,
  },
  {
    year: "2023",
    title: "We Planned Our Future",
    description:
      "From picking out furniture to finding the perfect decor, we began turning our apartment into a space filled with love, laughter, and memories.",
    position: "top",
    imageRatio: 1488 / 1984,
  },
  {
    year: "2024",
    title: "We Had Coptic Engagement",
    description:
      "Surrounded by our loved ones, we celebrated a day that will stay in our hearts forever.",
    position: "bottom",
    imageRatio: 2602 / 1734,
  },
  {
    year: "2025",
    title: "Getting Married",
    description:
      "The day we’ve been dreaming of is finally close. A celebration of love, promises, and the beginning of our forever together.",
    position: "top",
    loading: true,
  },
];

const ArabicEvents: TimelineEvents = [
  {
    year: "٢٠١٨",
    title: "اتقابلنا",
    description: "اتقابلنا و كانت بداية قصة جميلة",
    position: "bottom",
    imageRatio: 2183 / 1226,
  },
  {
    year: "٢٠١٩",
    title: "أرتبطنا",
    description: "قصتنا ابتدت فعلًا. كلام كتير و ذكريات اكتر",
    position: "top",
    imageRatio: 960 / 1280,
  },
  {
    year: "٢٠٢٠",
    title: "قربنا",
    description:
      "عدينا على لحظات حلوة وصعبة، بس كنا دايمًا جنب بعض و قربنا اكتر.",
    position: "bottom",
    imageRatio: 960 / 1280,
  },
  {
    year: "٢٠٢١",
    title: "فكرنا",
    description: "بقينا نحكي عن المستقبل ونخطط لحياتنا مع بعض",
    position: "top",
    imageRatio: 1488 / 1984,
  },
  {
    year: "٢٠٢٢",
    title: "اتخطبنا",
    description: "بقيت چان خطيبي و بقت ليليان خطوبة في ال contacts",
    position: "bottom",
    imageRatio: 960 / 1280,
  },
  {
    year: "٢٠٢٣",
    title: "خططنا",
    description:
      "بدأنا نختار كل تفصيلة في بيتنا بحب، من أول لون الحيطة لحد أكتر ركن بنرتاح فيه",
    position: "top",
    imageRatio: 1488 / 1984,
  },
  {
    year: "٢٠٢٤",
    title: "عملنا نص الاكليل",
    description: "بقت ليليان نص اكليل و بقيت چان خطوبة رسمي",
    position: "bottom",
    imageRatio: 2602 / 1734,
  },
  {
    year: "٢٠٢٥",
    title: "فرحنا",
    description: "انه يقترب. مستنينكم",
    position: "top",
    loading: true,
  },
];
