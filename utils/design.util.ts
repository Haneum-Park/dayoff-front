/*
 * ==================
 *    MEDIA QUERY
 * ==================
 */
type Breakpoints = {
  mobile: number;
  tablet: number;
  desktop: number;
};

export const MEDIA_QUERY = {
  breakpoints: {
    mobile: 768,
    tablet: 1040,
    desktop: 1920,
  },
  max: (breakpoint: keyof Breakpoints) => `@media screen and (max-width: ${breakpoint}px)`,
};
