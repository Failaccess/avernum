import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import Switchy from '../componenti/schedaPg/switchy'
import { db } from '../FirebaseConfig';
import {setDoc, doc} from 'firebase/firestore';
import { auth } from '../FirebaseConfig'





const Element_Pg =({route, navigation})=> {
const {Tribù}=route.params;
const {ATribu}=route.params;
const {AID}=route.params
const [tribu, setTribu]= useState();
const a = makeid()
const[Texti,setTexti]= useState(a);
const user=auth.currentUser;


function makeid() {
  var text = "";
  let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (let i = 0; i < 20; i++) text += possible.charAt(Math.floor(Math.random() * possible.length));
  return text;}
  

useEffect(()=>{
  
  async function lol(){

  if(Tribù != undefined){ 
 
  await  setDoc(doc(db, 'personaggi',Texti),{
    nome: '',
    tribù: Tribù,
    user: user.uid,
    death: false,
    key: Texti,
    background: '',
    abilità: [''],
    puntiavanzati: 0,
    complete:false
  });

setTribu(Tribù);} 
else{setTribu(ATribu);
setTexti(AID);}}
lol()})

function go(a){
  navigation.navigate('Home');
}



    
  return (
  <Switchy Tribù={tribu} id={Texti} onChangeValue={(a)=>(go(a))}></Switchy>)}

export default Element_Pg