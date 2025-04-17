'use client';

import React, { useEffect, useState } from 'react';
import { Global, css } from '@emotion/react';
import styled from '@emotion/styled';
import { Theme } from '@radix-ui/themes';

import usePointerFollower from '@hooks/usePointerFollower';
import useTheme, { type TypeTheme } from '@hooks/useTheme';
import Footer from './Footer';
import Header from './Header';
import PointerFollower from './PointerFollower';

interface LocaleLayoutContentStyleProps {}

interface LocaleLayoutContentProps extends LocaleLayoutContentStyleProps {
  children?: React.ReactNode;
  type?: 'hr-kit' | 'default';
}

export const globalStyles = css`
  html, body, #__next {
    max-width: 100%;
  }
`;

function LocaleLayoutContent({ children, type = 'default' }: LocaleLayoutContentProps) {
  const [theme] = useTheme();
  const [isMounted, setIsMounted] = useState(false);
  const [pointerRef, mouseFunc] = usePointerFollower();
  const { onMouseMove, onMouseDown, onMouseUp, onMouseEnter, onMouseLeave } = mouseFunc;

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <Theme grayColor='mauve' accentColor='grass' appearance={theme as TypeTheme}>
      <Global styles={globalStyles} />
      {theme && (
        <>
          <LocaleLayoutContentBg
            theme={theme as TypeTheme}
            onMouseMove={onMouseMove}
            onMouseDown={onMouseDown}
            onMouseUp={onMouseUp}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Header type={type} />
            <LocaleLayoutContentWrap type={type}>
              {children}
            </LocaleLayoutContentWrap>
            <PointerFollower pointerRef={pointerRef} />
            <Footer />
          </LocaleLayoutContentBg>
        </>
      )}
    </Theme>
  );
}

export default LocaleLayoutContent;

type LocaleLayoutContentBgProps = {
  theme?: TypeTheme;
};

const LocaleLayoutContentBg = styled.div<LocaleLayoutContentBgProps>`
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-color: var(--gray-1);
  ${({ theme }) => (theme === 'dark' ? '' : 'background-image: url("/images/index/bg.jpg");')}
  width: 100%;
  height: 100vh;
  padding: var(--space-2) var(--space-4);
  margin: 0;

  &:hover ~ .pointer-follower {
    transform: translate(-50%, -50%) scale(5);
  }
`;

// const IndexGridBackground = styled.div`
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100vh;
//   background-image: initial;
//   background-color: initial;
// `;

type LocaleLayoutContentWrapProps = {
  type?: 'hr-kit' | 'default';
}

const LocaleLayoutContentWrap = styled.div<LocaleLayoutContentWrapProps>`
  width: 100%;
  ${({ type }) => (type === 'hr-kit' ? 'max-width: var(--content-width);' : '')}
  margin: 0 auto;
  padding-top: var(--space-7);
`;
