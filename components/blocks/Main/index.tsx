import React from 'react';
import styled from 'styled-components';

import type { ProxyProfileDesc } from '@store/main/profile';
import type { ProxyRecord } from '@store/main/record';

import { MEDIA_QUERY } from '@util/design.util';

import Profile, { type ProfileProps } from './Profile';
import Record from './Record';

type MainGridProps = {
  children?: React.ReactNode;
} & ProfileProps &
  ProxyRecord['record'];

function MainGrid({ children, image, info, desc, ...record }: MainGridProps) {
  return (
    <MainGridWrap>
      <Profile image={image} info={info} desc={desc as ProxyProfileDesc[]} />
      <Record {...record} />
      {children}
    </MainGridWrap>
  );
}

export default MainGrid;

const MainGridWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  padding: 2rem 0;

  ${MEDIA_QUERY.max('lg-tablet')} {
    justify-content: flex-start;
    height: 100vh;
    padding: 1rem 0 0;
    overflow-y: auto;
  }
`;
