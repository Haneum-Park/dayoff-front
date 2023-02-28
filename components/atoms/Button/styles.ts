import styled from 'styled-components';

export interface BtnStyleProps {
  bdColor?: string;
  bdRadius?: number;
}

export const BtnWrap = styled.button<BtnStyleProps>`
  width: 100%;
  color: var(--color-white);
  border: 1px solid var(--color-${({ bdColor }) => bdColor || 'gray-6'});
  background-color: transparent;
  border-radius: calc(${({ bdRadius }) => bdRadius || 16}rem / 16);
  padding: calc(12rem / 16) calc(24rem / 16);
  margin-right: calc(16rem / 16);
  &:last-child {
    margin-right: 0;
  }

  &.ripple {
    position: relative;
    overflow: hidden;

    .animate {
      position: absolute;
      width: 2px;
      height: 2px;
      border-radius: 50%;
      animation: m-ripple 0.7s linear;

      @keyframes m-ripple {
        0% {
          transform: translate(-50%, -50%) scale(1);
        }
        100% {
          transform: translate(-50%, -50%) scale(136);
          opacity: 0;
        }
      }
    }
  }
`;
