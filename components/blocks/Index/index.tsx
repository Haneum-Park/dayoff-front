import React from 'react';
import { useRouter } from 'next/router';
import { useSnapshot } from 'valtio';

import GroupBtn from '@block/common/GroupBtn';

import { proxyBtns, type ProxyBtns } from '@store/index/btns';

import {
  IndexGridBackground,
  IndexGridWrap,
  IndexGridTitle,
  IndexGridBtnWrap,
  LocalPageStyle,
} from './styles';

type IndexGridProps = {
  children?: React.ReactNode;
};

function IndexGrid({ children }: IndexGridProps) {
  const { push } = useRouter();
  const { btns } = useSnapshot(proxyBtns);

  const onRedirect = (event?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    push(`/${(event as React.MouseEvent<HTMLButtonElement, MouseEvent>).currentTarget.id}`);
  };

  return (
    <>
      <LocalPageStyle />
      <IndexGridBackground>
        <IndexGridWrap>
          <IndexGridTitle>
            <svg width='440' height='65' viewBox='0 -60 440 65'>
              <text x='0'>P</text>
              <text x='50'>O</text>
              <text x='110'>R</text>
              <text x='160'>T</text>
              <text x='210'>F</text>
              <text x='255'>O</text>
              <text x='315'>L</text>
              <text x='360'>I</text>
              <text x='380'>O</text>
            </svg>
          </IndexGridTitle>
          <IndexGridBtnWrap>
            <GroupBtn
              btns={btns as ProxyBtns['btns']}
              align='center'
              maxWidth={'calc(440rem / 16)'}
              onClick={onRedirect}
            />
          </IndexGridBtnWrap>
          {children}
        </IndexGridWrap>
      </IndexGridBackground>
    </>
  );
}

export default IndexGrid;
