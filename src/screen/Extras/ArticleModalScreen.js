import React,{ useContext, useState } from "react";
import { Button } from "react-native";
import { View,StyleSheet } from "react-native";
import {TextInput} from "react-native-paper"
import { Context as DataContext  } from "../../Context/DataContext";


const AddArticle =() =>{ 
   
    const {saveArticle}=useContext(DataContext)
    const [title,setTitle] =useState(null)
    const [body, setBody] = useState(null)
    
 
    return (
        <View> 
          <TextInput 
          style={styles.input}
          selectionColor='black'
          placeholder='Enter Title'
          onChangeText={setTitle}
        />   
       <Spacer/>   
      <TextInput
        style={styles.input}
        placeholder='Enter Content'
        onChangeText={setBody}
      />
   

      <TextInput 
          placeholder='Enter Title'
          onChangeText={setTitle} />      
      <TextInput 
          placeholder='Enter Content'
          onChangeText={setBody}
      />
      <Button title='Save Article' onPress={()=>{
            saveArticle(title,body);
        }}
      />
      </View>
    )
}
const styles =StyleSheet.create({
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
})
export default AddArticle;