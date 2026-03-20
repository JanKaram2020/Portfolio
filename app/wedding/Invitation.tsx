import React, { Suspense } from "react";
import { config, configAr } from "./config";
import GuestInvite from "./GuestInvite";

const Invitation = ({ lang = "en" }: { lang?: "ar" | "en" }) => {
  const { venue, weddingDate, weddingTime } = lang === "en" ? config : configAr;

  return (
    <section id="invitation" className="contact_area bg-white py-16">
      <div className="container mx-auto px-4">
        <div
          className="contact_wrapper max-w-4xl mx-auto rounded-2xl shadow-xl overflow-hidden animate__animated animate__fadeInUp"
          style={{
            backgroundColor: "#fff",
            border: "1px solid rgba(213, 154, 87, 0.2)",
          }}
        >
          <div className="p-8 md:p-12">
            <div className="section_title text-center">
              <Suspense fallback={null}>
                <GuestInvite lang={lang} />
              </Suspense>

              <div className="mt-12 pt-8 border-t border-gray-100 flex flex-col items-center gap-6">
                <div className="text-center">
                  <a
                    href={venue.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-2xl md:text-3xl text-dark hover:text-amber-700 transition-colors mb-4"
                    style={{
                      fontFamily: "Niconne, cursive",
                      borderBottom: "2px solid #d59a57",
                    }}
                  >
                    {venue.name}
                  </a>
                  <p className="text-gray-600 text-lg leading-relaxed mt-2">
                    {venue.addressLine1}, {venue.addressLine2}
                    <br />
                    {venue.city}, {venue.country}
                  </p>
                </div>

                <div className="bg-amber-50 px-8 py-4 rounded-full border border-amber-100">
                  <p className="text-amber-900 font-semibold tracking-wide text-lg">
                    {weddingDate} • {weddingTime}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Invitation;
