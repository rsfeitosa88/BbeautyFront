import React from 'react'
import { SafeAreaView } from 'react-native'
import Start from './views/Start'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'


export default props => (
    <SafeAreaView style={{flex: 1}}>
        <Start/>
    </SafeAreaView>
)