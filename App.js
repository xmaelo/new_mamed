/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import LoginScreen from './src/Screens/LoginScreen';
import RegisterScreen from './src/Screens/RegisterScreen';

import { createStackNavigator } from '@react-navigation/stack';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

// function Drawer(){
//   return(
//       <Drawer.Navigator initialRouteName="LoginScreen">
//         <Drawer.Screen name="LoginScreen" component={LoginScreen} />
//         <Drawer.Screen name="RegisterScreen" component={RegisterScreen} options={{
//           title: "",
//           headerShown: true,
//           headerTransparent: true,
//         }}/>
//       </Drawer.Navigator>
//     )
// }
const App: () => React$Node = () => {
  return (
    <> 
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="LoginScreen" component={LoginScreen} options={{headerTransparent: true,  title: ""}}/>
          <Stack.Screen name="RegisterScreen" component={RegisterScreen} options={{headerTransparent: true,  title: ""}}/>
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};



export default App;
