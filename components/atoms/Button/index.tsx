import React, { useCallback, memo } from 'react';

import { BtnWrap, type BtnStyleProps } from './styles';

export interface BtnProps extends BtnStyleProps, React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode | string;
  onClick?: (event?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  isEffect?: boolean;
}

function Button({ type = 'button', children, onClick, isEffect = false, ...rest }: BtnProps) {
  const onClickMerge = useCallback(
    (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      if (isEffect) {
        console.log('a');
        if (onClick) onClick();
        const ripple = document.createElement('div');
        const rect = event.currentTarget.getBoundingClientRect();
        ripple.className = 'animate';
        ripple.style.left = `${event.clientX - rect.left}px`;
        ripple.style.top = `${event.clientY - rect.top}px`;
        ripple.style.backgroundColor = event.currentTarget.style.backgroundColor || '#dee2e6';
        ripple.style.setProperty('--material-scale', String(event.currentTarget.offsetWidth));
        event.currentTarget.append(ripple);
        setTimeout(() => {
          (ripple.parentNode as ParentNode).removeChild(ripple);
        }, 500);
      }
    },
    [onClick, isEffect],
  );

  return (
    <BtnWrap type={type} onClick={onClickMerge} {...rest} className='ripple'>
      {children}
    </BtnWrap>
  );
}

export default memo(Button);
