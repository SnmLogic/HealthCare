import React from 'react';
import { View, Text, ImageBackground, Dimensions } from 'react-native'
import { Grid, Col } from 'react-native-easy-grid'

const GoodFood = () => {
  return (
    <View  style={{backgroundColor: '#223044'}}>
      <Text
        style={{
          color: "white",
          marginLeft: 20,
          fontSize: 25,
          fontWeight: "bold",
          marginTop: 20,
        }}
      >
        4 Healthiest Vegetables
      </Text>
      <Grid style={{ marginTop: 10, width: Dimensions.get('window').width}}>
        <Col style={{marginHorizontal: 20}}>
          <ImageBackground
            source={{
              uri: "https://cdn.discordapp.com/attachments/912182674418982985/958990719341711360/carrot.jpg",
            }}
            style={{ padding: '30%',  alignItems: 'center', justifyContent: 'center' , marginBottom: 20}}
          >
            <Text style={{color: 'white', fontWeight: 'bold'}}>Carrot</Text>
          </ImageBackground>

          <ImageBackground
            source={{
              uri: "https://cdn.discordapp.com/attachments/912182674418982985/958990719534632990/peas.jpg",
            }}
            style={{ padding: '30%', alignItems: 'center', justifyContent: 'center' }}
          >
            <Text style={{color: 'white', fontSize: 15, fontWeight: 'bold'}}>Peas</Text>
          </ImageBackground>
        </Col>

        <Col style={{marginRight: 20,}}>
          <ImageBackground
            source={{
              uri: "https://cdn.discordapp.com/attachments/912182674418982985/958990719136198676/broccoli.jpg",
            }}
            style={{  padding: '30%', alignItems: 'center', justifyContent: 'center' , borderRadius: 20, marginBottom: 20}}
          >
            <Text style={{color: 'white', fontSize: 15, fontWeight: 'bold'}}>Broccoli</Text>
          </ImageBackground>

          <ImageBackground
            source={{
              uri: "https://cdn.discordapp.com/attachments/912182674418982985/958990719744360448/spinach.jpg",
            }}
            style={{ padding: '30%', alignItems: 'center', justifyContent: 'center' }}
          >
            <Text style={{color: 'white', fontSize: 15, fontWeight: 'bold'}}>Spinach</Text>
          </ImageBackground>
        </Col>
      </Grid>
    </View>
  );
};

export default GoodFood;
