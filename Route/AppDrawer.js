import react,{ useState } from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "../Screens/HomeScreen";
import NewPgScreen from "../Screens/NewPgScreen";
import EventiScreen from "../Screens/EventiScreen";
import DrawerCustom from "../componenti/DrawerCustom";
import Ionicons from 'react-native-vector-icons/Ionicons'
import GestionePg from "../Screens/GestionePg";
import { auth } from "../FirebaseConfig";
import { db } from '../FirebaseConfig';
import {collection, getDocs, query, where,onSnapshot} from 'firebase/firestore';
import { isEmpty } from "@firebase/util";
import Game from "../Screens/Game";
import Dettaglio from "../Screens/Dettaglio";



const Drawer= createDrawerNavigator();

function AppDrawer(){

const [ Page, setPage]= useState(false);



const user=auth.currentUser;

const h= query  (collection(db,"personaggi"),where ("user","==", user.uid)); 

const unsub = onSnapshot(h,(querySnapshot1)=> {
                                                const personaggi = [];
                                                
                                                querySnapshot1.forEach((doc)=>{personaggi.push(doc.data().nome);});
                                                                                    
                                                if (personaggi != isEmpty){GetData();};});


const GetData= async()=>{

    const personaggivivi = [];

    const personaggimorti =[];

    const q = query(collection(db,"personaggi"), where ('user','==', user.uid), where ('death', '==', true ));

    const r = query(collection(db, "personaggi"), where ('user', '==', user.uid), where ('death', '==', false));

    const querySnapshot = await   getDocs(q);

    querySnapshot.forEach((docs)=>{personaggimorti.push(docs.data().nome);});

    const querySnapshot2 = await getDocs(r);

    querySnapshot2.forEach((docs1)=>{personaggivivi.push(docs1.data().nome);});
        
      
         if ((personaggimorti.length != 0 && personaggivivi.length == 0) || (personaggimorti.length == 0 && personaggivivi == 0)){
                
              setPage(false);}

         else{setPage(true);}};
                    


 


    return(
        

        <Drawer.Navigator drawerContent={props =><DrawerCustom {... props}/>} screenOptions={{drawerStyle:{backgroundColor:'#1f1e1c'}, drawerInactiveBackgroundColor:'#1f1e1c',drawerActiveBackgroundColor:'#ac830f', drawerActiveTintColor:'white', drawerInactiveTintColor:'grey' ,drawerLabelStyle: {marginLeft:-25, fontSize:15}, headerTintColor:'#ac830f', headerStyle:{backgroundColor:'#1f1e1c'}, headerTitle:'', headerStatusBarColor:'#ac830f'} }>
            
            <Drawer.Screen name='Home' component={HomeScreen} options={{drawerIcon: ({color})=>(<Ionicons name="home-outline" size={22} color={color}/>)}} />
            {Page?
            <Drawer.Screen name='managment' component={GestionePg} options={{drawerIcon: ({color})=>(<Ionicons name="build" size={22} color={color}/>)}} />:
            <Drawer.Screen name='Libro_Game' component={Game} options={{drawerIcon: ({color})=>(<Ionicons name="add-circle-outline" size={22} color={color}/>)}}/>}
            <Drawer.Screen name='NuovoPg'  component={NewPgScreen} options={{drawerItemStyle:{display:'none'}}} />
            <Drawer.Screen name='Eventi' component={EventiScreen} options={{drawerIcon: ({color})=>(<Ionicons name="partly-sunny" size={22} color={color}/>)}}/>
            <Drawer.Screen name='dettaglio' component={Dettaglio} options={{drawerItemStyle:{display:'none'}}}/>
        </Drawer.Navigator>
    )}

export default AppDrawer