/*
 * ==================
 *    MEDIA QUERY
 * ==================
 */
type Breakpoints = {
  mobile: number;
  tablet: number;
  laptop: number;
  desktop: number;
};

const breakpoints: Breakpoints = {
  mobile: 768,
  tablet: 1040,
  laptop: 1600,
  desktop: 1920,
};

export const MEDIA_QUERY = {
  max: (breakpoint: keyof Breakpoints) =>
    `@media screen and (max-width: ${breakpoints[breakpoint]}px)`,
};
