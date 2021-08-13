import React from "react";
import { View,StyleSheet,Button } from "react-native";



/* 841252573387850 == App did */
const SignUpScreen=({navigation})=>{
  
  
    
    return <View>
      <Button 
      title='GoogleLogin' 
      onPress={()=>{navigation.navigate('SignIn',{name:'google'})}}
       />
       
      <Button
       title='Facebook Login'
       onPress={()=>{navigation.navigate('SignIn',{name:'facebook'})}}/>
      
     
      </View>
}


export default SignUpScreen;

const styles=StyleSheet.create({});