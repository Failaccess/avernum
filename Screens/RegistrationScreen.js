import { StyleSheet, Text, View , KeyboardAvoidingView, TextInput,TouchableOpacity,Image,ScrollView  } from 'react-native'
import React, {useState} from 'react'
import { auth } from '../FirebaseConfig'
import { createUserWithEmailAndPassword, updateCurrentUser, updateProfile } from 'firebase/auth'
import Ionicons from 'react-native-vector-icons/Ionicons'


const RegScreen = ({navigation}) => {

const [secureEntry, setSecureEntry]= useState(true);
const [secureEntry1, setSecureEntry1]= useState (true);
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const [passwordConfermation, setPasswordConfermation]= useState('')
const [Displayname,setDisplayname]=useState('')

  
   function navigate(){navigation.navigate('Login');}

    const handleSignup = () => {
          createUserWithEmailAndPassword(auth, email, password)
          .then(userCredentials => {
          const user  = userCredentials.user;
          console.log(Displayname,email,password,passwordConfermation);})
          .catch(error => { if (error.code === "auth/email-already-in-use") {alert("indirizzo email già in uso");}
      if (error.code === "auth/invalid-email") {alert("indirizzo email non valido");}
      if (error.code === "auth/operation-not-allowed") {alert("Operation is not allowed!");}
      if (error.code === "auth/weak-password") {alert("Password troppo debole inserisci alemo 6 caratteri");}})}
   

 const passwordValue=()=>{
   var a = 0;
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
   if ((a<=10)||(password.length<8)){alert ("la password deve contenere un carattere speciale, almeno una maiuscola e essere almeno di 8 caratteri");
  console.log(a) }}   

  const validationForm =()=>{
  var form_inputs = [Displayname, email, password, passwordConfermation];
  var passwordMatch = password == passwordConfermation;
  if(form_inputs.includes('') || form_inputs.includes(undefined)) alert("non hai compilato tutti i campi");
  if (passwordMatch && !(form_inputs.includes('')||form_inputs.includes(undefined))) handleSignup(); 
  if (!passwordMatch)  alert("Le password non concidono");}
 
  return (
    <KeyboardAvoidingView style={styles.mainView}>

      <View style={styles.TopView}>

        <Image source={require('../assets/image/logoGold.png')}/>

      </View>

      <ScrollView style={styles.BottomView}>

        <View style={styles.inputContainer}>

          <TextInput
          autoCapitalize='none'
          placeholder="Username*"
          placeholderTextColor={'#ac830f'}
          selectionColor={'#ac830f'} 
          color='#ac830f'
          value= {Displayname}
          onChangeText = {text => setDisplayname(text)}
          style = {styles.input}/>

          <TextInput
          autoCapitalize='none'
          placeholder="Email*"
          placeholderTextColor={'#ac830f'}
          selectionColor={'#ac830f'} 
          color='#ac830f'
          value= {email}
          onChangeText = {text => setEmail(text)}
          style = {styles.input}/>

          <View style={{flex: 1,
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',}}>

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

                <TouchableOpacity style={{marginTop:20,
                                        paddingTop:13, 
                                        paddingLeft:5, 
                                        backgroundColor:'#242320',
                                        
                                        //borderColor:'#2e2d2a',
                                        height:50 }}> 
                       {secureEntry?                 
                       <Ionicons name="eye" size={20} style={{color:'#ac830f',marginRight:5}} onPress={()=>{setSecureEntry(prev=>!prev) }}/>:
                       <Ionicons name="eye-off" size={20} style={{color:'#ac830f',marginRight:5}} onPress={()=>{setSecureEntry(prev=>!prev) }}/>}
                </TouchableOpacity>
          </View>

          <View style={{flex: 1,
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',}}>
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

          <TouchableOpacity style={{marginTop:20,
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

        <View style={styles.buttonContainer}>

         <TouchableOpacity
            onPress={passwordValue}
            style={[styles.button, styles.buttonOutline]}>

                    <Text style={styles.Testo2}>Registrati</Text>

         </TouchableOpacity>

         <TouchableOpacity
            onPress={navigate}
            style={[styles.button2,styles.buttonOutline2]}>

                    <Text style={[styles.Testo3]}>sei già registrato? Effettua il Login</Text>

         </TouchableOpacity>

        </View>  

      </ScrollView>
      
    </KeyboardAvoidingView>)}

export default RegScreen

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
    backgroundColor:'#1f1e1c',},
    
Testo1:{
    color:'#ac830f',
    fontSize:32,
    fontWeight:'bold',
    marginLeft:30,
    marginTop:30,

},
Testo2:{
    color:'#ac830f',
    fontSize:32,
    fontWeight:'bold',
},
Testo3:{
    color:'#ac830f',
    fontSize:16,
    fontWeight:'bold',
    marginTop:20,
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
input2:{
  width:'92%',
   backgroundColor:'#242320',
   height:50,
   marginTop: 20,
   paddingLeft:5,
},

buttonContainer:{
    justifyContent:'center',
    alignItems:'center',
    marginTop:20,
},
button:{
    backgroundColor:'#1f1e1c',
    width:'100%',
    padding: 1,
    alignItems:'center',
},
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

   
},


 

)