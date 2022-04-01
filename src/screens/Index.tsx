import React from "react";
import { View, ScrollView, Text } from "react-native";
import { Grid, Col } from "react-native-easy-grid";
import GoodFood from "../components/good-food";
import Header from "../components/header";
import PopularDiseases from "../components/popular-diseases";

const DailyYoga = () => {
  return (
    <View style={{ marginTop: 20, marginHorizontal: 20 }}>
      <Text style={{ fontSize: 25, fontWeight: "bold", color: "white" }}>
        4 Best Yoga Poses
      </Text>
      <Grid style={{marginTop: 10}}>
        <Col>
          <View style={{ marginBottom: 20, marginRight: 10 ,padding: 20, backgroundColor: '#3633D1', borderRadius: 20, height: 150, alignItems: 'center', justifyContent: 'center'}}>
            <Text style={{color: 'white', fontSize: 18}}>Padmasana</Text>
          </View>

          <View style={{marginBottom: 20, marginRight: 10 ,padding: 20, backgroundColor: '#3633D1', borderRadius: 20, height: 150, alignItems: 'center', justifyContent: 'center'}}>
            <Text style={{color: 'white', fontSize: 18}}>Sarvangasana</Text>
          </View>
        </Col>

        <Col>
          <View style={{marginBottom: 20, marginLeft: 10, padding: 20, backgroundColor: '#3633D1', borderRadius: 20, height: 150, alignItems: 'center', justifyContent: 'center'}}>
            <Text style={{color: 'white', fontSize: 18}}>Ustrasana</Text>
          </View>

          <View style={{marginBottom: 20, marginLeft: 10, padding: 20, backgroundColor: '#3633D1', borderRadius: 20, height: 150, alignItems: 'center', justifyContent: 'center'}}>
            <Text style={{color: 'white', fontSize: 18}}>Dhanurasana</Text>
          </View>
        </Col>
 
      </Grid>
    </View>
  );
};

export default function Index({ navigation }: any) {
  return (
    <View style={{ paddingTop: 40, backgroundColor: "#3633D1", flex: 1 }}>
      <Header navigation={navigation} />

      <ScrollView
        style={{
          borderTopLeftRadius: 150,
          backgroundColor: "#223044",
          marginTop: 50,
        }}
        showsVerticalScrollIndicator={false}
      >
        <PopularDiseases />
        <GoodFood />
        <DailyYoga />
      </ScrollView>
    </View>
  );
}
