import React,{useState} from 'react';
import {View,StyleSheet} from 'react-native';
import {Button,Text,Input} from 'react-native-elements'
import Spacer from './Spacer'
import { AntDesign } from '@expo/vector-icons'; 

const AuthForm =({headerText,errorMessage,onSubmit,Submittext})=>
{
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('')
    
    return (
    <View>
         <Spacer>
        <Text h3> {headerText}</Text>
        </Spacer>
        <Input inputContainerStyle={styles.input}
        leftIcon={{type:'MaterialIcons',name:'email'}} 
        label="Email" value={email}
        placeholder='Enter Email' 
        onChangeText={setEmail}
        autoCapitalize="none"
        autoCorrect={false}/>
        <Spacer />
        <Input
        inputContainerStyle={styles.input}
        secureTextEntry label="Password" 
        placeholder="Enter Password"
        autoCapitalize="none" autoCorrect={false} value={password}
        onChangeText={setPassword}/>
        {errorMessage?<Text style={errorMessage}>{errorMessage}</Text>:null}
        <Spacer/>
        <Spacer/>
      <Button  title="Login" titleStyle={styles.buttonText} buttonStyle={styles.button}  
      icon={<AntDesign name="login" size={20} color="black" />}/>

      </View>

    )
}

const styles =StyleSheet.create({
    errorMessage:{
        color:'red',
        fontSize:16,
        marginLeft:15,
        marginRight:15
    },
    button:{
        marginLeft:100,
        marginRight:100
    },
    input:{
        marginRight:20,
        fontFamily:''
    }
});

export default AuthForm;