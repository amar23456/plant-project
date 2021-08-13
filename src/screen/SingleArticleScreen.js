import React, { useContext } from 'react'
import {StyleSheet,View,Text} from 'react-native'
import Spacer from '../components/Spacer';
import {Context} from '../Context/DataContext'
import {Comment} from '../components/Comments'


const SingleArticle =({navigation,route}) =>{
    console.log(navigation)
    const { _id } = route.params
  const {state:{articles}}=useContext(Context)
  const data =articles.find(t => t._id ===_id);
    return (
        <View>
            <Text>{data.title}</Text>
            <Spacer/>
            <View style={styles.container}>
              <AntDesign name="like2" size={30} color='black' style={{paddingRight:40}}/>
              <Entypo name="creative-commons-share" size={30} color="black" style={{paddingLeft:100}} />
              <Button backgroundColor='black' title='Share' buttonStyle={styles.reply} titleStyle={styles.titleStyle}/> 
            </View> 
              <Spacer/>
              <Text>{data.description}</Text>
              <Spacer/>
              <Comment/>
            
        </View>
    )

}

const styles=StyleSheet.create({})
export default SingleArticle;