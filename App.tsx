import React from 'react';
import {SafeAreaView} from 'react-native';
import TestLibrary from './src/components/TestLibrary';

const App = () => {
  return (
    <>
      <SafeAreaView style={{flex: 1}}>
        <TestLibrary cardNumber="1234567" />
      </SafeAreaView>
    </>
  );
};

export default App;
