import React from 'react'
import { useEffect } from 'react'
import { Text, View } from 'react-native'

import bbeautyLogo from '../assets/styles/preLoadStyle'

export default props => {

  useEffect(()=> {
    props.navigation.navigate('Start')
  }, [])
    
    return (
    <View style={{flex: 1, backgroundColor: '#FFFFFF' }}>
      
        <View style={bbeautyLogo.containerBb}>
          <Text style={[bbeautyLogo.backgroundText, bbeautyLogo.textBb]}>Bbeauty</Text>
        </View>
    </View>
  )
}
