import '@radix-ui/colors/gray.css';
import { Flex } from '@radix-ui/themes';
import styled from '@emotion/styled';

import { AtomButtonWrap } from '@atoms/Button/styled';
import { MEDIA_QUERY } from '@utils/design.util';

export const IndexGridWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const IndexGridTitle = styled.h1`
  margin: 0 0 calc(16rem / 16);
  svg {
    display: flex;
    justify-content: space-bewteen;
    transition: transform 0.2s ease-in-out;
  }
  svg text {
    font-family: 'Light';
    font-size: 80px;
    stroke-width: 1px;
    stroke: var(--gray-12);
    fill: transparent;
    stroke-dashoffset: 750;
    stroke-dasharray: 750;
    animation: fadeIn 1.5s linear;
    animation-fill-mode: forwards;

    &:nth-of-type(1) {
      animation-delay: 0.2s;
    }
    &:nth-of-type(2) {
      animation-delay: 0.4s;
    }
    &:nth-of-type(3) {
      animation-delay: 0.6s;
    }
    &:nth-of-type(4) {
      animation-delay: 0.8s;
    }
    &:nth-of-type(5) {
      animation-delay: 1s;
    }
    &:nth-of-type(6) {
      animation-delay: 1.2s;
    }
    &:nth-of-type(7) {
      animation-delay: 1.4s;
    }
    &:nth-of-type(8) {
      animation-delay: 1.5s;
    }
    &:nth-of-type(9) {
      animation-delay: 1.8s;
    }
  }

  @keyframes fadeIn {
    0% {
      stroke-dashoffset: 750;
    }
    99% {
      fill: var(--gray-10);
      stroke: var(--gray-10);
    }
    100% {
      stroke-dashoffset: 0;
      fill: var(--gray-12);
      stroke: var(--gray-12);
    }
  }

  ${MEDIA_QUERY.max('sm-tablet')} {
    position: relative;
    width: 100%;
    height: 4rem;
    margin: 0 auto calc(16rem / 16);

    svg {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
`;

export const IndexGridBtnWrap = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: calc(440rem / 16);
  overflow: hidden;

  button {
    color: var(--gray-12);
    border-color: var(--gray-12);
    transition: background-color 0.15s ease-in, color 0.15s ease-in;
    &:hover,
    &:focus {
      background-color: var(--gray-12);
      color: var(--gray-1) !important;
      transition: background-color 0.15s ease-out, color 0.15s ease-out;
    }
  }

  opacity: 0;
  animation: fadeBtnIn 1.5s linear;
  animation-fill-mode: forwards;
  animation-delay: 2s;

  @keyframes fadeBtnIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  ${MEDIA_QUERY.max('sm-tablet')} {
    justify-content: flex-start;
    flex-direction: column;
    gap: 0.5rem;
    height: calc(300rem / 16);
    padding: 0 1rem;

    button {
      width: 100%;
    }
  }
`;

export const FoldWrap = styled(AtomButtonWrap)`
  position: relative;
  display: inline-block;
  z-index: 2;

  ${MEDIA_QUERY.max('sm-tablet')} {
    order: 2;
  }
`;

export const GroupBtnWrap = styled.div`
  position: absolute;
  top: 0;
  left: -40%;
  &.fold-toggle {
    left: 60.15%;
  }
  width: 100%;
  max-width: calc(350rem / 16);
  transform: translateX(-50%);
  transition: left 0.5s ease;

  ${MEDIA_QUERY.max('sm-tablet')} {
    left: 50%;
    top: 60%;
    transform: translate(-50%, -50%);
    max-width: 100%;
    padding: 0 1rem;
    > div {
      flex-direction: column;
      gap: 0.5rem;
      width: 100%;
      button {
        margin-right: 0;
      }
    }
  }
`;

export const GroupBtnContainer = styled(Flex)`
  width: 100%;
`;

export const MainVisibleBtn = styled(FoldWrap)`
  opacity: 1;
  z-index: 1;

  &.fold-toggle {
    opacity: 0;
    z-index: -1;
    animation: visibleBtn 0.5s linear;
  }

  ${MEDIA_QUERY.max('sm-tablet')} {
    order: 1;
    opacity: 1;
    animation: none;
  }

  @keyframes visibleBtn {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
      display: none;
    }
  }
`;
