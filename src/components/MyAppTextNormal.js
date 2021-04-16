import React from 'react'
import { Text, StyleSheet, View } from 'react-native'

export default MyAppTextNormal = props => {
  return (
    <View style={[styles.container,{top: props.top}]}>
      <Text style={[styles.font, {borderBottomWidth: props.borderBottomWidth, borderColor: props.borderColor}]}>
        {props.children}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  font: {
    fontFamily: 'Poppins-Regular',
    fontSize: 17,
    color: '#FFFFFF'
  },
  container: {
    position: 'relative'
  }
})