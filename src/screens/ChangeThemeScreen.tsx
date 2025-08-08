/* eslint-disable react-native/no-inline-styles */
import { View, Text, StyleSheet } from 'react-native';
import React, { useContext } from 'react';
import HeaderTitle from '../components/HeaderTitle';
import { TouchableOpacity } from 'react-native';
import { ThemeConext } from '../context/themeContext/ThemeContext';

const ChangeThemeScreen = () => {
  const { setDarkTheme, setLightTheme, theme } = useContext(ThemeConext);

  return (
    <View style={styles.container}>
      <HeaderTitle title="Theme" />

      <TouchableOpacity
        onPress={() => (theme.dark ? setLightTheme() : setDarkTheme())}
        activeOpacity={0.7}
        style={{
          width: 150,
          height: 50,
          borderRadius: 20,
          backgroundColor: '#5856D6',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text style={{ color: 'white', textAlign: 'center', fontSize: 22 }}>
          Light / Dark
        </Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default ChangeThemeScreen;
