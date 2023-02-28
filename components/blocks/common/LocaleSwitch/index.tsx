import React, { memo } from 'react';

import { LocaleSwitchWrap, CurrentLocale } from './styles';
import LocaleSwitchScript from './scripts';

function LocaleSwitch() {
  const { locale, locales, onChangeLocale, onFlab } = LocaleSwitchScript();

  return (
    <LocaleSwitchWrap onClick={onFlab}>
      {locales &&
        locales.map((loc: string) => (
          <CurrentLocale
            key={`locale-${loc}`}
            className={loc === locale ? 'current-locale' : 'hidden'}
            onClick={() => onChangeLocale(loc === locale ? 'current-locale' : loc)}
          >
            {loc.toLocaleUpperCase()}
          </CurrentLocale>
        ))}
    </LocaleSwitchWrap>
  );
}

export default memo(LocaleSwitch);
