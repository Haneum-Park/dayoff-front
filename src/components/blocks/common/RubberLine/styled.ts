'use client';

import styled from '@emotion/styled';

export const RubberLineWrap = styled.svg`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  clip-path: inset(0 50% 0 50%);
  transition: transform 2s ease-in-out, clip-path 2s ease-in-out;

  &.initial {
    clip-path: inset(0 0 0 0);
  }

  & > text {
    font-size: 7rem;
    cursor: pointer;
    transform: rotateY(0deg);
    &[id*='rotate-left'] {
      transform-origin: 38.5%;
    }
    &[id*='rotate-center'] {
      transform-origin: 50.5%;
    }
    &[id*='rotate-right'] {
      transform-origin: 62.5%;
    }
    transition: transform 0.5s ease-in-out;

    &.hover {
      transform: rotateY(360deg);
    }

    &:nth-of-type(1),
    &:nth-of-type(2),
    &:nth-of-type(3) {
      stroke: var(--gray-12);
      fill: var(--gray-1);
    }
  
    &:nth-of-type(4),
    &:nth-of-type(5),
    &:nth-of-type(6) {
      stroke: var(--gray-11);
      fill: var(--gray-12);
    }
  }

`;