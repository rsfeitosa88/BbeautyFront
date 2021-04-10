import React from 'react'
import { 
    ImageBackground,
    Text, 
    View, 
    KeyboardAvoidingView, 
    Keyboard, 
    TouchableWithoutFeedback, 
    Platform,
    StyleSheet,
    Image } from 'react-native'

import Button from '../components/ButtonFactory'
import UselessForm from '../components/UselessForm'

export default SignUp = props => {
  
  const [ nome, setNome ] = React.useState()
  const [ sobrenome, setSobrenome ] = React.useState()
  
  const image = '../assets/images/esmaltes.jpg'
  state = { isFocused: true }

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
            <View style={styles.headContainer}>
              <Text 
                style={[
                styles.textBold, 
                styles.firstTextHead
                ]}
              >
                Seja bem-vinde
              </Text>
              <Text 
                style={[
                  styles.textNormal, 
                  styles.firstTextHead, 
                  styles.space
                ]}
              >
                à Bbeauty
              </Text>
              <Text 
                style={[
                  styles.textNormal, 
                  styles.scndTextHead
                ]}
              >
                Nós e os profissionais, estamos 
                ansiosos para mostrarmos os trabalhos. 
                Mas antes, precisamos de alguns dados.
              </Text>
            </View>
            <View style={styles.photoContainer}>
              <Image 
                source={{
                  uri: 
                    'https://cdn1.vectorstock.com/i/thumb-large/38/10/solid-purple-gradient-user-icon-web-icon-vector-23623810.jpg'
                }}
                style={styles.avatar}
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
            <View style={styles.inputContainer}>
                <UselessForm
                  text='Nome'
                  maxLenght={15}
                  fontFamily='Poppins-Regular'
                  fontSize={17}
                  width={170}
                />
                <UselessForm
                  text='Sobrenome'
                  maxLenght={15}
                  fontFamily='Poppins-Regular'
                  fontSize={17}
                  width={170}
                />
                <UselessForm
                  text='Endereço'
                  maxLenght={15}
                  fontFamily='Poppins-Regular'
                  fontSize={17}
                  width={300}
                />
                <UselessForm
                  text='Nº'
                  maxLenght={15}
                  fontFamily='Poppins-Regular'
                  fontSize={17}
                  width={50}
                />
                <Button
                  text='Voltar'
                  color='#FFFFFF'
                  width={106}
                  height={42}
                  colorText='#8E3385'
                  fontFamily='Poppins-Bold'
                  fontSize={19}
                  padding={6}
                  borderRadius={30}
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
                  borderRadius={30}
                  alignSelf='center'
                  marginTop={30}
                  onPress={() => props.navigation.navigate('Login')}
                />

            </View>
          
          </ImageBackground>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  image: {
    display: 'flex',
    width: '100%',
    height: '100%'
  },
  headContainer: {
    flex: 0.6,
    marginTop: 68,
    marginLeft: 25,
    marginRight: 25
  },
  textNormal: {
    fontFamily: 'Poppins-Regular'
  },
  textBold: {
    fontFamily: 'Poppins-Bold'
  },
  space: {
    top: -5
  },
  firstTextHead: {
    fontSize: 30,
    color: '#FFFFFF'
  },
  scndTextHead: {
    fontSize: 17,
    color: '#FFFFFF'
  },
  photoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 25,
    marginRight: 25,
  },
  avatar: {
    height: 150,
    width: 150,
    borderRadius: 75,
    resizeMode: 'stretch',
    marginBottom: 20
  },
  inputContainer: {
    flex: 1,
    marginLeft: 25,
    marginRight: 25,
    justifyContent: 'space-between',
    flexDirection: 'row',
    flexWrap: 'wrap'
  }
})