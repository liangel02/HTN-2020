import React, { Component } from "react";
import { Button } from "react-native";

const GoOut = ({ navigation }) => {
  return (
    <>
    <Button
    buttonStyle={styles.goButton}
      title = "Stay Active"
    />
    <Button
    buttonStyle={styles.goButton}
      title = "Get Creative"
    />
    <Button
    buttonStyle={styles.goButton}
      title = "Foodie"
    />
    <Button
    buttonStyle={styles.goButton}
      title = "Get Cozy"
    />
    <Button
    buttonStyle={styles.goButton}
      title = "Game Night"
    />
    <Button
    buttonStyle={styles.goButton}
      title = "Support Local"
    />
    <Button
    buttonStyle={styles.goButton}
      title = "Wild Card"
    />
    </>
    );
}


export default GoOut;
