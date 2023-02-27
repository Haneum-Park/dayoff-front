import React, { memo } from 'react';
import type { NextPage } from 'next';

import IndexGrid from '@block/Index';

const Home: NextPage = () => <IndexGrid />;

export default memo(Home);
