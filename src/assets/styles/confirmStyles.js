import { StyleSheet } from 'react-native'

export default confirmStyles = StyleSheet.create({
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
    flex: 1,
    marginTop: 45,
    marginLeft: 25,
    marginRight: 25,
    marginBottom: 20,
    justifyContent: 'space-evenly'
  },
  textNormal: {
    fontFamily: 'Poppins-Regular'
  },
  textBold: {
    fontFamily: 'Poppins-Bold'
  },
  firstTextHead: {
    fontSize: 30,
    color: '#FFFFFF'
  },
  scndTextHead: {
    fontSize: 17,
    color: '#FFFFFF'
  },
  containerDataUser: {
    flex: 1.5,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    flexWrap: 'wrap',
    marginLeft: 25,
    marginRight: 25,
    marginBottom: 20
  },
  imageContainer:{
    flex: 1
  },
  avatar: {
    height: 150,
    width: 150,
    borderRadius: 75,
    resizeMode: 'stretch',
    marginBottom: 20,
    justifyContent: 'center',
  },
  userNameAndLast: {
    flex: 1,
    justifyContent: 'space-around',
    height: 150
  },
  contentText: {
    fontSize: 17,
    color: '#FFFFFF'
  },
  fieldText: {
    fontFamily: 'Poppins-Bold',
    fontSize: 17,
    color: '#FFFFFF',
  },
  text: {
    fontFamily: 'Poppins-Regular',
    fontSize: 17,
    color: '#FFFFFF',
    borderBottomWidth: 0.8,
    borderColor: '#FFFFFF'
  },
  bodyContainer: {
    flex: 3,
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginLeft: 25,
    marginRight: 25
  },
  infos: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around'
  },
  bottomContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
})