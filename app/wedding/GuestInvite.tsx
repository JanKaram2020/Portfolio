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
  invitationIntro: "Thank you for coming",
  invitationContent: "Our joy was complete with your presence.",
  invitationContentTextAlign: "left",
  invitationOutro:
    "We are looking forward to seeing you in your special day(s).",
} as const;
const ArabicDicFemale = {
  invitationIntro: "شرفتينا و نورتينا بوجودك",
  invitationContent: "فرحتنا كملت بوجودِك",
  invitationContentTextAlign: "center",
  invitationOutro: "شكرًا ليكي",
} as const;
const ArabicDicMale = {
  invitationIntro: "شرفتنا و نورتنا بوجودك",
  invitationContent: "فرحتنا كملت بوجودك",
  invitationContentTextAlign: "center",
  invitationOutro: "شكرًا ليك",
} as const;
