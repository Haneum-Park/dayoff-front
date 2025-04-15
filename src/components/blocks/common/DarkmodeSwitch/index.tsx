'use client';

import { memo } from 'react';
import { Tooltip } from '@radix-ui/themes';
import { SunIcon, MoonIcon } from '@radix-ui/react-icons';
import { useTranslations } from 'next-intl';
import * as colors from '@radix-ui/colors';

import useDarkmode from '@hooks/useDarkmode';

import { DarkmodeSwitchWrap, DarkmodeCheckbox, DarkmodeLabel } from './styled';

function DarkmodeSwitch() {
  const t = useTranslations('common');
  const [darkmode, onDarkmode] = useDarkmode();

  return (
    <DarkmodeSwitchWrap>
      <DarkmodeCheckbox type='checkbox' id='darkmode' checked={darkmode} onChange={(e) => onDarkmode(e.target.checked)} />
      <DarkmodeLabel htmlFor='darkmode'>
        <Tooltip content={t('lightmode')}>
          <SunIcon fill={colors.gray.gray1} />
        </Tooltip>
        <MoonIcon fill={colors.gray.gray12} />
      </DarkmodeLabel>
    </DarkmodeSwitchWrap>
  );
}

export default memo(DarkmodeSwitch);
