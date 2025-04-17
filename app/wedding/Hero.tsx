import React, { Suspense } from "react";
import { config, configAr, coupleName } from "./config";
import Locale from "./useLocale";

const Hero = ({ lang = "en" }: { lang?: "ar" | "en" }) => {
  const { venue } = lang === "en" ? config : configAr;

  return (
    <section className="header_area">
      <div id="home" className="header_slider">
        <div className="slick-list draggable">
          <div className="slick-track" style={{ opacity: 1 }}>
            <div
              className="single_slider bg_cover d-flex align-items-center"
              style={{
                height: "100vh",
              }}
            >
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-12">
                    <div
                      className="slider_content text-center"
                      style={{ paddingTop: 0 }}
                    >
                      <img
                        style={{ maxHeight: 60, margin: 25, marginTop: 0 }}
                        src="/assets/images/ring-svg.png"
                        alt="logo"
                      />
                      <h5
                        className="slider_sub_title"
                        data-animation="fadeInUp"
                        data-delay="0.2s"
                        style={{ animationDelay: "0.2s", textAlign: "center" }}
                      >
                        WE ARE GETTING MARRIED
                      </h5>
                      <h2
                        className="slider_title"
                        data-animation="fadeInUp"
                        data-delay="0.7s"
                        style={{ animationDelay: "0.7s", textAlign: "center" }}
                      >
                        {coupleName}
                      </h2>
                      <span
                        className="location"
                        data-animation="fadeInUp"
                        data-delay="1s"
                        style={{ animationDelay: "1s" }}
                        dir={lang === "en" ? "rtl" : "ltr"}
                      >
                        {lang === "en" ? (
                          <>
                            {venue.name}, {venue.city}, {venue.country}.
                          </>
                        ) : (
                          <>
                            {venue.name} ، {venue.city}
                          </>
                        )}
                        <Suspense fallback={null}>
                          <Locale />
                        </Suspense>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
