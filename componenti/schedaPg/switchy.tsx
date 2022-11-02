import { StyleSheet, Text, View, TouchableOpacity, KeyboardAvoidingView,Dimensions } from 'react-native'
import React, { FC, useState, useEffect } from 'react'
import Dati_anagrafici from './dati_anagrafici';
import AbilityItem from '../abilità/AbilityItem';
import { ABLIST } from '../abilità/abilitalist';
import { AbilityType } from '../../types';
import { db} from '../../FirebaseConfig'
import {updateDoc,doc} from 'firebase/firestore';
import { auth } from '../../FirebaseConfig'
import { ScrollView } from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Moderr from '../Element/Modal_error';
import { NavigationContainer } from '@react-navigation/native';


type Props = {Tribù:string,
              id:string,
              onChangeValue: ( Tribù)=>void}

              const Widthi = Dimensions.get('window').width
              const Heighti = Dimensions.get('window').height
  
const Switchy: FC<Props> = ({Tribù,id, onChangeValue}:Props) => {
  var a;
  const [val, setVal]=useState(0)
  const [val1, setVal1]=useState(1)
  const [Text1, setText]=useState('')
  const user =auth.currentUser;
  const [Background2,SetBackground]=useState('')
  const [Nome, SetNome]= useState('');
  const [value, setValue]= useState(true);
  const [abilità, setAbilità]=useState<AbilityType[]>([])
  const [scelte, setScelte]=useState<string[]>(['Conoscenze Tribù'])
  const [fisico, setchange]=useState<number>(0)
  const [mentali, setmentali]=useState<number>(0)
  const [sociali, setsociali]=useState<number>(0)
  const [totAbilità, setTotAbilià]=useState<number>(6)
  const [Tribù1, SetTribu1]=useState<string>(Tribù)
  const [value1,setValue1]=useState<boolean>(true)
  const [value2,setValue2]=useState<boolean>(false)
useEffect (()=>setAbilità([...ABLIST]),[]);



const Scelta=(abilitas)=>{
if(abilitas.tipo == 'fisico'){
  if(totAbilità-abilitas.costo > -1 || scelte.includes(abilitas.nome) ){
    if(scelte.includes(abilitas.nome)){
        scelte.splice(scelte.indexOf(abilitas.nome),1)
        setTotAbilià(totAbilità+abilitas.costo);
        setchange(fisico-abilitas.costo);
        abilitas.checked=false;
       

       if(abilitas.requisiti!= 'nessuno'){
        if(scelte.includes(abilitas.requisiti)){
          let result = abilità.find( ({ nome }) => nome === abilitas.requisiti);
          scelte.splice(scelte.indexOf(result.nome),1);
          setchange(fisico-(result.costo*2));
          setTotAbilià(totAbilità+(result.costo*2));
          result.checked = false;
          
          
          
          
          if (result.requisiti != 'nessuno' ){
            if (scelte.includes(result.requisiti)){
              let result1 = abilità.find( ({ nome }) => nome === result.requisiti);
              scelte.splice(scelte.indexOf(result.nome),1);          
          setchange(fisico-(result1.costo*3));
          setTotAbilià(totAbilità+(result1.costo*3))
          result1.checked=false;}}}}}
 
else{ 

  if(scelte.includes(abilitas.prerequisiti)||abilitas.prerequisiti.includes('nessuno')){
  setScelte((prevscelte)=>[
    ...prevscelte,
    abilitas.nome,]);
  setTotAbilià(totAbilità-abilitas.costo);
  setchange(fisico+abilitas.costo);
  abilitas.checked=true;}
else{
  setText('non superi i prerequisiti');
  setValue1(false);
  setValue2(true);
  abilitas.checked=false;}}}
else {setText('non hai abbastanza punti');
setValue1(false);
setValue2(true);
abilitas.checked=false}}

if(abilitas.tipo == 'mentali'){
  if(totAbilità-abilitas.costo > -1 || scelte.includes(abilitas.nome)){

    if(scelte.includes(abilitas.nome)){
        scelte.splice(scelte.indexOf(abilitas.nome),1)
        setTotAbilià(totAbilità+abilitas.costo);
        setmentali(mentali-abilitas.costo);
        abilitas.checked=false;

       if(abilitas.requisiti!= 'nessuno'){
        if(scelte.includes(abilitas.requisiti)){
          let result = abilità.find( ({ nome }) => nome === abilitas.requisiti);
          scelte.splice(scelte.indexOf(result.nome),1);   
          setTotAbilià(totAbilità+(result.costo*2));
          setmentali(mentali-(result.costo*2));
          result.checked = false;
          
          
          
          if (result.requisiti != 'nessuno' ){
            if (scelte.includes(result.requisiti)){
              let result1 = abilità.find( ({ nome }) => nome === result.requisiti);
              scelte.splice(scelte.indexOf(result.nome),1);
              setTotAbilià(totAbilità+(result1.costo*3));
              setmentali(mentali-(result1.costo*3));
              result1.checked=false;}}}}}
 
else{ 

  if(scelte.includes(abilitas.prerequisiti)||abilitas.prerequisiti.includes('nessuno')){
  setScelte((prevscelte)=>[
    ...prevscelte,
    abilitas.nome,]);
  setTotAbilià(totAbilità-abilitas.costo);
  setmentali(mentali+abilitas.costo);
  abilitas.checked=true;}
else{
  setText('non superi i prerequisiti');
  setValue1(false);
  setValue2(true);
  abilitas.checked=false;}}}
else {setText('non hai abbastanza punti');
setValue1(false);
setValue2(true);
abilitas.checked=false}}

if(abilitas.tipo == 'sociali'){
  if(totAbilità-abilitas.costo > -1 || scelte.includes(abilitas.nome)){

    if(scelte.includes(abilitas.nome)){
        scelte.splice(scelte.indexOf(abilitas.nome),1)
        setTotAbilià(totAbilità+abilitas.costo);
        setsociali(sociali-abilitas.costo);
        abilitas.checked=false;

       if(abilitas.requisiti!= 'nessuno'){
        if(scelte.includes(abilitas.requisiti)){
          let result = abilità.find( ({ nome }) => nome === abilitas.requisiti);
          scelte.splice(scelte.indexOf(result.nome),1);
          setTotAbilià(totAbilità+(result.costo));
          setsociali(sociali-(result.costo*2));
          result.checked = false;
          
          
          
          if (result.requisiti != 'nessuno' ){
            if (scelte.includes(result.requisiti)){
              let result1 = abilità.find( ({ nome }) => nome === result.requisiti);
              scelte.splice(scelte.indexOf(result.nome),1);
              setTotAbilià(totAbilità+(result1.costo*3));
              setsociali(sociali-(result1.costo*3));
              result1.checked=false;}}}}}
 
else{ 

  if(scelte.includes(abilitas.prerequisiti)||abilitas.prerequisiti.includes('nessuno')){
  setScelte((prevscelte)=>[
    ...prevscelte,
    abilitas.nome,]);
  setTotAbilià(totAbilità-abilitas.costo);
  setsociali(sociali+abilitas.costo);
  abilitas.checked=true;}
  else{
    setText('non superi i prerequisiti');
    setValue1(false);
    setValue2(true);
  abilitas.checked=false;}}}
  else {setText('non hai abbastanza punti');
  setValue1(false);
  setValue2(true);
  abilitas.checked=false}}}

const switchF=()=>{
    setValue(!value);
    if (value==false){
      setVal(0)
      setVal1(1)}
    else{
      setVal1(0);
      setVal(1)};}
 


const ADDdata=(scelte,Tribù, Background2, Nome)=>{
    if(Tribù=='Brennen'){
      if(fisico>=2){
        Perfetto(scelte,Tribù,Background2,Nome);
      }
      else{
        setText('non superi i requisiti minimi della tua tribù, devi scegliere almeno due abilità fisico');
setValue1(false);
setValue2(true);
       
        
      }
    };

    if(Tribù=='Kumpania'){
      if(fisico>=2){
        Perfetto(scelte,Tribù,Background2,Nome);
      }
      else{
        console.log("non superi i requisiti minimi della tua tribù")
        console.log("devi scegliere almeno due abilità fisico")
      }
    };
    if(Tribù=='Priorato di Aletheia'){
      if(fisico>=2){
        Perfetto(scelte,Tribù,Background2,Nome);
      }
      else{
        console.log("non superi i requisiti minimi della tua tribù")
        console.log("devi scegliere almeno due abilità fisico")
      }
    };
    if(Tribù=='Popolo di Zao'){
      if(fisico>=2){
        Perfetto(scelte,Tribù,Background2,Nome);
      }
      else{
        console.log("non superi i requisiti minimi della tua tribù")
        console.log("devi scegliere almeno due abilità fisico")
      }
    };
    if(Tribù=='Volkron'){
      if(fisico>=2){
        Perfetto(scelte,Tribù,Background2,Nome);
      }
      else{
        console.log("non superi i requisiti minimi della tua tribù")
        console.log("devi scegliere almeno due abilità fisico")
      }
    };}

    const Perfetto=async(scelte,Tribù,Background2,Nome)=>{
    const personaggio = doc (db, 'personaggi',id);
    await   updateDoc(personaggio,{
      nome: Nome,
      tribù: Tribù,
      user: user.uid,
      death: false,
      key: id,
      background: Background2,
      abilità: [...scelte],
      puntiavanzati: 0,
      complete:true,
    });
  goHome(a);
}
const goHome=(a)=>{onChangeValue(a)}

const ID =(Name1, Background1)=>{
  SetNome(Name1);
  SetBackground(Background1)
  switchF();}

function close(){
  
  
  setValue1(true);
  setValue2(false);
}

return(
<KeyboardAvoidingView style={styles.mainView}>
 <View style={{alignContent:'center', height:Heighti,}}>
    <TouchableOpacity onPress={()=>switchF()}>
      <View style={{position:'absolute', marginTop:10, left:10, flex:1, flexDirection:'row'}}>
          {value?<Text></Text> : <Ionicons name={"arrow-back-outline"} size={24} color={"#ac830f"}/>}
       </View> 
    </TouchableOpacity>
    <View style={{ alignItems:'center', justifyContent:'center', marginTop:25}}>
    {value? <Text></Text>:<Text style={{fontSize:24, color:'#f3b32b'}}>{totAbilità}</Text>}
   </View>
 <View key={Nome} style={{marginTop:5, alignItems:'center',justifyContent:'center'}}>
 {value? <Dati_anagrafici Tribù={Tribù} Name={Nome} Background={Background2} onChangeValue={(Name1,Background1)=>{ID(Name1, Background1)}}/> :<Text></Text>}
 {value? <Text style={{color:'#f3b32b', fontSize:16, marginTop:30, borderWidth:1, borderColor:'#f3b32b',padding:10,width:Widthi*0.85 }}> {'Nb. una volta salvato, sara ancora possibile cambiare il nome e il background del pg premendo sulla freccia sulla parte alta dello schermo'} </Text>:<Text></Text>} 
</View>
<View>
     <ScrollView style={{flex:1, marginTop:5, backgroundColor:'#1f1e1c'}} >
     <View style={{ height:'50%'}}>
     {value? <Text></Text> : abilità?.map(abilitàs=> <AbilityItem Color={'#ac830f'} key={abilitàs.id} item={abilitàs} value1={abilitàs.checked} onValue1Change={(variation:boolean)=>{Scelta(abilitàs)}}></AbilityItem> )}
      </View>
   
  <View style={{alignItems:'center',justifyContent:'center', marginTop:30}}>
    <TouchableOpacity onPress={()=>ADDdata(scelte,Tribù,Background2, Nome)} style={{borderColor:'#f3b32b'}}>
      {value?<Text></Text> : <Text style={{color:'#f3b32b', fontSize:25, borderColor:'#f3b32b', borderWidth:1, padding:10}} >{'CONTINUA'}</Text>}
    </TouchableOpacity>
 </View>
 </ScrollView>
  </View>
  <View>
   {value2? <Moderr item={Text1} value={value1} onChangeValue={(modal:boolean)=>close()}></Moderr>:<Text></Text>}
 </View>
 </View>
 
</KeyboardAvoidingView>   


)}
export default Switchy

const styles = StyleSheet.create({

    input:{
      width:Widthi,
       backgroundColor:'#242320',
       height:50,
       marginTop: 5,
       paddingLeft:5,
       color:'#f3b32b'
   
   },

   input2:{
    width:Widthi,
     backgroundColor:'#242320',
     height:50,
     marginTop: 20,
     paddingLeft:1.5,
     paddingTop:15,
     color:'#f3b32b'
  
  },

   input3:{
    width:Widthi,
     backgroundColor:'#242320',
     height:50,
     marginTop: 20,
     paddingLeft:5,
     paddingTop:15,
     color:'#f3b32b'
  },
   mainView:{
    flex:1,
    width:Widthi,
    flexDirection:'column',
    
  backgroundColor:'#1f1e1c',
  },
})
