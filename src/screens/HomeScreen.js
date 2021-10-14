import React from "react";
import { ImageBackground, Button, TouchableOpacity, View, Text, StyleSheet, Image, } from "react-native";
import HomeImage from "../components/HomeImage";
const HomeScreen = ({ navigation }) => {
  return (
    <ImageBackground source={require('../../assets/backgroundimage.png')} style={{ flex: 1 }}>
      <View style={{ flex: 0.6, }}>

      </View>
      <View style={{ flex: 0.4 }}>
        <Text style={
          {

            flex: 0.2,
            color: 'white',
            fontSize: 'large',
            fontWeight: 'bold',

          }}>Karachi, Lahore <br /> and Islamabad</Text>
        <Text style={{ flex: 0.1, color: 'white' }}>The Heavenly Land Build With Love And Magic</Text>
        <View style={{ flex: 0.3, flexDirection: 'row', justifyContent: 'space-around' }}>
          <HomeImage />
          <HomeImage />
          <HomeImage />
          <HomeImage />
          <HomeImage />
        </View>
        <View style={{ flex: 0.4, alignItems: 'center' }}>
          <TouchableOpacity onPress={() => navigation.navigate('Screen')}
            style={{
              backgroundColor: 'orange',
              width: '50%',
              height: '50%',
              borderRadius: 20,
              justifyContent: 'center',
              alignItems: 'center'
            }}>
            <Text style={{ fontSize: 20 }}>Book Dastination</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  )
};

const styles = StyleSheet.create({
  background: {
    width: "100%",
    height: 800
  }
});

export default HomeScreen;
