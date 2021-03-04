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
  Image,
  StatusBar,
} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from './src/Screens/LoginScreen';
import SymtomeScreen from './src/Screens/SymtomeScreen';
import RegisterScreen from './src/Screens/RegisterScreen';
import HomeScreen from './src/Screens/HomeScreen';
import DiabeteScreen from './src/Screens/DiabeteScreen';
import CasContactScreen from './src/Screens/CasContactScreen';
import BonAsavoirScreen from './src/Screens/BonAsavoirScreen';
import CheckCovidScreen from './src/Screens/CheckCovidScreen';
import NewMeasureScreen from './src/Screens/NewMeasureScreen';
import CovidDashBordScreen from './src/Screens/CovidDashBordScreen';
import MessageScreen from './src/Screens/MessageScreen';
import SettingScreen from './src/Screens/SettingScreen';
import ProfileScreen from './src/Screens/ProfileScreen';
import DashbordScreen from './src/Screens/DashbordScreen';
import RendezVousScreen from './src/Screens/RendezVousScreen';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { createStackNavigator } from '@react-navigation/stack';

const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();

function TabBar(){
  return(
      <Tab.Navigator 
        initialRouteName="HomeScreen"
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
          component={SymtomeScreen}
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

const img = require('./assets/imgs/logo.png')
const Logo = () => <Image
                        style={{ width: wp("28%"), height: hp("10%"), borderRadius: 100 }}
                        source={img}
                    />
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
              headerTitle: () => <Logo/>,
              headerStyle: {
                backgroundColor: 'white',
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
          <Stack.Screen name="RendezVousScreen" component={RendezVousScreen} options={{headerTransparent: false,  title: "Mes rendez-vous"}}/>
          <Stack.Screen name="DashbordScreen" component={DashbordScreen} options={{headerTransparent: false,  title: "Mon suivie Medical"}}/>
          <Stack.Screen name="DiabeteScreen" component={DiabeteScreen} options={{headerTransparent: false,  title: "Diabète: M"}}/>
          <Stack.Screen name="NewMeasureScreen" component={NewMeasureScreen} options={{headerTransparent: false,  title: "Nouvelle Mesure"}}/>
          <Stack.Screen name="CovidDashBordScreen" component={CovidDashBordScreen} options={{headerTransparent: true,  title: ""}}/>
          <Stack.Screen name="CasContactScreen" component={CasContactScreen} options={{headerTransparent: true,  title: ""}}/>
          <Stack.Screen name="BonAsavoirScreen" component={BonAsavoirScreen} options={{headerTransparent: true,  title: ""}}/>
          <Stack.Screen name="CheckCovidScreen" component={CheckCovidScreen} options={{headerTransparent: true,  title: ""}}/>
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};



export default App;
