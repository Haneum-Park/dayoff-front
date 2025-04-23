'use client';

import { memo } from 'react';
import Image from 'next/image';

import DayoffLogo from '@images/logos/logo_dayoff.png';
import LocaleSwitch from '../LocaleSwitch';
import ThemeSwitch from '../ThemeSwitch';
import { HeaderWrap, type IHeaderWrapStyle } from './styled';

interface IHeader extends IHeaderWrapStyle {}

function Header({ type = 'default' }: IHeader) {
  return (
    <HeaderWrap type={type}>
      {type === 'default' && <Image src={DayoffLogo} alt='logo' className='focus' width={24} />}
      <ul>
        <li className='localeswitch'><LocaleSwitch /></li>
        <li><ThemeSwitch /></li>
      </ul>
    </HeaderWrap>
  );
}

export default memo(Header);
