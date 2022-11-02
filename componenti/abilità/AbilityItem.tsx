import React, { FC, useState, } from "react"
import {View, Text, Dimensions} from 'react-native'
import CheckBox from './CheckBox'
import { db } from "../../FirebaseConfig";
import { addDoc, collection } from "firebase/firestore";
import  {AbilityType}  from '../../types'; 
import Change from "./Change";

type Props ={
    item: AbilityType,
    value1: boolean,
    onValue1Change: (value1: boolean)=>void,
    key: string,
Color:string
}

const AbilityItem: FC<Props> =({item, value1, onValue1Change, Color}:Props )=>{
    const [variation, Setvariation] = useState<boolean>(value1)
    const [list, SetList]=useState([]);

    
    
const Marcello = (isChecked)=> {
 Setvariation(!variation);
 isChecked=false;
 onValue1Change(!variation);
 


 
    

}

return(
    <View key ={item.id} style={{flex:1, flexDirection:'row', height:'100%', paddingBottom:10, marginTop:15, marginLeft:10}}>
    <Change Color={Color} asd= {item} value={false}/>
    <CheckBox  item1={item} value={item.checked} onValueChange={(isChecked:boolean)=> Marcello(isChecked)}/>
    </View>)}

export default AbilityItem    


 
