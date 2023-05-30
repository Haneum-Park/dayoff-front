import React from 'react';
import { useRouter } from 'next/router';
import { useSnapshot } from 'valtio';

import GroupBtn from '@common/GroupBtn';

import { proxyBtns, type ProxyBtns } from '@store/index/btns';
import { onFoldToggle, proxyFoldToggleState } from '@store/index/foldToggle';

import { IndexGridBtnWrap, FoldWrap, GroupBtnWrap, MainVisibleBtn } from './styles';

function CVBtns() {
  const { query, push } = useRouter();
  const { btns } = useSnapshot(proxyBtns);
  const { foldToggle } = useSnapshot(proxyFoldToggleState);

  const onRedirect = (event?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    push(
      `/${query.locale || 'ko'}/${
        (event as React.MouseEvent<HTMLButtonElement, MouseEvent>).currentTarget.id
      }`,
    );
  };

  return (
    <IndexGridBtnWrap>
      <FoldWrap onClick={onFoldToggle}>FOLD</FoldWrap>
      <GroupBtnWrap foldToggle={foldToggle}>
        <GroupBtn
          btns={btns as ProxyBtns['btns']}
          align='center'
          maxWidth={'calc(440rem / 16)'}
          onClick={onRedirect}
        />
      </GroupBtnWrap>
      <MainVisibleBtn
        foldToggle={foldToggle}
        disabled={!!foldToggle}
        id='main'
        onClick={onRedirect}
      >
        Main
      </MainVisibleBtn>
    </IndexGridBtnWrap>
  );
}

export default CVBtns;
