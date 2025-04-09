'use client';

import { memo } from 'react';

import footer from '@consts/footer';

import { CopyrightWrap, FooterInfoWrap, FooterWrap } from './styled';

function Footer() {
  return (
    <FooterWrap>
      <FooterInfoWrap>
        {footer.map((item, idx) => (
          <div key={idx}>{item}</div>
        ))}
      </FooterInfoWrap>
      <CopyrightWrap>All right reserved. 2023 util-api</CopyrightWrap>
    </FooterWrap>
  );
}

export default memo(Footer);
