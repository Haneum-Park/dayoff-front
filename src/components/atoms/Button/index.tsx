'use client';

import { type ButtonProps } from '@radix-ui/themes';

import { AtomButtonWrap } from './styled';

export interface IAtomButton extends ButtonProps {}

const AtomButton = ({ children, color = 'gray', size = '3', variant='outline', ...rest }: IAtomButton) => {
  return (
    <AtomButtonWrap
      color={color}
      size={size}
      variant={variant}
      {...rest}
    >
      {children}
    </AtomButtonWrap>
  );
};

export default AtomButton;