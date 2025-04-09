'use client';

import { useEffect, memo } from 'react';

import HistoryBtns from './HistoryBtns';
import { IndexGridWrap, IndexGridTitle } from './styled';

function IndexGrid() {
  useEffect(() => {
    window.addEventListener('resize', () => {
      const svgEl = document.querySelector('#index-svg') as SVGElement;
      if (window.innerWidth <= 390) {
        svgEl.style.transform = 'translate(-50%, -50%) scale(0.8)';
      } else if (window.innerWidth < 1280) {
        svgEl.style.transform = 'translate(-50%, -50%) scale(0.9)';
        svgEl.removeAttribute('width');
      } else {
        svgEl.style.transform = 'scale(1)';
        svgEl.setAttribute('width', '440');
      }
    });

    return () => {
      document.removeEventListener('resize', () => {});
    };
  });

  return (
    <IndexGridWrap>
      <IndexGridTitle>
        <svg id='index-svg' width='440' height='65' viewBox='0 -60 440 65'>
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
      <HistoryBtns />
    </IndexGridWrap>
  );
}

export default memo(IndexGrid);
