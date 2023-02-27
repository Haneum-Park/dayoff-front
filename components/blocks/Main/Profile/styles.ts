import styled from 'styled-components';

export const ProfileWrap = styled.div`
  display: grid;
  grid-template-columns: 0.2fr 1fr 0.5fr;
  width: 100%;
`;

export const ProfileImgWrap = styled.div`
  position: relative;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background-color: var(--color-gray-0);
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
`;

export const ProfileInfoWrap = styled.div`
  text-align: right;
  width: 100%;
  max-width: calc(330rem / 16);

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
