import React, { useContext } from "react";
import { View } from "react-native";
import { Avatar } from "react-native-elements";
import { AntDesign } from '@expo/vector-icons';
import { navigate } from '../Navigation-routes/NavigationRef';
import mongoDbreq from '../api-data/mongDbreq'
import Context from '../Context/AuthContxt'


const UserPic =()=>{
   
   const {state:{userdata}}=useContext(Context)
  return <View>  
          {data?<Avatar 
            rounded
            overlayContainerStyle={{backgroundColor: 'blue'}}
            size='small'
            icon={{ name:'user', type:'font-awesome'}}
            activeOpacity={0}
            onPress={()=> navigate('AddPlant')}
        />:null}
      </View>
    
}

export {UserPic}