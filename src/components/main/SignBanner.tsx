// ? 간판 배너
import React, { useState, useEffect, memo } from 'react';
import { useNavigate } from 'react-router-dom';
import styled, { css } from 'styled-components';

import SignFooter from '@comp/main/SignFooter';

import { randomNumber } from '@util/common.util';

import SignBgBanner from '@image/sign_bg_banner.jpg';

import SignMainHead from './SignMainHead';

const BaseStyle = styled.div`
  position: fixed;
  width: 100%;
`;

const dimAnimation = () => css`
  animation-name: dimOpacity;
  transition: background-color 0.01s ease-out;
  @keyframes dimOpacity {
    from {
      background-color: #0000004d;
    }

    to {
      background-color: transparent;
    }
  }
`;

const DimPieceWrap = styled.div<{ isDimVisible: boolean; }>`
  position: absolute;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(5%, auto));
  gap: 0;
  > div {
    ${({ isDimVisible }) => isDimVisible && dimAnimation()};
    ${({ isDimVisible }) => (
      isDimVisible
        ? 'background-color: transparent;'
        : 'background-color: #0000004d;'
      )
    };
  }
  z-index: 2;
`;

const DimPiece = styled.div<{ idx: number; }>`
  padding: 50% 0;
  animation-duration: ${({ idx }) => idx * 0.2}s;
`;

const SignHead = styled.div`
  position: absolute;
  width: 100%;
`;

const Background = styled.div<{ source: string; }>`
  position: absolute;
  width: 100%;
  height: 100vh;
  background-image: ${({ source }) => `url(${source})`};
`;

function SignBanner() {
  const navigate = useNavigate();
  const [isDimVisible, setIsDimVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsDimVisible(true);
    }, 12000);
    setTimeout(() => {
      navigate('/blog');
    }, 14500);
  }, []);

  return (
    <>
      <BaseStyle>
        <DimPieceWrap isDimVisible={isDimVisible}>
          {Array.from(Array(100).keys()).map((idx) => (
            Array.from(Array(14).keys()).map((i) => (
              <DimPiece key={`dim-piece-${idx}-${i}`} idx={randomNumber()} />
            ))
          ))}
        </DimPieceWrap>
        <SignHead>
          <SignMainHead />
        </SignHead>
        <Background source={SignBgBanner} />
        <SignFooter />
      </BaseStyle>
    </>
  );
}

export default memo(SignBanner);
