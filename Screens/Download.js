import { View, Text,TouchableOpacity, Image, FlatList, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { getDownloadURL, getStorage, ref ,getStream, listAll, list} from "firebase/storage";
import { storage } from '../FirebaseConfig';
import Imagepost from '../componenti/Post_home/Image_post';
import { db } from '../FirebaseConfig';
import {collection, getDocs, query, where, onSnapshot} from 'firebase/firestore';






const Download = () => {
  
   

  const [elenco, setElenco] =useState([])

  useEffect(()=>{
    const post = []
      const kimera=async()=>{    
          const informazioni1=query(collection(db,'post'));
          const querySnapshot3= await getDocs(informazioni1);
                querySnapshot3.forEach((docs)=>{post.push(docs.data())});
                setElenco([...post]);}
         kimera();    
  })
         
        
          
         
    
    

  return (

    <View style={{flex:1, backgroundColor:'#1f1e1c', alignItems:'center', justifyContent:'center', width:'100%',height:'100%'}}>
     
      <ScrollView style={{flex:1,flexDirection:'column',height:'50°%', width:'100%'}} contentContainerStyle={{alignItems:'center', justifyContent:'center'}}>
   
      {elenco?.map(val => <Imagepost item={val.url} testo={val.testo}></Imagepost>)}
    
      
       
        </ScrollView>
    </View>
  )
}

export default Download

/* {elenco?.map(val=> <Imagepost item={val} />)} */