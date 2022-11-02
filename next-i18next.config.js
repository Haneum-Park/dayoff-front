const path = require('path');

module.exports = {
  debug: process.env.NODE_ENV === 'development',
  reloadOnPrerender: process.env.NODE_ENV === 'development',
  i18n: {
    defaultLocale: 'ko',
    locales: ['ko', 'en'],
  },
  localePath: path.resolve('./public/locales'),
};
