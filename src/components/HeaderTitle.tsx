/* eslint-disable react-native/no-inline-styles */
import { View, Text } from 'react-native';
import React, { useContext } from 'react';
import { styles } from '../theme/AppTheme';
import { ThemeConext } from '../context/themeContext/ThemeContext';
interface Props {
  title: string;
}
const HeaderTitle = ({ title }: Props) => {
  const {
    theme: { colors },
  } = useContext(ThemeConext);
  return (
    <View style={{ marginVertical: 20, paddingHorizontal: 20 }}>
      <Text style={{ ...styles.title, color: colors.text }}>{title}</Text>
    </View>
  );
};

export default HeaderTitle;
