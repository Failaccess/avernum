import { StyleSheet, Text, View, TouchableOpacity, Modal,Dimensions, TextInput } from 'react-native'
import React, { FC, useState } from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { auth } from '../../FirebaseConfig';
import { db } from '../../FirebaseConfig';
import {collection, addDoc} from 'firebase/firestore';

type Props ={
    item
    value: boolean
    onChangeValue: (value: boolean)=>void }

    const Widthi = Dimensions.get('window').width;
    const Heighti = Dimensions.get('window').height;
   

const Modprof: FC<Props> = ({item, value,onChangeValue }:Props) => {
    const user= auth.currentUser;
const [modal, isChange ] = useState<boolean>(value);
const[nome, setNome]=useState<string>('');
const[userName, setuserName]=useState<string>('');

const close=()=>{
    isChange(!modal);
    onChangeValue(!modal);
    window.location.reload}

async function save(userName, nome){
    const utente= await  addDoc(collection(db, 'utenti'),{
        user: user.uid,
        nome: userName,
        nomeUtente:nome,
        email:user.email,
        master:false,});
        close()} 

return (
     
    <View style={{ flex:1, flexDirection:'column', justifyContent:'center',alignItems:'center',width:Widthi, height:Heighti*0.5, alignContent:'center',}}> 
     <Modal 
            style={{flex:1, justifyContent:'center', alignContent:'center', alignItems:'center', width:Widthi}}
            visible={!modal}
        transparent={true}
        animationType={'fade'}
        >
     <View style={{backgroundColor:'#1f1e1c', alignItems:'center',justifyContent:'center',width:Widthi, height:Heighti*0.5, marginTop:65,borderWidth:2, borderRadius:15,borderColor:'#ac830f'}}>
      <View style={{ flex:1,flexDirection:'column', alignContent:'center',alignItems:'center', justifyContent:'center',width:Widthi,height:Heighti*0.4}}> 
      <TouchableOpacity onPress={()=>{close()}} style={{flex:1, flexDirection:'column', alignItems:'flex-start', position:'absolute', right:1, top:7}}>
    <Ionicons name={"close-circle"} size={24} color={"#ac830f"} /> 
    </TouchableOpacity>
   <Text style={{color:'#f3b32b', fontSize:16, marginTop:10,padding:10 }}>{"Benvenuto nell'APP AVERNUM, completa il tuo profilo"}</Text>
    <TextInput 
     autoCapitalize='none'
     placeholder="UserName"
     placeholderTextColor={'#ac830f'}
     selectionColor={'#ac830f'} 
     //color='#ac830f'
     value= {userName}
     onChangeText = {text => setuserName(text)}
     style = {styles.input}/>  

<TextInput 
     autoCapitalize='none'
     placeholder=" Nome e Cognome"
     placeholderTextColor={'#ac830f'}
     selectionColor={'#ac830f'} 
     //color='#ac830f'
     value= {nome}
     onChangeText = {text => setNome(text)}
     style = {styles.input}/>  
   <TouchableOpacity onPress={()=>save(userName, nome)} style={{borderColor:'#f3b32b'}}>
     <Text style={{color:'#f3b32b', fontSize:25, borderColor:'#f3b32b', borderWidth:1, padding:10, marginTop:20}} >{'SALVA PROFILO'}</Text>
    </TouchableOpacity>
    </View>    
    </View>           
                
     </Modal> 
      </View>  
     
  )
     
  
}

export default Modprof

const styles = StyleSheet.create({
    input:{
        width:'80%',
         backgroundColor:'#242320',
         height:50,
         marginTop: 10,
         paddingLeft:5,
         color:'#ac830f'
     },
})

 