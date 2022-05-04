
import { sendPasswordResetEmail} from 'firebase/auth'
import React, {useState} from 'react'
import { StyleSheet, Text, View , KeyboardAvoidingView, TextInput,TouchableOpacity, Image, ScrollView} from 'react-native'
import {auth} from '../FirebaseConfig';



const ForgotPassword = ({navigation}) => {



const [email, setEmail] = useState('')
function navigate(){
    navigation.navigate('Login');
}

const SubmitForgotPassword = () => {
    if(email.includes('') || email.includes(undefined)){ alert("inserisci un email");}
    else {
    sendPasswordResetEmail(auth, email);
    alert("email inviata");
      
}}



    
    return (
        <KeyboardAvoidingView style={styles.mainView}>
          <View style={styles.TopView} >
          <TouchableOpacity
          onPress={navigate}>
          <Image source={require('../assets/image/logoGold.png')}/></TouchableOpacity>    
          </View>
          <ScrollView style={styles.BottomView}>
              <View style={styles.inputContainer}>
                <TextInput
                placeholder="Email"
                placeholderTextColor={'#ac830f'}
                //borderColor="#2e2d2a"
                selectionColor={'#ac830f'} 
                color='#ac830f'
               value= {email}
                onChangeText = {text => setEmail(text)}
                style = {styles.input}/>

                <View style={styles.buttonContainer}>
            <TouchableOpacity
            onPress={SubmitForgotPassword}
            style={[styles.button,styles.buttonOutline]}>
                    <Text style={[styles.Testo2]}>Invia Email</Text>
         </TouchableOpacity>
                </View>
                </View>
                </ScrollView>
                </KeyboardAvoidingView>)}

export default ForgotPassword

const styles = StyleSheet.create({
    mainView:{
        marginTop: 40,
        flex:1,
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
    backgroundColor:'#1f1e1c'},
    
    TopView:{
        width:'100%',
        height:'30%',
        display:'flex',
        justifyContent:'center',
    alignItems:'center',
backgroundColor:'#1f1e1c'},
    
    BottomView:{
        width:'100%',
        height:'70%',
        backgroundColor:'#1f1e1c',
    },
    inputContainer:{
        width:'100%',
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        marginTop:20,
    },
    
    input:{
       width:'100%',
        backgroundColor:'#242320',
        height:50,
        marginTop: 20,
        paddingLeft:5,
    },
    buttonContainer:{
    
        justifyContent:'center',
        alignItems:'center',
        marginTop:40,
    },
    button:{
        backgroundColor:'#1f1e1c',
        width:'100%',
        padding: 1,
        borderRadius:20,
        alignItems:'center',},

        button2:{
            backgroundColor:'#1f1e1c',
            width:'100%',
            padding: 1,
            alignItems:'center',
        },
        buttonOutline2:{
            
            marginTop: 5,
            alignItems:'center'
        },
        Testo2:{
            color:'#ac830f',
            fontSize:32,
            fontWeight:'bold',
        },
})
