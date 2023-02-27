import React from 'react';

import Header from '@block/Header';
import Footer from '@block/Footer';

import LogoHanumi from '@image/logos/logo_HANUMI.png';

type MainGridProps = {
  children?: React.ReactNode;
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
