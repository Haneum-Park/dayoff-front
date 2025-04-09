'use client';

import React from 'react';
import {
  Button,
  type ButtonProps,
} from '@radix-ui/themes';

function RippleBtn({
  type = 'button',
  children,
  onClick,
  ...rest
}: ButtonProps) {
  const onMergeClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const ripple = document.createElement('div');
    const rect = event.currentTarget.getBoundingClientRect();
    ripple.className = 'animate';
    ripple.style.left = `${event.clientX - rect.left}px`;
    ripple.style.top = `${event.clientY - rect.top}px`;
    ripple.style.backgroundColor = 'var(--gray-2)';
    ripple.style.setProperty('--material-scale', String(event.currentTarget.offsetWidth));
    event.currentTarget.append(ripple);
    setTimeout(() => {
      (ripple.parentNode as ParentNode).removeChild(ripple);
    }, 800);
    if (onClick) onClick(event);
  }

  return (
    <Button type={type} onClick={onMergeClick} {...rest}>
      {children}
    </Button>
  );
}

export default RippleBtn;
