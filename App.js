/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState, useEffect }from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen';
import LoginScreen from './src/Screens/LoginScreen';
import SymtomeScreen from './src/Screens/SymtomeScreen';
import SearchDoctorScreen from './src/Screens/SearchDoctorScreen';
import AntecedentsMedical from './src/Screens/AntecedentsMedical';
import RegisterScreen from './src/Screens/RegisterScreen';
import HomeScreen from './src/Screens/HomeScreen';
import CodeVerificationScreen from './src/Screens/CodeVerificationScreen';
import DiabeteScreen from './src/Screens/DiabeteScreen';
import PatientListScreen from './src/Screens/PatientListScreen';
import ListCasContact from './src/Screens/ListCasContact'; 
import CasContactScreen from './src/Screens/CasContactScreen';
import AddcontactUrgence from './src/Screens/AddcontactUrgence';
import PatientDataScreen from './src/Screens/PatientDataScreen';
import JournalCovid from './src/Screens/JournalCovid';
import JournalDiabeteScreen from './src/Screens/JournalDiabeteScreen';
import StatistiquesScreen from './src/Screens/StatistiquesScreen';
import EditProfile from './src/Screens/EditProfile';
import BonAsavoirScreen from './src/Screens/BonAsavoirScreen';
import CheckCovidScreen from './src/Screens/CheckCovidScreen';
import NewMeasureScreen from './src/Screens/NewMeasureScreen';
import HomeMedScreen from './src/Screens/HomeMedScreen';
import CovidDashBordScreen from './src/Screens/CovidDashBordScreen';
import MessagePatScreen from './src/Screens/MessagePatScreen';
import SettingScreen from './src/Screens/SettingScreen';
import ProfileScreen from './src/Screens/ProfileScreen';
import AddCasContact from './src/Screens/AddCasContact';
import ContactUrgence from './src/Screens/ContactUrgence';
import DashbordScreen from './src/Screens/DashbordScreen';
import MyPatientList from './src/Screens/MyPatientList';
import ChatScreen from './src/Screens/ChatScreen';
import ListMessagesDocScreen from './src/Screens/ListMessagesDocScreen';
import RendezVousScreen from './src/Screens/RendezVousScreen';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import FlashMessage from "react-native-flash-message";
import AsyncStorage from '@react-native-async-storage/async-storage';
import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';
import { useFocusEffect } from '@react-navigation/native';

const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();
const MedNav = createMaterialBottomTabNavigator();
const Top = createMaterialTopTabNavigator();



const getData = async () => {
  console.log('value value getData start')
  try {

      const userId =  auth().currentUser;
      console.log('userId userId', userId)
    // const value = await AsyncStorage.getItem('@userId')
    // console.log('value value', value)

    if(userId && userId.uid) {
      return userId.uid;
    }
  } catch(e) {
    console.log('error saving data', e)
    // error reading value
  }
  return null;
}


function TopNavs() {
  return (
    <Top.Navigator
      tabBarOptions={{
        initialRouteName: "DashbordScreen",
        indicatorStyle: {
          height: 4,
          backgroundColor: '#009BD9',
          borderRadius: 20,

        },
        labelStyle: {
          fontSize: 14 
        },
        style: {
          //elevation:0
        },
        activeTintColor: "#009BD9",
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
        activeColor="#009BD9"
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
          name="MessagePatScreen" 
          component={MessagePatScreen}
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
        activeColor="#009BD9"
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
          name="ListMessagesDocScreen" 
          component={ListMessagesDocScreen} 
          options={{
            tabBarLabel: '',
            tabBarIcon: ({ color }) => (
              <Ionicons name="chatbubble" color={color} size={26} />
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
const Logo = ({dontShow, nom_complet}) => <View style={{flexDirection: 'row',  alignItems: 'center', justifyContent: dontShow ? 'space-between': null}}>
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
                          Bonjour <Text style={{fontWeight: 'bold'}} >{nom_complet}</Text> !
                        </Text>
                      } 
                </View>

const myInitialState = {

}
const App: () => React$Node = () => {

  const [initialRoute, setInitialRoute] = useState(false);
  const [nom_complet, setNom] = useState("");
  useEffect(() => {
    (async()  =>{
      const currentUser = auth().currentUser;
      if(currentUser&&currentUser.userId){
        let userId = currentUser.userId;
        let tock = await currentUser.getIdTokenResult();
        console.log('tock tock====>AppJs', tock)
        if(!!tock.claims.doctor){
          setInitialRoute('TabBarMed')
        }else{
          let user = database().ref('users/'+userId);
          await user.once('value', (snapshot) => {
              setNom(snapshot.val().nom_complet)
          });

          setInitialRoute('Main')
        }
      }
      else{
        setInitialRoute('LoginScreen')
      }
      SplashScreen.hide();
      })()
    }, []);

  if(!initialRoute){
    return<View></View>
  }

  return (
    <> 
      <StatusBar backgroundColor="#019CD9" />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName={initialRoute}
        >
          <Stack.Screen
            name="Main"
            component={TabBar}
            options={{ 
              headerShown: true,  
              headerTitle: () => <Logo nom_complet={nom_complet} dontShow={false}/>,
              headerStyle: { 
                backgroundColor: 'white',
                height: 45
              },
              headerLeft: null,
              headerRight: () => (
                <View style={{marginRight: 20, flexDirection: "row"}}>
                  <Ionicons
                    onPress={() => alert('This is a button!')}
                    name="notifications-outline"  size={25}
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
          <Stack.Screen name="CodeVerificationScreen" component={CodeVerificationScreen} options={{headerTransparent: true,  title: ""}}/>
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
          <Stack.Screen name="AddCasContact" component={AddCasContact} options={{headerTransparent: false,  title: "Ajouter un contact d'urgence"}}/>
          <Stack.Screen name="AddcontactUrgence" component={AddcontactUrgence} options={{headerTransparent: false,  title: "Ajouter un cas contact"}}/>
          <Stack.Screen name="PatientDataScreen" component={PatientDataScreen} options={{headerTransparent: true,  title: "Informations du Patient"}}/>
          <Stack.Screen name="JournalCovid" component={JournalCovid} options={{headerTransparent: false,  title: "Journal Covid"}}/>
          <Stack.Screen name="JournalDiabeteScreen" component={JournalDiabeteScreen} options={{headerTransparent: false,  title: "Journal"}}/>
          <Stack.Screen name="StatistiquesScreen" component={StatistiquesScreen} options={{headerTransparent: false,  title: "Statistiques"}}/>
          <Stack.Screen name="ListCasContact" component={ListCasContact}/>
          <Stack.Screen name="ContactUrgence" component={ContactUrgence}/>
          <Stack.Screen name="BonAsavoirScreen" component={BonAsavoirScreen} options={{headerTransparent: true,  title: ""}}/>
          <Stack.Screen name="CheckCovidScreen" component={CheckCovidScreen} options={{headerTransparent: true,  title: ""}}/>
          <Stack.Screen name="SymtomeScreen" component={SymtomeScreen} options={{headerTransparent: true,  title: ""}}/>
          <Stack.Screen name="SearchDoctorScreen" component={SearchDoctorScreen} options={{headerTransparent: true,  title: ""}}/>
          <Stack.Screen name="AntecedentsMedical" component={AntecedentsMedical} options={{headerTransparent: false,  title: "Mes antecedents Médicaux"}}/>
          <Stack.Screen name="EditProfile" component={EditProfile} options={{headerTransparent: false,  title: "Mettre a jour mes données"}}/>
          <Stack.Screen name="MyPatientList" component={MyPatientList} options={{headerTransparent: false,  title: "Mes Patients"}}/>
          <Stack.Screen name="ChatScreen" component={ChatScreen} options={{headerTransparent: false,  title: "Ismael Bienvenu"}}/>
        </Stack.Navigator>
      </NavigationContainer>
      <FlashMessage position="top" />
    </>
  );
};



export default App;
