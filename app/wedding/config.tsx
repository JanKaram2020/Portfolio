export const config = {
  weddingDay: "Sunday",
  weddingTime: "06:00 PM",
  weddingDate: "May 04, 2025",
  showBuiltWithInfo: false,
  showQrCode: false,
  calendarInfo: {
    timeStartISO: "2025-05-04T18:00:00+02:00",
    timeEndISO: "2025-05-04T19:00:00+02:00",
  },
  coupleInfo: {
    brideName: "Lilyanne",
    groomName: "Jan",
    coupleNameFormat: "GROOM_FIRST",
  },
  venue: {
    name: "Church of Archangel Michael",
    addressLine1: "42 Khalil ElMasry",
    addressLine2: "Mustafa Kamel,",
    city: "Alexandria",
    country: "Egypt",
    mapUrl: "https://maps.app.goo.gl/Q298pDR8yH8HMuXd8",
  },
};

export const coupleNameStr =
  config.coupleInfo.coupleNameFormat === "GROOM_FIRST"
    ? `${config.coupleInfo.groomName} & ${config.coupleInfo.brideName}`
    : `${config.coupleInfo.brideName} & ${config.coupleInfo.groomName}`;

export const coupleName =
  config.coupleInfo.coupleNameFormat === "GROOM_FIRST" ? (
    <>
      {config.coupleInfo.groomName} <span>&amp;</span>{" "}
      {config.coupleInfo.brideName}
    </>
  ) : (
    <>
      {config.coupleInfo.brideName} <span>&amp;</span>{" "}
      {config.coupleInfo.groomName}
    </>
  );
