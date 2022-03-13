import React from 'react';

import Main from '@page/main/index';

import BlogMain from '@page/blog/main/index';

type Router = {
  path: string;
  component: React.FC,
  key: string;
  child?: {
    childPath: string;
    childComp: React.FC;
    childKey: string;
  }[];
}

const routers: Router[] = [
  { path: '/', component: Main, key: 'main' },
  { path: '/blog', component: BlogMain, key: 'blogmain' },
];

export default routers;
