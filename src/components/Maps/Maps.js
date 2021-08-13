import  React,{useContext, useState} from 'react';
import { View,StyleSheet,Text } from 'react-native';
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';
import { FontAwesome } from '@expo/vector-icons'; 
import { Context as DataContext } from '../../Context/DataContext'
import { Context as TreeContext } from '../../Context/TreeContext'
import useLocation from '../hooks/useLocation';


const Maps  =()=>{
    const error =  useLocation()
    const { state:{currentLocation}} =useContext(DataContext)
    const { treeLocation }=useContext(TreeContext)
    const [ cords,setCords ] = useState(null)
    console.log(currentLocation)
     
      return (<View>
           {currentLocation?
            <MapView 
              initialRegion={currentLocation.coords,{latitudeDelta:0.001,longitudeDelta:0.001}}
              style={styles.map} 
              mapType="terrain"
              onPress={(e)=>{
                treeLocation(e.nativeEvent.coordinate)
                setCords(e.nativeEvent.coordinate)
              }}
              loadingEnabled= {true}
              loadingIndicatorColor='blue'
              showsUserLocation={true}
            >
              {cords?
               <Marker 
                coordinate={{latitude:cords.latitude,longitude:cords.longitude}}
                title={"Tree"}
                description={"Preview Tree"}
              >    
                <FontAwesome name="tree" size={25} color='green'/>
                </Marker>:null}
            </MapView>
            :<MapView/>
            }
           
            {error? <Text>Please Enable Location</Text>:null}
        </View>

    )
    
}

const styles =StyleSheet.create({
    map :{
        height:300,
    }
})

export {Maps}