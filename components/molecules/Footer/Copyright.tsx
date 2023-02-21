import React, { memo } from 'react';

import { CopyrightWrap } from './styles';

function Copyright() {
  return <CopyrightWrap>All right reserved. 2022 day-off</CopyrightWrap>;
}

export default memo(Copyright);
