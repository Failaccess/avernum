import { StyleSheet, Text, View, Image,  TouchableOpacity, FlatList, SafeAreaView,ScrollView, Dimensions } from 'react-native'
import React, {useState,} from 'react'
import { db } from '../FirebaseConfig';
import {collection, getDocs, query, where, onSnapshot} from 'firebase/firestore';
import { auth } from "../FirebaseConfig";
import { useFocusEffect } from '@react-navigation/native';

const Widthi = Dimensions.get('window').width
const Heighti = Dimensions.get('window').height



export default function GestionePg({navigation}){
  const user = auth.currentUser;
  const[personaggi, setPersonaggio]= useState([]);
  var ATribu='';
  var AID=''

  useFocusEffect (()=>{const q = query(collection(db,"personaggi"),where("user","==", user.uid));
 const qi =onSnapshot(q,(querySnapshot4)=>{
     kimera();
     });})
 


  
  const kimera= async (navigate)=>{

    const pgn = [];
  const pg = [];
  const informazioni1=query(collection(db,"personaggi"),where("user","==",user.uid), where("complete","==",false));
  const querySnapshot3= await getDocs(informazioni1);
        querySnapshot3.forEach((docs)=>{pg.push(docs.data());});
     
        if(pg[0] == undefined)  {
                                  const informazioni = query(collection(db,"personaggi"),where("user", "==", user.uid));
                                  const querySnapshot = await getDocs(informazioni);
                                  querySnapshot.forEach((docs)=>{pgn.push(docs.data());});
                                  setPersonaggio([...pgn]);}

        else{
              ATribu=pg[0].tribù;
              AID=pg[0].key
            
              navigation.navigate('StanzaPG',{ATribu, AID});
            }}
          

 
   
 
  return (
    <SafeAreaView style={styles.mainView}>
      
      
      <FlatList
      data={personaggi}
      
      keyExtractor={(item)=>item.key}
      contentContainerStyle={{padding:5}}
      renderItem={({ item }) => (
        <ScrollView>
          <TouchableOpacity
          onPress={()=>{navigation.navigate('dettaglio',{ item })}}
          style={{ marginBottom:20, height:Heighti*0.2, width:Widthi*0.5, marginLeft:5 }}>
          <View style={{ flex:1, padding:10 }}>
          <View style={[StyleSheet.absoluteFillObject,{backgroundColor:'#1f1e1c' ,borderRadius:10, borderWidth:1, borderColor:'grey'}]}>
          <Text style={[styles.Nome]}>{item.nome}</Text>
          <Text style={[styles.Tribu]}> {item.tribù}</Text>
          <Image style={[styles.Image]} source={require('../assets/image/logoGold.png')}/>
          {item.death? <Image style={[styles.Death]} source={require('../assets/image/Death.png')}/>:<Text/>}
          </View>
          </View>
          </TouchableOpacity>
          </ScrollView>
          )}
          
          />
        
       
    
       
    </SafeAreaView>
    
   
  )
}



const styles = StyleSheet.create({

  mainView:{
    
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#1f1e1c',
},

Tribu:{
  color:'#ac830f',
  fontSize:14,
  fontWeight:'bold',
  opacity:0.7,
  paddingLeft:5
},

Nome:{
  color:'#ac830f',
  fontSize:18,
  fontWeight:'700',
  paddingLeft:5
  
},

Image:{
  width:100*0.8,
  height:100*0.8,
  resizeMode:'contain',
  position:'absolute',
  bottom:0,
  right:10,
  
},
Death:{
  width:'50%',
  height:'50%',
  resizeMode:'contain',
  position:'absolute',
  bottom:55,
  right:Widthi*0.24,
  
},
bg:{
  position:'absolute',
  height:'100%',
  width:'100%',
  
  transform:[{translateY:350 }],
  borderRadius:20
},
},
 

)

