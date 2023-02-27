import React, { memo } from 'react';
import type { NextPage } from 'next';

import LayoutContent from '@block/common/LayoutContent';
import MainGrid from '@block/Main';

const Main: NextPage = () => (
  <LayoutContent>
    <MainGrid></MainGrid>
  </LayoutContent>
);

export default memo(Main);
