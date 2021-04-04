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

import styles from '../assets/styles/loginStyle'
import Button from '../components/ButtonFactory'
import TextInput from '../components/TextInputFactory'

const image = '../assets/images/esmaltes.jpg'

export default props => (

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
            <Text style={styles.headTextBold}>Seja bem-vinde</Text>
            <Text style={styles.headTextNormal}>de volta!</Text>
          </View>
          <View style={styles.bodyContainer}>
            <View style={styles.fieldContainer}>
              <TextInput fieldName="E-mail" placeHolder="Digite seu e-mail" />
              <TextInput fieldName="Senha" placeHolder="Digite sua senha" />
            </View>
            <View style={styles.linksContainer}>
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
              <Text style={styles.signText}>Não tem conta? </Text>
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
            <View style={styles.buttonContainer}>
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
          <View style={styles.bottomContainer}>
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
              onPress={() => Alert.alert('testing')}
            />
          </View>
        </ImageBackground>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  </View>

);