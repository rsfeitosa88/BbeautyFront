import React, { Component } from 'react'
import { StyleSheet, Text } from 'react-native'

import MyAppTextNormal from './MyAppTextNormal'

class MyAppSubHeaderTextNormal extends Component {
  render() {
    return (
      <MyAppTextNormal top={-5}>
        <Text style={styles.text}>
          {this.props.children}
        </Text>
      </MyAppTextNormal>
    )
  }
}

export default MyAppSubHeaderTextNormal

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
})
