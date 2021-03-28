import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Start from '../views/Start'

const Stack = createStackNavigator()

export default props =>(
    <Stack.Navigator initialRouteName="Start">
        <Stack.Screen name="Start" component={Start} />
    </Stack.Navigator>
)
