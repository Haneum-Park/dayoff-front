/* eslint-disable consistent-return */
import { useCallback, useEffect } from 'react';
import { useRouter } from 'next/router';

import i18nextConfig from '@/next-i18next.config';

function LocaleSwitchScript() {
  const { query, pathname, push } = useRouter();

  const onChangeLocale = useCallback(
    (loc: string) => {
      if (loc === 'current-locale') return;
      const pName = pathname.replace('[locale]', loc);
      push(pName, pName, { locale: loc });
    },
    [pathname, push],
  );

  const onFlab = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (e.currentTarget.classList.contains('active')) {
      e.currentTarget.classList.remove('active');
    } else {
      e.currentTarget.classList.add('active');
    }
    document.querySelectorAll('.hidden').forEach((el) => {
      if (el.classList.contains('appear')) {
        el.classList.add('disappear');
        setTimeout(() => {
          el.classList.remove('appear');
        }, 290);
      } else if (!el.classList.contains('appear') || el.classList.contains('disappear')) {
        el.classList.remove('disappear');
        el.classList.add('appear');
      }
    });
  }, []);

  useEffect(() => {
    document.querySelectorAll('.hidden').forEach((el) => {
      el.classList.remove('appear');
      el.classList.remove('disappear');
    });

    if (document.querySelector('.active')) {
      document.querySelector('.active')?.classList.remove('active');
    }
  }, []);

  useEffect(() => {
    document.addEventListener('click', (e) => {
      const target = e.target as HTMLElement;
      const toggleTarget = document.querySelector('.active');
      if (
        toggleTarget &&
        target.className !== toggleTarget.className &&
        target.className.indexOf('current-locale') === -1
      ) {
        document.querySelector('.active')?.classList.remove('active');
        document.querySelectorAll('.hidden').forEach((el) => {
          if (el.classList.contains('appear')) {
            el.classList.add('disappear');
            setTimeout(() => {
              el.classList.remove('appear');
            }, 100);
          }
        });
      }
    });
  }, []);

  return { locales: i18nextConfig.i18n.locales, locale: query.locale, onChangeLocale, onFlab };
}

export default LocaleSwitchScript;
