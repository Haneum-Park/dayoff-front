import React, { useCallback, memo } from 'react';
import styled from 'styled-components';
import { useSnapshot } from 'valtio';
import { TfiClose } from 'react-icons/tfi';

import { proxyAlert, setCloseAlert } from '@store/global/isAlert';

interface AlertStyleProps {
  type?: 'info' | 'warning' | 'success' | 'error';
  color?: string;
}

interface AlertProps extends AlertStyleProps {
  children?: React.ReactNode;
}

function Alert({ color, type = 'info', children = 'Alert' }: AlertProps) {
  const { isAlert } = useSnapshot(proxyAlert);

  const onCloseAlert = useCallback(() => {
    document.querySelector('#alert-close')!.classList.add('alert-close');
    setTimeout(() => {
      setCloseAlert();
    }, 500);
  }, []);

  return (
    <>
      {isAlert ? (
        <AlertContainer id='alert-close'>
          <AlertWrap type={type}>
            <AlertContentWrap color={color}>{children}</AlertContentWrap>
            <TfiClose
              size={16}
              fill={`var(--color-${color ?? 'gray-0'})`}
              cursor='pointer'
              onClick={() => onCloseAlert()}
            />
          </AlertWrap>
        </AlertContainer>
      ) : null}
    </>
  );
}

export default memo(Alert);

const AlertContainer = styled.div`
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

interface AlertWrapProps extends AlertStyleProps {}

const AlertWrap = styled.div<AlertWrapProps>`
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

const AlertContentWrap = styled.div<AlertContentWrapProps>`
  color: var(--color-${({ color }) => color ?? 'gray-0'});
`;
