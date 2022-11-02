import { View, Text, Image,Dimensions } from 'react-native'
import React, { useEffect, useState, FC } from 'react'
import { getDownloadURL, ref,} from "firebase/storage";
import { storage } from '../../FirebaseConfig';
import { onAuthStateChanged } from 'firebase/auth';
import Loader from '../Element/LoadingIndicator';

type Props ={
    item: string,
    testo:string
    
       }

const Widthi = Dimensions.get('window').width
const Heighti = Dimensions.get('window').height
 

const Imagepost : FC<Props> = ({item, testo}:Props) => {
  const [url, setUrl]=useState('')

  const [state, StateChanged]= useState(false)

  useEffect(()=>{
 StateChanged(true);
  })

  useEffect(()=>{
    const func1 =async ()=>{
    const reference = ref(storage, item );
    await getDownloadURL(reference)
    .then((x)=>{
        setUrl(x);
    })}
func1();
  },[state==true])

        

        
 


  return (
    <View style={{borderRadius:5, borderWidth:2, borderColor:'#ac830f',marginTop:15, flexDirection:'row'}}>
 <Image style={{width:Widthi*0.2, height:Heighti*0.5 }} resizeMethod={'scale'} resizeMode={'center'} source={{uri:url}}></Image>
  <View style={{width:Widthi*0.2, height:Heighti*0.5}}>
  <Text style={{margin:10, fontSize:18, color:'#ac830f'}}>{testo}</Text>
  </View>
    </View>
   
        )}

export default Imagepost