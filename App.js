import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from './components/login.js';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomePage from './components/homepage.js';
import 'react-native-gesture-handler';
import SignUp from './components/signup.js';
import StayIn from './components/stayin.js';
import GoOut from './components/go.js';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen
        name="Home"
        component={HomePage}
        options={{ title: 'Welcome' }}
      />
      <Stack.Screen
        name="Signup"
        component={SignUp}
      />
      <Stack.Screen
        name="Stay"
        component={StayIn}
      />
      <Stack.Screen
        name="Go"
        component={GoOut}
      />
    </Stack.Navigator>
  </NavigationContainer>
  );
}

//const Stack = createStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomePage}
          options={{ title: 'Welcome' }}
        />
        <Stack.Screen name="Login" component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
