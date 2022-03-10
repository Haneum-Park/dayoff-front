import React, { memo } from 'react';
import styled from 'styled-components';

import { baseInfo, copyright } from '@constant/main/signFooter';

import { pixelToRem, colorchip } from '@util/style.util';

const SignFooterWrap = styled.footer`
  position: fixed;
  left: 50%;
  bottom: 0;
  transform: translateX(-50%);
  > div {
    color: ${colorchip.black};
    text-align: center;
    span {
      font-size: ${pixelToRem(14)};
    }
  }
  
  .footer-base-info {
    span {
      &::after {
        content: '';
        display: inline-block;
        margin: 0 ${pixelToRem(3)};
        height: 12px;
        border: 1px solid ${colorchip.black};
        vertical-align: middle;
      }
      &:last-child::after {
        content: '';
        width: 0px
        height: 0px;
        border: none;
      }
    }
    margin-bottom: 0.5rem;
  }

  .copyright {
    margin-bottom: ${pixelToRem(20)};
    span {
      margin-right: ${pixelToRem(3)};
      &:last-child {
        margin-right: 0;
      }
    }
  }
`;

function SignFooter() {
  return (
    <SignFooterWrap>
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
