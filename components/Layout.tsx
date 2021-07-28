import React from 'react';
import Navigation from './Navigation';

function Layout({
  children,
}: {
  children: React.ReactNode;
}): React.ReactElement {
  return (
    <>
      <Navigation />
      {children}
    </>
  );
}
export default Layout;
