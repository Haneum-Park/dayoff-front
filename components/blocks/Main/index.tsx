import React from 'react';
import styled from 'styled-components';

import type { ProxyProfileDesc } from '@store/main/profile';

import Profile from './Profile';
import type { ProfileProps } from './Profile';
import Record from './Record';

type MainGridProps = {
  children?: React.ReactNode;
};

function MainGrid({ children, image, info, desc }: MainGridProps & ProfileProps) {
  return (
    <MainGridWrap>
      <Profile image={image} info={info} desc={desc as ProxyProfileDesc[]} />
      <Record />
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
`;
