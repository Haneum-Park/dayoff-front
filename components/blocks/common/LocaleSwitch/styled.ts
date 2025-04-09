import styled from '@emotion/styled';

export const LocaleSwitchWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: var(--space-3);
  transition: width 0.5s;
  width: 3rem;
  height: 1.625rem;
  border: 1px solid var(--gray-8);
  border-radius: 0.3rem;
  background-color: var(--gray-1);
  overflow: hidden;

  &.active {
    width: 10rem;
    transition: width 0.5s;
    > div {
      cursor: pointer;
    }
  }
`;

export const CurrentLocale = styled.div`
  &:not(.current-locale) {
    color: var(--gray-9);
    &:hover {
      color: var(--gray-12);
    }
  }

  &.current-locale {
    color: var(--gray-12);
  }

  &.hidden {
    display: none;
    opacity: 0;
  }

  &.appear {
    animation: flabIn 0.5s forwards;
    display: initial;
  }

  &.disappear {
    animation: flabOut 0.5s forwards;
  }

  @keyframes flabIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @keyframes flabOut {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`;
