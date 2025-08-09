import { DarkTheme, DefaultTheme, Theme } from '@react-navigation/native';

export interface ThemeState extends Theme {
  currentTheme: 'light' | 'dark';
  dividerColor: string;
}
export const lightTheme: ThemeState = {
  currentTheme: 'light',
  dividerColor: 'purple',
  fonts: DefaultTheme.fonts,
  dark: false,
  colors: {
    ...DefaultTheme.colors,
    primary: 'red',
    background: 'yellow',
    text: 'pink',
  },
};
export const darkTheme: ThemeState = {
  currentTheme: 'dark',
  dividerColor: 'green',
  ...DarkTheme,
  dark: true,
  colors: {
    ...DarkTheme.colors,
    primary: 'orange',
    background: 'blue',
    text: 'white',
  },
};

interface ThemeAction {
  type: string;
  payload: ThemeState;
}

export const themeReducer = (state: ThemeState, action: ThemeAction) => {
  switch (action.type) {
    case 'set_light_theme':
      return { ...lightTheme };
    case 'set_dark_theme':
      return { ...darkTheme };

    default:
      return state;
  }
};
