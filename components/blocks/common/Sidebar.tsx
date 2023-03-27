import React, { memo } from 'react';
import styled from 'styled-components';

import { MEDIA_QUERY } from '@util/design.util';

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
  left: 93%;
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

  ${MEDIA_QUERY.max('sm-tablet')} {
    top: 5%;

    ul {
      gap: 0.5rem;
    }
  }
`;
