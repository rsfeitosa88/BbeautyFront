import React, { Component } from 'react'
import { StyleSheet, Text } from 'react-native'

import MyAppTextNormal from './MyAppTextNormal'

class MyAppSubHeaderText extends Component {
  render() {
    return (
      <MyAppTextNormal>
        <Text style={styles.text}>
          {this.props.children}
        </Text>
      </MyAppTextNormal>
    )
  }
}

export default MyAppSubHeaderText

const styles = StyleSheet.create({
  text: {
    fontSize: 19
  }
})
