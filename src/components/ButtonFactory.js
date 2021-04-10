import React from 'react'
import {Text, View, TouchableOpacity} from 'react-native'

export default buttons = props => {
  const content = (
    <View
      style={{
        backgroundColor: props.color,
        width: props.width,
        height: props.height,
        borderRadius: props.borderRadius,
        padding: props.padding,
        marginTop: props.marginTop,
        justifyContent: props.justifyContent,
        AlignItems: props.center
      }}>
      <Text
        style={{
          color: props.colorText,
          fontFamily: props.fontFamily,
          fontSize: props.fontSize,
          alignSelf: props.alignSelf,
          
        }}>
        {props.text}
      </Text>
    </View>
  )
  return <TouchableOpacity onPress={props.onPress}>{content}</TouchableOpacity>
}
