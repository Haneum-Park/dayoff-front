import React, { memo } from 'react';

import footer from '@const/footer';

import { FooterInfoWrap } from './styles';

function FooterInfo() {
  return (
    <FooterInfoWrap>
      {footer.map((item, idx) => (
        <div key={idx}>{item}</div>
      ))}
    </FooterInfoWrap>
  );
}

export default memo(FooterInfo);
