import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Start from '../views/Start'
import Login from '../views/Login'
import PreLoad from '../views/PreLoad'
import SignUp from '../views/SignUp'
import RembPass from '../views/RembPass'

const Stack = createStackNavigator()

export default () => (
  
  <Stack.Navigator initialRouteName='RembPass'>
    <Stack.Screen
      name='PreLoad'
      options={{headerShown: false}}
      component={PreLoad}
    />
    <Stack.Screen
      name='Start'
      options={{headerShown: false}}
      component={Start}
    />
    <Stack.Screen
      name='Login'
      options={{headerShown: false}}
      component={Login}
    />
    <Stack.Screen
      name='SignUp'
      options={{headerShown: false}}
      component={SignUp}
    />
    <Stack.Screen
      name='RembPass'
      options={{headerShown: false}}
      component={RembPass}
    />
    
  </Stack.Navigator>

);
