import React from 'react';
import type { NextPage } from 'next';
import { useSnapshot } from 'valtio';

import IndexGrid from '@block/Index';

import { proxyDarkmode } from '@store/global/darkmode';

import { IndexGridBackground, LocalPageStyle } from './styles';

const Home: NextPage = () => {
  const { darkmode } = useSnapshot(proxyDarkmode);

  return (
    <>
      <LocalPageStyle />
      <IndexGridBackground darkmode={darkmode}>
        <IndexGrid>
          <svg width='440' height='65' viewBox='0 -60 440 65'>
            <text x='0'>P</text>
            <text x='50'>O</text>
            <text x='110'>R</text>
            <text x='160'>T</text>
            <text x='210'>F</text>
            <text x='255'>O</text>
            <text x='315'>L</text>
            <text x='360'>I</text>
            <text x='380'>O</text>
          </svg>
        </IndexGrid>
      </IndexGridBackground>
    </>
  );
};

export default Home;
