import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'

export default props => {

    const [data, setData] = useState()

    return(

    <View>
        <Text style={styles.fieldName}>
            {props.fieldName}
        </Text>
        <TextInput 
            style={{marginBottom: 5, borderBottomWidth: 1, lineHeight: 0.5, borderColor: 'rgba(255, 255, 255, 0.69)', textDecorationColor: '#FFFFFF'}} 
                
                placeholder= {props.placeHolder}
                value={data}
                onChangeText={data => setData(data)}
        />
        
        
    </View>
    )
}
const styles = StyleSheet.create({
    fieldName: {
        fontFamily: 'Poppins-Regular',
        fontSize: 17,
        color: '#FFFFFF'
    },
    field: {
        fontFamily: 'Poppins-Regular',
        color: '#FFFFFF'
    }
})