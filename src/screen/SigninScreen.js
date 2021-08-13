import React,{useState} from "react";
import { View,StyleSheet } from "react-native";
import { Text } from "react-native-elements";
import { TextInput,Button, ActivityIndicator } from 'react-native-paper';
import AuthForm from "../components/Form";
import fbHook from "../components/hooks/fbHook";
import googleHook from "../components/hooks/googleHook";

const SignInScreen=({route})=>{
   
    const { name } = route.params
    if (name ==='google')
      googleHook()
    else
     fbHook()
    return( <ActivityIndicator size='large' color='blue' />
    )
   
}
export default SignInScreen;

const styles=StyleSheet.create({
    container:{
        marginLeft:10
    }
   
});