import {DefaultTheme} from 'react-native-paper';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#6F1E51',
    info: '#3B3B98',
    warning: '#fa8231',
    success: '#44bd32',
    disabled: '#353b48',
    background: '#dedede',
    surface: '#FFFFFF',
    accent: 'red',
    error: '#c23616',
    text: '#000000',
    onSurface: 'red',
    placeholder: 'red',
    backdrop: 'red',
    notification: 'red',
    customColor: '#BADA55',
  },
  fonts: {
    ...DefaultTheme.fonts,
    superLight: {...DefaultTheme.fonts.light},
  },
  userDefinedThemeProperty: '',
  animation: {
    ...DefaultTheme.animation,
    customProperty: 1,
  },
};

export default theme;
