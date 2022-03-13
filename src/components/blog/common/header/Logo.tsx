import React, { useCallback, memo } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { pixelToRem } from '@util/style.util';

import HeaderLogo from '@image/logo.png';

const LogoWrap = styled.div`
  button {
    img {
      width: ${pixelToRem(256)};
    }
  }
`;

function Logo() {
  const navigate = useNavigate();

  const onRedirect = useCallback(() => {
    navigate('/blog');
  }, []);

  return (
    <LogoWrap>
      <button type='button' onClick={() => onRedirect()}>
        <img src={HeaderLogo} alt='header-logo' />
      </button>
    </LogoWrap>
  );
}

export default memo(Logo);
