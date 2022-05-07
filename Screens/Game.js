import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React, {useState} from 'react'
import { db } from '../FirebaseConfig';
import {collection, getDocs, query, where} from 'firebase/firestore';

var scena=6;
var id= 10000;
const [testo, setTesto]= useState("benvenuto nella sezione creazione personaggio di Avernum, attraverso la compilazione di questo libro Game, verrai indirizzato in uno de popoli presenti nell'ambientazione ");
const [titolo, setTitolo]= useState ('inizio')
const [stanza, setStanza]= useState(0);
const [opzionea, setOpzionea]=useState('continua');
const [opzioneb, setOpzioneb]=useState('');
const [opzionec, setOpzionec]=useState('');
const [opzioned, setOpzioned]=useState('');
const [opzionee, setOpzionee]=useState('');
const [result, setResult]=useState("");
const [visibility, SetVisibility] = useState(false)
const [finish, setFinish]= useState(false)

const algoritmoSmistante= async()=>{
 const corpo = [];
 const pg = [];
 const sensi = [];
 const mente = [];
 const vuoto = [];
 const forma = [];
 const corpoquery = query (collection(db, "personaggi"), where("tribù", "==", "Tribù di Brennen"));
 const sensiquery = query (collection(db, "personaggi"), where("tribù", "==", "Kumpania"));
 const mentequery = query (collection(db, "personaggi"), where("tribù", "==", "Priorato di Aletheia"));
 const vuotoquery = query (collection(db, "personaggi"), where("tribù", "==", "Popolo di Zao"));
 const formaquery = query (collection(db, "personaggi"), where("tribù", "==", "Volkron"));
 const pgquery    = query (collection(db, "personaggi"), where("death", "==", "false"));
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
 const querySnapshotpg = await getDocs(pgquery);
       querySnapshotpg.forEach((docs)=>{pg.push(docs.data().nome);});
       scena=scena-1;
       SetVisibility(true);}

 

const Game = ({navigation})=> {
    
    const risultato =()=>{
      /*if(a>>b && a>>c && a>>d && a>>e){
        setResult('');*/
    navigation.navigate('dettaglio',result);};

    const rispostaA=()=>{
      if (visibility==false){scelta()}

      else{
           var al = Math.pow(10,scena-2);
               id = id + al;
               scelta();}}

     const rispostaB=()=>{
           var al = Math.pow(10,scena-2);
               al= al*2;
               id= id+al;
               scelta();}
    
     const rispostaC=()=>{
           var al = Math.pow(10,scena-2);
               al= al*3;
               id= id+al;
               scelta();}

    const rispostaD=()=>{
          var al = Math.pow(10,scena-2);
              al= al*4;
              id= id+al;
              scelta();}

    const rispostaE=()=>{
          var al = Math.pow(10,scena-2);
              al= al*5;
              id= id+al;
              scelta();}

   const scelta = async()=>{

      const domanda=[] ;
      const domandaquery = query (collection(db, "Game_element"), where("id", "==", id));
      const querySnapshotdomanda = await   getDocs(domandaquery);
            querySnapshotdomanda.forEach((docs)=>{domanda.push(docs.data()); });
            setTesto(domanda[0].descrizione);
            setOpzionea(domanda[0].choice1);
            setOpzioneb(domanda[0].choice2);
            setOpzionec(domanda[0].choice3);
            setOpzioned(domanda[0].choice4);
            setOpzionee(domanda[0].choice5);
            scena=scena-1;
            if(visibility==false){algoritmoSmistante()}};
            
  
  return (

      <View style={styles.main}>

             <View>
                   <Text style={styles.titolo}>{titolo}</Text>

                   <Text style={styles.descrizione}>{testo}</Text>

             <View style={{ flexDirection:'column', padding:10}}>

            {finish? <TouchableOpacity style={{padding:10}} onPress={risultato}>

                               <Text style={styles.Scelta}>{opzionea}</Text>

                     </TouchableOpacity> : <TouchableOpacity style={{padding:10}} onPress={rispostaA}>

                               <Text style={styles.Scelta}> {opzionea} </Text>

                     </TouchableOpacity>}

        <TouchableOpacity  style={{padding:10}} onPress={rispostaB}>

            <Text style={styles.Scelta} >{opzioneb}</Text>

        </TouchableOpacity>

        <TouchableOpacity style={{padding:10}} onPress={rispostaC}>

            <Text style={styles.Scelta}>{opzionec}</Text>

        </TouchableOpacity>

        <TouchableOpacity style={{padding:10}} onPress={rispostaD}>

            <Text style={styles.Scelta}>{opzioned}</Text>

        </TouchableOpacity>

        <TouchableOpacity style={{padding:10}} onPress={rispostaE}>

            <Text style={styles.Scelta}>{opzionee}</Text>

        </TouchableOpacity>

          </View>
       </View>   
    </View>
        
  )
}

export default Game

const styles = StyleSheet.create({
    main:{  
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor: '#1f1e1c'
    },

    Scelta:{
      color:'#ac830f',
      fontSize:14,
      fontWeight:'bold',
      opacity:0.9,
      paddingLeft:5
    },
  
    
    descrizione:{
      color:'#ac830f',
      fontSize:18,
      fontWeight:'700',
      paddingLeft:5
      
    },
    titolo:{
      color:'#ac830f',
      fontSize:20,
      fontWeight:'700',
      paddingLeft:5
      
    },
    
})
