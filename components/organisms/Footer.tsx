import React, { memo } from 'react';
import styled from 'styled-components';

import Info from '@molecule/Footer/Info';
import Copyright from '@molecule/Footer/Copyright';

const FooterWrap = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

function Footer() {
  return (
    <FooterWrap>
      <Info />
      <Copyright />
    </FooterWrap>
  );
}

export default memo(Footer);
