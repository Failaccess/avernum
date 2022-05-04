import { StyleSheet, Text, View,SafeAreaView ,Image} from 'react-native'
import React from 'react'
import * as Animatable from 'react-native-animatable'

const Duration=400;

const Dettaglio = ({navigation , route}) => {
    const {item} = route.params;
    
  return (
    <SafeAreaView style={{flex:1, backgroundColor:'#1f1e1c'}}>
      <Animatable.View animation='fadeInUp' delay={Duration} style={[StyleSheet.absoluteFillObject,{backgroundColor:'#1f1e1c' ,borderRadius:10, borderWidth:1, borderColor:'grey',height:200}]}>
          <Text style={[styles.Nome]}>{item.nome}</Text>
          
          <Image style={[styles.Image]} source={require('../assets/image/logoGold.png')}/>
          {item.death? <Image style={[styles.Death]} source={require('../assets/image/Death.png')}/>:<Text/>}
      </Animatable.View>
      <View style={styles.bg}>
        <Text style={[styles.subTitolo]}>abilita</Text>
      </View>
    </SafeAreaView>
  )
}

export default Dettaglio

const styles = StyleSheet.create({

  Tribu:{
    color:'#ac830f',
    fontSize:14,
    fontWeight:'bold',
    opacity:0.7,
    paddingLeft:5
  },
  
  Nome:{
    color:'#ac830f',
    fontSize:20,
    fontWeight:'700',
    position:'absolute',
    top:160,
    left:10
    
  },
  subTitolo:{
    color:'#ac830f',
    fontSize:20,
    fontWeight:'700',
    position:'absolute',
    top:10,
    left:10
    
  },
  
  Image:{
    width:100*0.8,
    height:100*0.8,
    resizeMode:'contain',
    position:'absolute',
    top:200-(100*0.8),
    right:10,
    
  },

  Death:{
    width:150*0.8,
    height:150*0.8,
    resizeMode:'contain',
    position:'absolute',
    top:200-(200*0.8),
    right:150,
    
  },
bg:{
  position:'absolute',
  height:'100%',
  width:'100%',
  backgroundColor:'#1f1e1c',
  transform:[{translateY: 202}],
  borderRadius:20,
  padding:10,
  paddingTop:20,
}

})