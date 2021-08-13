import React from 'react'; 
import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { HomeRoute } from './Home-Route';
import ReportScreen from '../screen/ReportScreen';

const HomeDrawer=createDrawerNavigator();
const MyDrawer= ()=>{
return ( <HomeDrawer.Navigator>
    <HomeDrawer.Screen name="HomeRoute" component={HomeRoute}/>
    <HomeDrawer.Screen name=" Report" component={ReportScreen}/>
 </HomeDrawer.Navigator>

)
}
export {MyDrawer};
