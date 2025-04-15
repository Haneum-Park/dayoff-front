import { atom } from 'jotai';

type TypeAtomFoldToggle = boolean;

export const atomFoldToggle = atom<TypeAtomFoldToggle>(false);
