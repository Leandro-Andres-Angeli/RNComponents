import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useContext } from 'react';
import { MenuItem } from '../interfaces/appinterfaces';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
  useTheme,
} from '@react-navigation/native';
import { ThemeConext } from '../context/themeContext/ThemeContext';

interface Props {
  menuItem: MenuItem;
}
const FlatListMenuItem = ({ menuItem }: Props) => {
  const navigation = useNavigation<NavigationProp<ParamListBase>>();
  // Get current theme from context
  // Note: useTheme() from react-navigation is commented out in favor of custom theme context
  // const theme = useTheme();
  const { theme } = useContext(ThemeConext);
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => navigation.navigate(menuItem.component)}
    >
      <View style={styles.container}>
        <Icon name={menuItem.icon} color={'gray'} size={23} />
        <Text style={{ ...styles.itemText, color: theme.colors.text }}>
          {' '}
          {menuItem.name}
        </Text>
        <View style={styles.chevronIconContainer}>
          <Icon
            style={styles.chevronIcon}
            name="chevron-forward-outline"
            color={theme.colors.text}
            size={23}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default FlatListMenuItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',

    justifyContent: 'center',
    alignItems: 'center',
  },
  itemText: {
    marginLeft: 10,
    fontSize: 19,
  },
  chevronIconContainer: {
    flex: 1,
  },
  chevronIcon: {
    marginStart: 'auto',
    marginEnd: 1,

    alignSelf: 'flex-end',
    marginBottom: 0,
  },
});
