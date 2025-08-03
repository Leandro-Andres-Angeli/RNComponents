import { View, Text, StyleSheet, PanResponder } from 'react-native';
import React, { useRef } from 'react';
import { Animated } from 'react-native';

const Animation102Screen = () => {
  const pan = useRef(new Animated.ValueXY()).current;
  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: Animated.event([null, { dx: pan.x, dy: pan.y }], {
      useNativeDriver: false,
    }),

    onPanResponderRelease: () => {
      Animated.spring(pan, {
        toValue: { x: 0, y: 0 },
        useNativeDriver: true,
      }).start();
    },
  });

  return (
    <View style={styles.container}>
      {/* <Text> {JSON.stringify(pan.getLayout())}</Text> */}
      <Animated.View
        {...panResponder.panHandlers}
        style={{
          ...styles.purpleBox,
          transform: [{ translateX: pan.x }, { translateY: pan.y }],
        }}
      >
        <Text>Animation102Screen</Text>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  purpleBox: {
    backgroundColor: 'papayawhip',
    borderColor: 'orange',
    borderWidth: 5,
    borderRadius: 15,
    elevation: 10,
    width: 150,
    height: 150,
  },
});
export default Animation102Screen;
