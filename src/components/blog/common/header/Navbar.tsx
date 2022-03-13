import React, { memo, useCallback, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';

import type { RootState } from '@store/index';
import blogHeaderSlice from '@store/slices/blog/common/header';

import { pixelToRem, font, colorchip } from '@util/style.util';

import Userbar from '@comp/blog/common/header/Userbar';

const NavbarWrap = styled.nav`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  max-width: 500px;
  .navbar {
    display: flex;
    justify-content: flex-end;
    width: inherit;
    max-width: inherit;
    li {
      display: flex;
      align-items: center;
      button {
        font-size: ${pixelToRem(20)};
        &.active {
          font-weight: ${font.weight.bold};
          color: ${colorchip.active};
        }
      }
      &::after {
        content: '';
        display: block;
        width: 1px;
        height: ${pixelToRem(18)};
        background-color: ${colorchip.gray};
        margin: 0 0.25rem;
      }
      &:last-child::after {
        display: none;
      }
    }
  }
  ul {
    align-items: center;
    &::after {
      content: '';
      display: block;
      width: 1px;
      height: ${pixelToRem(18)};
      background-color: ${colorchip.gray};
      margin: 0 0.75rem 0 0.5rem;
    }
    &:last-child::after {
      display: none;
    }
  }
`;

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const headers = useSelector((state: RootState) => state.blogHeader.headers);

  const onRedirect = useCallback((pathname: string) => {
    navigate(pathname);
  }, []);

  useEffect(() => {
    headers.forEach((header) => {
      if (location.pathname.indexOf(header.pathname) > -1) {
        dispatch(blogHeaderSlice.actions.onChangeActive(header.key));
      }
    });
  }, [dispatch, headers]);

  return (
    <NavbarWrap>
      <ul className='navbar'>
        {headers.map(({ nameKor, isActive, key, pathname }) => (
          <li key={key}>
            <button
              type='button'
              onClick={() => onRedirect(pathname)}
              className={isActive ? 'active' : ''}
            >
              {nameKor}
            </button>
          </li>
        ))}
      </ul>
      <Userbar />
    </NavbarWrap>
  );
}

export default memo(Navbar);
