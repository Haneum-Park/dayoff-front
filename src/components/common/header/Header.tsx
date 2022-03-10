import React, { memo } from 'react';
import { useLocation } from 'react-router-dom';

import { BaseStyle } from './styles';

function Header() {
  const { pathname } = useLocation();

  return <>{pathname.indexOf('main') === -1 && <BaseStyle>header</BaseStyle>}</>;
}

export default memo(Header);
