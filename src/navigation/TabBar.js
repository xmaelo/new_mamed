import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { BottomTabBar, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons  from 'react-native-vector-icons/Ionicons';
import  TabBarAdvancedButton  from './TabBarAdvancedButton';
import themes from '../themes';
import color from '../themes/Color'
import AppText from '../Components/AppText';
import LoginScreen from '../Screens/LoginScreen';
import HomeScreen from '../Screens/HomeScreen';
import MessageScreen from '../Screens/MessageScreen';
import NotificationScreen from '../Screens/NotificationScreen';
import SettingScreen from '../Screens/SettingScreen';

import RegistrationScreen from "../Screens/RegisterScreen"
import ForgotPasswordScreen from "../Screens/ForgotPasswordScreen"
import PostViewScreen from "../Screens/PostViewScreen"

import ChatScreen from '../Screens/ChatScreen'


import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

//import { IS_IPHONE_X } from '../utils';

const BottomBar = createBottomTabNavigator();
const Tabs = createBottomTabNavigator();
const RootStack = createStackNavigator();
const col = color;

const RenderTitle = (focused, text) =>  focused ? <Text style={{color: focused? col.redFair: col.blackText}}>{text}</Text> : null
function EmptyScreen(){
	return(
		<Text>Create POST here</Text>
		)
}

const barColor = color.barColor;
function BottomTap(){
  return(
    <Tabs.Navigator
      initialRouteName="HomeScreen"
      tabBar={(props) => (
        <View style={styles.navigatorContainer}>
          <BottomTabBar
            {...props}
          />
        </View>
      )}
      tabBarOptions={{
        showIcon: true,
        style: styles.navigator,
        tabStyle: {
          backgroundColor: barColor
        }
      }}
    >
          <Tabs.Screen 
            name="Home" 
            component={HomeScreen} 
            options={({ route }) => ({
              title: ({focused}) => RenderTitle(focused, "Accueil"),
              tabBarIcon: ({ focused, color, size }) => {
                let iconName = focused ? 'home' : 'home-outline';
                color = focused ? col.redFair : col.blackText;
                return <Ionicons  name={iconName} size={26} color={color} />;
              },
            })}
          />
          <Tabs.Screen 
            name="Message" 
            component={MessageScreen}
            options={({ route}) => ({
              title: ({focused}) => RenderTitle(focused, "Message"),
              tabBarIcon: ({ focused, color, size }) => {
              	color = focused ? col.redFair : col.blackText;
                let iconName = focused ? 'chatbubble-ellipses' : 'chatbubble-ellipses-outline';
                return <Ionicons  name={iconName} size={26} color={color} />;
              },
            })}
          />

          <Tabs.Screen
	        name="Rocket"
	        component={EmptyScreen}
	        options={{
	          tabBarButton: (props) => (
	            <TabBarAdvancedButton
	              bgColor={barColor}
	              {...props}
	            />
	          )
	        }}
	      />

          <Tabs.Screen 
            name="Notification" 
            component={NotificationScreen} 
            
            options={({ route }) => ({
              title: ({focused}) => RenderTitle(focused, "Notifs"),
              tabBarIcon: ({ focused, color, size }) => {
              	color = focused ? col.redFair : col.blackText;
                let iconName = focused ? 'notifications' : 'notifications-outline';
                return <Ionicons  name={iconName} size={26} color={color} />;
              },
            })}
          />
          <Tabs.Screen 
            name="Setting" 
            component={SettingScreen} 
            options={({ route }) => ({
              title: ({focused}) => RenderTitle(focused, "Réglages"),
              tabBarIcon: ({ focused, color, size }) => {
              	color = focused ? col.redFair : col.blackText;
                let iconName = focused ? 'settings' : 'settings-outline';
                return <Ionicons  name={iconName} size={26} color={color} />;
              },
            })}
          />
    </Tabs.Navigator>
    )
}

export default function TabBar ({ barColor }){
	return(
	  	<NavigationContainer>
	  		<RootStack.Navigator mode="modal" initialRouteName="LoginScreen"> 
	          <RootStack.Screen
	            name="Main" 
	            component={BottomTap}
	           options={{ headerShown: false }} 
	          /> 
            <RootStack.Screen name="RegistrationScreen" component={RegistrationScreen} options={{headerTransparent: true, title: ""}}/>
            <RootStack.Screen name="ForgotPasswordScreen" component={ForgotPasswordScreen} options={{headerTransparent: true, title: ""}}/>

            <RootStack.Screen
              name="ChatScreen" 
              component={ChatScreen}
             options={{ headerShown: false }} 
            />
	          <RootStack.Screen name="PostViewScreen" component={PostViewScreen} 
	            options={{
                title: "Commentaires",
	              headerShown: true,
                headerTransparent: false,
	            }}
	          />
	        </RootStack.Navigator>
	  	</NavigationContainer>
  	)
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  navigatorContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
  },
  navigator: {
    borderTopWidth: 0,
    backgroundColor: 'transparent',
    elevation: 30
  },
  xFillLine: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 34
  }
});
