"use client";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";

const useLocale = () => {
  const pathname = usePathname();

  return pathname.includes("/ar");
};

export const Locale = () => {
  const isArabic = useLocale();
  return (
    <div>
      {isArabic ? (
        <p
          style={{
            color: "white",
            direction: "ltr",
            fontSize: "16px",
          }}
        >
          For English click{" "}
          <Link
            style={{
              color: "white",
              fontFamily: "niconne,cursive",
              textDecoration: "underline",
            }}
            href={"/wedding"}
          >
            Here
          </Link>
        </p>
      ) : (
        <p
          dir={"rtl"}
          style={{
            direction: "rtl",
            color: "white",
            fontSize: "16px",
          }}
        >
          الدعوة متوفرة{" "}
          <Link
            className={"hover-underline-black"}
            href="/wedding/ar"
            style={{
              color: "white",
              textDecoration: "underline",
            }}
          >
            بالعربي هنا
          </Link>
        </p>
      )}
    </div>
  );
};

export default Locale;
