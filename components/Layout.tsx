import React from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";

function Layout({
  children,
}: {
  children: React.ReactNode;
}): React.ReactElement {
  return (
    <>
      <Navigation />
      <main
        className="z-0 mx-20px mb-50px min-h-75vh container mx-auto px-4 md:px-8 print:(p-0! m-0! max-w-full!)"
        id={"main"}
      >
        {children}
      </main>
      <Footer />
    </>
  );
}
export default Layout;
