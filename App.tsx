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
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Navigator from './src/navigator/Navigator';
import Icon from 'react-native-vector-icons/Ionicons';
/* function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View style={styles.container}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <NewAppScreen templateFileName="App.tsx" />
    </View>
  );
} */
import { DefaultTheme, DarkTheme } from '@react-navigation/native';

function App() {
  const isDarkMode = useColorScheme() === 'dark';
  console.log(Appearance.getColorScheme());
  const customTheme: ReactNavigation.Theme =
    Appearance.getColorScheme() === 'dark'
      ? {
          ...DarkTheme,
          colors: {
            ...DarkTheme.colors,
            primary: 'white',
            text: 'white',
            background: '#0e153a',
          },
        }
      : DefaultTheme;

  return (
    <NavigationContainer theme={customTheme}>
      <View style={styles.container}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />

        <Navigator />
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
