import React, { memo } from 'react';

import { copyright } from '@constant/footer';

import { CopyrightWrap } from './styles';

function Copyright() {
  return <CopyrightWrap>{copyright}</CopyrightWrap>;
}

export default memo(Copyright);
