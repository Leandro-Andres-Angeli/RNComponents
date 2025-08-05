/* eslint-disable react-native/no-inline-styles */
import {
  Dimensions,
  ImageSourcePropType,
  SafeAreaView,
  Text,
  View,
  Image,
  StyleSheet,
} from 'react-native';
import React from 'react';
import HeaderTitle from '../components/HeaderTitle';
import Carousel from 'react-native-snap-carousel';
interface Slide {
  title: string;
  desc: string;
  img: ImageSourcePropType;
}

const items: Slide[] = [
  {
    title: 'Titulo 1',
    desc: 'Ea et eu enim fugiat sunt reprehenderit sunt aute quis tempor ipsum cupidatat et.',
    img: require('../assets/slide-1.png'),
  },
  {
    title: 'Titulo 2',
    desc: 'Anim est quis elit proident magna quis cupidatat culpa labore Lorem ea. Exercitation mollit velit in aliquip tempor occaecat dolor minim amet dolor enim cillum excepteur. ',
    img: require('../assets/slide-2.png'),
  },
  {
    title: 'Titulo 3',
    desc: 'Ex amet duis amet nulla. Aliquip ea Lorem ea culpa consequat proident. Nulla tempor esse ad tempor sit amet Lorem. Velit ea labore aute pariatur commodo duis veniam enim.',
    img: require('../assets/slide-3.png'),
  },
];
const { height: screenHeight, width: screenWidth } = Dimensions.get('window');
const SlidesScreen = () => {
  const renderItem = (item: Slide) => {
    return (
      <View
        style={{
          flex: 1,
          width: screenWidth,
          backgroundColor: 'lightgray',
          borderRadius: 5,
          padding: 40,
          justifyContent: 'center',
        }}
      >
        <Image
          style={{
            width: '100%',
            objectFit: 'contain',
            resizeMode: 'center',
            backgroundColor: 'white',
            borderRadius: 10,
            height: '70%',
          }}
          source={item.img}
        />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.subTitle}>{item.desc}</Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View>
        <HeaderTitle title="Slides Screen" />
      </View>
      <View style={{ flex: 1 }}>
        <Carousel
          data={items}
          renderItem={({ item }) => renderItem(item)}
          sliderWidth={screenWidth}
          itemWidth={screenWidth}
          layout="default"
        />
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#5856D6',
  },
  subTitle: {
    fontSize: 16,
  },
});

export default SlidesScreen;
