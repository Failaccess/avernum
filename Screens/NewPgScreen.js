import { StyleSheet, Text, View, Button, TextInput, KeyboardAvoidingView, ScrollView, Image} from 'react-native'
import React , {useState} from 'react'
import { db } from '../FirebaseConfig';
import {collection,addDoc} from 'firebase/firestore';
import { auth } from '../FirebaseConfig';
import { TouchableOpacity } from 'react-native-gesture-handler';


function makeid() {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < 5; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}

console.log(makeid());

const NewPgScreen=({navigation, route})=>{
  const {result} = route.params;
  const [nome, setNome]=useState('');
  const [tribu, setTribu]=useState(result);
  const user =auth.currentUser;
 
  const Verify =()=>{
    var veri = [nome,tribu];

    if (!(veri.includes('')||veri.includes(undefined))) {
    AddData();}
    else { alert("completa i campi");}                    
  }

  const AddData = async()=>{
    const personaggio= await  addDoc(collection(db, 'personaggi'),{
      nome: nome,
      tribù: tribu,
      user: user.uid,
      death: false,
      key: makeid()
    });
  navigation.navigate('Home');
  }

  return (

  

   <KeyboardAvoidingView style={styles.mainView}>
   
      <View style={styles.TopView}>
      
      
      </View>

      <ScrollView style={styles.BottomView}>

        <View style={styles.inputContainer}>

           <TextInput
             autoCapitalize='none'
             placeholder="Nome" 
             placeholderTextColor={'#f3b32b'}
             selectionColor={'#f3b32b'} 
             color='#f3b32b'
             value= {nome}
             onChangeText = {text => setNome(text)}
             style = {styles.input}
             />

           <TextInput
             autoCapitalize='none'
             placeholder="Tribù" 
             placeholderTextColor={'#f3b32b'}
             selectionColor={'#f3b32b'} 
             color='#f3b32b'
             value= {tribu}
             onChangeText = {text => setTribu(text)}
             style = {styles.input}
             />

           <View style={styles.buttonContainer}> 

              <TouchableOpacity
                onPress={Verify}
                style={[styles.button]}>   

                  <Text style={[styles.Testo2]}>Crea</Text>

              </TouchableOpacity>   

           </View> 

           <View style={styles.buttonContainer}> 



</View> 

         </View>

    </ScrollView>

 </KeyboardAvoidingView> ) }
  
export default NewPgScreen

const styles = StyleSheet.create({

  input:{
    width:'100%',
     backgroundColor:'#242320',
     height:50,
     marginTop: 20,
     paddingLeft:5,
 
 },
 mainView:{
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
backgroundColor:'#1f1e1c'
},

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
Testo2:{
  color:'#f3b32b',
  fontSize:32,
  fontWeight:'bold',
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
  alignItems:'center',
},
})