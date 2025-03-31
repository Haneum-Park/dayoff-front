import React from 'react';
import { useSnapshot } from 'valtio';
import styled from 'styled-components';

import { proxyFocusMember } from '@store/main/focusMember';

function ParabolaShut() {
  const { member } = useSnapshot(proxyFocusMember);

  return <ParabolaShutWrap id='parabola' member={member} />;
}

export default ParabolaShut;

const ParabolaShutWrap = styled.span<{ member: 'kanu' | '' }>`
  position: absolute;
  display: none;
  top: -34px;
  left: -32px;
  width: 760px;
  height: 760px;
  border-radius: 1.2rem;
  opacity: 0;

  background-color: var(--color-${({ member }) => member || 'kanu'});
  box-shadow: 0px 0px 10px 2px var(--color-gray-9);
  transition: width 0.3s ease-in-out, height 0.3s ease-in-out, border-radius 0.3s ease-in-out,
    opacity 0.3s ease-in-out;
`;
