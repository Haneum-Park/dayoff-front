'use client';

import React from 'react';

import { PointerFollowerWrap } from './styled';

export default function PointerFollower({
  pointerRef,
  theme,
}: {
  pointerRef?: React.RefObject<HTMLDivElement>,
  theme?: string;
}) {
  return <PointerFollowerWrap className='pointer-follower' ref={pointerRef} theme={theme} />;
}