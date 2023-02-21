import React from 'react';

import Header from '@organism/Header';
import Footer from '@organism/Footer';

import LogoHanumi from '@image/logos/logo_HANUMI.png';

type MainGridProps = {
  children: React.ReactNode;
};

function MainGrid({ children }: MainGridProps) {
  return (
    <>
      <Header
        img={{
          src: LogoHanumi,
          alt: 'LOGO HANUMI',
        }}
      />
      {children}
      <Footer />
    </>
  );
}

export default MainGrid;
