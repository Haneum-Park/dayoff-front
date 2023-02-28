import React, { memo } from 'react';
// import { useRouter } from 'next/router';
import styled from 'styled-components';
// import { useSnapshot } from 'valtio';

// import { proxyLngToggle, setLngToggle } from '@store/global/lngToggle';

function Sidebar() {
  // const { locale } = useRouter();
  // const { locale: lngToggle } = useSnapshot(proxyLngToggle);

  return (
    <SidebarWrap>
      <ul>
        <li>
          <ToggleWrap></ToggleWrap>
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
  left: 91%;
  transform: translate(-50%, -50%);
  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
  }
  li {
    position: relative;
  }
`;

export const ToggleWrap = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  width: 40px;
  height: 26px;
  border: 1px solid var(--color-gray-7);
  border-radius: 50px;
  background-color: transparent;

  /* width: 100px; */
  &:hover {
    justify-content: right;
    transition: width 0.3s ease-in-out;
  }
`;
