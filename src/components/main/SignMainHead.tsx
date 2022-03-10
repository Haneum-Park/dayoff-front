import React, { memo } from 'react';
import styled from 'styled-components';

import SignMainSupHead from '@comp/main/SignMainSupHead';
import SignMainSubHead from '@comp/main/SignMainSubHead';
import SignSubHead from '@comp/main/SignSubHead';

import { colorchip, pixelToRem } from '@util/style.util';

const SignMainHeadBox = styled.div`
  position: relative;
  height: 100vh;
  max-width: 540px;
  margin: 0 auto;

  svg text {
    fill: transparent;
    stroke-dasharray: 326px;
    animation: stroke 1s linear;
    animation-fill-mode: forwards;
  }

  @keyframes stroke {
    0% {
      stroke: ${colorchip.black};
      stroke-width: 3px;
      stroke-dashoffset: 326px;
    }
    70% { fill: transparent; }
    98% {
      stroke: ${colorchip.black};
      stroke-width: 3px;
    }
    100% {
      fill: ${colorchip.black};
      stroke-dashoffset: 0px;
    }
  }
`;

const SignMainHeadWrap = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  transform: translate(-50%, -50%);
  z-index: 3;
  svg text { font-size: ${pixelToRem(96)};
    &:nth-child(1) { animation-delay: 0s; }
    &:nth-child(2) { animation-delay: 0.5s; }
    &:nth-child(3) { animation-delay: 1s; }
    &:nth-child(4) { animation-delay: 1.5s; }
    &:nth-child(5) { animation-delay: 2s; }
    &:nth-child(6) { animation-delay: 2.5s; }
    &:nth-child(7) { animation-delay: 3s; }
    &:nth-child(8) { animation-delay: 3.5s; }
    &:nth-child(9) { animation-delay: 4s; }
    &:nth-child(10) { animation-delay: 4.5s; }
    &:nth-child(11) { animation-delay: 5s; }
  }
`;

function SignMainHead() {
  return (
    <SignMainHeadBox>
      <SignMainSupHead />
      <SignMainHeadWrap>
        <svg width={540} height={160} viewBox='0 0 540 160'>
          <text x='0' y='50%'>K</text>
          <text x='50' y='50%'>A</text>
          <text x='95' y='50%'>N</text>
          <text x='144' y='50%'>U</text>
          <text x='191' y='50%'>P</text>
          <text x='235' y='50%'>A</text>
          <text x='280' y='50%'>K</text>
          <text x='350' y='50%'>B</text>
          <text x='395' y='50%'>L</text>
          <text x='435' y='50%'>O</text>
          <text x='485' y='50%'>G</text>
        </svg>
      </SignMainHeadWrap>
      <SignMainSubHead />
      <SignSubHead />
    </SignMainHeadBox>
  );
}

export default memo(SignMainHead);
