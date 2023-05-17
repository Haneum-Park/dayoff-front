import styled from 'styled-components';

import { MEDIA_QUERY } from '@util/design.util';

export const MainContentWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
  gap: 1.5rem;
  width: 100%;
  height: 800px;
  overflow-y: auto;
  margin-top: 2rem;

  > div {
    width: 100%;
    &:first-child {
      max-width: 30%;
    }
    &:nth-child(2) {
      max-width: 50%;
    }
    &:last-child {
      max-width: 20%;
    }
  }

  ${MEDIA_QUERY.max('lg-tablet')} {
    flex-direction: column;
    align-items: center;
    margin-top: 1rem;
    padding: 0 1rem;
    height: 100%;
    overflow-y: initial;

    > div {
      width: 100%;
      &:first-child,
      &:nth-child(2),
      &:last-child {
        max-width: 100%;
      }
    }
  }
`;

export const MasonryWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  ${MEDIA_QUERY.max('lg-tablet')} {
    &:last-child {
      padding-bottom: 1rem;
    }
  }
`;

export const ContentWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: cneter;
  align-items: start;
  gap: 1rem;
  break-inside: avoid;
  &:not(:first-child) {
    margin-top: 3rem;
  }
`;

export const ContentTitle = styled.h2`
  margin: 0;
  font-family: 'Noto Sans KR', sans-serif;
  font-family: 'Source Serif 4', serif;
  font-size: 30px;
  font-weight: 300;
`;

export const ContentListWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;

  &.round-rectangle {
    border-radius: 50px;
    border: 1px solid var(--color-gray-8);
    /* width: 100%;
    max-width: calc(120rem / 16); */
    padding: 0.5rem 1.5rem;
  }
`;

export const ContentDesc = styled.div`
  font-size: 14px;
  font-family: Bold;
`;

export const ContentMemo = styled.p`
  font-size: 12px;
  font-family: Light;
  margin: 0;
`;

export const ContentUl = styled.ul``;
