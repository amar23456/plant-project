import React,{useContext, useEffect,useState} from "react";
import { View,StyleSheet,Button,Modal} from "react-native";
import  Articles  from "../components/Article-Box";
import { TextInput } from "react-native-paper";
import Spacer from "../components/Spacer";
import mongononAuth from "../api-data/mongononAuth";
import { NavigationEvents } from 'react-navigation';
import {Context} from '../Context/DataContext'

const ArticleScreen=({navigation})=>{

   const {state:{articles,message},fetchArticle} =useContext(Context)
   
   
   
   useEffect(() => {
      navigation.addListener('focus',()=>{
          fetchArticle()
      })
   
   }, []);
  
  return <View style={styles.container} >
      
       <Articles articles={articles} navigation={navigation} />
       <Button 
        title='Add Article' 
        onPress={()=>navigation.navigate('AddArticle')}
        />
       <Button title="Move to Account" />
    </View>
}


export default ArticleScreen;

const styles=StyleSheet.create({
    input:{
     backgroundColor:'azure', 
     margin:100
    },
    container:{
        fontFamily:'Roboto',
        marginRight:10,
        marginLeft:10,
        marginTop:30
    },
    modal:{
        justifyContent: 'center',  
        alignItems: 'center',   
        backgroundColor : "#00BCD4",   
        height: 300 ,  
        width: '80%',  
        borderRadius:10,  
        borderWidth: 1,  
        borderColor: '#fff',    
        marginTop: 80,  
        marginLeft: 40, 
    }
   
});