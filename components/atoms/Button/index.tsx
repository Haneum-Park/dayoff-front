'use client';

import { type ButtonProps } from '@radix-ui/themes';

import { AtomButtonWrap } from './styled';

export interface IAtomButtonProps extends ButtonProps {}

const AtomButton = ({ children, ...rest }: IAtomButtonProps) => {
  return (
    <AtomButtonWrap {...rest}>{children}</AtomButtonWrap>
  );
}

export default AtomButton;