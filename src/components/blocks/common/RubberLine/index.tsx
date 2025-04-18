'use client';

import React, { useRef, useState, useEffect } from 'react';

import { usePathname as usePathnameI18n, useRouter as useRouterI18n } from '@i18n/routing';
import { RubberLineWrap } from './styled';

type MousePosition = {
  startX?: number;
  endX?: number;
}

const RubberHorizonLine = ({ startX = 0, endX = 1000 }: MousePosition) => {
  const { push } = useRouterI18n();
  const pathname = usePathnameI18n();
  const svgRef = useRef<SVGSVGElement>(null);
  const requestRef = useRef(0);
  const posY = 200;
  const control = useRef({ y: posY, vy: 0 });
  const curve = useRef({ x: (startX + endX) / 2, y: posY });
  const mouse = useRef({ x: (startX + endX) / 2, y: posY });
  const prevMouse = useRef({ x: (startX + endX) / 2, y: posY });
  const [_, forceUpdate] = useState(0); // for debug/testing re-render
  const spring = {
    stiffness: 0.07,
    damping: 0.85,
  };

  const animate = () => {
    const distanceY = parseFloat((mouse.current.y - curve.current.y).toFixed(3));
    const isNear = Math.abs(distanceY) < 40;
    const targetY = isNear ? posY - distanceY * 2.5 : posY;
    const dy = targetY - control.current.y;
    control.current.vy += dy * spring.stiffness;
    control.current.vy *= spring.damping;
    if (isNear && prevMouse.current.y === mouse.current.y) {
      control.current.vy *= 0;
    }
    control.current.y += parseFloat(control.current.vy.toFixed(3));
    curve.current.x = parseFloat(mouse.current.x.toFixed(3));
    curve.current.y = parseFloat(control.current.y.toFixed(3));

    prevMouse.current = { ...mouse.current };
    forceUpdate(n => n + 1);
    requestRef.current = requestAnimationFrame(animate);
  };

  const onMouseMove = (e: React.MouseEvent<SVGSVGElement>) => {
    const rect = svgRef.current?.getBoundingClientRect();
    const x = e.clientX - (rect?.left || 0);
    const y = e.clientY - (rect?.top || 0);
    mouse.current = { x, y };
  };

  const onMouseLeave = () => {
    control.current.vy = 0;
    curve.current.x = (startX + endX) / 2;
    curve.current.y = posY;
  };

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);

    setTimeout(() => {
      svgRef.current?.classList.add('initial');
    }, 300);
    return () => cancelAnimationFrame(requestRef.current);
  }, []);

  let pathD = `M ${startX} ${posY} Q ${curve.current.x} ${curve.current.y} ${endX} ${posY}`;

  const onTextRoute = (type: 'day_d' | 'day_a' | 'day_y' | 'off') => {
    if (type.indexOf('day') > -1) {
      const target = type === 'day_y' ? 'suyeon' : 'haneum';
      push(`${pathname}/hr-kit?target=${target}`);
    }
  };

  const onTextMouseEnter = (e: React.MouseEvent<SVGTextElement>) => {
    e.currentTarget.classList.add('hover');
  };

  const onTextMouseLeave = (e: any) => {
    setTimeout(() => {
      document.querySelector(`#${e.target.id}`)?.classList.remove('hover');
    }, 500);
  };

  return (
    <RubberLineWrap
      ref={svgRef}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{ width: `${endX}px`, height: `${posY * 2}px` }}
    >
      <text onMouseEnter={onTextMouseEnter} onMouseLeave={onTextMouseLeave} id='day_rotate-left' onClick={() => onTextRoute('day_d')} className='focus' y={curve.current.y - 40} x='350'>D</text>
      <text onMouseEnter={onTextMouseEnter} onMouseLeave={onTextMouseLeave} id='day_rotate-center' onClick={() => onTextRoute('day_a')} className='focus' y={curve.current.y - 40} x='470'>A</text>
      <text onMouseEnter={onTextMouseEnter} onMouseLeave={onTextMouseLeave} id='day_rotate-right' onClick={() => onTextRoute('day_y')} className='focus' y={curve.current.y - 40} x='590'>Y</text>
      <path d={pathD} stroke='var(--gray-12)' strokeWidth='1' fill='none' />
      <text onMouseEnter={onTextMouseEnter} onMouseLeave={onTextMouseLeave} id='off_rotate-left' onClick={() => onTextRoute('off')} className='focus' y={curve.current.y + 110} x='345'>O</text>
      <text onMouseEnter={onTextMouseEnter} onMouseLeave={onTextMouseLeave} id='off_rotate-center' onClick={() => onTextRoute('off')} className='focus' y={curve.current.y + 110} x='475'>F</text>
      <text onMouseEnter={onTextMouseEnter} onMouseLeave={onTextMouseLeave} id='off_rotate-right' onClick={() => onTextRoute('off')} className='focus' y={curve.current.y + 110} x='595'>F</text>
    </RubberLineWrap>
  );
};

export default RubberHorizonLine;

// NOTE svg path 휘게 만드는 법
// NOTE M x1 y1 Q cx cy x2 y2
// NOTE M x1 y1는 시작점 x2 y2는 끝점
// NOTE Q cx cy는 곡선의 제어점 cx가 어디서부터 휘는 지점인지 cy가 어디까지 휘는 지점인지