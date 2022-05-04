
import {signInWithEmailAndPassword } from 'firebase/auth'
import React, {useState} from 'react'
import { StyleSheet, Text, View , KeyboardAvoidingView, TextInput,TouchableOpacity, Image, ScrollView, StatusBar} from 'react-native'
import {auth} from '../FirebaseConfig';
import Ionicons from 'react-native-vector-icons/Ionicons';
import '@react-native-async-storage/async-storage';



const SigninScreen = ({navigation}) => {
    const [secureEntry, setSecureEntry]= useState(true);
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
 
    
    
    function navigate1(){
        navigation.navigate('Reg');
    }

    function forgotPassword1 (){
        navigation.navigate('ForgotPassword');
     }
    
    
    
     const Verify =()=>{
       var Form_a = [email, password];
       if(Form_a.includes('') || Form_a.includes(undefined)) message();
       else Login();
     }

    const Login = () => {
      
        signInWithEmailAndPassword(auth, email, password)
        .then(userCredentials => {
            const user  = userCredentials.user;})
        .catch(error => { if (error.code === "auth/invalid-email") {
          alert("indirizzo email non valido");}} )}
      
    
    const message= ()=>{
        alert("compila i campi")
    }


  return (

<KeyboardAvoidingView style={styles.mainView}>
  
     <View style={styles.TopView} >

      <TouchableOpacity onPress={message}>

        <Image source={require('../assets/image/logoGold.png')}/>

      </TouchableOpacity>   

    </View>

  <ScrollView style={styles.BottomView}>

    <View style={styles.inputContainer}>

       <TextInput
        autoCapitalize='none'
        placeholder="Email"
        placeholderTextColor={'#ac830f'}
        //borderColor="#2e2d2a"
        
        selectionColor={'#ac830f'} 
        color='#ac830f'
        value= {email}
        onChangeText = {text => setEmail(text)}
        style = {styles.input}/>

         <View
          style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',}}>
            
            <TextInput
             autoCapitalize='none'
             placeholder="Password" 
             placeholderTextColor={'#ac830f'}
             //borderColor='#2e2d2a'
             selectionColor={'#ac830f'} 
             color='#ac830f'
             value= {password}
             onChangeText = {text => setPassword(text)}
             style = {styles.input2}
             secureTextEntry={secureEntry}/>

               <TouchableOpacity style={{marginTop:20,
                                        paddingTop:13, 
                                        paddingLeft:5,
                                        marginLeft:-50, 
                                        backgroundColor:'#242320', 
                                        //borderColor:'#2e2d2a',
                                        height:50 }}>
               
                 {secureEntry ?                        
                
                <Ionicons name="eye" size={20} style={{color:'#ac830f',marginRight:5}} onPress={()=>{setSecureEntry(prev=>!prev)}}/>:
                
                <Ionicons name="eye-off" size={20} style={{color:'#ac830f',marginRight:5}} onPress={()=>{setSecureEntry(prev=>!prev)}}/>}
             
               </TouchableOpacity>

          </View>

        </View>

        <View style={styles.buttonContainer}>

         <TouchableOpacity
            onPress={Verify}
            style={[styles.button,styles.buttonOutline]}>

             <Text style={[styles.Testo2]}>Login</Text>

         </TouchableOpacity>

         <TouchableOpacity
            onPress={navigate1}
            style={[styles.button2,styles.buttonOutline2]}>

             <Text style={[styles.Testo3]}>non sei ancora iscritto? Registrati</Text>

         </TouchableOpacity>

         <TouchableOpacity
           onPress={forgotPassword1}
           style={[styles.button2,styles.buttonOutline2]}>

            <Text style={[styles.Testo3]}>non ricordi la password?</Text>

         </TouchableOpacity>

        </View>

      </ScrollView>

    </KeyboardAvoidingView>
   
  )
}

export default SigninScreen

const styles = StyleSheet.create({


mainView:{
    marginTop: 40,
    flex:1,
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
  backgroundColor:'#1f1e1c',
},

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
  width:'100%',
   backgroundColor:'#242320',
   height:50,
   marginTop: 20,
   
  marginRight:15
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