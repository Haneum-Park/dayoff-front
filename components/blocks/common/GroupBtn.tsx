import React from 'react';
import styled from 'styled-components';

import RippleBtn, { type RippleBtnProps } from '@common/RippleBtn';

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
  btns: RippleBtnProps[];
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

function GroupBtn({ btns, maxWidth, align, onClick }: GroupBtnProps) {
  return (
    <GroupBtnWrap maxWidth={maxWidth} align={align}>
      {btns &&
        btns.length > 0 &&
        btns.map(({ children, ...rest }, idx) => (
          <RippleBtn key={`btn-${idx}`} onClick={onClick} {...rest}>
            {children}
          </RippleBtn>
        ))}
    </GroupBtnWrap>
  );
}

export default GroupBtn;
