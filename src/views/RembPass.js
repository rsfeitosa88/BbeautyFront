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

export default props =>{
    
  const image = '../assets/images/esmaltes.jpg'
  const [email, setEmail] = React.useState()

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView 
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS == "ios" ? 0 : 20}
        enabled={Platform.OS === "ios" ? true : false}
        >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <ImageBackground 
            source={require(image)}
            style={styles.image}
            blurRadius={50}
            >
            <View style={styles.containerHead}>
              <Text 
                  style={[
                    styles.headTextBold, 
                    styles.textBold, 
                    styles.headFirstText]}>Esqueceu a senha?</Text>
              <Text 
                style={[
                  styles.headTextNormal, 
                  styles.textNormal, 
                  styles.headFirstText]}>Tudo bem!</Text>
              <Text 
              style={[
                  styles.textNormal, 
                  styles.headSecondText]}>Eviaremos um e-mail com um link para efetuar a troca</Text>
            </View>
            <View style={styles.bodyContainer}>
              
              <UselessTextInput 
                inlineImageLeft='message'
                inlineImagePadding={1}
                text='Digite seu e-mail de cadastro'
                style={temp.textField}
                fieldName='Esqueci a senha'
                maxLenght={3}
                onChangeText={email => setEmail(email)}
                value={email}
              />
            </View>
                
          </ImageBackground>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </View>
  )
}

const temp = StyleSheet.create({
  input: {
    height: 20,
    margin: 10,
    borderWidth: 1
  },
  textField: {
    fontFamily: 'Poppins-Regular',
    fontSize: 17
  }
})