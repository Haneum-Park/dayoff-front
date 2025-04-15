'use client';

import type { NextPage } from 'next';

import Profile from '@blocks/CV/Profile';
import Record from '@blocks/CV/Record';
import { MainGridWrap } from '@blocks/CV/styled';

const Main: NextPage = () => {
  return (
    <MainGridWrap>
      <Profile />
      <Record />
    </MainGridWrap>
  );
};

export default Main;
