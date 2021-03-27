import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default props => (
    <View style={{
        flex: 1,
        width: 200,
        height: 200,
        justifyContent: "center",
        alignItems: "flex-start"}}>
        
        <Text style={{fontSize: 30, fontFamily: "Poppins-Bold"}}>
            {props.children}
        </Text>
    </View>
)

const styles = StyleSheet.create({
    
})