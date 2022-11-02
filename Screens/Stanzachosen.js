
import { StyleSheet, Text, View, Dimensions, ScrollView} from 'react-native'
import React, {useEffect, useState} from 'react'
import Risposta from '../componenti/LibroGame/risposta'
import { STANZE } from '../componenti/LibroGame/Librogamemap'
import { db } from '../FirebaseConfig';
import {collection, getDocs, query, where,} from 'firebase/firestore';
import { auth } from '../FirebaseConfig'
import Loader from '../componenti/Element/LoadingIndicator';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getMetadata } from 'firebase/storage';
import { async } from '@firebase/util';
var a=0;
var b=0;
var c=0;
var d=0;
var e=0;
var pga=0;
var pgb=0;
var pgc=0;
var pgd=0;
var pge=0;
const Widthi = Dimensions.get('window').width
const Heighti = Dimensions.get('window').height



const  Stanzachosen=({navigation})=> {
    const[loading, setLoading]= useState(true)
    const [stanza, setStanza]= useState(STANZE[0]);
    const [counter, setCounter]= useState();
    const [counter1, setCounter1]= useState();
    const user= auth.currentUser

    useEffect(()=>{
      async function lol(){
      const pg = [];
      const informazioni1=query(collection(db,"personaggi"),where("user","==",user.uid), where("complete","==",false));
      const querySnapshot3= await getDocs(informazioni1);
            querySnapshot3.forEach((docs)=>{pg.push(docs.data());});
     
        if(pg[0] != undefined){
          setTribu(pg[0].tribù);
          navigation.navigate('StanzaPG',{ATribu})}
        else {getData()}  
         }
        lol();})

    const getData= async()=>{
      const value = await AsyncStorage.multiGet(['@count','@id']);

      value.forEach(value=>{
        if (value[0]==='@count'){
          const count = parseInt(value[1])
          setCounter(isNaN(count)? 0: count)
        }
        else if (value[0]=== '@id'){
          setCounter1(JSON.parse(value[1]))
        }
      })

    }
    const pressed =( clicked, idsucc, tribu,)=>{
        
        if(tribu=='Brennen'){
        a=a+1;
        const id = idsucc;
        const index = STANZE.map(function(x) {return x.id; }).indexOf(id);
        setStanza(STANZE[index]);}

        if(tribu=='Kumpania'){
                                b=b+1;
                                const id = idsucc;
                                const index = STANZE.map(function(x) {return x.id; }).indexOf(id);
                                setStanza(STANZE[index]);}
        if(tribu=='Priorato di Aletheia'){
                                c=c+1;
                                const id = idsucc;
                                const index = STANZE.map(function(x) {return x.id; }).indexOf(id);
                                setStanza(STANZE[index]);}
        if(tribu=='Popolo di Zao'){
                                d=d+1;
                                const id = idsucc;
                                const index = STANZE.map(function(x) {return x.id; }).indexOf(id);
                                setStanza(STANZE[index]);}
        if(tribu=='Volkron'){
                                e=e+1;
                                const id = idsucc;
                                const index = STANZE.map(function(x) {return x.id; }).indexOf(id);
                                setStanza(STANZE[index]);}
        if(tribu=='servizio'){
                              const id = idsucc;
                              const index = STANZE.map(function(x) {return x.id; }).indexOf(id);
                              setStanza(STANZE[index]);}
        
        if(tribu=='Result'){Risultato();}}
          
         

         const Risultato= async()=>{
           setLoading(false);
            const corpo = [];
            const sensi = [];
            const mente = [];
            const vuoto = [];
            const forma = [];
            
            const corpoquery = query (collection(db, "personaggi"), where("tribù", "==", "Brennen"), where ("death", "==", false));
            const sensiquery = query (collection(db, "personaggi"), where("tribù", "==", "Kumpania"), where ("death", "==", false));
            const mentequery = query (collection(db, "personaggi"), where("tribù", "==", "Priorato di Aletheia"), where ("death", "==", false));
            const vuotoquery = query (collection(db, "personaggi"), where("tribù", "==", "Popolo di Zao"), where ("death", "==", false));
            const formaquery = query (collection(db, "personaggi"), where("tribù", "==", "Volkron"), where ("death", "==", false));
           
        
            const querySnapshotcorpo = await   getDocs(corpoquery);
            querySnapshotcorpo.forEach((docs)=>{corpo.push(docs.data().tribù);});
            const querySnapshotsensi = await   getDocs(sensiquery);
            querySnapshotsensi.forEach((docs)=>{sensi.push(docs.data().tribù);});
            const querySnapshotmente = await   getDocs(mentequery);
            querySnapshotmente.forEach((docs)=>{mente.push(docs.data().tribù);});
            const querySnapshotvuoto = await   getDocs(vuotoquery);
            querySnapshotvuoto.forEach((docs)=>{vuoto.push(docs.data().tribù);});
            const querySnapshotforma = await   getDocs(formaquery);
            querySnapshotforma.forEach((docs)=>{forma.push(docs.data().tribù);});
           
            pga=corpo.length;
            pgb=sensi.length;
            pgc=mente.length;
            pgd=vuoto.length;
            pge=forma.length;
        
            var ordine= [{
                pga,
                numeroRisposte:a,
                tribu: 'Brennen'},
                {
                  pgb,  
                  numeroRisposte:b,
                  tribu: 'Kumpania'},
               {
                   pgc,
                numeroRisposte:c,
                tribu: 'Priorato di Aletheia'},
              {
                  pgd,
                  numeroRisposte:d,
                  tribu: 'Popolo di Zao'},
              {
                  pge,
                    numeroRisposte:e,
                    tribu: 'Volkron'}];
        
            ordine.sort((a,b)=> b.numeroRisposte-a.numeroRisposte || a.numeropg-b.numeropg );
            const Tribù=ordine[0].tribu;
            navigation.navigate('StanzaPG', {Tribù});}


  return (
    <View style={styles.main}>
    <View style={styles.ContainerD}> 
    <ScrollView contentContainerStyle={{flex:1, width:Widthi*0.95, height:Heighti*0.5,alignItems:'center'}}>
      <Text  allowFontScaling={false} adjustsFontSizeToFit={true} style={styles.descrizione}>{stanza.descrizione}</Text>
      </ScrollView>   
      <ScrollView contentContainerstyle={{flex:1, width:Widthi*0.85, height:Heighti*0.5, alignItems:'center', justifyContent:'center'}}>
      <Risposta testo={stanza.rispostaA} idsucc={stanza.idsuccA} clicked={false} tribu={stanza.tribuA} onChangeValue={(clicked, idsucc, tribu)=>(pressed(clicked, idsucc, tribu, a,b,c,d,e,))}/>
      <Risposta testo={stanza.rispostaB} idsucc={stanza.idsuccB} clicked={false} tribu={stanza.tribuB} onChangeValue={( clicked,idsucc, tribu)=>(pressed(clicked, idsucc, tribu, a,b,c,d,e))}/>
      <Risposta testo={stanza.rispostaC} idsucc={stanza.idsuccC} clicked={false} tribu={stanza.tribuC} onChangeValue={( clicked, idsucc, tribu)=>(pressed(clicked, idsucc, tribu, a,b,c,d,e,))}/>
      <Risposta testo={stanza.rispostaD} idsucc={stanza.idsuccD} clicked={false} tribu={stanza.tribuD} onChangeValue={( clicked, idsucc, tribu)=>(pressed(clicked, idsucc, tribu, a,b,c,d,e,))}/>
      <Risposta testo={stanza.rispostaE} idsucc={stanza.idsuccE} clicked={false} tribu={stanza.tribuE} onChangeValue={( clicked, idsucc, tribu)=>(pressed(clicked, idsucc, tribu, a,b,c,d,e,))}/>
    </ScrollView>
    </View>
    {loading? <Text></Text>:<Loader></Loader>}
    </View>)}



export default Stanzachosen
const styles = StyleSheet.create({
    main:{  
        flex:1,
    display:'flex',
        width:Widthi,
        height:Heighti,
        backgroundColor: '#1f1e1c'},
    
  ContainerD:{
        flex:1,
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        marginTop:10
    },

    descrizione:{ 
            color:'#ac830f',
            fontWeight:'700',
            fontSize:24,
            paddingLeft:5 ,

        },

})