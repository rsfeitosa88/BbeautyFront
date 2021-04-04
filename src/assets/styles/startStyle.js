import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  image: {
    display: 'flex',
    width: '100%',
    height: '100%',
    justifyContent: 'center'
  },
  containerBb: {
    flex: 3,
    left: 25
  },
  backgroundText: {
    backgroundColor: 'rgba(255, 255, 255, 0.50)',
    width: 279,
    height: 87,
    top: 140,
    borderBottomLeftRadius: 30
  },
  textBb: {
    fontFamily: 'Poppins-Bold',
    fontSize: 60,
    lineHeight: 90,
    color: '#8E3385',
    textAlign: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.25)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10
    },
  containerText: {
    flex: 1,
    width: 250,
    left: 25,
  },
  textoInicial: {
    color: 'white',
    fontFamily: 'Poppins-Bold',
    fontSize: 25
  },
  containerButton: {
    flex: 0.7,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%',
    height: 60,
  }
})

export default styles