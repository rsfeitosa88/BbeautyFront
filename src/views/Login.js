import React from 'react'
import { 
  View, 
  Text, 
  ImageBackground, 
  Alert, 
  KeyboardAvoidingView, 
  Keyboard, 
  TouchableWithoutFeedback,
  TextInput
} from 'react-native'

import loginStyle from '../assets/styles/loginStyle'
import Button from '../components/ButtonFactory'

export default props => {
  
  const image = '../assets/images/esmaltes.jpg'
  const [email, setEmail] = React.useState()
  const [password, setPass] = React.useState()

  return (
    <View style={loginStyle.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS == "ios" ? 0 : 20}
        enabled={Platform.OS === "ios" ? true : false}
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
                <Text style={loginStyle.fieldName}>E-mail</Text>
                <TextInput 
                  style={loginStyle.textInput}
                  fieldName='E-mail' 
                  placeholder='Digite seu e-mail'
                  textContentType='emailAddress'
                  returnKeyType='next'
                  value={email}
                  onChangeText={(email) => this.setEmail({email})}
                  onSubmitEditing={() => {this.password.focus()}}
                  blurOnSubmit={false}
                />
                <Text style={loginStyle.fieldName}>Senha</Text>
                <TextInput 
                  style={loginStyle.textInput}
                  fieldName='Senha' 
                  placeholder='Digite sua senha'
                  textContentType='password'
                  secureTextEntry={true}
                  value={password}
                  ref={(input) => { this.password = input}}
                  onChangeText={(password) => this.setPass({password})}
                 // secureTextEntry={password.lenght === 0? false : true}
                />
              </View>
              <View style={loginStyle.linksContainer}>
                <Button
                  text="Esqueceu a senha?"
                  color="transparent"
                  width={180}
                  height={26}
                  colorText="#FFFFFF"
                  fontFamily="Poppins-Bold"
                  fontSize={17}
                  padding={0}
                  borderRadius={0}
                  alignSelf="flex-end"
                  onPress={() => Alert.alert('testing')}
                />
                <Text style={loginStyle.signText}>Não tem conta? </Text>
                <Button
                  text="Cadastre-se"
                  color="#8E3385"
                  width={125}
                  height={27}
                  colorText="#FFFFFF"
                  fontFamily="Poppins-Bold"
                  fontSize={17}
                  padding={0}
                  borderRadius={6}
                  alignSelf="center"
                  onPress={() => Alert.alert('testing')}
                />
              </View>
              <View style={loginStyle.buttonContainer}>
                <Button
                  text="Entrar"
                  color="#8E3385"
                  width={126}
                  height={48}
                  colorText="#FFFFFF"
                  fontFamily="Poppins-Regular"
                  fontSize={24}
                  padding={6}
                  borderRadius={30}
                  alignSelf="center"
                  onPress={() => Alert.alert('testing')}
                />
              </View>
            </View>
            <View style={loginStyle.bottomContainer}>
              <Button
                text="Voltar"
                color="#FFFFFF"
                width={106}
                height={42}
                colorText="#8E3385"
                fontFamily="Poppins-Bold"
                fontSize={18}
                padding={7}
                borderRadius={30}
                alignSelf="center"
                onPress={() => props.navigation.navigate('Start')}
              />
            </View>
          </ImageBackground>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </View>
  )
}