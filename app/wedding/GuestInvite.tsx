"use client";
import { useSearchParams } from "next/navigation";
import React, { CSSProperties } from "react";

const GuestInvite = ({ lang }: { lang: "ar" | "en" }) => {
  const searchParams = useSearchParams();
  const isArabic = lang === "ar";
  const isFemale = searchParams.get("gender") === "female";
  const arName = searchParams.get("arName");
  const enName = searchParams.get("name");
  const guest = isArabic && arName ? arName : enName;
  const t = (s: keyof typeof EnglishDic): string =>
    !isArabic
      ? EnglishDic[s]
      : isFemale
        ? ArabicDicFemale[s]
        : ArabicDicMale[s];
  return (
    <>
      <div
        style={{
          textAlign: "center",
          maxWidth: 400,
          margin: "auto",
          paddingBottom: 20,
        }}
      >
        {guest ? (
          isArabic ? (
            <p style={{ fontSize: "1.5rem" }}>{guest}</p>
          ) : (
            <>
              Dear{" "}
              <p style={{ fontSize: "1.5rem", textTransform: "capitalize" }}>
                {guest},
              </p>
            </>
          )
        ) : null}
      </div>
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
            textAlign: t(
              "invitationContentTextAlign",
            ) as CSSProperties["textAlign"],
          }}
        >
          <i>
            {!isArabic ? (
              <>
                {t("invitationContent")} &nbsp;
                <br />
                {t("invitationOutro")}
              </>
            ) : (
              <>
                {t("invitationContent")} ..&nbsp;
                {t("invitationOutro")}
              </>
            )}
          </i>
        </p>
      </div>
    </>
  );
};
export default GuestInvite;

const EnglishDic = {
  invitationIntro: "Thank You for Being Part of Our Story",
  invitationContent: "Our wedding was made truly special because of your presence. We are so grateful to have friends and family like you.",
  invitationContentTextAlign: "left",
  invitationOutro:
    "Cherishing every moment we shared.",
} as const;
const ArabicDicFemale = {
  invitationIntro: "شكرًا لكونك جزءًا من قصتنا",
  invitationContent: "كان يوم فرحنا مميزًا حقًا بوجودِك. نحن ممتنون جدًا لوجود صديقة وعائلة مثلك.",
  invitationContentTextAlign: "center",
  invitationOutro: "نعتز بكل لحظة شاركناها.",
} as const;
const ArabicDicMale = {
  invitationIntro: "شكرًا لكونك جزءًا من قصتنا",
  invitationContent: "كان يوم فرحنا مميزًا حقًا بوجودك. نحن ممتنون جدًا لوجود صديق وعائلة مثلك.",
  invitationContentTextAlign: "center",
  invitationOutro: "نعتز بكل لحظة شاركناها.",
} as const;
