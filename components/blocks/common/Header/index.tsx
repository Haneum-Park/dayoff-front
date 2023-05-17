/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, memo } from 'react';
import Image from 'next/image';
import type { ImageProps } from 'next/image';
import { useSnapshot } from 'valtio';

import Button from '@atom/Button';
import Link from '@common/Link';

import { proxyLanguage } from '@store/global/language';

import { HeaderWrap, Languages } from './styles';

export interface HeaderProps {
  img: ImageProps;
}

function Header({ img }: HeaderProps) {
  const { language } = useSnapshot(proxyLanguage);

  const onSwitchLanguage = (lang: 'ko' | 'en') => {
    proxyLanguage.language = lang;
  };

  useEffect(() => {}, []);

  return (
    <HeaderWrap>
      <Link href='/'>
        <Image {...img} />
      </Link>
      <Languages>
        <Button
          className={language === 'ko' ? 'lang-ko' : ''}
          onClick={() => onSwitchLanguage('ko')}
        >
          Kor
        </Button>
        <span> / </span>
        <Button
          className={language === 'en' ? 'lang-en' : ''}
          onClick={() => onSwitchLanguage('en')}
        >
          Eng
        </Button>
      </Languages>
    </HeaderWrap>
  );
}

export default memo(Header);
