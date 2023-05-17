/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import Home from '@page/[locale]//index';

export default {
  title: 'Pages/Home',
  component: Home,
};

export const HomePage = () => <Home />;
