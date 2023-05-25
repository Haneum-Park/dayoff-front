import React, { useCallback } from 'react';

import Button, { type BtnProps } from '@atom/Button';

export interface RippleBtnProps extends BtnProps {
  children?: React.ReactNode | string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  isEffect?: boolean;
}

function RippleBtn({
  type = 'button',
  children,
  onClick,
  isEffect = false,
  ...rest
}: RippleBtnProps) {
  const onMergeClick = useCallback(
    (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      if (isEffect) {
        if (onClick) onClick(event);
        const ripple = document.createElement('div');
        const rect = event.currentTarget.getBoundingClientRect();
        ripple.className = 'animate';
        ripple.style.left = `${event.clientX - rect.left}px`;
        ripple.style.top = `${event.clientY - rect.top}px`;
        ripple.style.backgroundColor = 'var(--color-gray-2)';
        ripple.style.setProperty('--material-scale', String(event.currentTarget.offsetWidth));
        event.currentTarget.append(ripple);
        setTimeout(() => {
          (ripple.parentNode as ParentNode).removeChild(ripple);
        }, 800);
      }
    },
    [onClick, isEffect],
  );

  return (
    <Button type={type} onClick={onMergeClick} {...rest}>
      {children}
    </Button>
  );
}

export default RippleBtn;
