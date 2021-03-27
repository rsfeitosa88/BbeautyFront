import React from 'react'
import { View, 
    Text, 
    StyleSheet, 
    ImageBackground, 
    Alert} from 'react-native'

import Buttons from '../assets/styles/buttons'

const image = '../assets/images/esmaltes.jpg'

export default props => (
    <View style={styles.container}>
     
        <ImageBackground source={require(image)} style={styles.image} blurRadius={50}>
              
            <View style={styles.containerBb}>
                <Text style={[styles.backgroundText, styles.textBb]} >
                    Bbeauty
                </Text>
            </View>
            
            <View style={styles.containerText}>
                <Text style={styles.textoInicial}>
                    Profissionais da beleza e estética ao seu alcance
                </Text>
            </View>

            <View style={styles.containerButton}>
                <Buttons class='Login' text='Login' color='#8E3385' width={130} height={57} colorText='#FFFFFF'
                onPress={()=> Alert.alert}/>
                <Buttons text='Cadastre-se' color='#FFFFFF' width={185} height={57} colorText='#5A5656'/>     
            </View>
             
        </ImageBackground>
        
    </View>
)



const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    image: {
        display: 'flex',
        width: '100%',
        height: '100%',
        justifyContent: 'center'
    },
    containerBb: {
        flex: 3,
        left: 25
    },
    backgroundText: {
        backgroundColor: 'rgba(255, 255, 255, 0.50)',
        width: 279,
        height: 87,
        top: 140,
        borderBottomLeftRadius: 30
    },
    textBb: {
        fontFamily: 'Poppins-Bold',
        fontSize: 60,
        lineHeight: 90,
        color: '#8E3385',
        textAlign: 'center'
    },
    containerText: {
        flex: 1,
        width: 250,
        left: 25,
    },
    textoInicial: {
        color: 'white',
        fontFamily: 'Poppins-Bold',
        fontSize: 25
    },
    containerButton: {
        flex: 0.7,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width: '100%',
        height: 60,
    }
})