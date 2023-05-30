import React, { memo } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
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
    <>
      <LocalPageStyle />
      <LayoutContentBackground className='fixed' darkmode={darkmode}>
        <LayoutContentWrap>{children}</LayoutContentWrap>
        <Sidebar />
      </LayoutContentBackground>
    </>
  );
}

export default memo(LayoutContent);

export const LocalPageStyle = createGlobalStyle`
  html, body, #__next {
    max-width: 100%;
  }
`;

type LayoutContentBackgroundProps = {
  darkmode: boolean;
};

export const LayoutContentBackground = styled.div<LayoutContentBackgroundProps>`
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-color: var(--color-gray-0);
  ${({ darkmode }) => (darkmode ? '' : 'background-image: url("/images/index/bg.jpg");')}
  width: 100%;
  height: 100vh;
`;

const LayoutContentWrap = styled.div`
  width: 100%;
  max-width: var(--content-width);
  margin: 0 auto;
`;
