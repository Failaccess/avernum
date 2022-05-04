import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React, {useState} from 'react'
import { db } from '../FirebaseConfig';
import {collection, getDocs, query, where} from 'firebase/firestore';


var a=0;
var pg=0;
var b=0;
var c=0;
var d=0;
var e=0;
var scena=0;

const risposta= async()=>{
 const corpo = [];
 const sensi = [];
 const mente = [];
 const vuoto = [];
 const forma = [];
 const corpoquery = query (collection(db, "personaggi"), where("tribù", "==", "Tribù di Brennen"));
 const sensiquery = query (collection(db, "personaggi"), where("tribù", "==", "Kumpania"));
 const mentequery = query (collection(db, "personaggi"), where("tribù", "==", "Priorato di Aletheia"));
 const vuotoquery = query (collection(db, "personaggi"), where("tribù", "==", "Popolo di Zao"));
 const formaquery = query (collection(db, "personaggi"), where("tribù", "==", "Volkron"));
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
 
 pg=corpo.length+sensi.length+mente.length+vuoto.length+forma.length;
 }



const Game = ({navigation})=> {
   
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
    
    const risultato =()=>{
      if(a>>b && a>>c && a>>d && a>>e){
        setResult('');
    navigation.navigate('dettaglio',result);}
      
    }

    const rispostaA=()=>{
      if (visibility==false){scelta()}
      else{
      a= a+stanza;
      scelta();
      console.log('la variabile a è==',a);
     }}

     const rispostaB=()=>{
       b= b+stanza;
       scelta();
      console.log('la variabile b è==',b);
     }
    
     const rispostaC=()=>{
      c= c+stanza;
      scelta();
     console.log('la variabile c è==',c);
    }

    const rispostaD=()=>{
      d= d+stanza;
      scelta();
     console.log('la variabile d è==',d);
    }

    const rispostaE=()=>{
      e= e+stanza;
      scelta();
     console.log('la variabile e è==',e);
    }

   
const scelta =()=>{
   scena= scena+1;
   setStanza(scena);
   if(stanza==0){
    risposta();
    setTesto("Dopo alcuni secondi di buio, apri gli occhi, sei per terra con il voltonel fango, dinnansi a te una battaglia inperversa.ll fumo si dirada lentamente, lasciando l'acre odore nelle narici e il polmoni roventi, le urla e il clangore di battaglia risuonano intorno a te mettendo a dura prova i tuoi sensi, mentre l'abbacinate scoppio di formidabili energie esplodono spazzando l'orizzonte e squassando la terra stessa.Fiumi di lava sgorgano, tra i fili d’erba che via via si anneriscono consumati dal calore, che oramai senti sempre più presente sul tuo stanco volto…");
    setOpzionea("ti senti indifeso, cerchi qualcosa che possa aiutarti");
    setOpzioneb("devi schiarirti le idea, osservi con attenzione cosa c'è intorno a te");
    setOpzionec("Forse c'è qualcun'altro, ti metti in cerca di qualche sopravvissuto")
    setOpzioned("Devi trovare un rifugio sicuro, meglio trovare una posizione favorevole")
    setOpzionee("qualcosa d'incredibile sta accadendo, ti dirigi verso l'origine del clangore")
    setTitolo("")
  }
  
  if (stanza==1){
    SetVisibility(true)
    setTesto('pari le palle');
    setOpzionea(a);
    setOpzioneb(b);
    setOpzionec(c)
    setOpzioned(d);
    setOpzionee(e)
  }
  if(stanza==2){
    setTesto('capocchia');
    setOpzionea(a);
    setOpzioneb(b);
    setOpzionec(c)
    setOpzioned(d);
    setOpzionee(e)
  }
  if(stanza==3){
   setFinish(true);
    setTesto('soluzione');
    setOpzionea('risultato');
    setOpzioneb('');
    setOpzionec('')
    setOpzioned('');
    setOpzionee('')
  }
}


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