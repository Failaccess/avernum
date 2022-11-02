import { View, Text, Dimensions, Image } from 'react-native'
import React, {FC} from 'react'
import {MotiView} from '@motify/components'



const Widthi = Dimensions.get('window').width
const Heighti = Dimensions.get('window').height

const Loadering=({size}:{size:number})=>{
return(
  <MotiView style={{width:size, height:size,backgroundColor:'#1f1e1c', borderRadius:size/2,borderWidth:size/15, borderColor:'#ac830f', shadowColor:'#f3b32b',shadowOffset:{width:0, height:0},shadowOpacity:1, shadowRadius:30}} from={{width:size-20, height:size-20, borderRadius:size/2 }} animate={{width:size+20, height:size+20, borderRadius:(size+20)/2 }} transition={{
    type:'timing',delay:100, repeat:Infinity }}>
     
    </MotiView>
  
)
}

const Loader=() => {
 
  return (
    <View style={{flex:1, display:'flex', alignItems:'center',justifyContent:'center', marginTop:30}}>
      <Loadering size={100}/>
  
    </View>

  )
}

export default Loader