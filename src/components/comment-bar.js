import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import {AntDesign} from '@expo/vector-icons';
import { useState } from "react";
import {Context as DataContext} from '../Context/DataContext'
import { TouchableOpacity } from 'react-native-gesture-handler';
const CommentBar = () => {
  
    const [comment, setComment] = useState(null);
    const {state:{},saveComment} =useState(DataContext);
  
    return (
        <View style={styles.backgroundStyle}>
        

          <TextInput 
           placeholder='Give a comment'
           value={comment}
           onChangeText={setComment}
           style={styles.input}/>
          <TouchableOpacity onPress={()=> {saveComment(_id,comment)}}>
          <AntDesign name="arrowright" style={styles.iconStyle} />
         </TouchableOpacity>
        </View>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    marginTop: 10,
    backgroundColor: '#F0EEEE',
    height: 50,
    borderRadius: 5,
    marginHorizontal: 10,
    flexDirection: 'row',
    marginBottom: 10
  },
  input: {
    marginHorizontal:20,
    fontSize: 18
  },
  iconStyle: {
    fontSize: 35,
    alignSelf: 'stretch',
    marginHorizontal: 100
    
  }
});

export { CommentBar};