import React, { Suspense } from "react";
import Image from "next/image";
import { config, configAr, coupleName } from "./config";
import Locale from "./useLocale";

const Hero = ({ lang = "en" }: { lang?: "ar" | "en" }) => {
  const { venue } = lang === "en" ? config : configAr;

  return (
    <section className="header_area min-h-screen relative overflow-hidden flex items-center justify-center">
      <div className="single_slider bg_cover absolute inset-0 -z-1" />
      <div className="container relative z-10">
        <div className="row justify-content-center">
          <div className="col-lg-12">
            <div className="slider_content text-center animate__animated animate__fadeIn">
              <div className="flex justify-center mb-6">
                <Image
                  width={60}
                  height={60}
                  src="/assets/images/ring-svg.png"
                  alt="Wedding rings"
                  className="animate__animated animate__zoomIn"
                />
              </div>
              <h5
                className="slider_sub_title mb-4 tracking-widest uppercase text-white opacity-90"
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontSize: "1.2rem",
                }}
              >
                {lang === "en" ? "THANK YOU FOR CELEBRATING WITH US" : "شكرًا لمشاركتكم فرحتنا"}
              </h5>
              <h2
                className="slider_title mb-6 leading-tight text-white"
                style={{
                  fontSize: "clamp(3rem, 10vw, 7rem)",
                }}
              >
                {coupleName}
              </h2>
              <div
                className="location mt-6 text-white flex flex-col items-center gap-4"
                dir={lang === "en" ? "ltr" : "rtl"}
              >
                <p className="text-xl font-medium tracking-wide">
                  {lang === "en" ? (
                    <>
                      {venue.name}, {venue.city}, {venue.country}
                    </>
                  ) : (
                    <>
                      {venue.name}، {venue.city}، {venue.country}
                    </>
                  )}
                </p>
                <Suspense fallback={null}>
                  <Locale />
                </Suspense>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
