import React from 'react';

import { BtnWrap, type BtnStyleProps } from './styles';

export interface BtnProps extends BtnStyleProps, React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode | string;
}

function Button({ type = 'button', children, ...rest }: BtnProps) {
  return (
    <BtnWrap type={type} {...rest}>
      {children}
    </BtnWrap>
  );
}

export default Button;
