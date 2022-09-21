type Breakpoints = {
  mobile: number;
  'sm-tablet': number;
  'lg-tablet': number;
  desktop: number;
};

const MEDIA_QUERY = {
  breakpoints: {
    mobile: 500,
    'sm-tablet': 768,
    'lg-tablet': 1280,
    desktop: 1440,
  },

  max: (breakpoint: keyof Breakpoints) => `@media screen and (max-width: ${breakpoint}px)`,
};

export default MEDIA_QUERY;
