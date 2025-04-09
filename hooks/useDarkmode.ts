'use client';

import { useEffect } from 'react';
import { useAtom } from 'jotai';

import { atomDarkmode } from '@stores/global/darkmode';

import { cookies } from '@utils/common.util';

function useDarkmode(): [boolean, (mode: boolean) => void] {
  const [darkmode, setDarkmode] = useAtom(atomDarkmode);

  const onDarkmode = (mode: boolean) => {
    setDarkmode(mode);
    cookies.set('darkmode', mode ? '1' : '0');
  };

  useEffect(() => {
    if (cookies.get('darkmode')) {
      setDarkmode(cookies.get('darkmode') === '1');
    }
  }, []);

  return [darkmode, onDarkmode];
}

export default useDarkmode;
