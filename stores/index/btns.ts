import { atom } from 'jotai';
import type { ButtonProps } from '@radix-ui/themes';

export type TypeAtomBtns = ButtonProps[];

export const atomBtns = atom<TypeAtomBtns>([
  {
    children: '2020',
    id: '2020',
  },
  {
    children: '2021',
    id: '2021',
  },
  {
    children: '2022',
    id: '2022',
  },
]);
