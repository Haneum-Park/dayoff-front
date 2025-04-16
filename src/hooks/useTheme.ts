'use client';

import { useTheme as useNextTheme } from 'next-themes';

export type TypeTheme = 'light' | 'dark';

function useTheme(): [TypeTheme, (mode: boolean) => void] {
  const { theme, setTheme } = useNextTheme();

  const onChangeTheme = (mode: boolean) => {
    const currentTheme = mode ? 'dark' : 'light';
    setTheme(currentTheme);
  };

  return [theme as TypeTheme, onChangeTheme];
}

export default useTheme;
