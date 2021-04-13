import { StyleSheet } from 'react-native'

export default signUp_2Styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  image: {
    display: 'flex',
    width: '100%',
    height: '100%'
  },
  headContainer: {
    flex: 1.3,
    marginTop: 68,
    marginLeft: 25,
    marginRight: 25,
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
  inputContainer: {
    flex: 1.5,
    marginLeft: 25,
    marginRight: 25,
    marginTop: 20,
    flexDirection: 'column',
    justifyContent: 'space-evenly'
  },
  bottomContainer: {
    flex: 0.6,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 25,
    marginRight: 25,
  },
  passText: {
    margin: 10,
    fontSize: 15,
    textAlign: 'center',
    fontFamily: 'Poppins-Bold',
    color: '#8E3385',
    backgroundColor: '#FFFFFF',
    borderRadius: 10
  },
})