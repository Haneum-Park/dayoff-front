import React, { memo } from 'react';

import { ToggleWrap } from './styles';
import LocaleSwitchScript from './scripts';

function LocaleSwitch() {
  const { locale, locales, onChangeLocale, onFlab } = LocaleSwitchScript();

  return (
    <ToggleWrap onClick={onFlab}>
      {locales &&
        locales.map((loc: string) => (
          <div
            key={`locale-${loc}`}
            className={loc === locale ? 'current-locale' : 'hidden'}
            onClick={() => onChangeLocale(loc === locale ? 'current-locale' : loc)}
          >
            {loc.toLocaleUpperCase()}
          </div>
        ))}
    </ToggleWrap>
  );
}

export default memo(LocaleSwitch);
