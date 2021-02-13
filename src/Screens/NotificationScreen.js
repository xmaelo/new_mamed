import React from 'react';
import { StyleSheet, Text, View, FlatList, StatusBar } from 'react-native';

import AppText from '../Components/AppText'


import data from '../Data/Data_Message'
import NotificationCard from "../Components/NotificationCard"
import { widthPercentageToDP } from 'react-native-responsive-screen';

const img = 'https://randomuser.me/api/portraits/women/11.jpg'
export default function NotifictionScreen() {
  return (
    <>
    <StatusBar style="auto" />
    <View style={styles.container}>
    	<AppText style={{fontSize: widthPercentageToDP('6%')}}>Notifications</AppText>
      <FlatList 
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem ={({item}) =>(
            <NotificationCard 
            profiileImage={img}
            profileName={item.name}
            description={item.message}
            dateTime={item.time}
          />
        )}
      />
    </View>
    </>
  );
} 


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});