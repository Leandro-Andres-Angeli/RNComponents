import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { MenuItem } from '../interfaces/appinterfaces';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';

interface Props {
  menuItem: MenuItem;
}
const FlatListMenuItem = ({ menuItem }: Props) => {
  const navigation = useNavigation<NavigationProp<ParamListBase>>();
  console.log('menu item', menuItem);
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => navigation.navigate(menuItem.component)}
    >
      <View style={styles.container}>
        <Icon name={menuItem.icon} color={'gray'} size={23} />
        <Text style={styles.itemText}> {menuItem.name}</Text>
        <View style={styles.chevronIconContainer}>
          <Icon
            style={styles.chevronIcon}
            name="chevron-forward-outline"
            color={'gray'}
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
