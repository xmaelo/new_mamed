import React, { useState }from 'react';
import { View, StyleSheet, Picker, SafeAreaView, Image, StatusBar, TouchableOpacity, ScrollView } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { SearchBar } from 'react-native-elements';
import { Text, Input, Button, CheckBox, ButtonGroup } from 'react-native-elements';

export default function DiabeteScreen(props){
	return(
		<ScrollView style={styles.container}>
			<View>
				<View style={{...styles.row, justifyContent: "space-around", marginTop: hp('1%')}}>
					<View style={{width: "70%", paddingLeft: wp("10%")}}>
						<Text style={styles.slogan}>DERNIER CONTRÔLE N/A</Text>
					</View>
					<View style={{width: wp("20%"), marginTop: -hp(".5%")}}>
					    <Ionicons
					      name='chevron-forward-outline'
					      size={24}
					      color='red'
					    />
					</View>
				</View>
			</View>
			<View>
				<View style={{...styles.row, justifyContent: "space-around", marginTop: hp('3%'), ...styles.center2}}>
					<View style={styles.center}>
						<View style={{...styles.rounded, ...styles.col, ...styles.center}}>
							<View></View>
							<View >
								<Ionicons
							      name='remove-outline'
							      size={19}
							      color='white'
							    />
							</View>
							<View><Text style={styles.minime}>mmol/L</Text></View>
						</View>
						<View><Text style={styles.slogan}>N/A</Text></View>
					</View>
					<View style={styles.center}>
						<View style={{...styles.rounded2, ...styles.center}}>
							<View style={{...styles.rounded3, ...styles.center}}>
								<View style={{...styles.rounded, ...styles.col, ...styles.center}}>	
									<View><Text style={styles.minime}>Est</Text></View>
									<View >
										<Ionicons
									      name='remove-outline'
									      size={19}
									      color='white'
									    />
									</View>
									<View><Text style={styles.minime}>HbA1c</Text></View>
								</View>
							</View>
						</View>
						<View><Text style={styles.slogan}>TENDANCE 7 JOURS</Text></View>
					</View>
					<View style={styles.center}>
						<View style={{...styles.rounded, ...styles.col, ...styles.center}}>
							<View></View>
							<View >
								<Text style={{...styles.minime, fontWeight: "bold"}}>0</Text>
							</View>
							<View><Text style={styles.minime}>u</Text></View>
						</View>
						<View><Text style={styles.slogan}>Insuline active</Text></View>
					</View>
				</View>
			</View>
			<View style={styles.ligne}/>
			<View>
				<View style={{...styles.row, justifyContent: "space-around",alignItems: 'center',  marginTop: hp('1%')}}>
					<View style={{width: "70%", paddingLeft: wp("10%")}}>
						<View style={{alignItems: 'center'}}>
							<Text style={{...styles.slogan, color: "green"}}>BON !</Text>
							<Text style={styles.slogan}>DERNIER CONTRÔLE N/A</Text>
						</View>
					</View>
					<View style={{width: wp("20%"), marginTop: -hp(".5%")}}>
					    <Ionicons
					      name='chevron-forward-outline'
					      size={24}
					      color='red'
					    />
					</View>
				</View>
			</View>
			<View style={styles.ligne}/>
			<View>
				<View style={{...styles.row, justifyContent: "space-around", marginTop: hp('1%'), ...styles.center2}}>
					<TouchableOpacity
						onPress={()=>props.navigation.navigate("NewMeasureScreen")}
					>
						<View style={styles.center}>
							<View style={{...styles.center}}>
								<Ionicons
							      name='add-circle-outline'
							      size={25}
							      color='black'
							    />
							</View>
								
							<View><Text style={styles.slogan}>ENTREE DU JOURNAL</Text></View>
						</View>
					</TouchableOpacity>
					<View style={styles.center}>
						<View style={{...styles.center}}>
							<Ionicons
						      name='newspaper-outline'
						      size={23}
						      color='black'
						    />
						</View>
							
						<View><Text style={styles.slogan}>JOURNAL</Text></View>
					</View>
				</View>
			</View>
			<View style={styles.ligne}/>
			<View>
				<View style={{...styles.row, justifyContent: "space-around", marginTop: hp('1%')}}>
					<View style={{width: "70%", paddingLeft: wp("10%")}}>
						<Text style={styles.slogan}>STATISTIQUES</Text>
					</View>
					<View style={{width: wp("20%"), marginTop: -hp(".5%")}}>
					    <Ionicons
					      name='chevron-forward-outline'
					      size={24}
					      color='red'
					    />
					</View>
				</View>
			</View>
			<View style={styles.ligne}/>
			<View>
				<View style={{ ...styles.row, justifyContent: "space-around", marginTop: hp('1.5%')}}>
					<View style={{...styles.column2}}>
						<View><Text style={styles.slogan} >Glu.</Text></View>
						<View><Text style={styles.slogan} >Calories</Text></View>
						<View><Text style={styles.slogan} >Non Spéciique</Text></View>
						<View><Text style={styles.slogan} >Non Spéciique</Text></View>
					</View>
					<View style={{...styles.column2}}>
						<View><Ionicons
							      name='remove-outline'
							      size={19}
							      color='black'
							    />
						</View>
						<View><Ionicons
							      name='remove-outline'
							      size={19}
							      color='black'
							    />
						</View>
						<View><Ionicons
							      name='remove-outline'
							      size={19}
							      color='black'
							    />
						</View>
						<View><Ionicons
							      name='remove-outline'
							      size={19}
							      color='black'
							    />
						</View>
					</View>
					<View style={{...styles.column2}}>
						<View><Ionicons
							      name='remove-outline'
							      size={19}
							      color='black'
							    />
						</View>
						<View><Ionicons
							      name='remove-outline'
							      size={19}
							      color='black'
							    />
						</View>
						<View><Ionicons
							      name='remove-outline'
							      size={19}
							      color='black'
							    />
						</View>
						<View><Ionicons
							      name='remove-outline'
							      size={19}
							      color='black'
							    />
						</View>
					</View>
				</View>
			</View>
		</ScrollView>
	)
}

const styles = StyleSheet.create({
    container: {
    	marginTop: hp("2%"),
        paddingHorizontal: wp("3%"),
    },
    row: {
	 	flexDirection: 'row',
	 },
	 column2: {
    	justifyContent: 'flex-start',
        alignItems: 'flex-start',
        flexDirection: "column",
	 },
	 col: {
	 	flexDirection: 'column',
	 },
	rounded: {
		width: 70,
		height: 70,
		backgroundColor: "green",
		borderRadius: 100
	},
	ligne: {
		backgroundColor: 'white',
		height: 10,
		marginTop: hp("2%")
	},
	rounded2: {
		width: 115,
		height: 115,
		backgroundColor: "white",
		borderRadius: 100,
		shadowColor: "#000",
	    shadowOffset: {
	      width: 0,
	      height: 6,
	    },
	    shadowOpacity: 0.39,
	    shadowRadius: 8.30,

	    elevation: 13,
	},
	rounded3: {
		width: 83,
		height: 83,
		backgroundColor: "#EBEBEB",
		borderRadius: 100
	},
	center: {
        justifyContent: 'center', 
        alignItems: 'center'
    },
    center2: {
        alignItems: 'center'
    },
    textbtn: {
    },
    minime: {
    	color: "white",
    	fontSize: 12
    },
    slogan: {
        color: "#5F666D",
        fontSize: hp("2.3%")

    },
});