'use client';

import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { Global, css } from '@emotion/react';
import styled from '@emotion/styled';
import { Theme } from '@radix-ui/themes';

import useTheme, { type TypeTheme } from '@hooks/useTheme';
import Sidebar from './Sidebar';

interface LayoutContentStyleProps {}

interface LayoutContentProps extends LayoutContentStyleProps {
  children?: React.ReactNode;
}

export const globalStyles = css`
  html, body, #__next {
    max-width: 100%;
  }
`;

function LayoutContent({ children }: LayoutContentProps) {
  const pathname = usePathname();
  const [theme] = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <Theme grayColor='mauve' accentColor='grass' appearance={theme as TypeTheme}>
      <Global styles={globalStyles} />
      {theme && (
        <LayoutContentBackground theme={theme as TypeTheme}>
          {pathname.split('/').length === 3
            ? <IndexGridBackground>{children}</IndexGridBackground>
            : <LayoutContentWrap>{children}</LayoutContentWrap>
          }
          <Sidebar />
        </LayoutContentBackground>
      )}
    </Theme>
  );
}

export default LayoutContent;

type LayoutContentBackgroundProps = {
  theme?: TypeTheme;
};

const LayoutContentBackground = styled.div<LayoutContentBackgroundProps>`
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  ${({ theme }) => (theme === 'dark' ? 'background-color: var(--gray-1);' : 'background-image: url("/images/index/bg.jpg");')}
  width: 100%;
  height: 100vh;
`;

const IndexGridBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-image: initial;
  background-color: initial;
`;

const LayoutContentWrap = styled.div`
  width: 100%;
  max-width: var(--content-width);
  margin: 0 auto;
`;
