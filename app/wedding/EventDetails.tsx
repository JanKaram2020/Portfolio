import React from "react";
import { config, configAr, coupleName } from "./config";
import Image from "next/image";

const EventDetails = ({ lang = "en" }: { lang?: "ar" | "en" }) => {
  const { venue, weddingDay, weddingDate, weddingTime } =
    lang === "en" ? config : configAr;

  const weddingDateBrief = `${weddingDay}, ${weddingDate}`;
  return (
    <section
      id="location"
      className="coming_soon_area py-20 relative bg-amber-50/30"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="w-full lg:w-1/3 animate__animated animate__fadeInLeft">
            <div
              className="section_title flex flex-col items-start gap-4"
              dir={lang === "en" ? "ltr" : "rtl"}
            >
              <h3 className="text-4xl text-amber-600 font-cursive italic">
                {lang === "en" ? "The Celebration" : "الاحتفال"}
              </h3>
              <div className="flex flex-col gap-1 text-xl text-gray-700 font-medium">
                <p>{weddingDateBrief}</p>
                <p>{weddingTime}</p>
              </div>
              <Image
                width={120}
                height={20}
                src="/assets/images/section_shape.png"
                alt="Decoration"
                className="opacity-50"
              />
            </div>
          </div>

          <div className="w-full lg:w-2/3 animate__animated animate__fadeInRight">
            <div className="bg-white p-6 rounded-3xl shadow-lg border border-amber-100 flex flex-col items-center gap-6">
              <a
                href={venue.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block overflow-hidden rounded-2xl w-full"
              >
                <Image
                  width={800}
                  height={300}
                  src="/assets/images/img.png"
                  alt="Venue location map"
                  className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-amber-900/10 group-hover:bg-transparent transition-colors duration-300" />
              </a>
              <a
                href={venue.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-700 hover:text-amber-900 font-medium break-all text-center px-4"
              >
                {venue.mapUrl}
              </a>
            </div>
          </div>
        </div>

        <div className="mt-24 text-center animate__animated animate__fadeInUp">
          <div className="inline-block relative">
            <span className="block text-xl text-gray-500 mb-2 font-cursive">
              {lang === "en" ? "With love from" : "بكل الحب من"}
            </span>
            <div className="text-5xl md:text-6xl text-dark hover:scale-105 transition-transform cursor-default">
              {coupleName}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 -z-1 opacity-20 transform -translate-y-8">
        <Image
          width={200}
          height={200}
          src="/assets/images/shape-1.png"
          alt="Decorative shape"
        />
      </div>
      <div className="absolute top-0 right-0 -z-1 opacity-20 transform translate-y-8">
        <Image
          width={200}
          height={200}
          src="/assets/images/shape-2.png"
          alt="Decorative shape"
        />
      </div>
    </section>
  );
};

export default EventDetails;
