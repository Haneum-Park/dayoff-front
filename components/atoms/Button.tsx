import React, { memo } from 'react';
import styled from 'styled-components';

export interface BtnStyleProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export interface BtnProps extends BtnStyleProps {
  children?: React.ReactNode | string;
}

export const BtnWrap = styled.button<BtnStyleProps>`
  width: 100%;
  color: var(--color-black);
  border: 1px solid var(--color-gray-6);
  border-radius: calc(12rem / 16);
  padding: calc(16rem / 16) calc(24rem / 16);
  margin-right: calc(16rem / 16);

  &.kanu {
    background-color: var(--color-kanu);
    color: var(--color-white);
  }
  &.xeoye {
    background-color: var(--color-xeoye);
    color: var(--color-white);
  }
  &:last-child {
    margin-right: 0;
  }
`;

function Button({ type = 'button', children, onClick, ...rest }: BtnProps) {
  return (
    <BtnWrap type={type} onClick={onClick} {...rest}>
      {children}
    </BtnWrap>
  );
}

export default memo(Button);
