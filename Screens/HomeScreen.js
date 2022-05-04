import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'




const HomeScreen = () => {
  const [email, setEmail]= useState('')
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
           
            <TextInput
            placeholder="cerca"
            placeholderTextColor={'#f3b32b'}
            value= {email}
            selectionColor='#ac830f'
            onChangeText = {text => setEmail(text)}
            style = {styles.input}/>
            </View>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1f1e1c',
    alignItems: 'center',
    justifyContent: 'center',},

    inputContainer:{
      width:'100%',
      display:'flex',
      flexDirection:'column',
      alignItems:'center',
      marginTop:20,
  },
  
  input:{
     width:'100%',
      backgroundColor:'#262626',
      height:50,
      //borderColor:'#2e2d2a', 
      marginTop: 20,
      paddingLeft:5,
  },})