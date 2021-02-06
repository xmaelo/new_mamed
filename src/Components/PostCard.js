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
import Feather   from 'react-native-vector-icons/Feather';
import Ionicons   from 'react-native-vector-icons/Ionicons';
import color from '../themes/Color'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


export default function PostCard(props){
	return(
		<View style={styles.postView}>
	        {/* Post Header */}
	        <View style={styles.postHeader}>
	          <View>
	            <Image
	              style={{ width: 30, height: 30, borderRadius: 100 }}
	              source={{
	                uri: "https://randomuser.me/api/portraits/women/11.jpg",
	              }}
	            />
	          </View>
	          <View style={{ flex: 1, paddingHorizontal: 10 }}>
	            <Text style={{ color: color.blackText,  fontSize: 15 }}>
	              {"Van dark"}
	            </Text>
	          </View>
	          <TouchableOpacity>
	            <Feather name='more-horizontal' color={color.blackText} size={28} />
	          </TouchableOpacity>
	        </View>
	        {/* Post Content */}
	        <View style={{ marginTop: 0 }}>
	            <Image
	              style={{ width: '100%', height: 250, marginTop: 10 }}
	              source={require("../../assets/imgs/demo.jpg")}
	            />
	        </View>
	        {/* Post Stats */}
	        <View
	          style={{ marginTop: 0, flexDirection: 'row', paddingHorizontal: 10 }}
	        >
	          <TouchableOpacity style={styles.postStatsOpacity}>
	            <Ionicons name='heart' color={color.redFair} size={21} />
	            <Text 
	              style={{
	                marginLeft: 6,
	                color: color.blackText,
	              }}
	            >
	              {3}
	            </Text>
	          </TouchableOpacity>
	          <TouchableOpacity
	            style={{
	              ...styles.postStatsOpacity,
	              marginLeft: 10,
	            }}
	          >
	            <Feather name='message-circle' color={color.redFair} size={21} />
	            <Text
	              style={{
	                marginLeft: 6,
	                color: color.blackText,
	              }}
	            >
	              {5}
	            </Text>
	          </TouchableOpacity>
	        </View>
        </View>
    );
 }


const styles = StyleSheet.create({
  postsView: { paddingHorizontal: 10, marginTop: 10 },
  postView: {
    paddingVertical: 10,
    marginTop: 10,
    backgroundColor: "white",
    borderRadius: 10,
    shadowColor: '#1e1e1e',
    width: wp("46.5%"),
    height: hp("52%"),
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 8,
  },
  postHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  postStatsOpacity: {
    backgroundColor: "white",
    padding: 8,
    borderRadius: 6,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
