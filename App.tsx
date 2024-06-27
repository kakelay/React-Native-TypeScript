import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const App = () => {
  return (
    <View style={
     styles.container
    }>
      <Text>App</Text>
      <Button onPress={() =>clickMe("hi")} title='Click me'/>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
 container: {
   flex: 1,
   backgroundColor: '#fff',
    alignItems: 'center',
   justifyContent: 'center',
   
 }

})

const clickMe =(s: string) => {
 console.log(s.toUpperCase())
}