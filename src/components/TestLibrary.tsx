import React, {useEffect} from 'react';
import {View} from 'react-native';
import Barcode from 'react-native-barcode-builder';

interface IProp {
  cardNumber?: string;
  holderName?: string;
}

const TestLibrary = ({cardNumber = ''}: IProp) => {
  useEffect(() => {}, []);

  return (
    <View
      style={{
        transform: [{rotate: '90deg'}],
        position: 'absolute',
        top: '40%',
        right: 0,
        backgroundColor: '#ffffff',
      }}>
      {cardNumber !== '' ? (
        <View style={{flex: 1}}>
          <Barcode
            flat
            text={cardNumber}
            width={5}
            height={100}
            value={cardNumber}
            format={'EAN8'}
          />
        </View>
      ) : (
        <></>
      )}
    </View>
  );
};

export default TestLibrary;
