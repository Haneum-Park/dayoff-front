import React, { memo } from 'react';

import CVBtns from './CVBtns';

import { IndexGridBackground, IndexGridWrap, IndexGridTitle, LocalPageStyle } from './styles';

function IndexGrid() {
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
          <CVBtns />
        </IndexGridWrap>
      </IndexGridBackground>
    </>
  );
}

export default memo(IndexGrid);
