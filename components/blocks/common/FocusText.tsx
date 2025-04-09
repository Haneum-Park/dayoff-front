'use client'

import React, { memo } from 'react';
import styled from '@emotion/styled';

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
  color: var(--gray-12);
  font-size: ${({ fontSize }) => fontSize || '14px'};
  font-family: 'SemiBold';
`;
