/* eslint-disable max-len */
import React, { memo } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import { GlobalStyle } from '@layout/globalStyles';

import routers from './index.router';

const ROOT = () => (
  <>
    <GlobalStyle />
    <BrowserRouter>
      <Routes>
        {routers.map(({ path, component: Component, key, child }) => (
          <Route key={key} path={path} element={<Component />}>
            {child && child.length > 0 && child.map(({ childKey, childComp: ChildComp, childPath }) => (
              <Route key={childKey} path={childPath} element={<ChildComp />} />
            ))}
          </Route>
        ))}
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
    </BrowserRouter>
  </>
);

export default memo(ROOT);
