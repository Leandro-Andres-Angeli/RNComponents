/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import {
  View,
  StyleSheet,
  TextInput,
  Text,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Keyboard,
  Switch,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import HeaderTitle from '../components/HeaderTitle';
import { useForm } from '../hooks/useForm';

const TextInputScreen = () => {
  /*   const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
  }); */
  const { form, onChange } = useForm({
    name: '',
    email: '',
    phone: '',
    isSubscribed: false,
  });
  const [viewHeight, setViewHeight] = useState(0);
  useEffect(() => {
    Keyboard.addListener('keyboardDidShow', function (e) {
      setViewHeight(e.endCoordinates.screenY - e.endCoordinates.height);
    });
    Keyboard.addListener('keyboardDidHide', () => {
      setViewHeight(0);
    });
    () => {
      Keyboard.removeAllListeners('keyboardDidShow');
      Keyboard.removeAllListeners('keyboardDidHide');
    };
  }, []);

  /*  const onChange = (value: string, field: string) => {
    setForm(prev => ({ ...prev, [field]: value }));
  }; */
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView>
        <View style={styles.container}>
          <HeaderTitle title="TextInputs" key={'TextInput'} />
          <TextInput
            autoCapitalize="words"
            style={styles.inputStyle}
            autoCorrect={false}
            onChangeText={value => onChange(value, 'name')}
          />
          {/* <Text style={{ fontSize: 40 }}> {JSON.stringify(form)}</Text> */}
          {/* <Text style={{ fontSize: 40 }}> {JSON.stringify(form)}</Text> */}
          <TextInput
            autoCapitalize="none"
            style={styles.inputStyle}
            autoCorrect={false}
            keyboardType="email-address"
            keyboardAppearance="dark"
            enterKeyHint="send"
            onChangeText={value => onChange(value, 'email')}
          />
          <TextInput
            autoCapitalize="none"
            style={styles.inputStyle}
            keyboardType="numbers-and-punctuation"
            autoCorrect={false}
            onChangeText={value => onChange(value, 'phone')}
          />
          <Switch
            trackColor={{ false: '#767577', true: '#81b0ff' }}
            ios_backgroundColor="#3e3e3e"
            onValueChange={value => onChange(value, 'isSubscribed')}
            value={form.isSubscribed}
          />
          <Text> {JSON.stringify(form)}</Text>
        </View>
        <View style={{ height: viewHeight }}></View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
  },
  inputStyle: {
    borderWidth: 2,
    borderColor: 'lightblue',
    borderRadius: 10,
    marginVertical: 10,
  },
});
export default TextInputScreen;
