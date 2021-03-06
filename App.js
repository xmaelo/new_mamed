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
import PatientListScreen from './src/Screens/PatientListScreen';
import CasContactScreen from './src/Screens/CasContactScreen';
import BonAsavoirScreen from './src/Screens/BonAsavoirScreen';
import CheckCovidScreen from './src/Screens/CheckCovidScreen';
import NewMeasureScreen from './src/Screens/NewMeasureScreen';
import HomeMedScreen from './src/Screens/HomeMedScreen';
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
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();
const MedNav = createMaterialBottomTabNavigator();
const Top = createMaterialTopTabNavigator();

function TopNavs() {
  return (
    <Top.Navigator
      tabBarOptions={{
        initialRouteName: "DashbordScreen",
        indicatorStyle: {
          height: 4,
          backgroundColor: 'red',
          borderRadius: 20,

        },
        labelStyle: {
          fontSize: 14 
        },
        style: {
          //elevation:0
        },
        activeTintColor: "red",
        inactiveTintColor: 'gray'
      }}>
      <Top.Screen name="DashbordScreen" 
        component={DashbordScreen} 
        options={{
            tabBarLabel: 'Charts',
            tabBarIcon: ({ color }) => (
              <Ionicons name="chatbubble" color={color} size={26} />
            ),
          }}
      />
      <Top.Screen name="CovidDashBordScreen"
         component={CovidDashBordScreen} 
         options={{
            tabBarLabel: 'Covid',
            tabBarIcon: ({ color }) => (
              <Ionicons name="chatbubble" color={color} size={26} />
            ),
          }}
        />
      <Top.Screen name="DiabeteScreen"
         component={DiabeteScreen} 
         options={{
            tabBarLabel: 'Diabète',
            tabBarIcon: ({ color }) => (
              <Ionicons name="chatbubble" color={color} size={26} />
            ),
          }}
        />
    </Top.Navigator>
  )
}
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

function TabBarMed(){
  return(
      <MedNav.Navigator 
        initialRouteName="HomeMedScreen"
        activeColor="red"
        inactiveColor="black"
        barStyle={{ backgroundColor: "#F5F6F7"}}
      >
        <MedNav.Screen 
          name="HomeMedScreen" 
          component={HomeMedScreen} 
          options={{
            tabBarLabel: '',
            tabBarIcon: ({ color }) => (
              <Ionicons name="home" color={color} size={26} />
            ),
          }}
        />
        <MedNav.Screen 
          name="PatientListScreen" 
          component={PatientListScreen} 
          options={{
            tabBarLabel: '',
            tabBarIcon: ({ color }) => (
              <Ionicons name="person" color={color} size={26} />
            ),
          }}
        />
      </MedNav.Navigator>
    )
}

const img = require('./assets/imgs/logo.png')
const Logo = ({dontShow}) => <View style={{flexDirection: 'row',  alignItems: 'center', justifyContent: dontShow ? 'space-between': null}}>
                      {dontShow&&
                        <Text style={{
                          marginLeft: -wp("6%"), 
                          marginTop: -10,
                          fontSize: 18,
                        }}>
                          Mon Suivie Médical
                        </Text>
                      }
                      <Image
                          style={{ width: 90, height: 45 }}
                          source={img}
                      />
                      {!dontShow&&
                        <Text style={{
                          marginLeft: 12, 
                          marginTop: -10,
                          color: "#5F666D",
                          fontSize: 17
                        }}>
                          Bonjour Martial !
                        </Text>
                      }
                    </View>
const App: () => React$Node = () => {
  return (
    <> 
      <StatusBar backgroundColor="#019CD9" />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="LoginScreen"
        >
          <Stack.Screen
            name="Main"
            component={TabBar}
            options={{ 
              headerShown: true,  
              headerTitle: () => <Logo dontShow={false}/>,
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
          <Stack.Screen
            name="TabBarMed"
            component={TabBarMed}
            options={{ 
              headerShown: false,  
              headerTitle: "",
              headerStyle: {
                backgroundColor: 'white',
                height: 45
              }
            }}
          />
          <Stack.Screen name="LoginScreen" component={LoginScreen} options={{headerTransparent: true,  title: ""}}/>
          <Stack.Screen name="RegisterScreen" component={RegisterScreen} options={{headerTransparent: true,  title: ""}}/>
          <Stack.Screen name="RendezVousScreen" component={RendezVousScreen} options={{headerTransparent: false,  title: "Mes rendez-vous"}}/>
          <Stack.Screen name="DashbordScreen" component={TopNavs} 
            options={{
              headerTransparent: false,  
              headerTitle: ()=><Logo dontShow={true}/>,
              headerStyle: {
                elevation: 0,
                shadowOpacity: 0
              }
            }}
          />
          <Stack.Screen name="NewMeasureScreen" component={NewMeasureScreen} options={{headerTransparent: false,  title: "Nouvelle Mesure"}}/>
          <Stack.Screen name="CasContactScreen" component={CasContactScreen} options={{headerTransparent: true,  title: ""}}/>
          <Stack.Screen name="BonAsavoirScreen" component={BonAsavoirScreen} options={{headerTransparent: true,  title: ""}}/>
          <Stack.Screen name="CheckCovidScreen" component={CheckCovidScreen} options={{headerTransparent: true,  title: ""}}/>
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};



export default App;
