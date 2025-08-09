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
      <View style={{ flexDirection: 'row', justifyContent: 'center', gap: 10 }}>
        <TouchableOpacity
          onPress={() => setLightTheme()}
          disabled={!theme.dark}
          activeOpacity={0.7}
          style={{
            width: 150,
            height: 50,
            borderRadius: 20,
            backgroundColor: theme.colors.primary,
            justifyContent: 'center',
            alignItems: 'center',
            opacity: !theme.dark ? 0.4 : 1,
          }}
        >
          <Text style={{ color: 'white', textAlign: 'center', fontSize: 22 }}>
            Light
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          disabled={theme.dark}
          onPress={() => setDarkTheme()}
          activeOpacity={0.7}
          style={{
            width: 150,
            height: 50,
            borderRadius: 20,
            backgroundColor: '#5856D6',
            justifyContent: 'center',
            alignItems: 'center',
            opacity: theme.dark ? 0.4 : 1,
          }}
        >
          <Text style={{ color: 'white', textAlign: 'center', fontSize: 22 }}>
            Dark
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default ChangeThemeScreen;
