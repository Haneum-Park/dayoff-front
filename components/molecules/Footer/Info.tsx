import React, { memo } from 'react';

import footer from '@const/footer';

import { FooterInfoWrap } from './styles';

function FooterInfo() {
  return <FooterInfoWrap>{footer.join(' | ')}</FooterInfoWrap>;
}

export default memo(FooterInfo);
