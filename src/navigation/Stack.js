import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Start from '../views/Start';
import Login from '../views/Login';

const Stack = createStackNavigator();

export default props => (
  <Stack.Navigator initialRouteName="Login">
    <Stack.Screen
      name="Start"
      options={{headerShown: false}}
      component={Start}
    />
    <Stack.Screen
      name="Login"
      options={{headerShown: false}}
      component={Login}
    />
  </Stack.Navigator>
);
