import { StyleSheet } from 'react-native'

export default rembPassStyle = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  image: {
    display: 'flex',
    width: '100%',
    height: '100%',
    justifyContent: 'center'
  },
  containerHead: {
    flex: 1,
    top: 68,
    marginLeft: 25,
    marginRight: 25,
    justifyContent: 'flex-start'
  },
  textBold: {
    fontFamily: 'Poppins-Bold',
    color: '#FFFFFF'
  },
  textNormal: {
    fontFamily: 'Poppins-Regular',
    color: '#FFFFFF'
  },
  headFirstText: {
    fontSize: 30,
    color: '#FFFFFF'
  },
  headTextNormal: {
    top: -5,
    fontSize: 17
  },
  headSecondText: {
    fontSize: 19
  },
  bodyContainer: {
    flex: 1,
    marginLeft: 25,
    marginRight: 25
  },
  bodyText: {
    fontSize: 17
  },
  buttonEnviar: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: -40
  },
  textInputContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start'
  },
  bottomContainer: {
    flex: 0.5,
    flexDirection: 'row',
    alignItems: 'center',
    width: 330,
    height: 60,
    marginLeft: 25,
    marginRight: 25
  },
  textBottom: {
    fontFamily: 'Poppins-Regular',
    color: '#FFFFFF',
    fontSize: 17,
    flexWrap: 'wrap',
    height: 57,
    width: 201,
    padding: 4.5,
    margin: 10
  },
})