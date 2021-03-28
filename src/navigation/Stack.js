import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Start from '../views/Start'

const Stack = createStackNavigator()

export default props =>(
    <Stack.Navigator initialRouteName="Start">
        <Stack.Screen name="Start" 
            options={{headerShown: false}}  component={Start} />
    </Stack.Navigator>
)
