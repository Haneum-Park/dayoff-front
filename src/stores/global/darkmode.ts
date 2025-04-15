import { atom } from 'jotai';

export type TypeAtomDarkmode = boolean;

export const atomDarkmode = atom<TypeAtomDarkmode>(false);
