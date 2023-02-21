import React, { useEffect, memo } from 'react';
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
  height: 50px;
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
      <Image {...img} />
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
