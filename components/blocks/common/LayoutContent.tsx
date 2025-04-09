'use client';

import React, { memo } from 'react';
import styled from '@emotion/styled';
import { Global, css } from '@emotion/react';
import { useAtomValue } from 'jotai';
import { Theme } from '@radix-ui/themes';

import { atomDarkmode } from '@stores/global/darkmode';
import Sidebar from './Sidebar';

interface LayoutContentStyleProps {}

interface LayoutContentProps extends LayoutContentStyleProps {
  children?: React.ReactNode;
  index?: boolean;
}

export const globalStyles = css`
  html, body, #__next {
    max-width: 100%;
  }
`;

function LayoutContent({ children, index = false }: LayoutContentProps) {
  const darkmode = useAtomValue(atomDarkmode);

  return (
    <Theme grayColor='mauve' accentColor='grass' appearance={darkmode ? 'dark' : 'light'}>
      <Global styles={globalStyles} />
      <LayoutContentBackground className='fixed' darkmode={darkmode}>
        {index
          ? <IndexGridBackground>{children}</IndexGridBackground>
          : <LayoutContentWrap>{children}</LayoutContentWrap>
        }
        <Sidebar />
      </LayoutContentBackground>
    </Theme>
  );
}

export default memo(LayoutContent);

type LayoutContentBackgroundProps = {
  darkmode?: boolean;
};

const LayoutContentBackground = styled.div<LayoutContentBackgroundProps>`
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  ${({ darkmode }) => (darkmode ? `background-color: var(--gray-1);` : 'background-image: url("/images/index/bg.jpg");')}
  width: 100%;
  height: 100vh;
`;

const IndexGridBackground = styled(LayoutContentBackground)`
  position: absolute;
  top: 0;
  left: 0;
  background-image: initial;
  background-color: initial;
`;

const LayoutContentWrap = styled.div`
  width: 100%;
  max-width: var(--content-width);
  margin: 0 auto;
`;
