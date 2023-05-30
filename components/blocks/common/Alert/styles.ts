import styled from 'styled-components';

export const AlertContainer = styled.div`
  position: fixed;
  top: 0.5%;
  right: 0.25%;
  width: 100%;
  max-width: calc(320rem / 16);
  height: calc(48rem / 16);
  animation: alertSlideRightIn 0.5s ease-in-out forwards;
  opacity: 1;

  &.alert-close {
    /* fadeOut */
    animation: alertFadeOut 0.5s ease-in-out forwards;
    opacity: 0;

    @keyframes alertFadeOut {
      0% {
        opacity: 1;
      }
      100% {
        opacity: 0;
      }
    }
  }

  @keyframes alertSlideRightIn {
    0% {
      transform: translateX(100%);
    }
    100% {
      transform: translateX(0%);
    }
  }
`;

export interface AlertStyleProps {
  type?: 'info' | 'warning' | 'success' | 'error';
  color?: string;
}

interface AlertWrapProps extends AlertStyleProps {}

export const AlertWrap = styled.div<AlertWrapProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: inherit;
  max-width: inherit;
  height: inherit;
  padding: 1rem;
  background-color: var(--color-alert-${({ type }) => type ?? 'info'});
  border-radius: calc(8rem / 16);
`;

interface AlertContentWrapProps extends Omit<AlertStyleProps, 'type'> {}

export const AlertContentWrap = styled.div<AlertContentWrapProps>`
  color: var(--color-${({ color }) => color ?? 'gray-0'});
`;
