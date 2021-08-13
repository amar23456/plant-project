import React ,{useState,useContext} from "react";
import { View,Text,StyleSheet,Button,SafeAreaView, ScrollView  } from "react-native";
import { Input } from "react-native-elements";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Maps } from "../components/Maps/Maps";
import Spacer from '../components/Spacer'
import MapMarker from "../components/TreeMarker";
import { Context as DataContext } from "../Context/DataContext";
import { Context as TreeContext } from "../Context/TreeContext";


const AddPlant =()=>{
   // Add plant screen consists of saving tree data in database getting back to home screen 
    const {state:{currentLocation}} =useContext(DataContext)
    const {state:{location},saveTree} =useContext(TreeContext)
    const [title,setTitle] =useState(null)
    const [description,setDescription]=useState(null)
    
     return  <SafeAreaView>
            <ScrollView >
            <Text>AddPlant</Text>
           <Maps/>
           <Spacer/>
           <Input placeholder='Enter Title' onChangeText={setTitle}/>
            <Spacer/>
            <Input placeholder='some notes' onChangeText={setDescription}/>
            <Spacer/>
            <Text> Add Location from  </Text>
              <TouchableOpacity onPress={()=>{saveTree(currentLocation.coords)
             return (
               <MapMarker lat={location.coords.latitude}
                long ={location.coords.longitude}/>
             )}}>
             <Text> currentLocation</Text></TouchableOpacity>
              <Text> or</Text>
              <TouchableOpacity >
              <Text>Select from Map</Text>
              </TouchableOpacity>  
              
              
             {/* //193308117401 */}
             <Text>location.</Text>
              <Button 
               onPress={()=>{ saveTree( title,description,location) }}
              />
        </ScrollView>
        </SafeAreaView>
}
const styles =StyleSheet.create({});





export {AddPlant}



