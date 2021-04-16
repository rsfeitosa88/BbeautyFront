import React from 'react'
import { 
    ImageBackground,
    Text, 
    View, 
    KeyboardAvoidingView, 
    Keyboard, 
    TouchableWithoutFeedback, 
    Platform,
    Image } from 'react-native'

import Button from '../components/ButtonFactory'
import UselessForm from '../components/UselessForm'
import signUp_1Styles from '../assets/styles/signUp_1Styles'
import MyAppHeaderTextBold from '../components/MyAppHeaderTextBold'
import MyAppHeaderTextNormal from '../components/MyAppHeaderTextNormal'
import MyAppSubHeaderText from '../components/MyAppSubHeaderText'

export default SignUp_1 = props => {
  
  const [ nome, setNome ] = React.useState()
  const [ sobrenome, setSobrenome ] = React.useState()
  const [ endereco, setEndereco ] = React.useState()
  const [ numero, setNumero ] = React.useState()
  
  const image = '../assets/images/esmaltes.jpg'
  state = { isFocused: true }

  return (

    <View style={signUp_1Styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS == 'ios' ? 0 : 20}
        enabled={Platform.OS === 'ios' ? true : false}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <ImageBackground
            source={require(image)}
            style={signUp_1Styles.image}
            blurRadius={50}
          >
            <View style={signUp_1Styles.headContainer}>
              <MyAppHeaderTextBold>Seja bem-vinde</MyAppHeaderTextBold>
              <MyAppHeaderTextNormal>à Bbeauty</MyAppHeaderTextNormal>
              <MyAppSubHeaderText>
                Nós e os profissionais, estamos 
                ansiosos para mostrarmos os trabalhos. 
                Mas antes, precisamos de alguns dados.
              </MyAppSubHeaderText>
            </View>
            <View style={signUp_1Styles.photoContainer}>
              <Image 
                source={{
                  uri: 
                    'https://cdn1.vectorstock.com/i/thumb-large/38/10/solid-purple-gradient-user-icon-web-icon-vector-23623810.jpg'
                }}
                style={signUp_1Styles.avatar}
              />
              <Button
                text='Escolher foto'
                color='#8E3385'
                width={150}
                height={40}
                colorText='#FFFFFF'
                fontFamily='Poppins-Regular'
                fontSize={15}
                borderRadius={10}
                justifyContent='center'
                alignSelf='center'
              />
            </View>
            <View style={signUp_1Styles.inputContainer}>
              <UselessForm
                text='Nome'
                maxLenght={15}
                fontFamily='Poppins-Regular'
                fontSize={17}
                width={170}
                value={nome}
                onChange={nome => setNome(nome) }
                returnKeyType='next'
                onSubmitEditing={() => {this.input_2.focus()}}
                blurOnSubmit={false}
              />
              <UselessForm
                text='Sobrenome'
                maxLenght={15}
                fontFamily='Poppins-Regular'
                fontSize={17}
                width={170}
                value={sobrenome}
                onChange={sobrenome => setSobrenome(sobrenome)}
                returnKeyType='next'
                blurOnSubmit={false}
                onSubmitEditing={() => (this.input_3.focus())}
                ref={input => this.input_2 = input}
              />
              <UselessForm
                text='Endereço'
                maxLenght={15}
                fontFamily='Poppins-Regular'
                fontSize={17}
                width={300}
                value={endereco}
                onChange={endereco => setEndereco(endereco)}
                blurOnSubmit={false}
                returnKeyType='next'
                onSubmitEditing={() => this.input_4.focus()}
                ref={input => this.input_3 = input}
              />
              <UselessForm
                text='Nº'
                maxLenght={15}
                fontFamily='Poppins-Regular'
                fontSize={17}
                width={50}
                value={numero}
                onChange={numero => setNumero(numero)}
                blurOnSubmit={false}
                returnKeyType='done'
                ref={input => this.input_4 = input}
              />
            </View>
            <View style={signUp_1Styles.bottomContainer}>
              <Button
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
                onPress={() => props.navigation.navigate('Login')}
              />
              <Button
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
                onPress={() => props.navigation.navigate('SignUp_2')}
              />
            </View>
          </ImageBackground>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </View>
  )
}