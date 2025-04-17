import React, { Suspense } from "react";
import { config, configAr } from "./config";
import GuestInvite from "./GuestInvite";

const Invitation = ({ lang = "en" }: { lang?: "ar" | "en" }) => {
  const { venue, weddingDate, weddingTime } = lang === "en" ? config : configAr;

  return (
    <section id="contact" className="contact_area">
      <div className="container">
        <div
          className="contact_wrapper wow fadeInUpBig"
          data-wow-duration="1.3s"
          data-wow-delay="0.4s"
          style={{
            paddingBottom: 30,
            boxShadow: "none",
            visibility: "visible",
            animationDuration: "1.3s",
            animationDelay: "0.4s",
            animationName: "fadeInUp",
          }}
        >
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <div className="section_title text-center pb-30">
                <Suspense fallback={null}>
                  <GuestInvite lang={lang} />
                </Suspense>
                <p className="text">
                  <a
                    href={venue.mapUrl}
                    style={{
                      borderBottom: "0.2rem solid",
                      marginBottom: 10,
                    }}
                  >
                    <b>{venue.name}</b>
                  </a>
                  <br />
                  {`${venue.addressLine1}, ${venue.addressLine2}`}
                  <br />
                  {`${venue.city}, ${venue.country}.`}
                </p>
                <p className="text" style={{ marginTop: 10 }}>
                  <b>
                    {weddingDate} - {weddingTime}
                  </b>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Invitation;
