'use client';

import { memo } from 'react';
import { SunIcon, MoonIcon } from '@radix-ui/react-icons';
import * as colors from '@radix-ui/colors';

import useDarkmode from '@hooks/useDarkmode';

import { DarkmodeSwitchWrap, DarkmodeCheckbox, DarkmodeLabel } from './styled';

function DarkmodeSwitch() {
  const [darkmode, onDarkmode] = useDarkmode();

  return (
    <DarkmodeSwitchWrap>
      <DarkmodeCheckbox type='checkbox' id='darkmode' checked={darkmode} onChange={(e) => onDarkmode(e.target.checked)} />
      <DarkmodeLabel htmlFor='darkmode'>
        <SunIcon fill={colors.gray.gray1} />
        <MoonIcon fill={colors.gray.gray12} />
      </DarkmodeLabel>
    </DarkmodeSwitchWrap>
  );
}

export default memo(DarkmodeSwitch);
