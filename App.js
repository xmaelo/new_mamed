import { StatusBar } from 'expo-status-bar';
import React , { useEffect }from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import  TabBar  from './src/navigation/TabBar';
import AuthNavigation from "./src/navigation/AuthNavigation";

export default function App() {
  useEffect(() => SplashScreen.hide(), [])
  return (  
    <>
      <StatusBar style="auto" />
      <TabBar barColor="#F6F7EB"/>
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
