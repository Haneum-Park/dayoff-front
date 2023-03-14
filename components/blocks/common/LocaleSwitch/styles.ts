import styled from 'styled-components';

export const LocaleSwitchWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  transition: width 0.5s;
  width: 3rem;
  height: 2rem;
  border: 1px solid var(--color-gray-4);
  border-radius: 0.5rem;
  background-color: var(--color-gray-0);
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
    color: var(--color-gray-5);
    &:hover {
      color: var(--color-gray-9);
    }
  }

  &.current-locale {
    color: var(--color-gray-9);
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
