import React, { memo } from 'react';
import { useSelector } from 'react-redux';

import { FooterWrap as SignFooterWrap } from '@comp/common/footer/styles';

import { RootState } from '@store/index';

function SignFooter() {
  const { baseInfo, copyright } = useSelector((state: RootState) => state.footerInfo);

  return (
    <SignFooterWrap fontSize={14}>
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
    </SignFooterWrap>
  );
}

export default memo(SignFooter);
