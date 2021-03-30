import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'

export default props => {

    const [data, setData] = useState()

    return(

    <View>
        <Text style={styles.fieldName}>
            {props.fieldName}
        </Text>
        <TextInput />
    </View>
    )
}
const styles = StyleSheet.create({
    fieldName: {
        fontFamily: 'Poppins-Regular',
        fontSize: 17,
        color: '#FFFFFF'
    }
})