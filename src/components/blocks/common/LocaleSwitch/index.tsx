'use client';

import { useEffect, memo } from 'react';
import classnames from 'classnames';
import { useLocale } from 'next-intl';
import { usePathname } from 'next/navigation';

import { routing, usePathname as usePathnameI18n, useRouter } from '@i18n/routing';

import { LocaleSwitchWrap, CurrentLocale } from './styled';

function LocaleSwitch() {
  const locale = useLocale();
  const pathnameI18n = usePathnameI18n();
  const pathname = usePathname();
  const router = useRouter();
  const { locales } = routing;

  const onFlab = (e: React.MouseEvent<HTMLDivElement>) => {
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
  };

  const onChangeLocale = (loc: 'ko' | 'en') => {
    if (pathname.indexOf(loc) === -1) {
      router.push({ pathname: pathnameI18n }, { locale: loc });
    }
  };

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

  return (
    <LocaleSwitchWrap onClick={onFlab} className='focus'>
      {locales &&
        locales.map((loc: 'ko' | 'en') => (
          <CurrentLocale
            key={`locale-${loc}`}
            className={classnames(loc, loc === locale ? 'current-locale' : 'hidden', 'focus')}
            onClick={() => onChangeLocale(loc)}
          >
            {loc.toLocaleUpperCase()}
          </CurrentLocale>
        ))}
    </LocaleSwitchWrap>
  );
}

export default memo(LocaleSwitch);
