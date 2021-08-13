import React from "react";
import 'react-native-gesture-handler';
import { TouchableOpacity,Text } from "react-native";
import { createStackNavigator } from '@react-navigation/stack';
import SignInScreen from "../screen/SigninScreen";
import SignUpScreen from "../screen/SignUpScreen";
import { AntDesign } from "@expo/vector-icons";



const SignRoute= createStackNavigator();
  const Login= ()=>{
  return(
      <SignRoute.Navigator initialRouteName="SignUp" screenOptions={{
          
          headerStatusBarHeight:20,
          headerRight:()=>{
          return (
          <AntDesign name='login' size={20} color='black' />
          
          )}
        }}>
         <SignRoute.Screen name="SignUp" component={SignUpScreen}
         
         />
      <SignRoute.Screen name="SignIn" component={SignInScreen} 
      options={{
      headerStyle:{
        backgroundColor:'black'
      },
      headerTintColor:'#fff',
     headerRight:() =>{
        return <TouchableOpacity >
      <AntDesign name="link" size={20} color="red" />
      </TouchableOpacity>
      }}}/>
      
     
       </SignRoute.Navigator> 
   

  )}
  export {Login}