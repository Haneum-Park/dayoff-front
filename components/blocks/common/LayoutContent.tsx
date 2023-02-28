import React, { memo } from 'react';
import styled from 'styled-components';

import Sidebar from './Sidebar';

interface LayoutContentStyleProps {}

interface LayoutContentProps extends LayoutContentStyleProps {
  children?: React.ReactNode;
}

function LayoutContent({ children }: LayoutContentProps) {
  return (
    <LayoutContentBackground>
      <LayoutContentWrap>{children}</LayoutContentWrap>
      <Sidebar />
    </LayoutContentBackground>
  );
}

export default memo(LayoutContent);

export const LayoutContentBackground = styled.div`
  background-image: url('/images/index/bg.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  height: 100vh;
`;

const LayoutContentWrap = styled.div`
  width: 100%;
  max-width: var(--content-width);
  margin: 0 auto;
`;
