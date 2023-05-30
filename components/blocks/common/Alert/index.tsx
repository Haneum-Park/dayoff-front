import React, { useCallback, memo } from 'react';
import { useSnapshot } from 'valtio';
import { TfiClose } from 'react-icons/tfi';

import { proxyAlert, setCloseAlert } from '@store/global/isAlert';

import { AlertContainer, AlertContentWrap, AlertWrap, type AlertStyleProps } from './styles';

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
