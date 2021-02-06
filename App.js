import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import  TabBar  from './src/navigation/TabBar';

export default function App() {
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
