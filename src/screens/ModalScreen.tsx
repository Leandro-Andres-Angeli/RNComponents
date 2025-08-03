/* eslint-disable react-native/no-inline-styles */
import { View, Text, Button, Modal } from 'react-native';
import React, { useState } from 'react';
import { styles } from '../theme/AppTheme';
import HeaderTitle from '../components/HeaderTitle';

const ModalScreen = () => {
  const [modalShow, setModalShow] = useState(false);
  const openModal = () => {
    setModalShow(!modalShow);
  };
  return (
    <View style={styles.globalMargin}>
      <HeaderTitle title="Modal Screen" />
      <Button title="Open Modal" onPress={openModal} />
      <Modal
        onPointerDown={openModal}
        hardwareAccelerated={true}
        transparent
        visible={modalShow}
        animationType="fade"
      >
        <View
          style={{
            backgroundColor: 'rgba(0,0,0,.3)',
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <View
            style={{
              backgroundColor: 'white',
              padding: 10,
              width: '70%',
              shadowOffset: {
                width: 0,
                height: 10,
              },
              shadowOpacity: 0.25,
              elevation: 4,
              borderRadius: 5,
            }}
          >
            <HeaderTitle title="Modal" />
            <Text>Cuerpo del Modal</Text>
            <Button title="Hide" onPress={() => setModalShow(false)} />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ModalScreen;
