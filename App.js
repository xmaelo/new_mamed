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
import HomeScreen from './src/Screens/HomeScreen';
import MessageScreen from './src/Screens/MessageScreen';
import SettingScreen from './src/Screens/SettingScreen';
import ProfileScreen from './src/Screens/ProfileScreen';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createStackNavigator } from '@react-navigation/stack';

const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();

function TabBar(){
  return(
      <Tab.Navigator 
        initialRouteName="Home"
        activeColor="red"
        inactiveColor="black"
        barStyle={{ backgroundColor: "#F5F6F7"}}
      >
        <Tab.Screen 
          name="HomeScreen" 
          component={HomeScreen} 
          options={{
            tabBarLabel: 'Journal',
            tabBarIcon: ({ color }) => (
              <Ionicons name="home" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen 
          name="MessageScreen" 
          component={MessageScreen}
          options={{
            tabBarLabel: 'Message',
            tabBarIcon: ({ color }) => (
              <Ionicons name="chatbubble" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen 
          name="SettingScreen" 
          component={SettingScreen}
          options={{
            tabBarLabel: 'Settings',
            tabBarIcon: ({ color }) => (
              <Ionicons name="settings" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen 
          name="ProfileScreen" 
          component={ProfileScreen}
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({ color }) => (
              <Ionicons name="person" color={color} size={26} />
            ),
          }}
        />
      </Tab.Navigator>
    )
}
const App: () => React$Node = () => {
  return (
    <> 
      <StatusBar backgroundColor="#019CD9" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Main"
            component={TabBar}
            options={{ 
              headerShown: true,  
              title: "",
              headerStyle: {
                backgroundColor: '#019CD9',
                height: 45
              },
              headerRight: () => (
                <View style={{marginRight: 10}}>
                  <Ionicons
                    onPress={() => alert('This is a button!')}
                    name="notifications"  size={25}
                  />
                </View>
              ),
            }}
          />
          <Stack.Screen name="LoginScreen" component={LoginScreen} options={{headerTransparent: true,  title: ""}}/>
          <Stack.Screen name="RegisterScreen" component={RegisterScreen} options={{headerTransparent: true,  title: ""}}/>
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};



export default App;
