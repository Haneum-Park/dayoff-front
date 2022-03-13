import React, { memo } from 'react';
import styled from 'styled-components';

import { pixelToRem } from '@util/style.util';

const SignMainSupHeadWrap = styled.div`
  position: absolute;
  top: 50%;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: ${pixelToRem(160)};
  padding-right: ${pixelToRem(3)};
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
  }
`;

function SignMainSupHead() {
  return (
    <SignMainSupHeadWrap>
      <svg width={138} height={160} viewBox='0 0 138 160'>
        <text x='0' y='50%'>H</text>
        <text x='13' y='50%'>E</text>
        <text x='24' y='50%'>L</text>
        <text x='35' y='50%'>L</text>
        <text x='46' y='50%'>O</text>
        <text x='70' y='50%'>W</text>
        <text x='84' y='50%'>O</text>
        <text x='96' y='50%'>R</text>
        <text x='108' y='50%'>L</text>
        <text x='118' y='50%'>D</text>
        <text x='133' y='50%'>!</text>
      </svg>
    </SignMainSupHeadWrap>
  );
}

export default memo(SignMainSupHead);
