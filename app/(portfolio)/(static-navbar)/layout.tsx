import React, { ReactNode } from "react";
import StaticNavbar from "app/(portfolio)/(static-navbar)/StaticNavbar";

const StaticNavbarLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <StaticNavbar />
      <main
        className="z-0 mx-20px mb-50px min-h-75vh container mx-auto px-4 md:px-8 print:(p-0! m-0! max-w-full!)"
        id={"main"}
      >
        {children}
      </main>
    </>
  );
};

export default StaticNavbarLayout;
