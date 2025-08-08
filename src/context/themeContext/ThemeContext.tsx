import { DefaultTheme } from '@react-navigation/native';
import { createContext, PropsWithChildren, useReducer } from 'react';
import {
  darkTheme,
  lightTheme,
  themeReducer,
  ThemeState,
} from './ThemeReducer';

export type Theme = Partial<typeof DefaultTheme> & { secondary?: string };
interface ThemeContextProps {
  theme: ThemeState;
  setDarkTheme: () => void;
  setLightTheme: () => void;
}
export const ThemeConext = createContext<ThemeContextProps>(
  {} as ThemeContextProps,
);

export const ThemeProvider = ({ children }: PropsWithChildren) => {
  const [theme, dispatchTheme] = useReducer(themeReducer, lightTheme);
  console.log('theme', theme);
  const setDarkTheme = () => {
    dispatchTheme({ type: 'set_dark_theme', payload: darkTheme });
    console.log('set dark theme');
  };
  const setLightTheme = () => {
    dispatchTheme({ type: 'set_light_theme', payload: lightTheme });
    console.log('set dark light');
  };

  return (
    <ThemeConext.Provider value={{ setDarkTheme, setLightTheme, theme }}>
      {children}
    </ThemeConext.Provider>
  );
};
/* type Theme =  Partial< typeof  DefaultTheme> & { secondary : string}

export const ThemeConext = createContext<Theme>(
  {} as Theme,
);

export const ThemeProvider = ({ children }: PropsWithChildren) => {
  <ThemeConext.Provider value={{secondary : 'blue'  }}>{children}</ThemeConext.Provider>;
}; */
