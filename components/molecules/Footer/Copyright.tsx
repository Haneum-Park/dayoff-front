import React, { memo } from 'react';

import { CopyrightWrap } from './styles';

function Copyright() {
  return <CopyrightWrap>All right reserved. 2023 util-api</CopyrightWrap>;
}

export default memo(Copyright);
