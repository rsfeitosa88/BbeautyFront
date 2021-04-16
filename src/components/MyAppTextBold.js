import React from 'react'
import { Text, StyleSheet, View } from 'react-native'

export default MyAppTextBold = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.font}>
        {props.children}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  font: {
    fontFamily: 'Poppins-Bold',
    fontSize: 17,
    color: '#FFFFFF'
  },
  container: {
    position: 'relative'
  }
})