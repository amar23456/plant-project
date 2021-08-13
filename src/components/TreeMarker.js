import Marker from "react-native-maps"



const MapMarker =async(lat,long)=>{

return <Marker 
    coordinate={{latitude:{lat},longitude:{long}}}

    title={"Tree"}
    description={"Preview Marker"}
    >    
<FontAwesome name="tree" size={25} color='green'/>
</Marker>
}

export default MapMarker;
