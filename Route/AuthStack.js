import react from "react";
import 'react-native-gesture-handler';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SigninScreen from "../Screens/SigninScreen";
import RegScreen from "../Screens/RegistrationScreen";
import ForgotPassword from "../Screens/ForgotPasswordScreen";
import Loading from "../Screens/Loading";


const Stack= createNativeStackNavigator();

const AuthStack = () =>{
    return(
        <Stack.Navigator screenOptions={{headerStyle:{backgroundColor:'#1f1e1c',  }, headerTransparent:true, headerBackVisible:false, headerShown:false }} >
            
            <Stack.Screen name='Login' component={SigninScreen}/>
            <Stack.Screen name='Reg' component={RegScreen}/>
            <Stack.Screen name="ForgotPassword" component={ForgotPassword}/>
            <Stack.Screen name= "Loading" component={Loading}/>
        </Stack.Navigator>
    )
}
export default AuthStack