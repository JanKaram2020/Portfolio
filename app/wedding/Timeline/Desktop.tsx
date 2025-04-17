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
    <div className="col position-relative timeline-item">
      {event.position === "top" && (
        <div
          className="position-absolute translate-middle-y bg-dark"
          style={{
            width: "2px",
            height: "50px",
            top: 0,
            left: "50%",
            transform: "translateY(-50%)",
          }}
        ></div>
      )}
      <div
        className={`bg-dark text-white rounded-circle d-flex align-items-center justify-content-center mx-auto timeline-item-year`}
        style={{ width: 64, height: 64 }}
      >
        <span>{event.year}</span>
      </div>
      {event.position === "bottom" && (
        <div
          className="position-absolute bottom-0 start-50 translate-middle-y bg-dark"
          style={{
            width: "2px",
            height: "50px",
            bottom: 0,
            left: "50%",
            transform: "translateY(50%)",
          }}
        ></div>
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
    <div className="position-relative desktop-timeline">
      <div className="row justify-content-between mb-4">
        {events.map((event) => (
          <DesktopTimelineItem event={event} variant={"top"} key={event.year} />
        ))}
      </div>

      <div className="row align-items-center text-center mb-4 timeline-container">
        {events.map((event, i) => (
          <DesktopYearItem event={event} key={event.year} />
        ))}
      </div>

      <div className="row justify-content-between mt-4">
        {events.map((event) => (
          <DesktopTimelineItem
            event={event}
            key={event.year}
            variant={"bottom"}
          />
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
  if (event.position !== variant)
    return (
      <div
        className={
          event.position === "bottom"
            ? "col text-center"
            : "col d-flex flex-col text-center"
        }
        style={
          event.position === "bottom"
            ? {}
            : {
                flexDirection: "column",
                justifyContent: "flex-end",
              }
        }
      />
    );
  return (
    <div
      className={
        event.position === "bottom"
          ? "col text-center"
          : "col d-flex flex-col text-center"
      }
      style={
        event.position === "bottom"
          ? {}
          : {
              flexDirection: "column",
              justifyContent: "flex-end",
            }
      }
    >
      <h5
        style={{
          order: event.position === "bottom" ? 1 : 2,
        }}
      >
        {event.title}
      </h5>
      <p
        className="small"
        style={{
          order: event.position === "bottom" ? 3 : 3,
        }}
      >
        {event.description}
      </p>
      <div
        className="d-flex flex-wrap justify-content-center gap-2"
        style={{
          order: event.position === "bottom" ? 2 : 1,
          marginBottom: event.position === "bottom" ? 0 : "10px",
        }}
      >
        {"loading" in event ? (
          <div
            className="d-flex flex-column justify-content-center align-items-center"
            style={{
              height: "180px",
            }}
          >
            <div
              className="spinner-border text-dark animate__animated animate__fadeInUp"
              role="status"
              style={{ width: "6rem", height: "6rem" }}
            ></div>
          </div>
        ) : (
          <ZoomImage
            Zoomed={
              <Image
                src={`/assets/wedding-images/${a2e(event.year)}.png`}
                alt={`${event.title}`}
                width={1500}
                height={1500}
                className="img-fluid shadow-sm grayscale"
              />
            }
          >
            <Image
              src={`/assets/wedding-images/${a2e(event.year)}.png`}
              alt={`${event.title}`}
              width={150}
              height={150}
              className="img-fluid border shadow-sm grayscale"
            />
          </ZoomImage>
        )}
      </div>
    </div>
  );
};
