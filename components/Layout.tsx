import React from 'react';
import { AnimateSharedLayout } from 'framer-motion';
import Navigation from './Navigation';
import Footer from './Footer';
import { useDarkMode } from '../lib/useDarkMode';

function Layout({
  children,
}: {
  children: React.ReactNode;
}): React.ReactElement {
  useDarkMode();
  return (
    <>
      <Navigation />
      <main className="z-0 mx-20px mb-50px min-h-75vh print:m0">
        <AnimateSharedLayout>{children}</AnimateSharedLayout>
      </main>
      <Footer />
    </>
  );
}
export default Layout;
