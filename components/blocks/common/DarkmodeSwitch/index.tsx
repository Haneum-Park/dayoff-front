import React, { memo, useCallback } from 'react';
import { MdLightMode, MdDarkMode } from 'react-icons/md';

import useDarkmode from '@hook/useDarkmode';

import { DarkmodeSwitchWrap, DarkmodeCheckbox, DarkmodeLabel } from './styles';

function DarkmodeSwitch() {
  const [darkmode, setDarkmode] = useDarkmode();

  const onChangeDarkmode = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { checked } = e.target;
      setDarkmode(checked);
    },
    [setDarkmode],
  );

  return (
    <DarkmodeSwitchWrap>
      <DarkmodeCheckbox
        type='checkbox'
        id='darkmode'
        checked={darkmode}
        onChange={onChangeDarkmode}
        className='reverse'
      />
      <DarkmodeLabel htmlFor='darkmode'>
        <MdDarkMode size='18' fill='var(--color-gray-0)' />
        <MdLightMode size='18' fill='var(--color-gray-9)' />
      </DarkmodeLabel>
    </DarkmodeSwitchWrap>
  );
}

export default memo(DarkmodeSwitch);
