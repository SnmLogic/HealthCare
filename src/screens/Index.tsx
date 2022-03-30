import React from 'react'
import { View, Text } from 'react-native'
import Header from '../components/header'

export default function Index({navigation}: any) {
  return(
    <View style={{paddingTop: 40, paddingHorizontal: 20, backgroundColor: '#3633D1', flex: 1}}>
      <Header navigation={navigation} />
     
{/*
TODO: Not yet complete
      <HealthImportance />
      <GoodFood />
      <DailyYoga />
*/}
    </View>
  )
}
