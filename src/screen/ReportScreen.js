import { HeaderTitle } from "@react-navigation/stack";
import React from "react";
import { SafeAreaView } from "react-native";
import { TextInputBase } from "react-native";
import { View,Text,StyleSheet,Button } from "react-native";
import { TextInput } from "react-native-gesture-handler";

const ReportScreen=({navigation})=>{
    
    return <View style={styles.container}>
        <Text  >Information  taken from you ---</Text>
        <Text> Location For getting Air Quality Index (Location IS NOT SAVED)</Text>
        <Text>IF lOGGED IN INFO PROVIDED BY FACEBOOK (ONLY NAME) IS SAVED </Text>
         <Text> iF lOGGED iN bY GOOGLE (NAME,eMAIL,PROFILE PIC ) IS SAVED</Text>
         <Text>ALL THE TREES LOCATION WILL BE SAVED FOR SHOWING IN MAP AND NOT MORE </Text>
         <Text>iF yOU DELETE YOUR ACCOUNT ALL SAVED DATA IN YOUR ACCOUNT WILL BE PERMANENETLY DELETED</Text>

     </View>
}


export default ReportScreen;





const styles=StyleSheet.create({
    container :{
        marginTop:30,
        marginLeft:30
    }
});