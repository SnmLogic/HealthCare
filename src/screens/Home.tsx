import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Index from './Index';
import About from './About';
import SideBar from '../components/side-bar'

const DrawerStack = createDrawerNavigator();

export default function Home({navigation}: any) {
  return(
      <DrawerStack.Navigator initialRouteName="Index" screenOptions={{headerShown: false, drawerType: 'back'}} drawerContent={props => <SideBar navigation={navigation} />}>
        <DrawerStack.Screen name="Index" component={Index} />
        <DrawerStack.Screen name="About" component={About} />
      </DrawerStack.Navigator>
  )
}
