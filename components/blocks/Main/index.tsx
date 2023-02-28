import React from 'react';
import styled from 'styled-components';

import Profile from '@block/Main/Profile';
import type { ProfileProps } from '@block/Main/Profile';

import type { ProxyProfileDesc } from '@store/main/profile';

type MainGridProps = {
  children?: React.ReactNode;
};

function MainGrid({ children, image, info, desc }: MainGridProps & ProfileProps) {
  return (
    <MainGridWrap>
      <Profile image={image} info={info} desc={desc as ProxyProfileDesc[]} />
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
