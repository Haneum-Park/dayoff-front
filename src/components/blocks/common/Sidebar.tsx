'use client';

import { memo } from 'react';
import styled from '@emotion/styled';

import { MEDIA_QUERY } from '@utils/design.util';

import LocaleSwitch from './LocaleSwitch';
import DarkmodeSwitch from './DarkmodeSwitch';

function Sidebar() {
  return (
    <SidebarWrap>
      <ul>
        <li className='localeswitch'><LocaleSwitch /></li>
        <li><DarkmodeSwitch /></li>
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
    gap: var(--space-2);
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
    left: 91%;
    ul {
      gap: var(--space-1);
    }
  }
`;
