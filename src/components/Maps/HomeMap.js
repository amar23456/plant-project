import React, { useContext }  from "react";
import MapView, { Marker } from 'react-native-maps'
import { StyleSheet } from "react-native";
import mongDbreq from '../../api-data/mongononAuth'
import {Context} from '../../Context/DataContext'
import { Entypo } from '@expo/vector-icons'; 
import mongononAuth from "../../api-data/mongononAuth";


const HomeMap = =>{
   
   
      

   let TreeMarker = await response.data.map((value,key)=>{
       return <Marker
           key={key}
           coordinate={{latitude:value.latitude,longitude:value.longitude}}
           title={value.title}
           description={value.description}
          >
              < Entypo name="tree" size={24} color="black" />

          </Marker>
   })


 return <MapView>
        <TreeMarker/>
      </MapView>
}
const styles=StyleSheet.create({
    inputStyle:{
       marginRight:200,
       marginLeft:20
    }
})
export default HomeMap