import React, { useState }from 'react';
import { View, StyleSheet, SafeAreaView, Image, StatusBar, TouchableOpacity } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Text, Input, Button, CheckBox } from 'react-native-elements';
import { ListItem } from 'react-native-elements'

const list = [
  {
    title: 'Mes Antécédents Médicaux',
    icon: 'thermometer'
  },
  {
    title: "Mes Contacts d'Urgence",
    icon: "user"
  },
  {
    title: "Paramètres",
    icon: "cog"
  },
]





export default function ProfileScreen(){
	return(
		<View style={styles.container}>
	      <View style={styles.container_card_profile}>
	        <View style={styles.container_all_profile}>

	          <View style={[styles.container2, { borderRadius: 50}]}>
		           <Image style={{ width: 100, height: 100,}} source={{
		           		uri: "https://randomuser.me/api/portraits/women/11.jpg"
		            }} width={100} height={100}/>
		        </View>

	          <View style={styles.container_name_lieu}>
	            <Text style={styles.name}>Ismael Foletia</Text>
	            <Text style={styles.lieu}>Yaoundé, Cameroun</Text>
	          </View>
	        </View>

	        <View style={styles.container_all_details}>
	          <View style={styles.details}>
	            <Text style={styles.title}>Taille</Text>
	            <Text style={styles.number}>1.67 m</Text>
	          </View>

	          <View style={styles.details}>
	            <Text style={styles.title}>Poids</Text>
	            <Text style={styles.number}>63 k.g</Text>
	          </View>
	          <View style={styles.details}>
	            <Text style={styles.title}>Naissance</Text>
	            <Text style={styles.number}>12/12/2020</Text>
	          </View>
	        </View>
	      </View>
	      <View style={{paddingHorizontal: wp("2%"), marginTop: 10}}>
		      {
			    list.map((item, i) => (
			      <ListItem key={i} bottomDivider>
			        <Icon name={item.icon} size={23}/>
			        <ListItem.Content>
			          <ListItem.Title>{item.title}</ListItem.Title>
			        </ListItem.Content>
			        <ListItem.Chevron />
			      </ListItem>
			    ))
			  }

    		</View>
    	</View>
	)
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container2: {
  	overflow: "hidden"
  },
  container_all_profile: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: hp('3%'),
    paddingTop: hp('2%')
  },
  container_name_lieu: {
    marginLeft: hp('2%')
  },

  name: {
    fontSize: hp('2.5%'),
    fontWeight: 'bold',
    color: 'black'
  },
  lieu: {
    color: 'black'
  },
  number: {
    fontSize: hp('2.5%'),
    fontWeight: 'bold',
    color: 'black'
  },
  title: {
    fontSize: hp('2.3%'),
    color: 'black'
  },
  details: {
    flexDirection: 'column',
    justifyContent: 'center'
  },
  container_all_details: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: hp('4%')
  },
  container_card_profile: {
    backgroundColor: 'white',
    marginLeft: hp('2%'),
    marginRight: hp('2%'),
    borderRadius: 10,
    height: hp('35%'),
    marginTop: hp('2%'),
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.30,

    elevation: 13,
  },
  logo: {
    width: wp('50%'),
    height: hp('5%')
  },
  startup: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0
  }
});