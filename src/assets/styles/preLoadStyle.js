import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  containerBb: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center'
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
    image: {
      display: 'flex',
      width: '100%',
      height: '100%',
      justifyContent: 'center'
    },
})

export default styles
