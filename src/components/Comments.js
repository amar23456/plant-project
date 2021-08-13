import  React ,{useState} from "react";
import { View } from "react-native";
import { Text } from "react-native-elements";

import { FlatList } from "react-native-gesture-handler";
import { UserPic } from "./UserPic";
import { Divider } from 'react-native-elements';


const Comments=()=>{
    


      return <View >
          <Text>Comments</Text>
          <FlatList
            data={ Data}
            keyExtractor={({id})=> id}
            renderItem={({item})=>{
                return (
                    <View>
                          <Divider style={{ backgroundColor: 'blue' }} />
                          <Text><UserPic title={item.name[0]}/> {item.name} </Text>
                        
                        <Text>{item.timestamp}</Text>
                        <Text>{item.comment}</Text>
                        <Divider style={{ backgroundColor: 'blue' }} />
                    </View>
                   
                   
                )
            }}
          />
         
      </View>

}


export {Comments}