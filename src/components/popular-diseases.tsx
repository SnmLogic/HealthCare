import React from "react";
import { View, Text } from 'react-native'
import { Grid, Col } from "react-native-easy-grid";
import { batch_1, batch_2 } from "../data/popular-disease";

const PopularDiseases = () => {
  return (
    <View style={{ backgroundColor: "#223044", borderTopLeftRadius: 150 }}>
      <Text
        style={{
          color: "white",
          marginLeft: 20,
          fontSize: 25,
          fontWeight: "bold",
          marginTop: "30%",
        }}
      >
        Popular Diseases
      </Text>

      <Grid style={{ marginHorizontal: 10, marginTop: 10 }}>
        <Col>
          {batch_1.map((value, index) => (
            <View
              key={index}
              style={{
                backgroundColor: "#3633D1",
                borderRadius: 20,
                height: 150,
                alignItems: "center",
                justifyContent: "center",
                marginVertical: 10,
                marginHorizontal: 10,
              }}
            >
              <Text
                style={{ color: "white", fontSize: 19, textAlign: "center" }}
              >
                {value.name}
              </Text>
            </View>
          ))}
        </Col>
        <Col>
          {batch_2.map((value, index) => (
            <View
              key={index}
              style={{
                backgroundColor: "#3633D1",
                borderRadius: 20,
                height: 150,
                alignItems: "center",
                justifyContent: "center",
                marginVertical: 10,
                marginHorizontal: 10,
              }}
            >
              <Text
                style={{ color: "white", fontSize: 19, textAlign: "center" }}
              >
                {value.name}
              </Text>
            </View>
          ))}
        </Col>
      </Grid>
    </View>
  );
};

export default PopularDiseases;
