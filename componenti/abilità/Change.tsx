import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { FC, useState } from 'react'
import { AbilityType } from '../../types'
import Sole from '../abilità/Descrizione';

type Props ={
    asd: AbilityType,
    value: boolean
    Color:string
}


const Change: FC<Props> = ({asd,value, Color}:Props) => {
    const [Change, isChange ] = useState<boolean>(value);

    const close=(modalv)=>{
      isChange(!modalv);

    }
  

  return (
    <TouchableOpacity onPress={()=>{isChange(!Change)}}>
    {Change? <Sole Color={Color} item={asd} value3={value} onChange3Value={(modalv:boolean)=>{close(modalv)}}/>  :<Text style={{color:'#ac830f', marginRight:10, fontSize:20, fontWeight:'bold'}}>{asd.nome}</Text> }
    </TouchableOpacity>

     
  )
}

export default Change

const styles = StyleSheet.create({})

