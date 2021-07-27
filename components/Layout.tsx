import React from 'react';
import Navigation from './Navigation';

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navigation />
      {children}
    </>
  );
}
export default Layout;
