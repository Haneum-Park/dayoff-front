'use client';

import React from 'react';

import { CommonSwitchWrap } from './styled';

const CommonSwitch = ({ children }: { children: React.ReactNode }) => {
  return (
    <CommonSwitchWrap display='flex' align='center' justify='center' gap='1'>
      {children}
    </CommonSwitchWrap>
  );
};

export default CommonSwitch;

