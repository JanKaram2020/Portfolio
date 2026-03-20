import { TimelineEvents } from "./index";
import Image from "next/image";
import ZoomImage from "./ZoomImage";
import { a2e } from "lib/lang";

export const DesktopYearItem = ({
  event,
}: {
  event: TimelineEvents[number];
}) => {
  return (
    <div className="col relative flex flex-col items-center">
      {event.position === "top" && (
        <div className="w-0.5 h-16 bg-amber-200 absolute top-0 -translate-y-full" />
      )}
      <div
        className="w-16 h-16 bg-amber-600 text-white rounded-full flex items-center justify-center font-bold shadow-lg z-10 transition-transform hover:scale-110"
        style={{ fontFamily: "Poppins, sans-serif" }}
      >
        <span>{event.year}</span>
      </div>
      {event.position === "bottom" && (
        <div className="w-0.5 h-16 bg-amber-200 absolute bottom-0 translate-y-full" />
      )}
    </div>
  );
};
export default function DesktopTimeline({
  events,
}: {
  events: TimelineEvents;
}) {
  if (events.length === 0) return null;

  return (
    <div className="hidden lg:block relative py-12">
      <div className="absolute top-1/2 left-0 w-full h-0.5 bg-amber-100 -translate-y-1/2" />

      <div className="flex justify-between items-end mb-16 relative z-10">
        {events.map((event) => (
          <DesktopTimelineItem event={event} variant="top" key={event.year} />
        ))}
      </div>

      <div className="flex justify-between items-center relative z-20">
        {events.map((event) => (
          <DesktopYearItem event={event} key={event.year} />
        ))}
      </div>

      <div className="flex justify-between items-start mt-16 relative z-10">
        {events.map((event) => (
          <DesktopTimelineItem event={event} variant="bottom" key={event.year} />
        ))}
      </div>
    </div>
  );
}

const DesktopTimelineItem = ({
  event,
  variant,
}: {
  event: TimelineEvents[number];
  variant: "top" | "bottom";
}) => {
  if (event.position !== variant) return <div className="col" />;

  return (
    <div
      className={`col flex flex-col items-center gap-4 text-center animate__animated ${
        variant === "top" ? "animate__fadeInDown" : "animate__fadeInUp"
      }`}
    >
      {variant === "bottom" && (
        <h5 className="text-xl font-cursive text-dark">{event.title}</h5>
      )}

      <div className="relative group">
        <div className="absolute -inset-1 bg-gradient-to-r from-amber-200 to-amber-100 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200" />
        <div className="relative">
          <ZoomImage
            Zoomed={
              <Image
                src={`/assets/wedding-images/${a2e(event.year)}.png`}
                alt={`${event.title}`}
                width={1200}
                height={1200}
                className="rounded-xl shadow-lg"
              />
            }
          >
            <Image
              src={`/assets/wedding-images/${a2e(event.year)}.png`}
              alt={`${event.title}`}
              width={200}
              height={200}
              className="rounded-xl shadow-md border-4 border-white object-cover transition-transform group-hover:scale-105"
            />
          </ZoomImage>
        </div>
      </div>

      {variant === "top" && (
        <h5 className="text-xl font-cursive text-dark">{event.title}</h5>
      )}

      <p className="text-sm text-gray-500 leading-relaxed max-w-[200px]">
        {event.description}
      </p>
    </div>
  );
};
