import React, { useState }from 'react';
import { View, StyleSheet, SafeAreaView, Image, StatusBar, TouchableOpacity, ScrollView } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { SearchBar } from 'react-native-elements';
import { Text, Input, Button, CheckBox } from 'react-native-elements';
import Carousel from 'react-native-snap-carousel';

 const img = require('../../assets/imgs/logo.png')


 

export default function HomeMedScreen(props){
	return(
		<ScrollView style={{backgroundColor: "white"}}>
			<StatusBar style="auto" backgroundColor="white" />
            <SafeAreaView style={styles.container}>
            	<View style={styles.imgBloc}>
                    <Image
                        style={{ width: wp("40%"), height: hp("10%"), borderRadius: 100 }}
                        source={img}
                    />
                    <Text style={{...styles.slogan, fontWeight: "bold", marginTop: -hp('.5%')}}>
                      Bienvenue Dr. Yann Alpha
                    </Text>
                </View> 

                <View style={{marginTop: hp("3%"), backgroundColor: "#F6F7F8", paddingHorizontal: wp('2%')}}>
                	<View style={{paddingBottom: 30}}>
	                	<View style={{...styles.row, justifyContent: "space-between", alignItems: "center"}}>
	                		<View style={styles.row}>
	                			<Ionicons name="calendar" size={20}/>
	                			<Text>{"  "}Mes Rendez vous</Text>
	                		</View>
	                		<View>
	                			<Ionicons name="add" size={30} color='#4793CC'/>
	                		</View>
	                	</View>
	                	<View style={{...styles.container_card_profile, paddingTop: 15, justifyContent: "center"}}>
	                		<View style={{...styles.row, justifyContent: "space-around"}}>
						       <View style={{...styles.col}}>
						       		<Text style={styles.paddingTop}>Pour aujourd'hui</Text>
						       		<Text>Prochain rendez-vous</Text>
						       </View>

						       <View style={{...styles.col, alignItems: "center"}}>
						       		<Text  style={{color: "#4793CC", fontSize: 17, ...styles.paddingTop}}>1</Text>
						       		<Text  style={{color: "#4793CC", fontSize: 17}}>1</Text>
						       </View>
						       <View style={{...styles.col, alignItems: "center"}}>
						       		<Ionicons style={styles.paddingTop} name="eye" size={20} color="#4793CC"/>
						       		<Ionicons name="send" size={20} color="#4793CC"/>
						       </View>
						    </View>
						    <View style={{alignItems: "center", marginTop: 15}}>
						    	<Button
								  title={" Voir le calendrier"}
								  type="outline"
								  buttonStyle={{width: 200}}
								  icon={<Ionicons name="calendar" size={20} color="#4793CC"/>}
								/>
						    </View>
					    </View>
	                </View>

	                <View style={{paddingBottom: 30}}>
	                	<View style={{...styles.row, justifyContent: "space-between", alignItems: "center"}}>
	                		<View style={styles.row}>
	                			<Ionicons name="people" size={23}/>
	                			<Text>{"  "}Patients</Text>
	                		</View>
	                		<View>
	                			<Ionicons name="add" size={30} color='#4793CC'/>
	                		</View>
	                	</View>

	                	<View style={{...styles.container_card_profile, paddingTop: 15, justifyContent: "center"}}>
	                		<View style={{...styles.row, justifyContent: "space-around"}}>
						       <View style={{...styles.col}}>
						       		<Text style={styles.paddingTop}>Mes Patients</Text>
						       		
						       		<TouchableOpacity
						       			onPress={()=>props.navigation.navigate('PatientListScreen')}
						       		>
						       			<Text>Tous les Patients</Text>
						       		</TouchableOpacity>
						       </View>

						       <View style={{...styles.col, alignItems: "center"}}>
						       		<Text  style={{color: "#4793CC", fontSize: 17, ...styles.paddingTop}}>3</Text>
						       		<Text  style={{color: "#4793CC", fontSize: 17}}>210</Text>
						       </View>
						    </View>
					    </View>
	                </View>
	                <View style={{paddingBottom: 30}}>
	                	<View style={{...styles.row, justifyContent: "space-between", alignItems: "center"}}>
	                		<View style={styles.row}>
	                			<Ionicons name="apps" size={23}/>
	                			<Text>{"  "}Racourcis</Text>
	                		</View>
	                	</View>
	                	<View style={{...styles.row, justifyContent: 'space-between', marginTop: 20}}>
	                		<View>
		                		<View style={styles.rondView} >
		                		</View>
	                		</View>
	                		<View style={styles.center}>
		                		<View style={{...styles.center, ...styles.rondView}} >
		                			<Ionicons
		                			 name='cash'
		                			 size={30} 
		                			 color="#4793CC"
		                			/>
		                		</View>
		                		<Text style={styles.slogan}>Facturation</Text>
	                		</View>
	                		<View>
		                		<View style={styles.rondView} >
		                		</View>
	                		</View>
	                		<View>
		                		<View style={styles.rondView} >
		                		</View>
	                		</View>
	                		
	                	</View>
	                </View>
                </View>
            </SafeAreaView>
		</ScrollView>
	)
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: hp('2%'),
        backgroundColor: "white",
        paddingHorizontal: wp("6%"),
    },
    center: {
    	alignItems: "center",
    	justifyContent: "center"
    },
    rondView: {
    	height: 50,
    	width: 50,
    	borderRadius: 50,
    	borderColor: "#4793CC",
    	borderWidth: 1,
    	borderStyle: 'solid'

    },
    paddingTop: {paddingBottom: 12},
    container_card_profile: {
	    backgroundColor: 'white',
	    marginLeft: hp('2%'),
	    marginRight: hp('2%'),
	    borderRadius: 10,
	    marginTop: hp('2%'),
	    shadowColor: "#000",
	    shadowOffset: {
	      width: 0,
	      height: 6,
	    },
	    shadowOpacity: 0.39,
	    shadowRadius: 8.30,

	    elevation: 13,
	    paddingBottom: 14
	},
    imgBloc: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    slogan: {
        color: "#5F666D",
        fontSize: hp("2.3%")

    },
    test2: {
        marginTop: hp('3%'),
        // marginLeft: -wp('72%'),
        // paddingBottom: 50
    },
    img: {
        // marginTop: hp('6%'),
        height: hp('8.2%'),
        width: wp('40%')
    },
    imgContainer:{
        // paddingBottom: wp('30%')
    },
    row: {
    	flexDirection: 'row',
    },
    col: {
    	flexDirection: 'column',
    },
    forgotPass:{ 
        flexDirection: 'row', 
        justifyContent: 'flex-end',
        paddingRight: wp("10%"),
        marginBottom: hp("2%"),
        width: wp('100%'),
    },
    textEntries: {
        alignContent: 'center', 
        justifyContent: 'center'
    },
    signup:{
        flexDirection:'row',
        width: wp('100%'),
        justifyContent: 'center',
        marginTop: wp('2%'),
    }
})