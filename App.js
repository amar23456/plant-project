import  React, { useContext,useEffect }  from "react";
import 'react-native-gesture-handler';
import  { MyDrawer } from "./src/Navigation-routes/Home-Drawer";
import { NavigationContainer } from '@react-navigation/native';
import { Login } from "./src/Navigation-routes/Sign-route";
import { createStackNavigator } from "@react-navigation/stack";
import { Provider as AuthProvider } from "./src/Context/AuthContxt";
import { Provider as DataProvider } from "./src/Context/DataContext";
import { Provider as TreeProvider } from "./src/Context/TreeContext";
import { setNavigator } from "./src/Navigation-routes/NavigationRef";
import { Context as AuthContext } from "./src/Context/AuthContxt" 


const Main=createStackNavigator();

const Tab=createStackNavigator();




const App=  ()=>{
   const {state:{isLoggedIn},checkAuth}=useContext(AuthContext)
   useEffect(() => {
     checkAuth()
    }, []);
   
   return(
    <NavigationContainer>
       <Main.Navigator screenOptions={{
          title:null,
          header:()=>{
             return null}
       }}>
        {
           isLoggedIn ?(
             <Tab.Screen name='Plant' component={MyDrawer} />
         ):
             <Main.Screen name='Jain Us' component={Login}/>
        }
     </Main.Navigator>
   
     </NavigationContainer>
 )}
export default ()=>{
   return (
      <AuthProvider >
      <DataProvider>
        <TreeProvider>
          <App forwardRef={
               navigator =>{
                 setNavigator(navigator)
                }}/>
           </TreeProvider>
      </DataProvider>
      </AuthProvider>
   )
}
 
