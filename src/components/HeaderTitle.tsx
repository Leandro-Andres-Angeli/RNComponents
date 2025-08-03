/* eslint-disable react-native/no-inline-styles */
import { View, Text } from 'react-native';
import React from 'react';
import { styles } from '../theme/AppTheme';
interface Props {
  title: string;
}
const HeaderTitle = ({ title }: Props) => {
  return (
    <View style={{ marginVertical: 20, paddingHorizontal: 20 }}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default HeaderTitle;
