import React from 'react';
import type { NextPage } from 'next';
import { useSnapshot } from 'valtio';
import styled, { createGlobalStyle } from 'styled-components';

import IndexGrid from '@block/Index';
import { LayoutContentBackground } from '@block/common/LayoutContent';
import Sidebar from '@block/common/Sidebar';

import { proxyDarkmode } from '@store/global/darkmode';

const LocalPageStyle = createGlobalStyle`
  html, body, #__next {
    max-width: 100%;
  }
`;

const IndexGridBackground = styled(LayoutContentBackground)`
  position: absolute;
  top: 0;
  left: 0;
`;

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
        <Sidebar />
      </IndexGridBackground>
    </>
  );
};

export default Home;
