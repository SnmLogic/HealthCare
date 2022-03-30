import React from "react";
import { View, Image, TouchableOpacity } from "react-native";
import { StatusBar } from 'expo-status-bar'

const Header = ({navigation}: any) => {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',  }}>
      <TouchableOpacity onPress={() => navigation.openDrawer()} style={{backgroundColor: 'white', borderRadius: 100, padding: 10, shadowColor: '#595959', shadowOffset: {width: 20, height: 40}, shadowRadius: 100, shadowOpacity: 0.7, elevation: 5}}>
        <Image
          source={{
            uri: "https://img.icons8.com/material-outlined/344/menu--v1.png",
          }}
          style={{ width: 30, height: 30, tintColor: '#3633D1' }}
        />
      </TouchableOpacity>

      <StatusBar style="light" />
    </View>
  );
};

export default Header;
