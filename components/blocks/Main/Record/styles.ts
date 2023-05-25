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
    &:not(:first-child):not(:last-child) {
      margin-top: 1.5rem;
      margin-bottom: 1.5rem;
    }
  }
`;

interface ContentWrapProps {
  isAccordian: boolean;
}

export const ContentWrap = styled.div<ContentWrapProps>`
  display: flex;
  flex-direction: column;
  justify-content: cneter;
  align-items: start;
  gap: 1rem;
  break-inside: avoid;
  &:not(:first-child) {
    margin-top: 3rem;
  }
  ${({ isAccordian }) => (isAccordian ? 'max-height: calc(36rem / 16);' : 'max-height: 50vh;')}
  transition: max-height 0.5s ease-in-out;
  overflow: hidden;
  min-height: calc(36rem / 16);
`;

export const ContentTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  cursor: pointer;

  > h2 {
    margin: 0;
    font-family: 'Noto Sans KR', sans-serif;
    font-family: 'Source Serif 4', serif;
    font-size: 28px;
    font-weight: 300;
  }
`;

export const ContentDescWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  gap: 0.5rem;
`;

export const ContentListWrap = styled.div`
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

export interface ContentMemoProps {
  cursor?: 'pointer' | 'default';
}

export const ContentMemo = styled.p<ContentMemoProps>`
  font-size: 12px;
  font-family: Light;
  margin: 0;
  cursor: ${({ cursor }) => cursor ?? 'default'};

  ${({ cursor }) =>
    cursor === 'pointer'
      ? 'transition: font-family 0.3s ease-in-out; &:hover { font-family: Bold; }'
      : ''}
`;

export const ContentUl = styled.ul``;
