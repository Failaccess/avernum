import { StyleSheet, Text, View , KeyboardAvoidingView, TextInput,TouchableOpacity,Image,ScrollView, Dimensions  } from 'react-native'
import React, {useEffect, useState} from 'react'
import { auth } from '../FirebaseConfig'
import { createUserWithEmailAndPassword, GoogleAuthProvider,} from 'firebase/auth'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Moderr from '../componenti/Element/Modal_error'
import GestionePg from './GestionePg'
import { validateIndexedDBOpenable } from '@firebase/util'

const Widthi = Dimensions.get('window').width
const Heighti = Dimensions.get('window').height



const RegScreen = ({navigation}) => {

const [secureEntry, setSecureEntry]= useState(true);
const [secureEntry1, setSecureEntry1]= useState (true);
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const [passwordConfermation, setPasswordConfermation]= useState('')

const [value1,setValue1]=useState(true);
const [value2,setValue2]=useState(false);
const [Text1,setText]=useState('');
const [tutto, setTutto]=useState(true);
 
    function navigate(){navigation.navigate('Login');}
    const handleSignup = async () => {
                                      createUserWithEmailAndPassword(auth, email, password)
                                      .then(userCredentials => {
                                        const user  = userCredentials.user; })

                                      .catch(error => {
                                                       if (error.code === "auth/email-already-in-use") {
                                                                                                        setText("Errore: indirizzo email già in uso");
                                                                                                        setValue1(!value1);
                                                                                                        setValue2(!value2);
                                                                                                         setTutto(false)}
                                                       if (error.code === "auth/invalid-email") {
                                                                                                        setText("Errore: indirizzo email non valido");
                                                                                                        setValue1(!value1);
                                                                                                        setValue2(!value2);
                                                                                                        setTutto(false)}
                                                       if (error.code === "auth/operation-not-allowed") {
                                                                                                        setText("Errore: Operation is not allowed!");
                                                                                                        setValue1(!value1);
                                                                                                        setValue2(!value2);
                                                                                                        setTutto(false)}
                                                       if (error.code === "auth/weak-password") {
                                                                                                        setText("Errore: Password troppo debole inserisci alemo 6 caratteri");
                                                                                                        setValue1(!value1);
                                                                                                        setValue2(!value2);
                                                                                                        setTutto(false)};})
                                      vai();}

                         function vai(){
                           if(tutto==true){
                          navigation.navigate('Loading');}
                         }             
   

 const passwordValue=()=>{
   let a = 0;
   if (password.includes('.')){ a=a+1;}
   if (password.includes ('-')){a=a+1;}
   if (password.includes(',')){a=a+1}
   if (password.includes(';')){a=a+1}
   if (password.includes(':')){a=a+1}
   if (password.includes('_')){a=a+1}
   if (password.includes('ç')){a=a+1}
   if (password.includes('@')){a=a+1}
   if (password.includes('#')){a=a+1}
   if (password.includes('°')){a=a+1}
   if (password.includes('§')){a=a+1}
   if (password.includes('+')){a=a+1}
   if (password.includes('[')){a=a+1}
   if (password.includes(']')){a=a+1}
   if (password.includes('*')){a=a+1}
   if (password.includes('?')){a=a+1}
   if (password.includes('^')){a=a+1}
   if (password.includes('!')){a=a+1}
   if (password.toUpperCase)(a=a+10)
   if ((a>10)&& (password.length>=8)){validationForm();}
   if ((a<=10)||(password.length<8)){
                                      setText("Errore: la password deve contenere un carattere speciale, almeno una maiuscola e essere almeno di 8 caratteri");
                                      setValue1(!value1);
                                      setValue2(!value2);}}   

const validationForm =()=>{
  let form_inputs = [ email, password, passwordConfermation];
  let passwordMatch = password == passwordConfermation;
  if(form_inputs.includes('') || form_inputs.includes(undefined)){
    setText("non hai compilato tutti i campi");
    setValue1(!value1);
    setValue2(!value2);}

  if (passwordMatch && !(form_inputs.includes('')||form_inputs.includes(undefined))) handleSignup(); 
  if (!passwordMatch){
                      setText("Le password non concidono");
                      setValue1(!value1);
                      setValue2(!value2);}}

                      const close=()=>{
                        setValue1(!value1)
                        setValue2(!value2) }
                        function navigate(){navigation.navigate('Login');}
  return (
    <KeyboardAvoidingView style={styles.mainView}>
      <View style={styles.TopView}>  
      <TouchableOpacity style={{flex:1, position:'absolute', top:Heighti*0.15, left:Widthi*0.38}} onPress={navigate}>
          <Ionicons name={"arrow-back-outline"} size={24} color={"#ac830f"}></Ionicons>
      </TouchableOpacity> 
        <Image resizeMethod={'auto'} resizeMode={'center'} style={{width:Widthi*0.2, height:Heighti*0.2, marginTop:Heighti*0.21}} source={require('../assets/image/logoGold.png')} />
      </View>
      <ScrollView style={styles.BottomView}>
        <View style={{flex:1, alignContent:'center', alignItems:'center',justifyContent:'center'}}>
          <View style={styles.inputContainer}>
          
            <TextInput
                        autoCapitalize='none'
                        placeholder="Email*"
                        placeholderTextColor={'#ac830f'}
                        selectionColor={'#ac830f'} 
                        color='#ac830f'
                        value= {email}
                        onChangeText = {text => setEmail(text)}
                        style = {styles.input}/>
         <View style={styles.inputContainer2}>
          <View style={{flex: 1, flexDirection: 'row', width:Widthi*0.2}}>
             <TextInput
                        autoCapitalize='none'
                        placeholder="Password*"
                        placeholderTextColor={'#ac830f'}
                        selectionColor={'#ac830f'} 
                        color='#ac830f'
                        value= {password}
                        onChangeText = {text => setPassword(text)}
                        style = {styles.input2}
                        secureTextEntry={secureEntry}/>
             <TouchableOpacity style={{marginTop:10,
                                        paddingTop:13, 
                                        paddingLeft:5, 
                                        backgroundColor:'#242320',
                                        height:50 }}> 
                {secureEntry?                 
                       <Ionicons name="eye" size={20} style={{color:'#ac830f',marginRight:5}} onPress={()=>{setSecureEntry(prev=>!prev) }}/>:
                       <Ionicons name="eye-off" size={20} style={{color:'#ac830f',marginRight:5}} onPress={()=>{setSecureEntry(prev=>!prev) }}/>}
             </TouchableOpacity>
          </View>
          
          <View style={{flex: 1,flexDirection: 'row',width:Widthi*0.2}}>
            <TextInput
                  autoCapitalize='none'italize='none'
                  placeholder="Conferma Password*"
                  placeholderTextColor={'#ac830f'}
                  selectionColor={'#ac830f'} 
                  color='#ac830f'
                  value= {passwordConfermation}
                  onChangeText = {text => setPasswordConfermation(text)}
                  style = {styles.input2}
                  secureTextEntry={secureEntry1}/>

          <TouchableOpacity style={{marginTop:10,
                                        paddingTop:13, 
                                        paddingLeft:5, 
                                        backgroundColor:'#242320',
                                        height:50 }}> 

                        {secureEntry1?                 
                       <Ionicons name="eye" size={20} style={{color:'#ac830f',marginRight:5}} onPress={()=>{setSecureEntry1(prev=>!prev) }}/>:
                       <Ionicons name="eye-off" size={20} style={{color:'#ac830f',marginRight:5}} onPress={()=>{setSecureEntry1(prev=>!prev) }}/>}

          </TouchableOpacity>
          </View>
        </View>
        </View> 
       </View>

        <View style={styles.buttonContainer}>

         <TouchableOpacity
            onPress={passwordValue}
            style={[styles.button, styles.buttonOutline]}>

                    <Text style={styles.Testo2}>Registrati</Text>

         </TouchableOpacity>

        </View>  

      </ScrollView>
      {value2? <Moderr item={Text1} value={value1} onChangeValue={(modal)=>close()}/> : <Text></Text>}
    </KeyboardAvoidingView>)}

export default RegScreen

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
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#1f1e1c'},
BottomView:{
    width:Widthi,
    height:Heighti*0.6,
    alignContent:'center',
    backgroundColor:'#1f1e1c'},
    

Testo2:{
    color:'#1f1e1c',
    fontSize:32,
    fontWeight:'bold',
},

inputContainer:{
    width:Widthi*0.2,
    display:'flex',
    flex:1,
    alignContent:'center',
},
inputContainer2:{
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
    color:'#ac830f'
},
input2:{
  width:'100%',
   backgroundColor:'#242320',
   height:50,
   marginTop: 10,
   paddingLeft:5,
   color:'#ac830f'
},

buttonContainer:{
    justifyContent:'center',
    alignItems:'center',
    marginTop:10,
},
button:{
  backgroundColor:'#ac830f',
  width:Widthi*0.13,
  padding: 1,
  borderRadius:5,
  alignItems:'center',
borderWidth:1,
borderColor:'#1f1e1c',
},
button2:{
    backgroundColor:'#1f1e1c',
    width:'100%',   
    padding: 1,
    alignItems:'center',
},
buttonOutline2:{
    alignItems:'center'
},

   
},


 

)