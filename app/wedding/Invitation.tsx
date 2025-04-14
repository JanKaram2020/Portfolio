import React, { Suspense } from "react";
import { config } from "./config";
import GuestInvite from "./GuestInvite";

const texts = {
  invitationIntro: "You Are Cordially Invited",
  invitationContent:
    "Our joy will be more complete with your presence in our special day.",
  invitationContentTextAlign: "left",
  invitationOutro: "We are looking forward to seeing you.",
};

const t = (s: string): string => texts[s as keyof typeof texts];

const { venue, weddingDate, weddingTime } = config;

const Invitation = () => {
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
                  <GuestInvite />
                </Suspense>
                <h3 className="title">{t("invitationIntro")}</h3>
                <div
                  style={{
                    textAlign: "left",
                    paddingTop: 20,
                    paddingBottom: 20,
                    maxWidth: 400,
                    margin: "auto",
                  }}
                >
                  <p
                    style={{
                      fontSize: "1rem",
                      lineHeight: "inherit",
                      color: "dimgrey",
                      textAlign: "left",
                    }}
                  >
                    <i>
                      {t("invitationContent")}
                      {t("invitationOutro") &&
                        !t("invitationOutro").startsWith("[missing") && (
                          <>
                            <br />
                            <br />
                            {t("invitationOutro")}
                          </>
                        )}
                    </i>
                  </p>
                </div>

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
