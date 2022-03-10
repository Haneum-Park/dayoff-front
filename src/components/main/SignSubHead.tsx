import React, { memo } from 'react';
import styled from 'styled-components';

import { pixelToRem } from '@util/style.util';

const SignSubHeadWrap = styled.div`
  position: absolute;
  top: 60%;
  left: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translate(-50%, -50%);
  z-index: 3;

  svg text { font-size: ${pixelToRem(32)};
    &:nth-child(1) { animation-delay: 6s; }
    &:nth-child(2) { animation-delay: 6.1s; }
    &:nth-child(3) { animation-delay: 6.2s; }
    &:nth-child(4) { animation-delay: 6.3s; }
    &:nth-child(5) { animation-delay: 6.4s; }
    &:nth-child(6) { animation-delay: 6.5s; }
    &:nth-child(7) { animation-delay: 7s; }
    &:nth-child(8) { animation-delay: 7.1s; }
    &:nth-child(9) { animation-delay: 8s; }
    &:nth-child(10) { animation-delay: 8.1s; }
    &:nth-child(11) { animation-delay: 8.2s; }
    &:nth-child(12) { animation-delay: 8.3s; }
    &:nth-child(13) { animation-delay: 8.4s; }
    &:nth-child(14) { animation-delay: 8.5s; }
  }
`;

function SignSubHead() {
  return (
    <SignSubHeadWrap>
      <svg width={270} height={160} viewBox='0 0 270 160'>
        <text x='0' y='50%'>J</text>
        <text x='15' y='50%'>U</text>
        <text x='35' y='50%'>N</text>
        <text x='55' y='50%'>I</text>
        <text x='63' y='50%'>O</text>
        <text x='83' y='50%'>R</text>
        <text x='120' y='50%'>T</text>
        <text x='135' y='50%'>O</text>
        <text x='170' y='50%'>S</text>
        <text x='188' y='50%'>E</text>
        <text x='205' y='50%'>N</text>
        <text x='225' y='50%'>I</text>
        <text x='233' y='50%'>O</text>
        <text x='253' y='50%'>R</text>
      </svg>
    </SignSubHeadWrap>
  );
}

export default memo(SignSubHead);
