import { StyleSheet, Text, View, TouchableOpacity, Modal } from 'react-native'
import React, { FC, useState } from 'react'


type Props = {
    
    testo:string,
    clicked:boolean,
    idsucc:string,
    tribu:string,
    onChangeValue: (clicked: boolean, idsucc:string, tribu:string)=>void
    }

const Risposta: FC<Props> = ({ idsucc,tribu,clicked, testo, onChangeValue }:Props) => {

    const [isClicked, setIsClicked] = useState <boolean>(clicked);
    const [color, setColor]= useState<string>('grey')
    
   const onPress= (clicked, idsucc)=>{
      
      
        setIsClicked(!isClicked)
        onChangeValue(!isClicked, idsucc, tribu)
    
      
        
    }
    


      return (
       <TouchableOpacity onPress= {()=>onPress(clicked, idsucc)}>
         <Text style={styles.testo}>{testo}</Text>
       </TouchableOpacity>  
      )
    }
    
    export default Risposta
    
    const styles = StyleSheet.create({
      testo:{color:'white',
      fontSize:18,
    fontWeight:'700',
   paddingLeft:20,
  paddingTop:20, 
}
    })