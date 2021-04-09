import React from 'react'
import { 
  View, 
  Text, 
  ImageBackground, 
  Alert, 
  KeyboardAvoidingView, 
  Keyboard, 
  TouchableWithoutFeedback
} from 'react-native'

import loginStyle from '../assets/styles/loginStyle'
import Button from '../components/ButtonFactory'
import UselessForm from '../components/UselessForm'

export default props => {
  
  const image = '../assets/images/esmaltes.jpg'
  const [email, setEmail] = React.useState()
  const [password, setPass] = React.useState()
  state = { isFocused: true }

  return (
    <View style={loginStyle.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS == 'ios' ? 0 : 20}
        enabled={Platform.OS === 'ios' ? true : false}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <ImageBackground
            source={require(image)}
            style={loginStyle.image}
            blurRadius={50}
          >
            <View style={loginStyle.containerHead}>
              <Text style={loginStyle.headTextBold}>Seja bem-vinde</Text>
              <Text style={loginStyle.headTextNormal}>de volta!</Text>
            </View>
            <View style={loginStyle.bodyContainer}>
              <View style={loginStyle.fieldContainer}>
                <UselessForm 
                  text='E-mail'
                  fieldName='E-mail'
                  inlineImageLeft='message'
                  inlineImagePadding={50}
                  style={loginStyle.textField}
                  maxLenght={28}
                  fontFamily={'Poppins-Regular'}
                  fontSize={17}
                  value={email}
                  returnKeyType={'next'}
                  onSubmitEditing={() => {this.input_2.focus()}}
                  onChangeText={email => setEmail(email)}
                  blurOnSubmit={false}
                />
                <UselessForm 
                  text='Senha'
                  fieldName='Password'
                  inlineImageLeft='lock'
                  returnKeyType='done'
                  secureTextEntry={true}
                  inlineImagePadding={50}
                  style={loginStyle.textField}
                  maxLenght={28}
                  fontFamily={'Poppins-Regular'}
                  fontSize={17}
                  value={password}
                  onChangeText={password => setPass(password)}
                  ref={input => {this.input_2 = input}}
                  blurOnSubmit={false}
                />
              </View>
              <View style={loginStyle.linksContainer}>
                <Button
                  text='Esqueceu a senha?'
                  color='transparent'
                  width={180}
                  height={26}
                  colorText='#FFFFFF'
                  fontFamily='Poppins-Bold'
                  fontSize={17}
                  padding={0}
                  borderRadius={0}
                  alignSelf='flex-end'
                  onPress={() => props.navigation.navigate('RembPass')}
                />
                <Text style={loginStyle.signText}>Não tem conta? </Text>
                <Button
                  text='Cadastre-se'
                  color='#8E3385'
                  width={125}
                  height={27}
                  colorText='#FFFFFF'
                  fontFamily='Poppins-Bold'
                  fontSize={17}
                  padding={0}
                  borderRadius={6}
                  alignSelf='center'
                  onPress={() => Alert.alert('testing')}
                />
              </View>
              <View style={loginStyle.buttonContainer}>
                <Button
                  text='Entrar'
                  color='#8E3385'
                  width={126}
                  height={48}
                  colorText='#FFFFFF'
                  fontFamily='Poppins-Regular'
                  fontSize={24}
                  padding={6}
                  borderRadius={30}
                  alignSelf='center'
                  onPress={() => Alert.alert('testing')}
                />
              </View>
            </View>
            <View style={loginStyle.bottomContainer}>
              
              
              
            </View>
          </ImageBackground>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </View>
  )
}