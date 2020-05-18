import {
  primary,
  secondary,
  hover,
  textColor,
  white,
  background,
  grayBorder,
} from './utils/colors';

const secondaryVariant = {
  color: secondary,
  bg: primary,
  border: `1px solid ${secondary}`
};

const primaryVariant = {
  color: white,
  bg: secondary,
};

const theme = {
  breakpoints: ['40em', '52em', '64em'],
  fontSizes: [
    12, 14, 16, 24, 32, 48, 64,
  ],
  space: [
    0, 4, 8, 12, 14, 16, 32, 64, 128, 256
  ],
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.25,
  },
  colors: {
    primary,
    secondary,
    hover,
    textColor,
    white,
    background,
    grayBorder,
  },
  variants: {
  },
  buttons: {
    secondary: secondaryVariant,
    light: {
      ...primaryVariant,
      ':hover': {
        ...secondaryVariant,
        bg: white
      }
    },
    primary: {
      ...primaryVariant,
      ':hover': {
        ...secondaryVariant
      }
    },
    disabled: {
      bg: '#E5E5E5',
      color: 'black',
    },
  },
};

export default theme;
