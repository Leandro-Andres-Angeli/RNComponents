import { View, Text, StyleSheet, Switch } from 'react-native';
import React, { useState } from 'react';
import HeaderTitle from '../components/HeaderTitle';
import CustomSwitch from '../components/CustomSwitch';

const SwitchScreen = () => {
  /* const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState); */
  const [state, setState] = useState({
    isActive: true,
    isHungry: false,
    isHappy: true,
  });
  const { isActive, isHappy, isHungry } = state;
  const onChange = (value: boolean, field: keyof typeof state) => {
    setState({ ...state, [field]: value });
  };
  return (
    <View style={styles.container}>
      <HeaderTitle title="Switches" />
      <Text>SwitchScreen</Text>
      <View style={styles.switchRow}>
        <Text style={styles.switchText}>Is Active</Text>
        <CustomSwitch
          isOn={isActive}
          onChange={value => onChange(value, 'isActive')}
        />
      </View>
      <View style={styles.switchRow}>
        <Text>Is Hungry</Text>
        <CustomSwitch
          isOn={isHungry}
          onChange={value => onChange(value, 'isHungry')}
        />
      </View>
      <View style={styles.switchRow}>
        <Text>Is Happy</Text>
        <CustomSwitch
          isOn={isHappy}
          onChange={value => onChange(value, 'isHappy')}
        />
      </View>

      <Text style={styles.switchText}>{JSON.stringify(state, null, 2)}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  switchText: {
    fontSize: 25,
  },
  switchRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
});
export default SwitchScreen;
