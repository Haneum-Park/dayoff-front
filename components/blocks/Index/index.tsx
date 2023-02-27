import React from 'react';

import GroupBtn from '@block/common/GroupBtn';

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
              btns={[
                {
                  children: '2020',
                  bdColor: 'gray-9',
                  bdRadius: 32,
                  isEffect: true,
                },
                {
                  children: '2021',
                  bdColor: 'gray-9',
                  bdRadius: 32,
                  isEffect: true,
                },
                {
                  children: '2022',
                  bdColor: 'gray-9',
                  bdRadius: 32,
                  isEffect: true,
                },
              ]}
              align='center'
              maxWidth={'calc(440rem / 16)'}
            />
          </IndexGridBtnWrap>
          {children}
        </IndexGridWrap>
      </IndexGridBackground>
    </>
  );
}

export default IndexGrid;
