import { useLayoutEffect, useRef } from 'react';
import { Animated, Easing } from 'react-native';

const useAnimation = () => {
  const opacity = useRef(new Animated.Value(0)).current;
  const position = useRef(new Animated.Value(0)).current;
  const startMovingPosition = (
    initPosition: number = -100,
    duration: number = 300,
  ) => {
    position.setValue(initPosition);
    Animated.timing(position, {
      toValue: 0,

      easing: Easing.bounce,
      duration,
      useNativeDriver: true,
    }).start();
  };
  const fadeIn = () => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 200,
      useNativeDriver: true,
    }).start();
    //     Animated.timing(position, {
    //       toValue: 0,
    //       delay: 500,
    //       easing: Easing.bounce,
    //       duration: 1000,
    //       useNativeDriver: true,
    //     }).start();
  };
  const fadeOut = () => {
    Animated.timing(opacity, {
      toValue: 0,
      delay: 200,
      useNativeDriver: true,
    }).start();
    // Animated.timing(position, {
    //   toValue: -100,
    //   easing: Easing.elastic(4),
    //   useNativeDriver: true,
    // }).start();
  };
  // const fadeInRef = useRef(fadeIn).current;
  // useLayoutEffect(() => {
  //   fadeInRef();
  // }, [fadeInRef]);
  return { opacity, position, fadeIn, fadeOut, startMovingPosition };
};

export default useAnimation;
