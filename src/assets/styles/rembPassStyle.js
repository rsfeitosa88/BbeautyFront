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
    fontSize: 30
  },
  headTextNormal: {
    top: -5
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
  }
})