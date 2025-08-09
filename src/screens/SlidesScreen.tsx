/* eslint-disable react-native/no-inline-styles */
import {
  Dimensions,
  ImageSourcePropType,
  SafeAreaView,
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  Animated,
} from 'react-native';
import React, { useContext, useState } from 'react';
import HeaderTitle from '../components/HeaderTitle';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import Icon from 'react-native-vector-icons/Ionicons';

import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import useAnimation from '../hooks/useAnimation';
import { ThemeConext } from '../context/themeContext/ThemeContext';
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
const { width: screenWidth } = Dimensions.get('window');
const SlidesScreen = () => {
  const {
    theme: { colors },
  } = useContext(ThemeConext);
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
  const [activeSlide, setActiveSlide] = useState(0);
  const [buttonVisible, setButtonVisible] = useState(false);
  const { fadeIn, opacity } = useAnimation();
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
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
          pagingEnabled={true}
          onSnapToItem={idx => {
            setActiveSlide(idx);
            if (idx === items.length - 1) {
              setButtonVisible(true);
              fadeIn();
            }
          }}
        />
        <View>
          <Pagination
            dotsLength={items.length}
            activeDotIndex={activeSlide}
            containerStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.75)' }}
            dotStyle={{
              width: 10,
              height: 10,
              borderRadius: 5,
              marginHorizontal: 8,
              backgroundColor: 'rgba(255, 255, 255, 0.92)',
            }}
            inactiveDotStyle={
              {
                // Define styles for inactive dots here
              }
            }
            inactiveDotOpacity={0.4}
            inactiveDotScale={0.6}
          />
          {/* items.length - 1 === activeSlide */}
        </View>
        {
          <Animated.View
            style={{
              minHeight: '10%',

              alignItems: 'center',
              justifyContent: 'center',
              opacity,

              pointerEvents: buttonVisible ? 'auto' : 'none',
            }}
          >
            <TouchableOpacity
              onPress={() => navigation.navigate('Home')}
              style={{
                width: 'auto',
                paddingHorizontal: 10,
                paddingVertical: 5,
                backgroundColor: colors.primary,
                justifyContent: 'center',
                alignItems: 'center',
                marginLeft: 'auto',
                marginRight: 10,
                flexDirection: 'row',
                gap: 5,
                borderRadius: 10,
              }}
            >
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Text
                  style={{
                    color: 'white',

                    fontSize: 20,
                  }}
                >
                  Entrar
                </Text>

                <Icon
                  name="chevron-forward-outline"
                  size={20}
                  color={'white'}
                />
              </View>
            </TouchableOpacity>
          </Animated.View>
        }
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
