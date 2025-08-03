/* eslint-disable react-native/no-inline-styles */
import { View, Text, Button, Alert } from 'react-native';
import React from 'react';
import HeaderTitle from '../components/HeaderTitle';
import { styles } from '../theme/AppTheme';
import prompt from 'react-native-prompt-android';
const AlertScreen = () => {
  const showAlert = () => {
    Alert.alert(
      'Alert title',
      'Alert message',
      [
        {
          text: 'cancel',
          onPress: () => console.log('cancel pressed'),
          style: 'cancel',
        },
        {
          text: 'Ok',
          onPress: () => console.log('pressed ok'),
          style: 'default',
        },
        {
          text: 'Delete',
          onPress: () => console.log('pressed delete'),
          style: 'destructive',
        },
      ],
      {
        cancelable: true,
        userInterfaceStyle: 'dark',
        onDismiss: () => console.log('Dismissed'),
      },
    );
  };
  const showPrompt = () => {
    // Alert.prompt('Prompt title');
    prompt(
      'Prompt title',
      'Complete prompt',
      () => console.log('prompt done'),
      { cancelable: true, placeholder: 'placeholder' },
    );
  };
  return (
    <View style={styles.globalMargin}>
      <HeaderTitle title="Alert Screen" />
      <Button title="Mostrar Alert" onPress={showAlert} />
      <View style={{ height: 10 }} />
      <Button title="Mostrar Prompt" onPress={showPrompt} />
    </View>
  );
};

export default AlertScreen;
