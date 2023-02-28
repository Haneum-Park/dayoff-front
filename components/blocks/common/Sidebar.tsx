import React, { memo } from 'react';
import styled from 'styled-components';

import LocaleSwitch from './LocaleSwitch';

function Sidebar() {
  return (
    <SidebarWrap>
      <ul>
        <li>
          <LocaleSwitch />
        </li>
        <li>dasdsad</li>
      </ul>
    </SidebarWrap>
  );
}

export default memo(Sidebar);

const SidebarWrap = styled.nav`
  position: absolute;
  top: 50%;
  left: 92%;
  transform: translate(-50%, -50%);
  width: 100%;
  max-width: 3rem;
  ul {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 1.5rem;
  }
  li {
    position: relative;
  }
`;
