import React, { useState }from 'react';
import { View, StyleSheet, Picker, SafeAreaView, Image, StatusBar, TouchableOpacity, ScrollView } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { SearchBar } from 'react-native-elements';
import { Text, Input, Button, CheckBox, ButtonGroup } from 'react-native-elements';

const component1 = () => <Text style={styles.textbtn}>Diabète</Text>
const component2 = () => <Text>Graphe</Text>
const component3 = () => <Text>Grosèsse</Text>
const component4 = () => <Text>Covid19</Text>

export default function DashbordScreen(props){
	const [index, updateIndex2] = useState(1)
	const buttons = [{ element: component1 }, { element: component2 }, { element: component3 }, { element: component4 }]
	return(
		<View>
			<ButtonGroup
		      onPress={(index)=>
		      		{
		      			index==0 ? props.navigation.navigate("DiabeteScreen") : 
		      		 		      		index == 3 ? props.navigation.navigate("CovidDashBordScreen") :
		      		 		      		updateIndex(index)}  }
		      selectedIndex={index}
		      buttons={buttons}
		      containerStyle={{height: 35}} 
		      selectedTextStyle={{color: "white", fontSize: 39}}
		    />
		</View>
	)
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: hp('9%'),
        paddingHorizontal: wp("6%"),
    },
    textbtn: {
    	// color:
    }
});