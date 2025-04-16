'use client';

import { type ButtonProps } from '@radix-ui/themes';

import { AtomButtonWrap } from './styled';

export interface IAtomButtonProps extends ButtonProps {}

const AtomButton = ({ children, color = 'gray', size = '3', variant='outline', ...rest }: IAtomButtonProps) => {
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