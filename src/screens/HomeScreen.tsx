/* eslint-disable react-native/no-inline-styles */
import { View, FlatList } from 'react-native';
import React, { useContext } from 'react';

import { styles } from '../theme/AppTheme';

import FlatListMenuItem from '../components/FlatListMenuItem';
import { menuItems } from '../data/menuItems';
import HeaderTitle from '../components/HeaderTitle';
import ItemSeparator from '../components/ItemSeparator';
import { useTheme } from '@react-navigation/native';
import { ThemeConext } from '../context/themeContext/ThemeContext';

const HomeScreen = () => {
  // const theme = useTheme();
  const {
    theme: { color },
  } = useContext(ThemeConext);

  return (
    <View style={{ flex: 1, ...styles.globalMargin }}>
      <FlatList
        ListHeaderComponent={HeaderTitle({ title: 'Opciones de menu' })}
        ItemSeparatorComponent={() => ItemSeparator()}
        data={menuItems}
        renderItem={
          ({ item }) => <FlatListMenuItem menuItem={item} />
          // FlatListMenuItem({ menuItem: item, route: item.components })
        }
        keyExtractor={(_, index) => index.toString()}
      />
    </View>
  );
};

export default HomeScreen;
