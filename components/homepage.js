import React, { Component } from "react";
import { Button } from 'react-native-elements';
import styles from "./style";
import {Text} from 'react-native';


const HomePage = ({ navigation }) => {
  return (
  <>
  <Text> Do you want to: </Text>
    <Button
      buttonStyle={styles.optionButton}
      title = "Stay In"
      onPress={() => navigation.navigate('Stay')}
    />
    <Button
      title = "Go Out"
      onPress={() => navigation.navigate('Go')}
    />
  </>
  );
}

export default HomePage;


