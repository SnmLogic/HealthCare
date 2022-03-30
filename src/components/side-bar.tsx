import React from 'react'
import { View, Text, Image, TouchableOpacity} from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons';

const SideBar = ({navigation}: any) => {
  return(
    <View style={{flex: 1, paddingTop: 40, paddingHorizontal: 20, backgroundColor: '#223044', justifyContent: 'space-between', paddingVertical: 40}}>

      <View style={{marginTop: 40}}>
      <Image  source={{uri: "https://static.vecteezy.com/system/resources/previews/002/058/426/large_2x/mother-of-nature-concept-free-vector.jpg"}} style={{width: 150, height: 150, backgroundColor: 'white', borderRadius: 100}}/>

      <Text style={{color: 'white', fontSize: 35, fontWeight: 'bold'}}>HealthCare</Text>

      <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' ,width: '100%', backgroundColor: '#3633D1', borderRadius: 10, paddingHorizontal: 20, paddingVertical: 10, marginVertical: 20}} onPress={() => navigation.navigate('Index')}>
          <Ionicons name="home" size={32} color="white" />
        <Text style={{fontSize: 20, fontWeight: '300', marginLeft: 10, color: 'white'}}>Home</Text>
      </TouchableOpacity>


      <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center', width: '100%', backgroundColor: '#3633D1', borderRadius: 10, paddingHorizontal: 20, paddingVertical: 10}} onPress={() => {navigation.navigate('About'), navigation.closeDrawer}}>
          <Ionicons name="information-outline" size={32} color="white" />
        <Text style={{fontSize: 20, fontWeight: '300', marginLeft: 10, color: 'white'}}>About</Text>
      </TouchableOpacity>
 </View>

        <TouchableOpacity onPress={() => navigation.navigate("Welcome")} style={{alignSelf: 'center'}}>
        <Text style={{color: 'white', fontSize: 15, fontWeight: 'bold'}}>Quit</Text>
      </TouchableOpacity>
    </View>
  )
}

export default SideBar
