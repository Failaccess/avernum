import 'react-native-gesture-handler';
import { StyleSheet, Text, View } from 'react-native';
import React, {useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { auth } from './FirebaseConfig';
import { onAuthStateChanged } from 'firebase/auth';
import AuthStack from "./Route/AuthStack";
import AppDrawer from "./Route/AppDrawer";



const Stack= createNativeStackNavigator();
const user= auth.currentUser
function App() {
  
  const [isLogged, setLogged] = useState(false);
  
  
  onAuthStateChanged(auth, user=>{

    if (user !=null){
      setLogged(true);} 

    else{ setLogged(false);}})
  
  return (

  
    
    
    <NavigationContainer>
    {isLogged? <AppDrawer/> : <AuthStack/>}
    </NavigationContainer>
    
  );
}
export default App
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
