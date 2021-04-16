import React from 'react'
import {
    ImageBackground,
    Text,
    View,
    KeyboardAvoidingView,
    Keyboard,
    TouchableWithoutFeedback,
    Platform
} from 'react-native'

import ButtonFactory from '../components/ButtonFactory'
import UselessForm from '../components/UselessForm'
import signUp_2Styles from '../assets/styles/signUp_2Styles'
import SignUp_1 from '../views/SignUp_1'
import MyAppHeaderTextBold from '../components/MyAppHeaderTextBold'
import MyAppHeaderTextNormal from '../components/MyAppHeaderTextNormal'
import MyAppSubHeaderText from '../components/MyAppSubHeaderText'


export default SignUp_2 = props => {

  const image = '../assets/images/esmaltes.jpg'
  state = { isFocused: true }

  const [ email, setEmail ] = React.useState()
  const [ password, setPassword ] = React.useState()
  const [ rPassword, setRpassword ] = React.useState()

  return (
    <View style={signUp_2Styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS == 'ios' ? 0 : 20}
        enabled={Platform.OS === 'ios' ? true : false}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <ImageBackground
            source={require(image)}
            style={signUp_2Styles.image}
            blurRadius={50}
          >
            <View style={signUp_2Styles.headContainer}>
              <MyAppHeaderTextBold>Falta Pouco,{'\n'}(nome user).</MyAppHeaderTextBold>
              <MyAppHeaderTextNormal>Só alguns dados e pronto!</MyAppHeaderTextNormal>
              <MyAppSubHeaderText>
                Após a criação do perfil, 
                enviaremos um email com link, 
                para confirmar o seu cadastro e 
                ter acesso ao App
              </MyAppSubHeaderText>
            </View>
            <View style={signUp_2Styles.inputContainer}>
              <UselessForm
                text='E-mail'
                maxLenght={15}
                fontFamily='Poppins-Regular'
                fontSize={17}
                width={'auto'}
                value={email}
                onChange={email => setEmail(email)}
                returnKeyType='next'
                onSubmitEditing={() => {this.input_2.focus()}}
                blurOnSubmit={false}
              />
              <Text style={signUp_2Styles.passText}>
                A senha deve ter no mínimo:{'\n'}6 digitos, 1 número e 1 caractere especial
              </Text>
              <UselessForm
                text='Senha'
                maxLenght={15}
                fontFamily='Poppins-Regular'
                fontSize={17}
                width={'auto'}
                secureTextEntry={true}
                value={password}
                onChange={password => setPassword(password)}
                returnKeyType='next'
                blurOnSubmit={false}
                onSubmitEditing={() => (this.input_3.focus())}
                ref={input => this.input_2 = input}
              />
              
              <UselessForm
                text='Confirme a Senha'
                maxLenght={15}
                fontFamily='Poppins-Regular'
                fontSize={17}
                width={'auto'}
                secureTextEntry={true}
                value={rPassword}
                onChange={rPassword => setRpassword(rPassword)}
                blurOnSubmit={false}
                returnKeyType='done'
                ref={input => this.input_3 = input}
                />
            </View>
            <View style={signUp_2Styles.bottomContainer}>
              <ButtonFactory
              text='Voltar'
              color='#FFFFFF'
              width={106}
              height={42}
              colorText='#8E3385'
              fontFamily='Poppins-Bold'
              fontSize={19}
              padding={6}
              borderRadius={10}
              alignSelf='center'
              marginTop={30}
              onPress={() => props.navigation.navigate('SignUp_1')}
             />
            <ButtonFactory
              text='Próximo Passo'
              color='#8E3385'
              width={152}
              height={42}
              colorText='#FFFFFF'
              fontFamily='Poppins-Bold'
              fontSize={18.5}
              padding={6}
              borderRadius={10}
              alignSelf='center'
              marginTop={30}
              onPress={() => props.navigation.navigate('Confirm')}
            />
            </View>
          </ImageBackground>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
          
      </View>
  )
}