'use client';

import styled from '@emotion/styled';

import { MEDIA_QUERY } from '@utils/design.util';

export const ProfileWrap = styled.div`
  display: grid;
  grid-template-columns: 0.09fr 0.61fr 0.3fr;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  width: 100%;

  ${MEDIA_QUERY.max('sm-tablet')} {
    padding: 0 1rem;
    gap: 0;
    grid-template-columns: 0.1fr 2fr;
    grid-template-areas:
      'profileImg profileInfo'
      'profileDesc profileDesc';
    justify-content: center;
  }
`;

export const ProfileImgWrap = styled.div`
  position: relative;
  aspect-ratio: 1 / 1;
  width: calc(120rem / 16);
  height: calc(120rem / 16);
  border-radius: 50%;
  background-color: var(--white-a12);
  overflow: hidden;
  ${MEDIA_QUERY.max('sm-tablet')} {
    width: calc(100rem / 16);
    height: calc(100rem / 16);
    order: 1;
    grid-area: profileImg;
    img {
      width: 60px;
      height: 90px;
    }
  }

  img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

export const ProfileDescWrap = styled.div`
  width: 100%;
  max-width: calc(600rem / 16);
  border: 1px solid var(--gray-7);
  border-radius: 5rem;
  margin: 0.5rem 0;
  padding: 1.5rem;
  font-size: var(--font-size-2);
  font-family: 'ExtraLight';
  color: var(--gray-12);
  ${MEDIA_QUERY.max('sm-tablet')} {
    order: 3;
    grid-area: profileDesc;
    &,
    div {
      font-size: var(--font-size-1);
    }
  }
`;

export const ProfileInfoWrap = styled.div`
  text-align: right;
  width: 100%;
  max-width: calc(275rem / 16);
  justify-self: end;

  h1 {
    margin: 0 0 0.5rem;
    font-family: 'Noto Sans KR', sans-serif;
    font-family: 'Source Serif 4', serif;
    font-weight: 400;
    color: var(--gray-12);
  }

  div {
    font-family: 'ExtraLight';
    font-size: var(--font-size-2);
    color: var(--gray-11);
  }

  ${MEDIA_QUERY.max('sm-tablet')} {
    order: 2;
    grid-area: profileInfo;
  }

  ${MEDIA_QUERY.max('tablet')} {
    text-align: left;
    div {
      font-size: var(--font-size-1);
    }
  }
`;
