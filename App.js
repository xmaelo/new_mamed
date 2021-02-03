import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Ionicons  from 'react-native-vector-icons/Ionicons';
import AppTextInput from './src/Components/AppTextInput';
import LoginScreen from './src/Screens/LoginScreen';
import AppButton from './src/Components/AppButton';

import HomeScreen from './src/Screens/HomeScreen';
import MessageScreen from './src/Screens/MessageScreen';
import NotificationScreen from './src/Screens/NotificationScreen';
import SettingScreen from './src/Screens/SettingScreen';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import themes from './src/themes';


const Tabs = createMaterialBottomTabNavigator();
const RootStack = createStackNavigator();

function BottomTap(){
  return(
    <Tabs.Navigator
      tabBarOptions={{
          activeTintColor: themes.color.redFair,
          inactiveTintColor: themes.color.blackText,
        }}

      initialRouteName="HomeScreen"
      activeColor={themes.color.redFair}
      barStyle={{ backgroundColor: "#F6F8FA" }}

    >
          <Tabs.Screen 
            name="HomeScreen" 
            component={HomeScreen} 
            options={({ route }) => ({
              title: 'Accueil' ,
              tabBarIcon: ({ focused, color, size }) => {
                let iconName = focused ? 'home' : 'home-outline';
                return <Ionicons  name={iconName} size={26} color={color} />;
              },
            })}
          />
          <Tabs.Screen 
            name="MessageScreen" 
            component={MessageScreen}
            options={({ route }) => ({
              title: 'Messages' ,
              tabBarIcon: ({ focused, color, size }) => {
                let iconName = focused ? 'chatbubble-ellipses' : 'chatbubble-ellipses-outline';
                return <Ionicons  name={iconName} size={26} color={color} />;
              },
            })}
          />
          <Tabs.Screen 
            name="NotificationScreen" 
            component={NotificationScreen} 
            
            options={({ route }) => ({
              title: 'Notifications' ,
              tabBarIcon: ({ focused, color, size }) => {
                let iconName = focused ? 'notifications' : 'notifications-outline';
                return <Ionicons  name={iconName} size={26} color={color} />;
              },
            })}
          />
          <Tabs.Screen 
            name="SettingScreen" 
            component={SettingScreen} 
            options={({ route }) => ({
              title: 'Réglages' ,
              tabBarIcon: ({ focused, color, size }) => {
                let iconName = focused ? 'settings' : 'settings-outline';
                return <Ionicons  name={iconName} size={26} color={color} />;
              },
            })}
          />
    </Tabs.Navigator>
    )
}
export default function App() {
  return (  
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <RootStack.Navigator mode="modal" initialRouteName="LoginScreen"> 
          <RootStack.Screen
            name="Main" 
            component={BottomTap}
            options={{ headerShown: false }} 
          />
          <RootStack.Screen name="LoginScreen" component={LoginScreen} 
            options={{
              headerShown: false,
            }}
          />
        </RootStack.Navigator>
      </NavigationContainer>
    </>
  );
} 




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
