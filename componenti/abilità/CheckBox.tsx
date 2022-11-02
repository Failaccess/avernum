import { StyleSheet, Text, View, TouchableOpacity  } from 'react-native';
import React, { FC, useState } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import  {AbilityType}  from '../../types'; 


type Props = {
    value: boolean,
    onValueChange: (value: boolean)=>void,
    item1:AbilityType,
    
}

const CheckBox: FC<Props> = ({value, onValueChange, item1 }:Props) => {

const [isChecked, setIsChecked] = useState <boolean>(item1.checked);


const onPress= (item1)=>{
  
  item1.checked = ! item1.checked
    setIsChecked(!isChecked)
    onValueChange(!isChecked)
  
    
}

  return (
   <TouchableOpacity onPress= {()=>onPress(item1)}>
      {item1.checked
      ? <Ionicons name={"radio-button-on"} size={24} color={"#ac830f"} /> : <Ionicons name={"radio-button-off"} size={24} color={"#ac830f"}/>}
   </TouchableOpacity>  
  )
}

export default CheckBox

const styles = StyleSheet.create({})