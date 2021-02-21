import React, { useState }from 'react';
import { View, StyleSheet, SafeAreaView, Image, StatusBar, TouchableOpacity } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { SearchBar } from 'react-native-elements';
import { Text, Input, Button, CheckBox } from 'react-native-elements';


 const img = require('../../assets/imgs/logo.png')

export default function HomeScreen(props){
	const [search, updateSearch] = useState("");
	return(
        <SafeAreaView >
			<StatusBar style="auto" backgroundColor="#019CD9" />
				<SearchBar
			        placeholder="Type Here..."
			        onChangeText={updateSearch}
			        value={search}
			        cancelIcon 
			        containerStyle={{backgroundColor: null, borderWidth: 0, height: 0}}
			        inputContainerStyle={{backgroundColor: "#D9DADF", height: 40, color: "black"}}
			        inputStyle={{color: "black"}}
			        cancelButtonTitle={"Cancel"}
			      />
			<View style={styles.container}>
				<View style={styles.imgBloc}>
                    <Image
                        style={{ width: wp("23%"), height: hp("10%"), borderRadius: 100 }}
                        source={img}
                    />
                    <Text style={{marginTop: -hp('2%'), ...styles.slogan}}>Bonjour Martial !</Text>
                </View>
                <View style={styles.notif}>
                    <Text h4 style={{marginTop: -hp('2%'), ...styles.slogan}}>Notifications</Text>
                </View>
                <View style={styles.card}>
                    <Text style={{marginTop: -hp('2%'), ...styles.slogan}}>Hi! Nice to see you again</Text>
                    

                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
	                    <View style={styles.cardContent}>
		                    
		                    <View style={styles.cardContentSub}>
		                    	<View>
		                    		<Icon name="stethoscope" size={30} style={{marginTop: -hp("1%")}}/>
		                    	</View>
		                    	<Text style={{...styles.slogan, textAlign: "center"}}> Analyse de vos symptomes </Text>
		                    </View>
	                    </View>
	                    <View style={styles.cardContent}>
		                    <View style={{...styles.cardContentSub}}>
		                    	<View>
		                    		<Icon name="user-md" size={40} style={{marginTop: -hp("1%")}}/>
		                    	</View>
		                    	<Text style={{...styles.slogan, textAlign: "center"}}> Mon suivi Médical </Text>
		                    </View>
	                    </View>
	                </View>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
	                    <View style={styles.cardContent2}>
		                    
		                    <View style={styles.cardContentSub}>
		                    	<View>
		                    		<Ionicons name="search" size={30} style={{marginTop: -hp("1%")}}/>
		                    	</View>
		                    	<Text style={{...styles.slogan, textAlign: "center"}}> Rechercher médecin et pharmacies </Text>
		                    </View>
	                    </View>
	                    <View style={styles.cardContent2}>
		                    <View style={{...styles.cardContentSub}}>
		                    	<View>
		                    		<Ionicons name="calendar" size={40} style={{marginTop: -hp("1%")}}/>
		                    	</View>
		                    	<Text style={{...styles.slogan, textAlign: "center"}}> Mes rendez-vous </Text>
		                    </View>
	                    </View>
	                </View>
                </View>
			</View>
		</SafeAreaView> 
	)
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: hp('9%'),
        paddingHorizontal: wp("6%"),
    },
    cardContent: {
    	borderColor: "#D9DADF",
    	borderWidth: 2,
    	borderStyle: "solid",
    	width: wp("48%"),
    	height: hp('17%'),
    	borderRadius: 5,
    	justifyContent: 'center',
        alignItems: 'center',
    },
    cardContent2: {
    	borderColor: "#D9DADF",
    	borderWidth: 2,
    	borderStyle: "solid",
    	width: wp("48%"),
    	marginTop: hp('17%'),
    	height: hp('17%'),
    	borderRadius: 5,
    	justifyContent: 'center',
        alignItems: 'center',
    },
    cardContentSub: {
    	backgroundColor: "#D9DADF",
    	width: wp("46%"),
    	height: hp('15.6%'),
    	justifyContent: 'center',
        alignItems: 'center',
    },
    imgBloc: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    notif: {
        marginTop: hp("11%"),
        height: hp("17%"),
    },
    card: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    slogan: {
        color: "#5F666D",
        fontSize: hp("2.3%")

    },
})
