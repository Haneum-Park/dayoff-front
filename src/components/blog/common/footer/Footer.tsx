import React, { memo } from 'react';
import { useSelector } from 'react-redux';

import { RootState } from '@store/index';

import { FooterWrap } from '@comp/common/footer/styles';

function Footer() {
  const { baseInfo, copyright } = useSelector((state: RootState) => state.footerInfo);

  return (
    <FooterWrap>
      <div className='footer-base-info'>
        {baseInfo.map((info, idx) => (
          <span key={`info-${idx}`}>{info}</span>
        ))}
      </div>
      <div className='copyright'>
        {copyright.map((info, idx) => (
          <span key={`copyright-${idx}`}>{info}</span>
        ))}
      </div>
    </FooterWrap>
  );
}

export default memo(Footer);
