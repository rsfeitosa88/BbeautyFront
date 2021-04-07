import { StyleSheet } from 'react-native'

export default loginStyle = StyleSheet.create({
  container: {
      flex: 1,
      flexDirection: 'column'
    },
    image: {
      display: 'flex',
      width: '100%',
      height: '100%',
      justifyContent: 'center'
    },
    containerHead: {
      flex: 1,
      marginBottom: 10,
      width: 323,
      height: 149,
      marginLeft: 25,
      marginRight: 25,
      top: 68
    },
    headTextBold: {
      fontFamily: 'Poppins-Bold',
      fontSize: 30,
      color: '#FFFFFF'
    },
    headTextNormal: {
      top: -5,
      fontFamily: 'Poppins-Regular',
      fontSize: 30,
      color: '#FFFFFF'
    },
    bodyContainer: {
      flex: 2,
      marginLeft: 25,
      marginRight: 25,
      flexDirection: 'column'
    },
    fieldContainer: {
      flex: 1.2,
      flexDirection: 'column',
      alignSelf: 'auto'
    },
    fieldName: {
      fontFamily: 'Poppins-Regular',
      fontSize: 17,
      color: '#FFFFFF'
    },
    textInput: {
      fontFamily: 'Poppins-Regular',
      marginBottom: 5,
      borderBottomWidth: 1, 
      lineHeight: 0.5, 
      borderColor: 'rgba(255, 255, 255, 0.69)', 
      textDecorationColor: '#FFFFFF',
      fontSize: 14
    },
    linksContainer: {
      flex: 1,
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'flex-end'
    },
    buttonContainer: {
      flex: 1,
      justifyContent: 'flex-start',
      alignSelf: 'center'
    },
    signText: {
      fontFamily: 'Poppins-Regular',
      flexDirection: 'row',
      textAlign: 'right',
      fontSize: 17,
      color: '#FFFFFF',
      width: 200,
      height: 200
    },
    bottomContainer: {
      flex: 0.5,
      marginLeft: 25
    },

});