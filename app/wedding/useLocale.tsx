"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";

const useLocale = () => {
  const pathname = usePathname();

  return { isArabic: pathname.includes("/ar"), pathname };
};

export const Locale = () => {
  const { isArabic } = useLocale();
  const searchParams = useSearchParams();
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
            href={
              "/wedding" +
              (searchParams.toString().length > 0
                ? `?${searchParams.toString()}`
                : "")
            }
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
            href={
              "/wedding/ar" +
              (searchParams.toString().length > 0
                ? `?${searchParams.toString()}`
                : "")
            }
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
