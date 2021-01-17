import React, { Component } from "react";

import styles from "./style";
import {Keyboard, Text, View, TextInput, TouchableWithoutFeedback, Alert, KeyboardAvoidingView} from 'react-native';
import { Button } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const appId = "1047121222092614"

const LoginScreen = ({ navigation }) => {

    return (
      <KeyboardAvoidingView style={styles.containerView} behavior="padding">

      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.loginScreenContainer}>
          <View style={styles.loginFormView}>
          <Text style={styles.logoText}>LumiDate</Text>
          <Text style={styles.paragraph}>Illuminate your date ideas with lumidate</Text>
            <TextInput placeholder="Username" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} />
            <TextInput placeholder="Password" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} secureTextEntry={true}/>
            <Button
              buttonStyle={styles.loginButton}
              title="Login"
              onPress={() => navigation.navigate('Home')}
            />
            <Button
              buttonStyle={styles.fbLoginButton}
              onPress={() => this.onFbLoginPress()}
              title="Login with Facebook"
              color="#3897f1"
            />
            <Button
                buttonStyle={styles.signupButton}
                title = "Sign up for an account!"
                onPress={() => navigation.navigate('Signup')}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    );

//   componentDidMount() {
//   }

//   componentWillUnmount() {
//   }

//   onLoginPress() {
//     Alert.alert(
//         "hello world",
//         "how doomed is it?",
//         [
//             {text: "a lot", onPress: () => console.log("go next")}, {text: "a lotter"}
//         ],
//         {cancelable: false}
//     );
//   }

//   async onFbLoginPress() {
//     const { type, token } = await Expo.Facebook.logInWithReadPermissionsAsync(appId, {
//       permissions: ['public_profile', 'email'],
//     });
//     if (type === 'success') {
//       const response = await fetch(
//         `https://graph.facebook.com/me?access_token=${token}`);
//       Alert.alert(
//         'Logged in!',
//         `Hi ${(await response.json()).name}!`,
//       );
//     }
//   }
}

export default LoginScreen;
