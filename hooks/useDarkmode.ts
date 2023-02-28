import { useCallback, useEffect } from 'react';
import { useSnapshot } from 'valtio';

import { proxyDarkmode } from 'stores/global/darkmode';

import { cookies } from '@util/common.util';

function useDarkmode(): [boolean, (mode: boolean) => void] {
  const { darkmode } = useSnapshot(proxyDarkmode);

  const setDarkmode = useCallback((mode: boolean) => {
    proxyDarkmode.darkmode = mode as boolean;
    cookies.set('darkmode', mode ? '1' : '0');
  }, []);

  useEffect(() => {
    if (document && document.cookie) {
      const isDarkmode = cookies.get('darkmode');
      proxyDarkmode.darkmode = isDarkmode === '1';
    }
  }, []);

  return [darkmode, setDarkmode];
}

export default useDarkmode;
