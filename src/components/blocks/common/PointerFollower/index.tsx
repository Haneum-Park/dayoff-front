'use client';

import React from 'react';

import { PointerFollowerWrap } from './styled';

export default function PointerFollower({
  pointerRef
}: {
  pointerRef?: React.RefObject<HTMLDivElement>,
}) {
  return <PointerFollowerWrap className='pointer-follower' ref={pointerRef} />;
}