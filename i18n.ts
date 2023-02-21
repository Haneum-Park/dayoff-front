import { I18n } from 'i18n-js';

type LocaleEnables = 'ko' | 'en';

const localeEnable: LocaleEnables[] = ['ko', 'en'];

const fmtLocale = (): LocaleEnables => {
  const { language } = window.navigator;
  if (language.includes('en')) return 'en';
  if (localeEnable.includes(language as LocaleEnables)) {
    return localeEnable[localeEnable.indexOf(language as LocaleEnables)] as LocaleEnables;
  }
  return 'ko';
};

const i18n = new I18n();

// i18n.translations = {
//   ko:
// }

i18n.locale = 'ko';

const useTranslate = () => {
  return (t: string) => {
    if (typeof window !== 'undefined') {
      i18n.locale = fmtLocale();
    }
    return i18n.t(t);
  };
};

export default useTranslate;
