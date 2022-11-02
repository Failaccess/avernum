import { StyleSheet, Text, View, TouchableOpacity, Modal } from 'react-native'
import React, { FC, useState } from 'react'
import { AbilityType } from '../../types'
import Ionicons from 'react-native-vector-icons/Ionicons';


type Props ={
    item: AbilityType,
    value3: boolean
    onChange3Value: (value3: boolean)=>void 
    Color:string}


const Sole: FC<Props> = ({item,value3,onChange3Value, Color }:Props) => {
    const [modalv, isChange ] = useState<boolean>(value3);

const close=()=>{
    isChange(!modalv);
    onChange3Value(!modalv);
}


  return (
     <View style={{  justifyContent:'center',alignItems:'center',width:'70%', height:'50%', }}> 
     <Modal 
            visible={!modalv}
        transparent={true}
        animationType={'fade'}
        >
     <View style={{backgroundColor:'#1f1e1c', alignItems:'center',justifyContent:'center',width:'100%', height:'40%', marginTop:65,borderWidth:2, borderRadius:15,borderColor:Color}}>
      <View style={{alignItems:'center', justifyContent:'center',width:'100%',height:'100%'}}> 
      <TouchableOpacity onPress={()=>{close()}} style={{position:'absolute', left:15, top:15}}>
    <Ionicons name={"close-circle"} size={24} color={Color} /> 
    </TouchableOpacity>
    <Text style={{position:'absolute',right:80,top:14, color:Color, fontSize:20, fontWeight:'bold'}}>{'Nome: '}{item.nome}</Text> 
    <Text style={{position:'absolute', right:30,top:55, color:Color, fontSize:20, fontWeight:'bold' }}>{'Costo: '}{item.costo}</Text> 
    <Text style={{position:'absolute', left:30,top:60, color:Color, fontSize:16, fontWeight:'bold' }}>{'Tipo: '}{item.tipo}</Text>
    <Text style={{position:'absolute', left:30, top:100, color:Color, fontSize:16, fontWeight:'bold'}}>{'Prerequisiti: '}{item.prerequisiti}</Text>
    <Text style={{position:'absolute', left:30, top:140,color:Color, fontSize:16, fontWeight:'bold', width:'85%' }} numberOfLines={10} ellipsizeMode={'clip'} >{'Descrizione: '}{item.descrizione}</Text>
   
    </View>    
    </View>           
                
     </Modal> 
      </View>  

  )
}

export default Sole

const styles = StyleSheet.create({})