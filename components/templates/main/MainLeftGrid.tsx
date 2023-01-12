import React, { memo } from 'react';
import styled from 'styled-components';

import Jumbotron from '@organism/main/Jumbotron';
import Header from '@organism/Header';
import Footer from '@organism/Footer';

import type { MainGridProps } from './MainGrid';

const MainLeftGridWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: calc(64rem / 16) 0;

  @media screen and (max-width: 1600px) {
    margin: calc(32rem / 16) auto 0;
    z-index: 2;
  }
`;

function MainLeftGrid({ header, jumbotron }: Omit<MainGridProps, 'projects'>) {
  return (
    <MainLeftGridWrap>
      <Header {...header} />
      <Jumbotron {...jumbotron} />
      <Footer />
    </MainLeftGridWrap>
  );
}

export default memo(MainLeftGrid);
