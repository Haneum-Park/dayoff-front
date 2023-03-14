import styled from 'styled-components';

export const DarkmodeSwitchWrap = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  border: 1px solid var(--color-gray-4);
  border-radius: 0.5rem;
  background-color: var(--color-gray-2);
  width: 3rem;
  height: 1.5rem;

  cursor: pointer;
`;

export const DarkmodeCheckbox = styled.input`
  appearance: none;
  position: absolute;
  top: 50%;
  left: 26%;
  transform: translate(-50%, -50%);
  width: 1.2rem;
  height: 1.2rem;
  border-radius: 0.35rem;
  color: var(--color-gray-0);
  background-color: var(--color-gray-9);
  padding: 0;
  margin: 0;

  cursor: pointer;

  transition: left 0.4s ease;
  &:checked {
    left: 74%;
  }
`;

export const DarkmodeLabel = styled.label`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;

  cursor: pointer;
`;
