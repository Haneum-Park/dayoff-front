import styled from 'styled-components';

import { MEDIA_QUERY } from '@util/design.util';

export const MainGridWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const ProfileWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 3rem;
  width: 100%;

  ${MEDIA_QUERY.max('tablet')} {
    gap: 1rem;
    flex-direction: column;
  }
`;

export const ProfileImgWrap = styled.div`
  position: relative;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background-color: var(--color-white);
  overflow: hidden;

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
  border: 1px solid var(--color-gray-6);
  border-radius: 5rem;
  margin: 0.5rem 0;
  padding: 1.5rem;
  font-size: 14px;
  font-family: 'ExtraLight';
  color: var(--color-gray-6);
`;

export const ProfileInfoWrap = styled.div`
  text-align: right;
  width: 100%;
  max-width: calc(275rem / 16);
  justify-self: end;

  ${MEDIA_QUERY.max('tablet')} {
    text-align: center;
  }

  h1 {
    margin: 0 0 0.5rem;
    font-family: 'Noto Sans KR', sans-serif;
    font-family: 'Source Serif 4', serif;
    font-weight: 300;
    color: var(--color-gray-9);
  }

  div {
    font-family: 'ExtraLight';
    font-size: 14px;
    color: var(--color-gray-6);
  }
`;
