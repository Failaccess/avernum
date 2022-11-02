import { StyleSheet, Text, View, TextInput,Dimensions,ScrollView, TouchableOpacity} from 'react-native'
import React, {useState, useEffect} from 'react'
import { auth } from '../FirebaseConfig';
import { db } from '../FirebaseConfig';
import {collection, getDocs, query, where,addDoc} from 'firebase/firestore';
import Modprof from '../componenti/Element/Modal_Prof';
import { getDownloadURL, getStorage, ref ,getStream, listAll, list} from "firebase/storage";
import Imagepost from '../componenti/Post_home/Image_post';
import Moderr from '../componenti/Element/Modal_error';

const Widthi = Dimensions.get('window').width
const Heighti = Dimensions.get('window').height




const HomeScreen = ({navigation}) => {
  const [displayName, setDisplayName]= useState('');
  const [iscrizione, setIscrizione]= useState(true);
  const user= auth.currentUser;
  const [pg, setPg]=useState([]);
  const [a, setA]=useState(false);
  const [elenco, setElenco] =useState([])
  const [sor, setSor]= useState(true)
  const [value2, setValue2]=useState (false)
  const [Text1, setText]=useState('');
  var sorpresa = 0;
 
  useEffect (()=>{
    async function lol (){
    const informazioni = query(collection(db,"utenti"),where("email", "==", user.email));
    const querySnapshot = await getDocs(informazioni);
    querySnapshot.forEach((docs)=>{pg.push(docs.data());});
    if(pg==''){
      setIscrizione(!iscrizione);}
      else{
        setDisplayName(pg[0].nome)
      }
    
       }lol();},[a]);

  function sorpresa1(){
    sorpresa=sorpresa+1
    if(sorpresa==5){
      message();
    }
  }
  function close(){
    setSor(!sor);
    setValue2(!value2)
    sorpresa=0;}
    const message=()=>{
      setText("albe oscure sotto celi plumbei nascono all'ombra di soli rossi")
     setValue2(!value2)
     setSor(!sor)}

      useEffect(()=>{
         const post = []
           const kimera=async()=>{    
               const informazioni1=query(collection(db,'post'));
               const querySnapshot3= await getDocs(informazioni1);
                     querySnapshot3.forEach((docs)=>{post.push(docs.data())});
                     setElenco([...post]);}
              kimera();
              console.log(elenco);    
       },[a])
              
  

  

  
  return (
    
    
    <View style={styles.container}>
          <TouchableOpacity onPress={()=>sorpresa1()}>
           <Text style={{color:'#ac830f', fontSize:30, marginTop:15, fontStyle:'italic'}}>{'Benvenuto '}{displayName}</Text>
          </TouchableOpacity>
            {iscrizione? <Text/> :<Modprof item={a} value={iscrizione} onChangeValue={(modal)=>{setA(!a)}}/>}
            
   
    <View style={{flex:1, backgroundColor:'#1f1e1c', alignItems:'center', justifyContent:'center', width:'100%',height:'100%'}}>
     
    <ScrollView style={{flex:1,flexDirection:'column',height:'50°%', width:'100%'}} contentContainerStyle={{alignItems:'center', justifyContent:'center'}} key={elenco.id}>
 
  
  
    {elenco?.map(val => <Imagepost item={val.url} testo={val.testo}></Imagepost>)}
     
      </ScrollView>
  </View>
  <View style={{alignItems:'center', justifyContent:'center'}}>
  {value2? <Moderr item={Text1} value={sor} onChangeValue={(modal)=>close()}></Moderr>:<Text></Text>}
</View>
  </View>
 
  )
}

export default HomeScreen;

 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display:'flex',
    width:Widthi,
    height:Heighti,
    backgroundColor: '#1f1e1c',
    alignItems: 'center',
    justifyContent: 'center',},

    inputContainer:{
      width:Widthi*0.85,
      display:'flex',
      flexDirection:'column',
      alignItems:'center',
      marginTop:20,
  },
  
  input:{
     width:Widthi*0.85,
      backgroundColor:'#262626',
      color:'#f3b32b',
      height:50, 
      marginTop: 20,
      paddingLeft:5,
  },})