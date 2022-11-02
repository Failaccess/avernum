import { StyleSheet, Text, View,Image,TouchableOpacity,Dimensions } from 'react-native'
import {DrawerContentScrollView, DrawerItemList} from '@react-navigation/drawer'
import { auth } from '../FirebaseConfig'
import { signOut } from 'firebase/auth'
import Ionicons from 'react-native-vector-icons/Ionicons'
const Widthi = Dimensions.get('window').width
const Heighti = Dimensions.get('window').height


import React from 'react'

const LogOut = () =>{
    signOut(auth);
}

const DrawerCustom = (props) => {
  return (
        <View style={{flex:1}}>
        
          <DrawerContentScrollView {...props} style={{}} >
                   <View style={{justifyContent:'center', alignItems:'center'}}>      
                  <Image resizeMethod='auto'
                  resizeMode='center'
                   style={{width:Widthi*0.1,height:Heighti*0.1,marginTop:20, marginLeft:20}}
                  source={require('../assets/image/logoGold.png')}/>
               </View>    
               <View style={{flex:1, backgroundColor:'#1f1e1c', paddingTop:10}}>
                 <DrawerItemList {...props}/>
               </View> 
                 </DrawerContentScrollView>
        
        <View style={{padding:20}}>
             <TouchableOpacity onPress={()=>{}} style={{paddingVertical:15}}>
                 <View style={{flexDirection:'row', alignItems:'center'}}>
                 <Ionicons name="share-social-outline" size={22} style={{color:'grey'}}/>
                <Text style={{fontSize:15, marginLeft: 5, color:'grey'}}>Condividi</Text>
                </View>
             </TouchableOpacity>
        
      
             <TouchableOpacity onPress={LogOut} style={{paddingVertical:15}}>
                 <View style={{flexDirection:'row', alignItems:'center'}}>
                 <Ionicons name="exit-outline" size={22} style={{color:'grey'}}/>  
                <Text style={{fontSize:15, marginLeft: 5, color:'grey'}}>Log-Out</Text>
                </View>
             </TouchableOpacity>
       </View>  
       </View>
         
  )
}

export default DrawerCustom

const styles = StyleSheet.create({})