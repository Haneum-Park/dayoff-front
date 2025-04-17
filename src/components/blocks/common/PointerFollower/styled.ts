'use client';

import styled from '@emotion/styled';

export const PointerFollowerWrap = styled.div`
  position: absolute;
  top: 55%;
  left: 55%;
  width: 16px;
  height: 16px;
  pointer-events: none;
  background-color: var(--gray-12);
  border-radius: 50%;
  transition: display 0.1s ease-in-out, transform 0.1s ease-in-out, background-color 0.1s ease-in-out;
  transform: translate(-50%, -50%);
  mix-blend-mode: difference; 
  will-change: transform;
  z-index: 1001;
`;