import React from 'react'
import {
    Text,
    View,
    ImageBackground,
    Image
} from 'react-native'

import confirmStyles from '../assets/styles/confirmStyles'
import ButtonFactory from '../components/ButtonFactory'
import MyAppTextNormal from '../components/MyAppTextNormal'
import MyAppTextBold from '../components/MyAppTextBold'
import MyAppHeaderTextBold from '../components/MyAppHeaderTextBold'
import MyAppHeaderTextNormal from '../components/MyAppHeaderTextNormal'

export default Confirm = props => {

  const image = '../assets/images/esmaltes.jpg'

  return (

    <View style={confirmStyles.container}>
      <ImageBackground
        source={require(image)}
        style={confirmStyles.image}
        blurRadius={50}
      >
        <View style={confirmStyles.headContainer}>
          <MyAppHeaderTextBold>Quase lá</MyAppHeaderTextBold>
          <MyAppHeaderTextNormal>Confirme se seus dados estão corretos</MyAppHeaderTextNormal>
        </View>
        <View style={confirmStyles.containerDataUser}>
          <View style={confirmStyles.imageContainer}>
            <Image 
              source={{
                uri: 
                  'https://cdn1.vectorstock.com/i/thumb-large/38/10/solid-purple-gradient-user-icon-web-icon-vector-23623810.jpg'
              }}
              style={confirmStyles.avatar}
            />
          </View>
          <View style={confirmStyles.userNameAndLast}>
            <MyAppTextBold>Nome:</MyAppTextBold>
            <MyAppTextNormal borderBottomWidth={1} borderColor={'#FFFFFF'}>Nome do usuário</MyAppTextNormal>
            <MyAppTextBold>Sobrenome:</MyAppTextBold>
            <MyAppTextNormal borderBottomWidth={1} borderColor={'#FFFFFF'}>Sobrenome do User</MyAppTextNormal>
          </View>
        </View>
        <View style={confirmStyles.bodyContainer}>
          <View>
            <Text style={confirmStyles.fieldText}>E-mail:</Text>
            <Text style={confirmStyles.text}>exemplo@gmail.com</Text>
            <Text style={confirmStyles.fieldText}>Endereço:</Text>
            <Text style={confirmStyles.text}>Rua de exemplo do app</Text>
            
          </View>
          <MyAppTextNormal>AAAA</MyAppTextNormal>
            
          <Text style={confirmStyles.text}>Alto/Ap/Casa</Text>
          <Text style={confirmStyles.fieldText}>
            CEP: 
            <Text style={confirmStyles.text}> 11111-222</Text>
          </Text>
          <Text style={confirmStyles.fieldText}>
            Cidade: 
            <Text style={confirmStyles.text}> Exemplo</Text>
          </Text>
          <Text style={confirmStyles.fieldText}>
            Estado: 
            <Text style={confirmStyles.text}> SP</Text>
          </Text>
            
        </View>
        <View style={confirmStyles.bottomContainer}>
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
            onPress={() => props.navigation.navigate('SignUp_2')}
          />
          <ButtonFactory
            text='Confirmar'
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
            onPress={() => props.navigation.navigate('')}
          />
        </View>
      </ImageBackground>
    </View>
  )
}
