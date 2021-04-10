import React from 'react'
import { View, TextInput, Text, StyleSheet } from 'react-native'

export default UselessTextInput = React.forwardRef((props, ref) => (
  <View>
    <Text style={styles.fieldName}>{props.text}</Text>
      <TextInput 
        ref={ref}
        inlineImageLeft={props.inlineImageLeft}
        inlineImagePadding={props.inlineImagePadding}
        style={styles.field}
        placeholder={props.placeholder}
        maxLength={props.maxLength}
        fontFamily={props.fontFamily}
        fontSize={props.fontSize}
        returnKeyType={props.returnKeyType}
        secureTextEntry={props.secureTextEntry}
        onSubmitEditing={props.onSubmitEditing}
        width={props.width}
      />
  </View>    
  )
)

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

