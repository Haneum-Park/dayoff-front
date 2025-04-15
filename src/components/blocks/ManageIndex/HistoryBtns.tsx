'use client';

import React, { useEffect, useState } from 'react';
import { useAtom, useAtomValue } from 'jotai';
import { type ButtonProps } from '@radix-ui/themes';

import AtomButton from '@atoms/Button';
import { atomBtns, type TypeAtomBtns } from '@stores/index/btns';
import { usePathname as usePathnameI18n, useRouter } from '@i18n/routing';
import { atomFoldToggle } from '@stores/index/foldToggle';

import { IndexGridBtnWrap, FoldWrap, GroupBtnWrap, GroupBtnContainer, MainVisibleBtn } from './styled';

const btnProps: ButtonProps = { color: 'gray', size: '3', variant: 'outline', radius: 'full' };

function HistoryBtns() {
  const pathname = usePathnameI18n();
  const { push } = useRouter();
  const [foldToggle, setFoldToggle] = useAtom(atomFoldToggle);
  const [initDisabled, setInitDisabled] = useState(true);
  const btns = useAtomValue<TypeAtomBtns>(atomBtns);

  const onRedirect = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    push(`${pathname}/${event.currentTarget.id}`);
  };

  const onFoldToggle = () => setFoldToggle((prev) => !prev);

  useEffect(() => {
    setTimeout(() => {
      setInitDisabled(false);
    }, 1500);
  })

  return (
    <IndexGridBtnWrap>
      <FoldWrap {...btnProps} onClick={onFoldToggle} disabled={initDisabled}>FOLD</FoldWrap>
      <GroupBtnWrap className={foldToggle ? 'fold-toggle' : ''}>
        <GroupBtnContainer justify='end' align='center' gap='2'>
          {btns?.map(({ children, ...rest }, idx) => (
            <AtomButton key={`btn-${idx}`} radius='full' onClick={onRedirect} {...rest}>
              {children}
            </AtomButton>
          ))}
        </GroupBtnContainer>
      </GroupBtnWrap>
      <MainVisibleBtn
        id='cv'
        className={foldToggle ? 'fold-toggle' : ''}
        {...btnProps}
        disabled={!!foldToggle}
        onClick={onRedirect}
      >
        MAIN
      </MainVisibleBtn>
    </IndexGridBtnWrap>
  );
}

export default HistoryBtns;
