import React, { Component } from 'react'
import { Text } from 'react-native'

import MyAppTextBold from './MyAppTextBold'

class MyAppHeaderTextBold extends Component {
  render() {
    return (
      <MyAppTextBold>
        <Text style={{fontSize: 30}}>
          {this.props.children}
        </Text>
      </MyAppTextBold>
    )
  }
}

export default MyAppHeaderTextBold
