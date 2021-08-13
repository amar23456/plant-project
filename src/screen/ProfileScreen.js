import React from "react";
import { View,Text,StyleSheet,Button } from "react-native";
import { Avatar } from 'react-native-paper';
import { Icon } from "react-native-elements";
// Standard Avatar

const ProfileScreen=()=>{
    
    return <View>
        <Avatar.Text size={25} label="jr"/>
           <Text style={styles.header}>Made with Love</Text>
        </View>
}


export default ProfileScreen;

const styles=StyleSheet.create({ 
    header:{
        marginRight:100,
       fontSize:30
    }
});