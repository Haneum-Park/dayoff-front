import { atom } from 'jotai';

export type TypeAtomLanguage = 'ko' | 'en';

export const atomLanguage = atom<TypeAtomLanguage>('ko');
