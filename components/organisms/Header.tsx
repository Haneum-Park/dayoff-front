/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, memo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import type { ImageProps } from 'next/image';
import styled from 'styled-components';
import { useSnapshot } from 'valtio';

import Button from '@atom/Button';

import { proxyLanguage } from '@store/global/language';

export interface HeaderProps {
  img: ImageProps;
}

const HeaderWrap = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: var(--content-width);
  height: 50px;
  padding: 0 ${16 / 16}rem;

  img {
    width: 150px;
    height: 28px;
    cursor: pointer;
  }
`;

const Languages = styled.div`
  display: flex;
  justify-content: flex-end;
  > *,
  > button {
    color: var(--color-gray-4);
  }
  span {
    margin: 0 calc(5rem / 16);
  }
  button {
    border: none;
    border-radius: 0;
    margin: 0;
    padding: 0;
    &.lang-ko,
    &.lang-en {
      color: var(--color-gray-9);
    }
  }
`;

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
