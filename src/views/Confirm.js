import React from 'react'
import {
    Text,
    View,
    StyleSheet
} from 'react-native'

export default Confirm = props => {

  return (

    <View style={styles.container}>
      <View style={styles.headContainer}>
        <Text>AAAAA</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column'
    },    
    headContainer: {
        flex: 1,
        marginTop: 68,
        marginLeft: 25,
        marginRight: 25,
        marginBottom: 20
    }
})