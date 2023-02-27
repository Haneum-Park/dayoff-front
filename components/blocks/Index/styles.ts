import styled, { createGlobalStyle } from 'styled-components';

export const LocalPageStyle = createGlobalStyle`
  html, body, #__next {
    margin: 0;
    padding: 0;
    overflow: hidden;
    max-width: 100%;
  }
`;

type IndexGridStyleProps = {};

export const IndexGridBackground = styled.div<IndexGridStyleProps>`
  position: absolute;
  top: 0;
  left: 0;
  background-image: url('/images/index/bg.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  height: 100vh;
`;

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
  }
  svg text {
    font-family: 'Light';
    font-size: 80px;
    stroke-width: 1px;
    stroke: var(--color-white);
    fill: transparent;
    stroke-dashoffset: 750;
    stroke-dasharray: 750;
    animation: fadeIn 1.5s linear;
    animation-fill-mode: forwards;

    &:nth-child(1) {
      animation-delay: 0.2s;
    }
    &:nth-child(2) {
      animation-delay: 0.4s;
    }
    &:nth-child(3) {
      animation-delay: 0.6s;
    }
    &:nth-child(4) {
      animation-delay: 0.8s;
    }
    &:nth-child(5) {
      animation-delay: 1s;
    }
    &:nth-child(6) {
      animation-delay: 1.2s;
    }
    &:nth-child(7) {
      animation-delay: 1.4s;
    }
    &:nth-child(8) {
      animation-delay: 1.5s;
    }
    &:nth-child(9) {
      animation-delay: 1.8s;
    }
  }

  @keyframes fadeIn {
    0% {
      stroke-dashoffset: 750;
    }
    99% {
      fill: var(--color-gray-8);
      stroke: var(--color-gray-8);
    }
    100% {
      stroke-dashoffset: 0;
      fill: var(--color-gray-9);
      stroke: var(--color-gray-9);
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
    transition: background-color 0.15s ease-in, color 0.15s ease-in;
    &:hover,
    &:focus {
      background-color: var(--color-gray-9);
      color: var(--color-gray-0);
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
`;

export const FoldWrap = styled.button`
  position: relative;
  display: inline-block;
  border: 1px solid var(--color-gray-9);
  border-radius: 50px;
  padding: 0.75rem 0.75rem;
  width: 66px;
  color: var(--color-gray-0);
  background-color: var(--color-gray-9);

  z-index: 2;
`;

type GroupBtnWrapProps = {
  foldToggle: boolean;
};

export const GroupBtnWrap = styled.div<GroupBtnWrapProps>`
  position: absolute;
  top: 0;
  left: ${({ foldToggle }) => (foldToggle ? '60.15%' : '-40%')};

  width: 100%;
  max-width: calc(350rem / 16);
  transform: translateX(-50%);
  transition: left 0.5s ease;
`;

export const MainVisibleBtn = styled(FoldWrap)<GroupBtnWrapProps>`
  background-color: transparent;
  color: var(--color-gray-9);
  opacity: ${({ foldToggle }) => (foldToggle ? '0' : '1')};
  z-index: ${({ foldToggle }) => (foldToggle ? '-1' : '1')};
  ${({ foldToggle }) => (foldToggle ? 'animation: visibleBtn 0.5s linear;' : '')}
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
