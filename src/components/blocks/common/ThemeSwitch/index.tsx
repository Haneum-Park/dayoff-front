'use client';

import { Tooltip } from '@radix-ui/themes';
import { SunIcon, MoonIcon } from '@radix-ui/react-icons';
import { useTranslations } from 'next-intl';
import * as colors from '@radix-ui/colors';

import useTheme from '@hooks/useTheme';
import { ThemeSwitchWrap, ThemeCheckbox, ThemeLabel } from './styled';

function ThemeSwitch() {
  const t = useTranslations('common');
  const [theme, onChangeTheme] = useTheme();

  return (
    <ThemeSwitchWrap className='focus'>
      <ThemeLabel htmlFor='theme' className='focus'>
        <Tooltip content={t('lightmode')}>
          <SunIcon fill={colors.gray.gray1} className='focus' />
        </Tooltip>
        <Tooltip content={t('darkmode')} className='focus'>
          <MoonIcon fill={colors.gray.gray12} className='focus' />
        </Tooltip>
      </ThemeLabel>
      <ThemeCheckbox className='focus' type='checkbox' id='theme' checked={theme === 'dark'} onChange={(e) => onChangeTheme(e.target.checked)} />
    </ThemeSwitchWrap>
  );
}

export default ThemeSwitch;
