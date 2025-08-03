import { View, Text, StyleSheet, Animated, Button } from 'react-native';
import React, { useEffect, useRef } from 'react';
import useAnimation from '../hooks/useAnimation';

const Animation101Screen = () => {
  const { position, opacity, fadeIn, fadeOut, startMovingPosition } =
    useAnimation();
  const startMovingPositionRef = useRef(startMovingPosition).current;
  useEffect(() => {
    startMovingPositionRef();
  }, [startMovingPositionRef]);

  return (
    <View style={styles.container}>
      <Animated.View
        style={{
          ...styles.purpleBox,
          opacity,
          transform: [{ translateY: position }],
        }}
      >
        <Text>Animation101Screen</Text>
      </Animated.View>
      <Button
        onPress={() => {
          fadeIn();
          startMovingPosition(100, 500);
        }}
        title="Fade In "
      />
      <Button
        onPress={() => {
          fadeOut();
          startMovingPosition(-100);
        }}
        title="Fade Out "
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  purpleBox: {
    backgroundColor: '#5856D6',
    width: 150,
    height: 150,
  },
});
export default Animation101Screen;
