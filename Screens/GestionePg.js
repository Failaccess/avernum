import { StyleSheet, Text, View, Image,  TouchableOpacity, FlatList, SafeAreaView,ScrollView } from 'react-native'
import React, {useState,} from 'react'
import { db } from '../FirebaseConfig';
import {collection, getDocs, query, where,onSnapshot} from 'firebase/firestore';
import { auth } from "../FirebaseConfig";






export default function GestionePg({navigation}){

const user = auth.currentUser;

const [personaggi, setPersonaggio]= useState([]);


const informazioni = query(collection(db,"personaggi"),where("user", "==", user.uid));
const unsub = onSnapshot(informazioni,(a)=>{
  getData();
});


const getData= async()=>{

  let pgn = [];
  
  const querySnapshot = await getDocs(informazioni);
  querySnapshot.forEach((docs)=>{pgn.push(docs.data());});

 setPersonaggio([...pgn]);
// console.log(personaggi);
  };



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
          style={{ marginBottom:10, height:200, width:'97%', marginLeft:5 }}>
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
  right:100,
  
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

