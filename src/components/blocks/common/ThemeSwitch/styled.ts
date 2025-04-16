'use client';

import styled from '@emotion/styled';
import '@radix-ui/colors/gray.css';

export const ThemeSwitchWrap = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  border: 1px solid var(--gray-8);
  border-radius: 0.3rem;
  background-color: var(--gray-1);
  width: 3rem;
  height: 1.625rem;
  padding: 0.3rem 0;

  cursor: pointer;
`;

export const ThemeCheckbox = styled.input`
  appearance: none;
  position: absolute;
  top: 50%;
  left: 26%;
  transform: translate(-50%, -50%);
  width: 1.313rem;
  height: 1.313rem;
  border-radius: 0.25rem;
  color: var(--gray-1);
  border: 1px solid var(--gray-12);
  padding: 0;
  margin: 0;

  cursor: pointer;

  transition: left 0.4s ease;
  &:checked {
    left: 74%;
  }
`;

export const ThemeLabel = styled.label`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;

  cursor: pointer;
`;
