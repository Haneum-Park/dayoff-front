'use client';

import styled from '@emotion/styled';

export const LocaleSwitchWrap = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: var(--space-3);
  width: 3rem;
  height: 1.625rem;
  border: 1px solid var(--gray-8);
  border-radius: 0.3rem;
  background-color: var(--gray-1);
  overflow: hidden;
  line-height: 1.625rem;
  transition: width 0.5s ease-in-out;

  &.active {
    width: 6rem;
    transition: width 0.5s ease-in-out;

    & > div {
      transition: left 0.5s ease-in-out;
      &.appear, &.current-locale {
        &.ko {
          left: calc(50% - 0.7rem);
        }
        &.en {
          left: calc(50% + 0.7rem);
        }
      }
    }
  }

  & > div {
    transform: translateX(-50%);
    transition: left 0.5s ease-in-out;

    &:not(.current-locale) {
      color: var(--gray-9);
      &:hover {
        color: var(--gray-12);
      }
    }

    &.current-locale {
      left: 50%;
      color: var(--gray-12);
    }

    &.hidden {
      display: none;
      opacity: 0;
    }

    &.appear {
      animation: flabIn 0.3s forwards;
      display: initial;
      transition: left 0.5s ease-in-out;
    }

    &.disappear {
      animation: flabOut 0.3s forwards;
      left: 50%;
      transition: left 0.5s ease-in-out;
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
  }
`;

export const CurrentLocale = styled.div`
  position: absolute;
  font-size: var(--font-size-2);
  cursor: pointer;
`;
