import React, { memo } from 'react';
import styled from 'styled-components';

export interface BtnProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode | string;
}

export const BtnWrap = styled.button`
  width: 100%;
  color: var(--color-white-20);
  border: 1px solid var(--color-gray-6);
  background-color: transparent;
  border-radius: calc(12rem / 16);
  padding: calc(16rem / 16) calc(24rem / 16);
  margin-right: calc(16rem / 16);
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
