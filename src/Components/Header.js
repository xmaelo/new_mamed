import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
  StatusBar,
} from 'react-native';
import color from '../themes/Color'
import Ionicons  from 'react-native-vector-icons/Ionicons';
import RoundedImage from './RoundedImage';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';




export default function Header({profile_image, navigation}){
	return(
		<View style={{flexDirection: 'row'}}>
			<View style={{justifyContent : 'flex-start', width: wp("69%"), height: 45}}>
				<Image
	              style={{ width: wp("70%"), height: 45, marginLeft: -wp("7%")}}
	              source={require("../Images/logoInline.png")}
	            />
	        </View>
			<TouchableOpacity
			   style={{
			       borderWidth:1,
			       borderColor:'rgba(0,0,0,0.2)',
			       alignItems:'center',
			       justifyContent:'center',
			       width:45,
			       height:45,
			       backgroundColor:'#fff',
			       borderRadius:100,
			     }}
			    onPress={()=>navigation.navigate("SearchScreen")}
			 >
			   <Ionicons name={"search"}  size={25} color={color.defaultColor} />
			</TouchableOpacity>
			<View style={{width: 8}}></View>
			<RoundedImage profile_image={profile_image}/>
		</View>
	)
}