import React, { useState }from 'react';
import { View, StyleSheet, Picker, SafeAreaView, Image, StatusBar, TouchableOpacity, ScrollView } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { SearchBar } from 'react-native-elements';
import { Text, Input, Button, CheckBox, ButtonGroup } from 'react-native-elements';
import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth'; 
import { useFocusEffect } from '@react-navigation/native';



export default function StatistiquesScreen(props){
	return(
		<View>
		</View>
	)
}