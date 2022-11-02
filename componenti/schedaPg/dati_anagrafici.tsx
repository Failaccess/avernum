import { StyleSheet, Text,TextInput, View, KeyboardAvoidingView,Dimensions } from 'react-native'
import React, { FC, useState } from 'react'
import Change from '../abilità/Change'
import { TouchableOpacity } from 'react-native-gesture-handler'

type Props = {
  Name:string,
  Background:string,
  Tribù:string,
  onChangeValue: ( Name, Background)=>void}
    const Widthi = Dimensions.get('window').width;
    const Heighti = Dimensions.get('window').height;

const Dati_anagrafici: FC<Props> = ({Tribù, Name, Background, onChangeValue }:Props) => {
const [Name1,setName1]= useState(Name);
const [Background1,setBackground1]= useState(Background);
 Name=Name1;
 Background=Background1;


      const save=()=>{onChangeValue(Name1,Background1);}

return(
<KeyboardAvoidingView style={{alignItems:'center'}} >  
<View style={{width:Widthi, alignItems:'center', justifyContent:'center'}}>
<Text style = {styles.input2}> {Tribù}</Text>
<TextInput
 autoCapitalize='none'
 placeholder="Nome" 
 placeholderTextColor={'#f3b32b'}
 selectionColor={'#f3b32b'}
 value= {Name1}
 onChangeText = {text => setName1(text)}
 style = {styles.input}
/>
<TextInput
 autoCapitalize='none' 
 placeholder="Background                                                                                                      max 500 caratteri" 
 placeholderTextColor={'#f3b32b'}
 selectionColor={'#f3b32b'} 
 value= {Background1}
 multiline={true}
 numberOfLines={10}
 maxLength={500}
 onChangeText = {text => setBackground1(text)}
 style = {styles.input3}
/>

<TouchableOpacity onPress={()=>save()} style={{alignItems:'center', justifyContent:'center', marginTop:30 ,borderColor:'#f3b32b', borderWidth:1}}>
  <Text style={{fontSize:32, color:'#f3b32b'}}>{' CONTINUA '}</Text>
  </TouchableOpacity></View>
</KeyboardAvoidingView>  
)
}
export default Dati_anagrafici

const styles = StyleSheet.create({

    input:{
      width:Widthi*0.85,
       backgroundColor:'#242320',
       height:50,
       marginTop: 20,
       color:'#f3b32b',
       
        paddingLeft:5 },

   input2:{
    width:Widthi*0.85,
     backgroundColor:'#242320',
     height:50,
     marginTop: 20,
     paddingLeft:1.5,
     paddingTop:15,
     color:'#f3b32b',
  },

   input3:{
    width:Widthi*0.85,
     backgroundColor:'#242320',
     height:50,
     marginTop: 20,
     paddingLeft:5,
     paddingTop:15,
     color:'#f3b32b',
  },
   mainView:{
    flex:1,
    flexDirection:'column',
    
  backgroundColor:'#1f1e1c',
  },})
