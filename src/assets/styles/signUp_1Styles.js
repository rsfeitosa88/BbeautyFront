import { StyleSheet } from 'react-native'

export default signUp_1Styles = StyleSheet.create({
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