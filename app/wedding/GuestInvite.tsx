"use client";
import { useSearchParams } from "next/navigation";
import React from "react";

const GuestInvite = () => {
  const searchParams = useSearchParams();

  const guest = searchParams.get("name");

  if (guest)
    return (
      <div
        style={{
          textAlign: "center",
          maxWidth: 400,
          margin: "auto",
          paddingBottom: 20,
        }}
      >
        Dear <p style={{ fontSize: "1.5rem" }}>{guest},</p>
      </div>
    );
  return null;
};
export default GuestInvite;
