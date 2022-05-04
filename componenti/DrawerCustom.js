import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native'
import {DrawerContentScrollView, DrawerItemList} from '@react-navigation/drawer'
import { auth } from '../FirebaseConfig'
import { signOut } from 'firebase/auth'
import Ionicons from 'react-native-vector-icons/Ionicons'


import React from 'react'

const LogOut = () =>{
    signOut(auth);
}

const DrawerCustom = (props) => {
  return (
        <View style={{flex:1, /*borderEndWidth: 1, //borderColor:'grey'*/}}>
        
          <DrawerContentScrollView {...props}
                                     >
                  <Image  
                  source={require('../assets/image/logoGold.png')}/>
               <View style={{flex:1, backgroundColor:'#1f1e1c', paddingTop:10}}>
                 <DrawerItemList {...props}/>
               </View> 
                 </DrawerContentScrollView>
        
        <View style={{padding:20, /*borderTopWidth:1, borderTopColor:'grey'*/}}>
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