/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NavigationContainer } from '@react-navigation/native';
import {
  Appearance,
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
} from 'react-native';
import Navigator from './src/navigator/Navigator';

/* function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View style={styles.container}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <NewAppScreen templateFileName="App.tsx" />
    </View>
  );
} */
// import { DefaultTheme, DarkTheme } from '@react-navigation/native';
import {
  ThemeConext,
  ThemeProvider,
} from './src/context/themeContext/ThemeContext';
import { PropsWithChildren, useContext } from 'react';

function App() {
  const isDarkMode = useColorScheme() === 'dark';
  console.log(Appearance.getColorScheme());
  // const customTheme: ReactNavigation.Theme =
  //   Appearance.getColorScheme() === 'dark'
  //     ? {
  //         ...DarkTheme,
  //         colors: {
  //           ...DarkTheme.colors,
  //           primary: 'white',
  //           text: 'white',
  //           background: '#0e153a',
  //         },
  //       }
  //     : DefaultTheme;

  return (
    <AppState>
      {/* using  theme from reducer*/}
      <Navigator />
    </AppState>
  );
}
const AppState = ({ children }: PropsWithChildren) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
// });

export default App;
