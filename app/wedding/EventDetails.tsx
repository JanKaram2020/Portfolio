import React from "react";
import { config, configAr, coupleName } from "./config";
import { CountdownTimer } from "./Countdown";

const EventDetails = ({ lang = "en" }: { lang?: "ar" | "en" }) => {
  const { venue, weddingDay, weddingDate, weddingTime } =
    lang === "en" ? config : configAr;

  const weddingDateBrief = `${weddingDay}, ${weddingDate}`;
  return (
    <section id="coming_soon" className="coming_soon_area pt-20 pb-70">
      <CountdownTimer date={config.calendarInfo.timeStartISO} lang={lang} />
      <div className="coming_soon_shape_1" style={{ zIndex: 1 }}>
        <img src="/assets/images/shape-1.png" alt="shape" />
      </div>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-4">
            <div
              className="section_title pt-50 wow fadeIn"
              data-wow-duration="1.3s"
              data-wow-delay="0.2s"
              style={{
                visibility: "visible",
                animationDuration: "1.3s",
                animationDelay: "0.2s",
                animationName: "fadeIn",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              <h3
                className="title"
                style={{
                  textAlign: lang === "ar" ? "right" : "left",
                }}
              >
                {lang === "en" ? "Event Date:" : "التاريخ"}
              </h3>
              <p
                style={{
                  textAlign: lang === "ar" ? "right" : "left",
                }}
              >
                {weddingDateBrief}
              </p>
              <div
                style={{
                  paddingTop: "0.2rem",
                  paddingBottom: "0.2rem",
                  textAlign: lang === "ar" ? "right" : "left",
                }}
              >
                {weddingTime}
              </div>
              <img src="/assets/images/section_shape.png" alt="Shape" />
            </div>
          </div>
          <div className="col-lg-8">
            <div
              className="wow fadeIn"
              data-wow-duration="1.3s"
              data-wow-delay="0.6s"
              style={{
                visibility: "visible",
                animationDuration: "1.3s",
                animationDelay: "0.6s",
                animationName: "fadeIn",
              }}
            >
              <div className="coming_soon_count d-flex justify-content-end pt-20">
                <div
                  style={{
                    marginRight: 20,
                    width: 360,
                    height: 138,
                    backgroundColor: "transparent",
                  }}
                  className="single_count d-flex align-items-center justify-content-center mt-30"
                >
                  <div
                    className="count_content"
                    style={{ zIndex: 1, paddingTop: 20 }}
                  >
                    <a href={venue.mapUrl}>
                      <img
                        style={{ borderRadius: 5 }}
                        src="/assets/images/img.png"
                        alt="oval hotel map"
                      />
                    </a>
                    <a
                      href={venue.mapUrl}
                      style={{
                        maxWidth: "75vw",
                        overflowX: "hidden",
                        textOverflow: "ellipsis",
                        marginTop: 10,
                      }}
                    >
                      {venue.mapUrl}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="coming_soon_shape_2">
        <img src="/assets/images/shape-2.png" alt="shape" />
      </div>
      <div className="container">
        <div className="footer_widget pt-50 pb-10 text-center">
          <h4
            className={"title"}
            style={{
              marginBottom: "0",
            }}
          >
            {lang === "en" ? "With love from" : "بكل الحب من"}
          </h4>
          <div
            className="footer_title"
            style={{
              marginTop: 1,
            }}
          >
            <h3 className="title">{coupleName}</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventDetails;
