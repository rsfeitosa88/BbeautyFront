import React from 'react'
import { View, TextInput, Text, StyleSheet } from 'react-native'

const UselessTextInput = (props) => {
  
  return (
    <View>
      <Text style={styles.fieldName}>{props.text}</Text>
      <TextInput 
        inlineImageLeft={props.inlineImageLeft}
        inlineImagePadding={props.inlineImagePadding}
        style={styles.field}
        placeholder={props.placeholder}
        maxLength={30}
        fontFamily='Poppins-Regular'
        fontSize={17}
        />
    </View>    
    )
}

const styles = StyleSheet.create({
  fieldName: {
    fontFamily: 'Poppins-Regular',
    fontSize: 17,
    color: '#FFFFFF',
  },
  field: {
    borderBottomWidth: 1,
    borderColor: '#FFFFFF',
    lineHeight: 0.5
  }
})

export default UselessTextInput

