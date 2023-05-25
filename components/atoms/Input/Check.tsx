import React from 'react';
import styled from 'styled-components';
import { FiSquare, FiCheckSquare } from 'react-icons/fi';

export interface CheckProps {
  isCheck: boolean;
  onClick: () => void;
}

const CheckContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-right: calc(5rem / 16);
  > svg {
    color: var(--color-white);
    cursor: pointer;
  }
`;

function Check({ onClick, isCheck = false }: Omit<CheckProps, 'type'>) {
  return (
    <CheckContainer>
      {isCheck ? (
        <FiCheckSquare size={20} onClick={() => onClick()} />
      ) : (
        <FiSquare size={20} onClick={() => onClick()} />
      )}
    </CheckContainer>
  );
}

export default Check;
