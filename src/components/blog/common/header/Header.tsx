import React, { memo } from 'react';

import Logo from './Logo';
import Navbar from './Navbar';
import { HeaderWrap } from './styles';

function Header() {
  return (
    <HeaderWrap>
      <Logo />
      <Navbar />
    </HeaderWrap>
  );
}

export default memo(Header);
