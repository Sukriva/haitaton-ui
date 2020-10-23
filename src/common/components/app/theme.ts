import { theme } from '@chakra-ui/core';

export const baseSizes = {
  ...theme.space,
  '4xs': '0.125rem',
  '3xs': '0.25rem',
  '2xs': '0.5rem',
  xs: '0.75rem',
  s: '1rem',
  m: '1.5rem',
  l: '2rem',
  xl: '2.5rem',
  '2xl': '3.0rem',
  '3xl': '3.5rem',
  '4xl': '4rem',
  '5xl': '4.5rem',
};

// eslint-disable-next-line
const breakpoints: any = ['320px', '576px', '768px', '992px', '1248px'];

// eslint-disable-next-line
breakpoints.xs = breakpoints[0];
// eslint-disable-next-line
breakpoints.s = breakpoints[1];
// eslint-disable-next-line
breakpoints.m = breakpoints[2];
// eslint-disable-next-line
breakpoints.l = breakpoints[3];
// eslint-disable-next-line
breakpoints.xl = breakpoints[4];

const customTheme = {
  ...theme,
  space: baseSizes,
  // eslint-disable-next-line
  breakpoints: breakpoints,
};

export default customTheme;