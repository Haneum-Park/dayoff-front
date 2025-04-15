import { atom } from 'jotai';

export type TypeAtomAlert = boolean;

export const atomAlert = atom<TypeAtomAlert>(false);
