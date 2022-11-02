
import {signInWithEmailAndPassword } from 'firebase/auth'
import React, {useEffect, useState} from 'react'
import { StyleSheet, View ,Text, KeyboardAvoidingView, TextInput,TouchableOpacity, Image, ScrollView, Dimensions} from 'react-native'
import {auth} from '../FirebaseConfig';
import Ionicons from 'react-native-vector-icons/Ionicons';
import '@react-native-async-storage/async-storage';
import Moderr from '../componenti/Element/Modal_error';
import Loader from '../componenti/Element/LoadingIndicator';

const Widthi = Dimensions.get('window').width
const Heighti = Dimensions.get('window').height

const SigninScreen = ({navigation}) => {
    const [secureEntry, setSecureEntry]= useState(true);
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    var [a, seta]=useState(1)
    const [value2, setValue2]=useState(false)
    const [value1, setValue1]=useState(true)
    const [Text1, setText]=useState('')
    const [tutto, setTutto]=useState(false);
   
    
    function navigate1(){navigation.navigate('Reg');}
    function forgotPassword1 (){navigation.navigate('ForgotPassword');}
    
   
    
    
     const Verify =()=>{
                          let Form_a = [email, password];
                          if(Form_a.includes('') || Form_a.includes(undefined)) message1();
                          else{ 
                            Login();}}

    const Login = () => {
     setTutto(true)
        signInWithEmailAndPassword(auth, email, password)
        .then(userCredentials => {const user  = userCredentials.user;})
        .catch(error => { 
                          setTutto(false);
                          if (error.code === "auth/invalid-email") {
                                                    
                                                    setText("errore: indirizzo email non valido");
                                                    setValue1(!value1);
                                                    setValue2(!value2);
                                                    
                                                  }
                          if(error.code =="auth/wrong-password"){
                                                    
                                                    setText("email o password errata");
                                                    setValue1(!value1);
                                                    setValue2(!value2);
                                                  }
                          if(error.code == "auth/user-not-found"){
                                                    
                                                    setText("utente non registrato");
                                                    setValue1(!value1);
                                                    setValue2(!value2);}})}
                          
   
       
    const sorpresa=()=>{
                        seta(a+1)
                        if (a==5){
                                  message();};}
    const message=()=>{
                        setText("albe oscure sotto celi plumbei nascono all'ombra di soli rossi")
                       setValue2(!value2)
                       setValue1(!value1)}
     const message1=()=>{
                        setText("per poterti loggare completa i campi")
                       setValue2(!value2)
                       setValue1(!value1)}
    const close=()=>{
                      setValue1(!value1)
                      setValue2(!value2) 
                      seta(1)}

  return (

<KeyboardAvoidingView style={styles.mainView}>
 
  <View style={styles.TopView} >
    <TouchableOpacity style={{flex:1, alignContent:'center',marginTop:Heighti*0.2}} onPress={()=>(sorpresa())}>
      <Image style={{width:Widthi*0.2, height:Heighti*0.2,}} resizeMethod={'auto'} resizeMode={'center'} source={require('../assets/image/logoGold.png')}/>
    </TouchableOpacity>   
  </View>
  <ScrollView style={styles.BottomView}>
    <View style={{flex:1,flexDirection:'column', alignContent:'center', justifyContent:'center', backgroundColor:'#1f1e1c'}}>
      <View style={{alignItems:'center', justifyContent:'center'}}>
        <View style={styles.inputContainer}>
          <TextInput
             autoCapitalize='none'
             placeholder="Email"
             placeholderTextColor={'#ac830f'}
             selectionColor={'#ac830f'} 
             color='#ac830f'
             value= {email}
             onChangeText = {text => setEmail(text)}
             style = {styles.input}
             textContentType = 'username' />
        <View style={styles.inputContainer2}>
          <TextInput
             autoCapitalize='none'
             placeholder="Password" 
             placeholderTextColor={'#ac830f'}
             selectionColor={'#ac830f'} 
             color='#ac830f'
             value= {password}
             onChangeText = {text => setPassword(text)}
             style = {styles.input2}
             secureTextEntry={secureEntry}
             textContentType = 'password'/>
        <TouchableOpacity style={{ paddingTop:13, paddingLeft:5, marginLeft:-30, backgroundColor:'#242320', height:10}}>
          {secureEntry ?                        
            <Ionicons name="eye" size={20} style={{color:'#ac830f',marginRight:5}} onPress={()=>{setSecureEntry(prev=>!prev)}}/>:
            <Ionicons name="eye-off" size={20} style={{color:'#ac830f',marginRight:5}} onPress={()=>{setSecureEntry(prev=>!prev)}}/>}
        </TouchableOpacity>
      </View>
    </View>
   </View>
   <View style={styles.buttonContainer}>
    <TouchableOpacity onPress={Verify} style={[styles.button,styles.buttonOutline]}>
      <Text style={[styles.Testo2]}>Login</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={navigate1} style={[styles.button2,styles.buttonOutline2]}>
      <Text style={[styles.Testo3]}>Non sei ancora iscritto? Registrati</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={forgotPassword1} style={[styles.button2,styles.buttonOutline2]}>
      <Text style={[styles.Testo3]}>Non ricordi la password?</Text>
    </TouchableOpacity>
    
   </View>
   {tutto?<Loader/>:<Text/>}
  </View>
 </ScrollView>
 <View>
   {value2? <Moderr item={Text1} value={value1} onChangeValue={(modal)=>close()}></Moderr>:<Text></Text>}
 </View>
</KeyboardAvoidingView>
   
  )
}

export default SigninScreen

const styles = StyleSheet.create({


mainView:{
    width:Widthi,
    height:Heighti,
    flex:1,
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    alignContent:'center',
    backgroundColor:'#1f1e1c'},
TopView:{
    width:Widthi,
    height:Heighti*0.4,
    marginTop:Heighti*0.01,
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#1f1e1c'},
BottomView:{
  display:'flex',
    width: Widthi,
    height: Heighti*0.6,
    backgroundColor:'#1f1e1c',
    alignContent:'center'},

Testo2:{
    color:'#1f1e1c',
    fontSize:32,
    fontWeight:'bold'},
Testo3:{
    color:'#ac830f',
    fontSize:12,
    fontWeight:'400',
    marginTop:10},

inputContainer:{
    width:Widthi*0.2,
    flex:1,
    display:'flex',
    marginTop:10,
    alignContent:'center'},
inputContainer2:{
  width:Widthi*0.2,
  flex:1,
  display:'flex',
  flexDirection:'row',
  marginTop:10,
  alignContent:'center'},
input:{
   width:'100%',
    backgroundColor:'#242320',
    height:50,
    paddingLeft:15,
  color:'#ac830f'},
input2:{
  width:'100%',
   backgroundColor:'#242320',
   height:50,
   paddingLeft:15,
  color:'#ac830f'},

buttonContainer:{
    justifyContent:'center',
    alignItems:'center',
    marginTop:10,
},
button:{
    backgroundColor:'#ac830f',
    width:Widthi*0.10,
    padding: 1,
    borderRadius:5,
    alignItems:'center',
  borderWidth:1,
  borderColor:'#1f1e1c',},
button2:{
    backgroundColor:'#1f1e1c',
    width:Widthi*0.15,
    padding: 1,
    alignItems:'center'},
buttonOutline2:{ 
    alignItems:'center'}})