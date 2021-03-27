import React, { Component } from 'react'
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native'

const buttons = props => {
    const content = (
        <View style={[styles.button, { backgroundColor: props.color, width: props.width }]}>
            <Text style={[styles.text, {color: props.colorText}]}>{props.text}</Text>
        </View>
    )
    return <TouchableOpacity onPress={props.onPress}>{content}</TouchableOpacity>
}

const styles = StyleSheet.create({
    button: {
        padding: 9,
        height: 57,
        borderRadius: 30,
        alignItems: 'center'
    },
    text: {
        fontFamily: 'Poppins-Medium',
        fontSize: 25
    }
})

export default buttons