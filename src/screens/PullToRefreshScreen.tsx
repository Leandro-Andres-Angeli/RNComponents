import { RefreshControl, ScrollView, Text, View } from 'react-native';
import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import HeaderTitle from '../components/HeaderTitle';

const PullToRefreshScreen = () => {
  const [refreshing, setRefreshing] = useState(false);
  const [data, setData] = useState<string>('');
  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      console.log('Terminamos');
      setRefreshing(false);
      setData('Hola Mundo');
    }, 1500);
  };
  return (
    <ScrollView
      refreshControl={
        <RefreshControl
          progressViewOffset={150}
          refreshing={refreshing}
          onRefresh={onRefresh}
          progressBackgroundColor={'purple'}
          colors={['white', 'red', 'orange']}
          tintColor={'white'}
          title="Loading"
        />
      }
    >
      <View style={styles.container}>
        <HeaderTitle title="Pull To Refresh" />
        <Text>{data}</Text>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default PullToRefreshScreen;
