import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { pixelToRem, colorchip } from '@util/style.util';

const UserbarWrap = styled.ul`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  max-width: 130px;
  li {
    display: flex;
    align-items: center;
    a {
      font-size: ${pixelToRem(20)};
    }
    &::after {
      content: '';
      display: block;
      width: 1px;
      height: ${pixelToRem(18)};
      background-color: ${colorchip.gray};
      margin: 0 0.75rem;
    }
    &:last-child::after {
      display: none;
    }
  }
`;

function Userbar() {
  return (
    <UserbarWrap>
      <li>
        <Link to=''>로그인</Link>
      </li>
      <li>
        <Link to=''>회원가입</Link>
      </li>
    </UserbarWrap>
  );
}

export default React.memo(Userbar);
