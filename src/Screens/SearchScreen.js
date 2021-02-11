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
import Search from '../Components/Search';
import Ionicons  from 'react-native-vector-icons/Ionicons';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';





export default function SearchScreen(props){
	const [searchValue, setSearchValue] = useState("");
	return(
		<View style={{marginTop: hp("4%")}}>
			<View style={{ ...styles.searchBarView }}>
            	<Search setSearchValue={setSearchValue} searchValue={searchValue}/>
        	</View>
		</View>
	)
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 40,
  },
  searchBarView: {
    height: 50,
    width: wp("85%"),
    alignItems: 'center',
    flexDirection: 'row',
    paddingLeft: wp("15%"),
  },
 });