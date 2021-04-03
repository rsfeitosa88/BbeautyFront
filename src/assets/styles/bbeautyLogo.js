import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

function bbeautyLogo() {
    <View style={styles.containerBb}>
      <Text style={[styles.backgroundText, styles.textBb]}>Bbeauty</Text>
    </View>
}

const styles = StyleSheet.create({
  containerBb: {
    flex: 3,
    left: 25
  },
  backgroundText: {
    backgroundColor: 'rgba(255, 255, 255, 0.50)',
    width: 279,
    height: 87,
    top: 140,
    borderBottomLeftRadius: 30
  },
  textBb: {
    fontFamily: 'Poppins-Bold',
    fontSize: 60,
    lineHeight: 90,
    color: '#8E3385',
    textAlign: 'center'
    },
})

export default bbeautyLogo
