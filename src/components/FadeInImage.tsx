/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Animated,
  ActivityIndicator,
  StyleProp,
  ImageStyle,
} from 'react-native';
import React, { useState } from 'react';
import useAnimation from '../hooks/useAnimation';
interface Props {
  uri: string;
  style?: StyleProp<ImageStyle>;
}
const FadeInImage = ({ uri, style }: Props) => {
  const { opacity, fadeIn } = useAnimation();
  const [isLoading, setIsLoading] = useState(true);
  return (
    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
      {isLoading && <ActivityIndicator />}
      <Animated.Image
        onLoadEnd={() => {
          fadeIn();
          setIsLoading(false);
        }}
        // style={{ width: '100%', height: 400, opacity }}
        style={{ ...(style as Object), opacity }}
        src={uri}
      />
    </View>
  );
};

export default FadeInImage;
