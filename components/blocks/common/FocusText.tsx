import React, { memo } from 'react';
import styled from 'styled-components';

interface FocusTextStyleProps {
  fontSize?: string;
}

interface FocusTextProps extends FocusTextStyleProps {
  children?: React.ReactNode;
}

function FocusText({ children, ...rest }: FocusTextProps) {
  return <FocusTextWrap {...rest}>{children}</FocusTextWrap>;
}

export default memo(FocusText);

const FocusTextWrap = styled.div<FocusTextStyleProps>`
  display: inline-block;
  color: var(--color-gray-9);
  font-size: ${({ fontSize }) => fontSize || '14px'};
  font-family: 'Bold';
`;
