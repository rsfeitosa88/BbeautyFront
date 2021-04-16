import React from 'react'
import { 
  View, 
  KeyboardAvoidingView, 
  TouchableWithoutFeedback, 
  Keyboard, 
  ImageBackground,
  Text,
  StyleSheet} from 'react-native'

import styles from '../assets/styles/rembPassStyle'
import UselessTextInput from '../components/UselessForm'
import Button from '../components/ButtonFactory'
import MyAppHeaderTextBold from '../components/MyAppHeaderTextBold'
import MyAppHeaderTextNormal from '../components/MyAppHeaderTextNormal'
import MyAppSubHeaderText from '../components/MyAppSubHeaderText'

export default RembPass = props =>{
    
  const image = '../assets/images/esmaltes.jpg'
  const [email, setEmail] = React.useState()

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView 
        behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS == 'ios' ? 0 : 20}
        enabled={Platform.OS === 'ios' ? true : false}
        >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <ImageBackground 
            source={require(image)}
            style={styles.image}
            blurRadius={50}
            >
            <View style={styles.containerHead}>
              <MyAppHeaderTextBold>Esqueceu a senha?</MyAppHeaderTextBold>
              <MyAppHeaderTextNormal>Tudo bem!</MyAppHeaderTextNormal>
              <MyAppSubHeaderText>Eviaremos um e-mail com um link para efetuar a troca</MyAppSubHeaderText>
            </View>
            <View style={styles.bodyContainer}>
              <View style={styles.textInputContainer}> 
                <UselessTextInput 
                  text='Digite seu e-mail de cadastro'
                  fieldName='Esqueci a senha'
                  inlineImageLeft='message'
                  fontFamily='Poppins-Regular'
                  fontSize={17}
                  inlineImagePadding={50}
                  style={styles.textField}
                  maxLenght={28}
                  value={email}
                  onChangeText={email => setEmail(email)}
                />
                </View>
              <View style= {styles.buttonEnviar}>
                <Button 
                  text='Enviar'
                  color='#FFFFFF'
                  width={106}
                  height={42}
                  colorText='#8E3385'
                  fontFamily='Poppins-Bold'
                  fontSize={18}
                  padding={7}
                  borderRadius={10}
                  alignSelf='center'
                  onPress={() => null}
                />
              </View>
            </View>
          <View style={styles.bottomContainer}>
            <Text style={styles.textBottom}>Lembrou da Senha? Toque em Login</Text>
              <Button 
                text='Login'
                color='#8E3385'
                width={126}
                height={48}
                colorText='#FFFFFF'
                fontFamily='Poppins-Regular'
                fontSize={24}
                padding={6}
                borderRadius={10}
                alignSelf='center'
                onPress={() => props.navigation.navigate('Login')}
              />
          </View> 
        </ImageBackground>
       </TouchableWithoutFeedback>
     </KeyboardAvoidingView>
   </View>
  )
}