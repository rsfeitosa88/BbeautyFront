import React from 'react';
import { View, Text, StyleSheet, ImageBackground, Alert, KeyboardAvoidingView } from 'react-native';

import Button from '../components/ButtonFactory';
import TextInput from '../components/TextInputFactory';

const image = '../assets/images/esmaltes.jpg';

export default props => (

  <View style={styles.container}>
    <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS == "ios" ? 0 : 20}
      enabled={Platform.OS === "ios" ? true : false}
    >
      <ImageBackground
        source={require(image)}
        style={styles.image}
        blurRadius={50}>
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
    </KeyboardAvoidingView>
  </View>

);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  image: {
    display: 'flex',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
  containerHead: {
    flex: 1,
    marginBottom: 10,
    width: 323,
    height: 149,
    marginLeft: 25,
    marginRight: 25,
    top: 68,
  },
  headTextBold: {
    fontFamily: 'Poppins-Bold',
    fontSize: 30,
    color: '#FFFFFF',
  },
  headTextNormal: {
    top: -5,
    fontFamily: 'Poppins-Regular',
    fontSize: 30,
    color: '#FFFFFF',
  },
  bodyContainer: {
    flex: 2,
    marginLeft: 25,
    marginRight: 25,
    width: 345,
    height: 341,
    flexDirection: 'column',
  },
  fieldContainer: {
    flex: 1.3,
  },
  linksContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-end',
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignSelf: 'center',
  },
  signText: {
    fontFamily: 'Poppins-Regular',
    flexDirection: 'row',
    textAlign: 'right',
    fontSize: 17,
    color: '#FFFFFF',
    width: 200,
    height: 200,
  },
  bottomContainer: {
    flex: 0.5,
    marginLeft: 25,
    marginRight: 25,
  },
});
