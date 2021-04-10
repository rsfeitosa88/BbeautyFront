import React from 'react'
import { View, Text, ImageBackground, Alert } from 'react-native'

import styles from '../assets/styles/startStyle'
import Button from '../components/ButtonFactory'

const image = '../assets/images/esmaltes.jpg'

export default props => {

  return(
  
  <View style={styles.container}>
    <ImageBackground 
      source={require(image)} 
      style={styles.image} 
      blurRadius={50}
    >        
      <View style={styles.containerBb}>
        <Text style={[styles.backgroundText, styles.textBb]}>Bbeauty</Text>
      </View>
      <View style={styles.containerText}>
        <Text style={styles.textoInicial}>Profissionais da beleza e estética ao seu alcance</Text>
      </View>
      <View style={styles.containerButton}>
        <Button 
          text='Login'
          color='#8E3385'
          width={130}
          height={57}
          colorText='#FFFFFF'
          fontFamily='Poppins-Medium'
          fontSize={25}
          padding={9}
          borderRadius={30}
          alignSelf='center'
          onPress={()=> props.navigation.navigate('Login')}
        />
        <Button
          text='Cadastre-se'
          color='#FFFFFF'
          width={185}
          height={57}
          colorText='#5A5656'
          fontFamily='Poppins-Medium'
          fontSize={25}
          padding={9}
          borderRadius={30}
          alignSelf='center' 
          onPress={()=> props.navigation.navigate('SignUp')}
        />
      </View>
    </ImageBackground> 
  </View>
  )
}