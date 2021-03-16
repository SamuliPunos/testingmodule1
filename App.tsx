import React from 'react';
import {SafeAreaView} from 'react-native';
import Test from './src/components/Test';

const App = () => {
  return (
    <>
      <SafeAreaView style={{flex: 1}}>
        <Test cardNumber="1234567" />
      </SafeAreaView>
    </>
  );
};

export default App;
