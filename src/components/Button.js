
import { AntDesign } from '@expo/vector-icons'; 

const loading =()=>{
    return  <Button loading />
}
return <View>
 <Button title="Test" 
   titleStyle={styles.buttonText}
   buttonStyle={styles.button} 
   onPress={()=>{loading}} 
   icon={<AntDesign name="download" size={24} color="black" />}
   />
</View>



