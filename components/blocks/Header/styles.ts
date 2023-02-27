import styled from 'styled-components';

export const HeaderWrap = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: var(--content-width);
  height: 50px;
  padding: 0 ${16 / 16}rem;

  img {
    width: 150px;
    height: 28px;
    cursor: pointer;
  }
`;

export const Languages = styled.div`
  display: flex;
  justify-content: flex-end;
  > *,
  > button {
    color: var(--color-gray-4);
  }
  span {
    margin: 0 calc(5rem / 16);
  }
  button {
    border: none;
    border-radius: 0;
    margin: 0;
    padding: 0;
    &.lang-ko,
    &.lang-en {
      color: var(--color-gray-9);
    }
  }
`;
