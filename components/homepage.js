import React, { Component } from "react";
import { Button } from 'react-native-elements';
import styles from "./style";
import {Text} from 'react-native';


const HomePage = ({ navigation }) => {
  return (
  <>
  <Text style={styles.navigateText}>Do you want to</Text>
    <Button
      buttonStyle={styles.stayButton}
      title = "Stay In"
      onPress={() => navigation.navigate('Stay')}
    />
    <Button
    buttonStyle={styles.goButton}
      title = "Go Out"
      onPress={() => navigation.navigate('Go')}
    />
  </>
  );
}

export default HomePage;


