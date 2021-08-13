import  React from "react";
import { StyleSheet,View } from "react-native";
import {  Text } from "react-native-elements";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";

import { Divider } from "react-native-paper";

const Articles =({articles,navigation})=>{
    

    return (
         <View >
         <FlatList
          data={articles} 
          keyExtractor= { ( {id} ) => {id}}
          renderItem={ ({item} ) => {
          return( <View style={styles.exp}>
                        <Text> {item.message}</Text>
                        <TouchableOpacity onPress={()=>{navigation.navigate('Single',{id:item._id})}}>
                        <Text> Name :{item.name}</Text>
                        <Text>  Place:{item.place}</Text>
                        </TouchableOpacity>
                        <Divider color='black' size={4}/> 
                   </View>
              )
          }}
         />       
         
            
        </View>
    )
}
const styles=StyleSheet.create({
      container:{
          marginTop:10,
          flexDirection:'row',
          paddingHorizontal:15

      },
      exp:{
          backgroundColor:'#add8e6',
          padding:10,
          flex:1
      },
      reply:{
          marginLeft:100,
          marginRight:100,
          padding:2,
          flexDirection:'row'

      },
      titleStyle:{
          fontSize:10
      }
})
export default Articles