import { useCallback, useEffect } from 'react';
import { useRouter } from 'next/router';

function LocaleSwitchScript() {
  const { locales, locale, pathname, push } = useRouter();

  const onChangeLocale = useCallback(
    (loc: string) => {
      if (loc === 'current-locale') return;
      push(pathname, pathname, { locale: loc });
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
        target.className !== 'current-locale'
      ) {
        document.querySelector('.active')?.classList.remove('active');
        document.querySelectorAll('.hidden').forEach((el) => {
          if (el.classList.contains('appear')) {
            el.classList.add('disappear');
            setTimeout(() => {
              el.classList.remove('appear');
            }, 290);
          }
        });
      }
    });
  }, []);

  return { locales, locale, onChangeLocale, onFlab };
}

export default LocaleSwitchScript;
