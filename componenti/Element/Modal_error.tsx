import { StyleSheet, Text, View, TouchableOpacity, Modal,Dimensions } from 'react-native'
import React, { FC, useState } from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';



type Props ={
    item: string,
    value: boolean
    onChangeValue: (value: boolean)=>void }

    const Widthi = Dimensions.get('window').width;
    const Heighti = Dimensions.get('window').height;

const Moderr: FC<Props> = ({item,value,onChangeValue }:Props) => {
const [modal, isChange ] = useState<boolean>(value);
const close=()=>{
    isChange(!modal);
    onChangeValue(!modal);}

return (
     
    <View style={{ flex:1, alignContent:'center' ,width:Widthi, height:Heighti*0.3,}}> 
    <Modal 
           style={{flex:1, width:Widthi, alignContent:'center'}}
           visible={!modal}
       transparent={true}
       animationType={'fade'}
       >
    <View style={{backgroundColor:'#1f1e1c', alignItems:'center', justifyContent:'center',width:Widthi, height:Heighti*0.2, marginTop:65,borderWidth:2, borderRadius:15,borderColor:'#ac830f'}}>
     <View style={{ flex:1,alignItems:'center', justifyContent:'center',width:Widthi,height:Heighti}}> 
     <TouchableOpacity onPress={()=>{close()}} style={{position:'absolute', top:7, right:10}}>
   <Ionicons name={"close-circle"} size={24} color={"#ac830f"} /> 
   </TouchableOpacity>
 
   <Text style={{position:'absolute',right:80,top:50, color:'#ac830f', fontSize:30, fontWeight:'bold', width:'70%'}}>{item}</Text> 
  
   </View>    
   </View>           
               
    </Modal> 
     </View>  
    
 )
    
 
}



export default Moderr

const styles = StyleSheet.create({})