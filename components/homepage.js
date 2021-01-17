import React, { Component } from "react";
import { Button } from "react-native";

const HomePage = ({ navigation }) => {
  return (
    <Button
      title = "hello"
      onPress={() => navigation.navigate('Login')}
    />
  );
}

export default HomePage;

