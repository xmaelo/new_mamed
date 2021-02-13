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
import Ionicons  from 'react-native-vector-icons/Ionicons';
import color from '../themes/Color'
//import Search from '../Components/Search';
import Header from '../Components/Header';
import RoundedImage from '../Components/RoundedImage';
import AppText from '../Components/AppText';
import PostCard from '../Components/PostCard';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default function HomeScreen(props) {
  
  const [currentUser] = useState({
    profile_image: 'https://randomuser.me/api/portraits/women/11.jpg'
  });
  return (
    <View style={{ ...styles.container }}>
      <ScrollView>
        <View style={{ ...styles.searchBarView }}>
            <Header profile_image={currentUser.profile_image} navigation={props.navigation}/>
        </View>
        <View style={{height: 2, backgroundColor: color.barColor, marginTop: 1}}/>
         <View style={{ ...styles.headerPost }}>
            <View style={styles.headerPostTitleView}>
              <AppText children={"Documents partargés"} style={{ ...styles.titlePost }}/>
            </View>
          </View>
          <View style={{...styles.postsView, ...styles.postsViewSec}}>
                <PostCard post={"post"} navigation={props.navigation} home/>
                <PostCard post={"post"} navigation={props.navigation} home/>
          </View>
          <View style={{...styles.postsView, ...styles.postsViewSec}} home>
                <PostCard post={"post"} navigation={props.navigation} home/>
                <PostCard post={"post"} navigation={props.navigation} home/>
          </View>
          <View style={{height: 70}}>
          </View>
        </ScrollView>
    </View>
  );
} 
 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 40,
  },
  searchBarView: {
    height: 50,
    alignItems: 'center',
    flexDirection: 'row',
    //paddingHorizontal: wp("3%"),
  },
  
  userProfileImage: {
    width: 40,
    height: 40,
    borderRadius: 100,
  },
  headerPost: {
    paddingHorizontal: wp("3%"),
    marginTop: 10,
  },
  headerPostTitleView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  titlePost: {
    color: color.blackText,
    fontSize: 23,
    fontFamily: 'NSExtraBold',
  },
  showAllText: {
    color: '#c1c1c1',
    fontFamily: 'NSBold',
    fontSize: 18,
  },
  storyUserProfile: {
    marginRight: 20,
    borderColor: '#B53471',
    borderWidth: 2.5,
    borderRadius: 100,
  },
  storyUserProfileImage: { width: 60, height: 60, borderRadius: 100 },
  postsView: { paddingHorizontal: wp("3%"), marginTop: 10},
  postsViewSec: { justifyContent: 'space-between', flex: 1, flexDirection: 'row' },
  postView: {
    paddingVertical: 10,
    marginTop: 10,
    backgroundColor: '#333',
    borderRadius: 10,
    shadowColor: '#1e1e1e',
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 8,
  },
  postHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: wp("3%"),
  },
  postStatsOpacity: {
    backgroundColor: '#222',
    padding: 8,
    borderRadius: 6,
    flexDirection: 'row',
    alignItems: 'center',
  },
});