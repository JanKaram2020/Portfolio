"use client";
import { useSearchParams } from "next/navigation";
import React, { CSSProperties } from "react";

const GuestInvite = ({ lang }: { lang: "ar" | "en" }) => {
  const searchParams = useSearchParams();
  const isArabic = lang === "ar";
  const guest = searchParams.get("name");
  const isFemale = searchParams.get("gender") === "female";
  const t = (s: keyof typeof EnglishDic): string =>
    lang === "en"
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
            {lang === "en" ? (
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
  invitationIntro: "You Are Cordially Invited",
  invitationContent:
    "Our joy will be more complete with your presence in our special day.",
  invitationContentTextAlign: "left",
  invitationOutro: "We are looking forward to seeing you.",
} as const;
const ArabicDicFemale = {
  invitationIntro: "نتشرف بدعوتِك لحضور الاكليل",
  invitationContent: "فرحتنا هتكمل بوجودِك",
  invitationContentTextAlign: "center",
  invitationOutro: "هنستناكي",
} as const;
const ArabicDicMale = {
  invitationIntro: "نتشرف بدعوتك لحضور الاكليل",
  invitationContent: "فرحتنا هتكمل بوجودك",
  invitationContentTextAlign: "center",
  invitationOutro: "هنستناك",
} as const;
