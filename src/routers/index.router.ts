import React from 'react';

import Main from '@page/main/index';

import Blog from '@page/blog/index';

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
  { path: '/blog', component: Blog, key: 'blogMain' },
];

export default routers;
