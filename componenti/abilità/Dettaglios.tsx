import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { FC, useState } from 'react'
import { AbilityType } from '../../types'
import Sole from './Descrizione';

type Props ={
    asd: AbilityType,
    value: boolean,
    Color:string
    
}


const Dettaglios: FC<Props> = ({asd,value, Color}:Props) => {
    const [Change, isChange ] = useState<boolean>(value);

    const close=(modalv)=>{
      isChange(!modalv);

    }
  

  return (
    <TouchableOpacity onPress={()=>{isChange(!Change)} }>
    {Change? <Sole item={asd} value3={value} onChange3Value={(modalv:boolean)=>{close(modalv)}} Color={Color}/>  :<Text style={{color:Color, marginRight:10, fontSize:20, fontWeight:'bold', marginTop:25}}>{asd.nome}</Text> }
    </TouchableOpacity>

     
  )
}

export default Dettaglios

const styles = StyleSheet.create({})

