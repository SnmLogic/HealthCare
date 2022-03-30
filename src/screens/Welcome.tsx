import React, { useState} from 'react';
import { View, Text, TouchableOpacity, Dimensions, Image } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { StatusBar } from 'expo-status-bar';
import OverLay from '../components/over-lay';

export default function Welcome(props: NativeStackNavigationProp) {
  const {navigation} = props
  return(
    <View style={{flex:1, alignItems: "center", justifyContent:"center", backgroundColor: "#3633D1"}}>
      <Image source={{uri: "https://cdn.discordapp.com/attachments/912182674418982985/958319705687470090/unknown.png"}} style={{width: "100%", height: "50%", marginBottom: Dimensions.get('screen').height - Dimensions.get('screen').width - 150}} />
      <OverLay navigation={navigation} />
      <StatusBar style="light" />
    </View>
  )
}

