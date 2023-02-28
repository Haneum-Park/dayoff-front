import React, { memo } from 'react';
import styled from 'styled-components';
import { useSnapshot } from 'valtio';

import { proxyDarkmode } from '@store/global/darkmode';

import Sidebar from './Sidebar';

interface LayoutContentStyleProps {}

interface LayoutContentProps extends LayoutContentStyleProps {
  children?: React.ReactNode;
}

function LayoutContent({ children }: LayoutContentProps) {
  const { darkmode } = useSnapshot(proxyDarkmode);

  return (
    <LayoutContentBackground darkmode={darkmode}>
      <LayoutContentWrap>{children}</LayoutContentWrap>
      <Sidebar />
    </LayoutContentBackground>
  );
}

export default memo(LayoutContent);

type LayoutContentBackgroundProps = {
  darkmode: boolean;
};

export const LayoutContentBackground = styled.div<LayoutContentBackgroundProps>`
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  ${({ darkmode }) =>
    darkmode
      ? 'background-color: var(--color-gray-9);'
      : 'background-image: url("/images/index/bg.jpg");'}
  width: 100%;
  height: 100vh;
`;

const LayoutContentWrap = styled.div`
  width: 100%;
  max-width: var(--content-width);
  margin: 0 auto;
`;
