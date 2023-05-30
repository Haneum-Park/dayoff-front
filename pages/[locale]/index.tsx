import React from 'react';
import type { NextPage } from 'next';
import { useSnapshot } from 'valtio';
import styled from 'styled-components';

import { LayoutContentBackground, LocalPageStyle } from '@common/LayoutContent';
import Sidebar from '@common/Sidebar';
import IndexGrid from '@block/Index';

import { proxyDarkmode } from '@store/global/darkmode';

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
        <IndexGrid />
        <Sidebar />
      </IndexGridBackground>
    </>
  );
};

export default Home;
