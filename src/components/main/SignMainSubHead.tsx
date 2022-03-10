import React, { memo } from 'react';
import styled from 'styled-components';

import { pixelToRem } from '@util/style.util';

const SignSubHeadWrap = styled.div`
  position: absolute;
  top: 52%;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: ${pixelToRem(6)};
  transform: translateY(-50%);
  z-index: 3;

  svg text { font-size: ${pixelToRem(16)};
    &:nth-child(1) { animation-delay: 10s; }
    &:nth-child(2) { animation-delay: 10.05s; }
    &:nth-child(3) { animation-delay: 10.1s; }
    &:nth-child(4) { animation-delay: 10.15s; }
    &:nth-child(5) { animation-delay: 10.2s; }
    &:nth-child(6) { animation-delay: 10.25s; }
    &:nth-child(7) { animation-delay: 10.3s; }
    &:nth-child(8) { animation-delay: 10.35s; }
    &:nth-child(9) { animation-delay: 10.4s; }
    &:nth-child(10) { animation-delay: 10.45s; }
    &:nth-child(11) { animation-delay: 10.5s; }
    &:nth-child(12) { animation-delay: 10.55s; }
  }
`;

function SignSubHead() {
  return (
    <SignSubHeadWrap>
      <svg width={120} height={160} viewBox='0 0 120 160'>
        {/* 전기용량의 공식 C=Q/V=ε(A/t) */}
        <text x='0' y='50%'>C</text>
        <text x='13' y='50%'>=</text>
        <text x='24' y='50%'>Q</text>
        <text x='36' y='50%'>/</text>
        <text x='46' y='50%'>V</text>
        <text x='56' y='50%'>=</text>
        <text x='66' y='50%'>ε</text>
        <text x='76' y='50%'>(</text>
        <text x='86' y='50%'>A</text>
        <text x='96' y='50%'>/</text>
        <text x='106' y='50%'>t</text>
        <text x='116' y='50%'>)</text>
      </svg>
    </SignSubHeadWrap>
  );
}

export default memo(SignSubHead);
