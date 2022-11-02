import { StyleSheet, Text, View,SafeAreaView ,Image,  ScrollView, ImageBackground, TouchableOpacity, Dimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
import * as Animatable from 'react-native-animatable'
import Dettaglios from '../componenti/abilità/Dettaglios';
import { ABLIST } from '../componenti/abilità/abilitalist';
import { useIsFocused } from '@react-navigation/native';
const Widthi = Dimensions.get('window').width
const Heighti = Dimensions.get('window').height

const Duration=400;

const Dettaglio = ({navigation , route}) => {
    const {item} = route.params;
    var abilita= [];
    var abilitas=[]
    abilitas=[...ABLIST]
    const [Color, setColor]=useState('#ac830f')
    const [Open, setIsopen]=useState([])
    const isFocused=useIsFocused();
    abilita= item.abilità;
    

    
    var abilitai=[]
   useEffect(()=>{
     ASS()
   },[isFocused])
    function ASS(){
     
      for (let i = 0; i < abilita.length; i++) {
        var name= abilita[i];
        abilitai[i]= abilitas.find(({nome})=> nome === name);}
        setIsopen(abilitai);
        if(item.death==false){
        setColor('#ac830f')}
      else{setColor('grey')}
}

  

  
    
      
    
    
  return (
    <SafeAreaView style={{flex:1, backgroundColor:'#1f1e1c'}}>
      
      <Animatable.View animation='fadeInUp' delay={Duration} style={[StyleSheet.absoluteFillObject,{backgroundColor:'#1f1e1c' ,borderRadius:15, borderWidth:2, borderColor:'grey',width:Widthi*0.85,height:Heighti*0.85, marginLeft:Widthi*0.07}]}>
          <TouchableOpacity style={{}} onPress={()=>{navigation.navigate('managment')}}>
             <Text style={{ color:Color, fontSize:36, margin:15, position:'absolute', right:15, Top:15}}>{'x'}</Text>
          </TouchableOpacity>
          <View style={{with:Widthi*0.85, height:Heighti*0.5,marginLeft:15, marginTop:50}}>
           <View style={{flexDirection:'row'}}> 
          <Text style={{color:Color, fontSize:24, fontWeight:'bold' }}>{'Nome:'}</Text>
          <Text style={{ color:Color, fontSize:24, fontWeight:'700', marginLeft:20 }}>{item.nome}</Text></View> 
          <View style={{flexDirection:'row', marginTop:20}}>
          <Text style={{ color:Color, fontSize:20, fontWeight:'bold' }}>{'Background:'}</Text> 
          <Text style={{ color:Color, fontSize:20, fontWeight:'700', marginLeft:20}} numberOfLines={10} ellipsizeMode={'head'} adjustsFontSizeToFit={true}>{item.background}</Text></View><View>
          <Text style={{borderBottomColor:Color,width:Widthi*0.82, borderWidth:1, marginTop:5}}></Text>
          </View>
          <View style={{marginTop:20}}>
          <Text style={{color:Color,fontSize:24,fontWeight:'bold'}}>{'Abilita'}</Text>
          <ScrollView style={{position: 'absolute', marginTop:20}} key={Open.id}>
            {Open?.map(abilità=><Dettaglios Color={Color} asd={abilità} value={false}/>)}    
         </ScrollView>
          </View>
          </View> 
       
        <Image style={[styles.Image]} source={require('../assets/image/logoGold.png')}/>
      </Animatable.View>
      
    </SafeAreaView>
  )
}

export default Dettaglio

const styles = StyleSheet.create({

  Tribu:{
    
    fontSize:14,
    fontWeight:'bold',
    opacity:0.7,
    paddingLeft:5
  },
  
  Image:{
    width:100*0.8,
    height:100*0.8,
    resizeMode:'contain',
    position:'absolute',
    bottom:2,
    right:10,
    
  },
bg:{
 
  backgroundColor:'#1f1e1c',
  transform:[{translateY: 202}],
  marginTop:5,
 
},


})