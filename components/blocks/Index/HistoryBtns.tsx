import React from 'react';
import { useRouter } from 'next/router';
import { useAtom, useAtomValue } from 'jotai';
import { Button } from '@radix-ui/themes';

import { atomBtns, type TypeAtomBtns } from '@stores/index/btns';
import { atomFoldToggle } from '@stores/index/foldToggle';

import { IndexGridBtnWrap, FoldWrap, GroupBtnWrap, GroupBtnContainer, MainVisibleBtn } from './styled';

function HistoryBtns() {
  const { query, push } = useRouter();
  const [foldToggle, setFoldToggle] = useAtom(atomFoldToggle);
  const btns = useAtomValue<TypeAtomBtns>(atomBtns);

  const onRedirect = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    push(`/${query.locale || 'ko'}/${event.currentTarget.id}`);
  };

  const onFoldToggle = () => setFoldToggle((prev) => !prev);

  return (
    <IndexGridBtnWrap>
      <FoldWrap color='gray' size='3' radius='full' variant='outline' onClick={onFoldToggle}>FOLD</FoldWrap>
      <GroupBtnWrap className={foldToggle ? 'fold-toggle' : ''}>
        <GroupBtnContainer justify='end' align='center' gap='2'>
          {btns?.map(({ children, ...rest }, idx) => (
            <Button key={`btn-${idx}`} size='3' radius='full' variant='outline' onClick={onRedirect} {...rest}>
              {children}
            </Button>
          ))}
        </GroupBtnContainer>
      </GroupBtnWrap>
      <MainVisibleBtn color='gray' size='3' radius='full' variant='outline' className={foldToggle ? 'fold-toggle' : ''} disabled={!!foldToggle} id='main' onClick={onRedirect}>
        Main
      </MainVisibleBtn>
    </IndexGridBtnWrap>
  );
}

export default HistoryBtns;
