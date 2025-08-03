/* eslint-disable react-native/no-inline-styles */
import {
  ActivityIndicator,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, { useState } from 'react';
import { styles } from '../theme/AppTheme';
import HeaderTitle from '../components/HeaderTitle';
import FadeInImage from '../components/FadeInImage';
const imgURL = `https://picsum.photos/id/`;
const RenderItem = ({ item }: { item: number }) => (
  <View style={screenStyles.textItem}>
    <Text>{item}</Text>
    <FadeInImage
      style={{ width: '100%', height: 400 }}
      uri={`${imgURL}${item}/400/300`}
    />
    {/* <Image
      src={`${imgURL}${item}/400/300`}
      style={{ height: 500, width: '100%', objectFit: 'contain' }}
      alt=""
    /> */}
  </View>
);
const InfiniteScrollScreen = () => {
  const [numbers, setNumbers] = useState([0, 1, 2, 3, 4, 5]);
  const loadMore = () => {
    const newArr: number[] = [];
    const lastElNum = numbers[numbers.length - 1];
    for (let i = 0; i < 6; i++) {
      newArr.push(lastElNum + i);
    }
    setNumbers(prev => [...prev, ...newArr]);
  };
  return (
    <View style={{ ...styles.globalMargin, flex: 1 }}>
      <FlatList
        ListHeaderComponent={
          <View style={{ marginHorizontal: 20 }}>
            <HeaderTitle title="Infinite Scroll" />
          </View>
        }
        data={numbers}
        keyExtractor={(item, idx) => idx.toString()}
        renderItem={({ item }) => <RenderItem item={item} />}
        onEndReached={loadMore}
        onEndReachedThreshold={0.5}
        ListFooterComponent={
          <View
            style={{
              height: 150,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <ActivityIndicator />
          </View>
        }
      />
    </View>
  );
};
const screenStyles = StyleSheet.create({
  textItem: {
    backgroundColor: 'green',
  },
});

export default InfiniteScrollScreen;
