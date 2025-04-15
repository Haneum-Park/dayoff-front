'use client';

import { useEffect, memo } from 'react';
import Image from 'next/image';
import type { ImageProps } from 'next/image';
import { useAtom } from 'jotai';
import { Button } from '@radix-ui/themes';

import { Link } from '@i18n/routing';

import { atomLanguage } from '@stores/global/language';

import { HeaderWrap, Languages } from './styled';

export interface HeaderProps {
  img: ImageProps;
}

function Header({ img }: HeaderProps) {
  const [language, setLanguage] = useAtom(atomLanguage);

  const onSwitchLanguage = (lang: 'ko' | 'en') => setLanguage(lang);

  useEffect(() => {}, []);

  return (
    <HeaderWrap>
      <Link href='/'><Image {...img} /></Link>
      <Languages>
        <Button
          className={language === 'ko' ? 'lang-ko' : ''}
          onClick={() => onSwitchLanguage('ko')}
          variant='outline'
        >
          Ko
        </Button>
        <span> / </span>
        <Button
          className={language === 'en' ? 'lang-en' : ''}
          onClick={() => onSwitchLanguage('en')}
          variant='outline'
        >
          En
        </Button>
      </Languages>
    </HeaderWrap>
  );
}

export default memo(Header);
