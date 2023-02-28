import React, { useCallback, useEffect, memo } from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';

function Sidebar() {
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
      console.log(
        toggleTarget && target.className !== toggleTarget.className,
        target.className !== 'current-locale',
        target.className !== 'hidden',
      );
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

  return (
    <SidebarWrap>
      <ul>
        <li>
          <ToggleWrap onClick={onFlab}>
            {locales &&
              locales.map((loc: string) => (
                <div
                  key={`locale-${loc}`}
                  className={loc === locale ? 'current-locale' : 'hidden'}
                  onClick={() => onChangeLocale(loc === locale ? 'current-locale' : loc)}
                >
                  {loc.toLocaleUpperCase()}
                </div>
              ))}
          </ToggleWrap>
        </li>
        <li>dasdsad</li>
      </ul>
    </SidebarWrap>
  );
}

export default memo(Sidebar);

const SidebarWrap = styled.nav`
  position: absolute;
  top: 50%;
  left: 92%;
  transform: translate(-50%, -50%);
  width: 100%;
  max-width: 3rem;
  ul {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 1.5rem;
  }
  li {
    position: relative;
  }
`;

export const ToggleWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  transition: width 0.5s;
  width: 3rem;
  height: 2rem;
  border: 1px solid var(--color-gray-4);
  border-radius: 0.5rem;
  background-color: var(--color-gray-2);
  overflow: hidden;

  > div:not(.current-locale) {
    color: var(--color-gray-5);
    &:hover {
      color: var(--color-gray-9);
    }
  }

  > div.current-locale {
    color: var(--color-gray-9);
  }

  &.active {
    width: 10rem;
    transition: width 0.5s;
    > div {
      cursor: pointer;
    }
  }

  .hidden {
    display: none;
    opacity: 0;
  }

  .appear {
    animation: flabIn 0.5s forwards;
    display: initial;
  }

  .disappear {
    animation: flabOut 0.5s forwards;
  }

  @keyframes flabIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @keyframes flabOut {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`;
