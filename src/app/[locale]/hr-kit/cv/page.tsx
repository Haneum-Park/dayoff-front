'use client';

import { useSearchParams } from 'next/navigation';

import Profile from '@blocks/CV/Profile';
import Record from '@blocks/CV/Record';
import { MainGridWrap } from '@blocks/CV/styled';

const Main = () => {
  const searchParams = useSearchParams();

  return (
    <MainGridWrap>
      <Profile target={searchParams.get('target') as 'haneum'} />
      <Record target={searchParams.get('target') as 'haneum'} />
    </MainGridWrap>
  );
};

export default Main;
