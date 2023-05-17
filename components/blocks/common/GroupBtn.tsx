import React, { memo } from 'react';
import styled from 'styled-components';

import Button from '@atom/Button';
import type { BtnProps } from '@atom/Button';

interface GroupBtnStyleProps {
  maxWidth?: number | string;
  align?: 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around';
}

export const GroupBtnWrap = styled.div<GroupBtnStyleProps>`
  display: flex;
  justify-content: ${({ align }) => align || 'center'};
  align-items: center;
  width: 100%;
  ${({ maxWidth }) => maxWidth && `max-width: ${maxWidth};`}
`;

export interface GroupBtnProps extends GroupBtnStyleProps {
  btns: BtnProps[];
  onClick?: (event?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

function GroupBtn({ btns, maxWidth, align, onClick }: GroupBtnProps) {
  return (
    <GroupBtnWrap maxWidth={maxWidth} align={align}>
      {btns &&
        btns.length > 0 &&
        btns.map(({ children, ...rest }, idx) => (
          <Button key={`btn-${idx}`} onClick={onClick} {...rest}>
            {children}
          </Button>
        ))}
    </GroupBtnWrap>
  );
}

export default memo(GroupBtn);
