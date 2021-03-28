import React, { Component } from 'react'
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native'

const buttons = props => {
    const content = (
        <View style={[styles.button, { backgroundColor: props.color, width: props.width, height: props.height }]}>
            <Text style={{color: props.colorText, fontFamily: props.fontFamily, fontSize: props.fontSize}}>{props.text}</Text>
        </View>
    )
    return <TouchableOpacity onPress={props.onPress}>{content}</TouchableOpacity>
}

const styles = StyleSheet.create({
    button: {
        padding: 9,
        borderRadius: 30,
        alignItems: 'center'
    },
})

export default buttons