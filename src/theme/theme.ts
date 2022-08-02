const font = 'sans-serif';

// Color palette
const black = '#000';
const white = '#fff';
const error = '#c86464';
const primaryLight = '#fdd1d1';
const secondaryLight = white;
const primaryDark = '#684545';
const secondaryDark = black;
const borderLight = '#727272';
const borderDark = '#f7f9fa';
const lightBg = '#f5f5f5';
const darkBg = '#3e3e3e';

const defaultTheme = {
  font,
  spaces: [0, 4, 8, 16, 32, 64, 128],
  fontSizes: [12, 14, 16, 20, 24, 32, 40, 56, 72, 80],
  colors: {
    black,
    white,
    error,
  },
};

export const lightTheme = {
  ...defaultTheme,
  border: borderLight,
  fontColor: black,
  body: lightBg,
  headerColor: white,
  headerBg: darkBg,
  displayUpper: 'grey',
  primary: primaryLight,
  secondary: secondaryLight,
};

export const darkTheme = {
  ...defaultTheme,
  border: borderDark,
  fontColor: white,
  body: darkBg,
  headerColor: black,
  headerBg: lightBg,
  displayUpper: '#d7dbe0',
  primary: primaryDark,
  secondary: secondaryDark,
};
