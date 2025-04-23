'use client';

import React from 'react';

import { usePathname as usePathnameI18n, useRouter as useRouterI18n } from '@i18n/routing';

interface ISpinText {
  posY: number;
  target: 'haneum' | 'suyeon';
  text: string;
  id: string;
}

const SpinText = ({ target, id, posY, text }: ISpinText) => {
  const pathname = usePathnameI18n();
  const { push } = useRouterI18n();

  const onTextRoute = () => push(`${pathname}/hr-kit?target=${target}`);

  const onTextMouseEnter = (e: React.MouseEvent<SVGTextElement>) => {
    e.currentTarget.classList.add('hover');
  };

  const onTextMouseLeave = (e: any) => {
    setTimeout(() => {
      document.querySelector(`#${e.target.id}`)?.classList.remove('hover');
    }, 500);
  };

  return (
    <text
      onMouseEnter={onTextMouseEnter}
      onMouseLeave={onTextMouseLeave}
      id={id}
      onClick={onTextRoute}
      className='focus'
      y={posY}
      x='350'
    >
      {text}
    </text>
  )
}

export default SpinText;