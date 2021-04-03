import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Start from '../views/Start'
import Login from '../views/Login'
import PreLoading from '../views/PreLoading'
import SignUp from '../views/SignUp'

const Stack = createStackNavigator()

export default props => (
  
  <Stack.Navigator initialRouteName="Login">
    <Stack.Screen
      name="PreLoading"
      options={{ headerShown: false }}
      component={PreLoading}
    />
    <Stack.Screen
      name="Start"
      options={{ headerShown: false }}
      component={Start}
    />
    <Stack.Screen
      name="Login"
      options={{ headerShown: false }}
      component={Login}
    />
    
  </Stack.Navigator>

);
