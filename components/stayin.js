import React, { Component } from "react";
import { Button } from "react-native-elements";
import styles from "./style";

const StayIn = ({ navigation }) => {
  return (
    <>
    <Button
    buttonStyle={styles.stayButton}
      title = "Stay Active"
    />
    <Button
    buttonStyle={styles.stayButton}
      title = "Get Creative"
    />
    <Button
    buttonStyle={styles.stayButton}
      title = "Foodie"
    />
    <Button
    buttonStyle={styles.stayButton}
      title = "Get Cozy"
    />
    <Button
    buttonStyle={styles.stayButton}
      title = "Game Night"
    />
    <Button
    buttonStyle={styles.stayButton}
      title = "Wild Card"
    />
    </>
    );
}

export default StayIn;

