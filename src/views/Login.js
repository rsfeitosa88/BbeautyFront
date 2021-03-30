import React from 'react'
import { View, 
    Text, 
    StyleSheet, 
    ImageBackground, 
    Alert} from 'react-native'

import Button from '../components/ButtonFactory'

const image = '../assets/images/esmaltes.jpg'

export default props => (
    <View style={styles.container}>
     
        <ImageBackground source={require(image)} style={styles.image} blurRadius={50}>
            
            <View style={styles.containerHead}>
                
                <Text style={styles.headTextBold}>Seja bem-vinde</Text>
                <Text style={styles.headTextNormal}>de volta!</Text>
                <Text style={styles.signText}>Você não tem conta?</Text>
                <Button text='Cadastre-se' color='#8E3385' width={125} height={26} colorText='#FFFFFF'
                fontFamily='Poppins-Bold' fontSize={18} padding={0} borderRadius={0} onPress={()=> Alert.alert("testing")}></Button>
        
            </View>

        </ImageBackground>

    </View>
)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column'
    },
    image: {
        display: 'flex',
        width: '100%',
        height: '100%',
        justifyContent: 'center'
    },
    containerHead: {
        flex: 1,
        width: 323,
        height: 149,
        left: 25,
        top: 68
    },
    headTextBold: {
        fontFamily: 'Poppins-Bold',
        fontSize: 30,
        color: '#FFFFFF'
    },
    headTextNormal: {
        top: -5,
        fontFamily: 'Poppins-Regular',
        fontSize: 30,
        color: '#FFFFFF'
    },
    signText: {
        fontFamily: 'Poppins-Regular',
        fontSize: 17,
        color: '#FFFFFF'
    },
})