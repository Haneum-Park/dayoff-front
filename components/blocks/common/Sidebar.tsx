import React, { memo } from 'react';
import styled from 'styled-components';

import LocaleSwitch from './LocaleSwitch';
import DarkmodeSwitch from './DarkmodeSwitch';

function Sidebar() {
  return (
    <SidebarWrap>
      <ul>
        <li className='localeswitch'>
          <LocaleSwitch />
        </li>
        <li>
          <DarkmodeSwitch />
        </li>
      </ul>
    </SidebarWrap>
  );
}

export default memo(Sidebar);

const SidebarWrap = styled.nav`
  position: absolute;
  top: 50%;
  left: 95%;
  transform: translate(-50%, -50%);
  width: 100%;
  max-width: 3rem;
  ul {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  li {
    display: flex;
    flex-direction: column;
    align-items: center;

    &.localeswitch {
      align-items: flex-end;
    }
  }
`;
