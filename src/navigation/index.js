import React from 'react';
import {View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Stack from './Stack';

export default props => (
  // eslint-disable-next-line react-native/no-inline-styles
  <View style={{flex: 1}}>
    <NavigationContainer>
      <Stack />
    </NavigationContainer>
  </View>
);
