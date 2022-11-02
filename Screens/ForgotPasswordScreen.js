
import { sendPasswordResetEmail} from 'firebase/auth'
import React, {useState} from 'react'
import { StyleSheet, Text, View , KeyboardAvoidingView, TextInput,TouchableOpacity, Image, ScrollView, Dimensions} from 'react-native'
import {auth} from '../FirebaseConfig';
import Moderr from '../componenti/Element/Modal_error';
import Ionicons from 'react-native-vector-icons/Ionicons';
const Widthi = Dimensions.get('window').width
const Heighti = Dimensions.get('window').height


const ForgotPassword = ({navigation}) => {

const [email, setEmail] = useState('')
const [value2, setValue2]=useState(false)
const [value1, setValue1]=useState(true)
const [Text1, setText]=useState('')

function navigate(){navigation.navigate('Login');}

const SubmitForgotPassword = () => {
    console.log(email);
    console.log(email.length);
    if(email.length == 0 || email.includes(undefined)){ 
        if(email.includes('')){ console.log("oilloc")}
                                                        setText("inserisci l'indirizzo email di registrazione");
                                                        setValue1(!value1);
                                                        setValue2(!value2);}
    else {
            sendPasswordResetEmail(auth, email)
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log(errorCode ,errorMessage);
                  });
                
            
            setText("email inviata");
            setValue1(!value1);
            setValue2(!value2);}}

            const close=()=>{
                setValue1(!value1)
                setValue2(!value2) }

    
    return (
        <KeyboardAvoidingView style={styles.mainView}>
          
          <View style={styles.TopView} >
          
          <TouchableOpacity style={{flex:1, position:'absolute', top:Heighti*0.15, left:Widthi*0.38}} onPress={navigate}>
          <Ionicons name={"arrow-back-outline"} size={24} color={"#ac830f"}></Ionicons>
          </TouchableOpacity> 
          <Image resizeMethod='auto' resizeMode='center' style={{width:Widthi*0.2, height:Heighti*0.2, justifyContent:'center', alignItems:'center', marginTop:Heighti*0.21}} source={require('../assets/image/logoGold.png')}/>
          </View>
          <ScrollView style={styles.BottomView}>
              <View style={{flex:1, alignContent:'center', alignItems:'center',justifyContent:'center'}}>
              <View style={{alignItems:'center', justifyContent:'center'}}>  
              <View style={styles.inputContainer}>
                <TextInput
                placeholder="Email"
                placeholderTextColor={'#ac830f'}
                selectionColor={'#ac830f'} 
                color='#ac830f'
                value= {email}
                onChangeText = {text => setEmail(text)}
                style = {styles.input}
                autoCapitalize= {"none"}/>

                <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={SubmitForgotPassword} style={[styles.button,styles.buttonOutline]}>
                    <Text style={[styles.Testo2]}>Invia Email</Text>
             </TouchableOpacity>
                </View>
                </View>
                </View>  
                </View>
                </ScrollView>
                {value2? <Moderr item={Text1} value={value1} onChangeValue={(modal)=>close()}/> : <Text></Text>}
                </KeyboardAvoidingView>)}

export default ForgotPassword

const styles = StyleSheet.create({
    mainView:{
        width:Widthi,
        height:Heighti,
        flex:1,
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
    backgroundColor:'#1f1e1c'},
    
    TopView:{
        width:Widthi,
        height:Heighti*0.4,
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#1f1e1c'},
    
    BottomView:{
        width:Widthi,
        height:Heighti*0.6,
        alignContent:'center',
        backgroundColor:'#1f1e1c',
    },
    inputContainer:{    
    width:Widthi*0.2,
    display:'flex',
    flex:1,
    alignContent:'center',
    },
    
    input:{
       width:'100%',
        backgroundColor:'#242320',
        height:50,
        marginTop: 10,
        paddingLeft:5,
    },
    buttonContainer:{
        justifyContent:'center',
        alignItems:'center',
        marginTop:10,
    },
    button:{
        backgroundColor:'#ac830f',
  width:Widthi*0.15,
  padding: 1,
  borderRadius:5,
  alignItems:'center',
borderWidth:1,
borderColor:'#1f1e1c'},
 Testo2:{
            color:'#1f1e1c',
            fontSize:32,
            fontWeight:'bold'},

})
