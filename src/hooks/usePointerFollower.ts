'use client';

import React, { useEffect, useRef } from 'react';

let x = 0;
let y = 0;
let targetX = 0;
let targetY = 0;
const speed = 0.1;

export default function PointerFollower(): [
  React.RefObject<HTMLDivElement>,
  {
    onMouseMove: React.MouseEventHandler<HTMLDivElement>;
    onMouseDown: React.MouseEventHandler<HTMLDivElement>;
    onMouseUp: React.MouseEventHandler<HTMLDivElement>;
    onMouseEnter: React.MouseEventHandler<HTMLDivElement>;
    onMouseLeave: React.MouseEventHandler<HTMLDivElement>;
  }
] {
  const pointerRef = useRef<HTMLDivElement>(null);
  const requestRef = useRef(0);

  const onMouseDown: React.MouseEventHandler<HTMLDivElement> = () => {
    if (pointerRef.current) {
      pointerRef.current.style.transform = 'translate(-50%, -50%) scale(1.6)';
    }
  };

  const onMouseUp: React.MouseEventHandler<HTMLDivElement> = () => {
    if (pointerRef.current) {
      pointerRef.current.style.transform = 'translate(-50%, -50%) scale(1)';
    }
  }

  const onMouseEnter = () => {
    if (pointerRef.current) {
      pointerRef.current.style.display = 'block';
    }
  };

  const onMouseLeave = () => {
    if (pointerRef.current) {
      pointerRef.current.style.display = 'none';
    }
  };

  const onMouseMove: React.MouseEventHandler<HTMLDivElement> = (e) => {
    x = e.pageX;
    y = e.pageY;
  };

  const loop = () => {
    targetX += (x - targetX) * speed
    targetY += (y - targetY) * speed

    if (pointerRef.current) {
      pointerRef.current.style.top = `${targetY}px`
      pointerRef.current.style.left = `${targetX}px`

      const el = document.elementFromPoint(targetX, targetY);

    let isHoveringText = false;

    if (el instanceof HTMLElement) {
      const style = window.getComputedStyle(el);
      const hasVisibleText = el.classList.contains('focus');
      const isInvisible = style.visibility === 'hidden' || style.display === 'none';

      if (hasVisibleText && !isInvisible) {
        isHoveringText = true;
      }
    }

    pointerRef.current.style.transform = isHoveringText
      ? 'translate(-50%, -50%) scale(3)'
      : 'translate(-50%, -50%) scale(1)';
    }

    requestRef.current = requestAnimationFrame(loop)
  };

  useEffect(() => {
    requestRef.current = requestAnimationFrame(loop)

    return () => cancelAnimationFrame(requestRef.current)
  }, [loop]);
  
  return [pointerRef, {
    onMouseMove,
    onMouseDown,
    onMouseUp,
    onMouseEnter,
    onMouseLeave
  }];
}