import styled from 'styled-components';

export const MainContentWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
  gap: 1.5rem;
  width: 100%;
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
`;

export const MasonryWrap = styled.div``;

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
