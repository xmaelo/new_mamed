import React, { useState }from 'react';
import { View, StyleSheet, Picker, SafeAreaView, Image, StatusBar, TouchableOpacity, ScrollView } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { SearchBar } from 'react-native-elements';
import { Text, Input, Button, CheckBox } from 'react-native-elements';
 


export default function SymtomeScreen(props){
	const [selectedValue, setSelectedValue] = useState("java");
	return(
		<ScrollView>
			<View style={styles.container}>
				<View style={styles.center}>
				  <Text h4 style={{ ...styles.slogan}}>Analyse des symptômes</Text>
				</View>
				<View style={{...styles.center, marginTop: 16}}>
				  <View style={{...styles.select, ...styles.displayRow, ...styles.center, paddingLeft: 10}}>
				  	  <Ionicons
							name="person-outline"
							size={30}
							color="black"
						/>
				      <Picker
				        selectedValue={selectedValue}
				        style={{ height: 40, width: 150 }}
				        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
				      >
				        <Picker.Item label="Covid19" value="covid" />
				        <Picker.Item label="Diabète" value="diabete" />
				      </Picker>
				   </View>
				</View>

				<View style={{...styles.center, marginTop: 16}}>
					<View style={{...styles.displayRow}}>
						<Button
							icon={
								<Icon
									name="times"
									size={13}
									color="white"
								/>
							}
							buttonStyle={{borderRadius: 20, paddingHorizontal: 20, backgroundColor: "red"}}
							iconRight
							title="Fever  "
						/>
						<Button
							icon={
								<Icon
									name="times"
									size={13}
									color="white"
								/>
							}
							buttonStyle={{borderRadius: 20, paddingHorizontal: 20, backgroundColor: "red"}}
							iconRight
							title="Couth  "
						/>
					</View>
				</View>
				<View style={styles.form}>
					<View style={{ ...styles.displayRow2}}>
						<View style={{...styles.center2}}>
							<Card name="Fever" icon="person"/>
							<Card name="Throat Pain" icon="person"/>
							<Card name="Gaz" icon="person"/>
							<Card name="High BP" icon="person"/>
							<Card name="Blocked nose" icon="person"/>
							<Card name="Headache" icon="person"/>
							<Card name="vaumiting/Nausea" icon="person"/>
						</View>
						<View style={{...styles.center2}}>
							<Card name="Couth" icon="person"/>
							<Card name="Loose Motion" icon="person"/>
							<Card name="Low BP" icon="person"/>
							<Card name="Migraine" icon="person"/>
							<Card name="Runny nose" icon="person"/>
							<Card name="Constipation" icon="person"/>
							<Card name="Diabetes" icon="person"/>
						</View>
					</View>
				</View>
			</View>
			<View style={{height: hp("5%")}}>
			</View>
			<View style={styles.center}>
				<Button
                      buttonStyle={{backgroundColor: "red", borderRadius: 5, width: wp('80%')}}
                      
                      title="Enregister cette mesure"
                    />
            </View>
			<View style={{height: hp("10%")}}>
			</View>
		</ScrollView>
	)
}

function Card({icon, name}){
	return(
		<TouchableOpacity>
			<View style={{...styles.displayRow, ...styles.center}}>
				<View style={styles.card}>
					<Ionicons
						name="person"
						size={33}
						color="black"
					/>
				</View>
				<View><Text style={styles.slogan}>{"  "+name}</Text></View>
			</View>
		</TouchableOpacity>
	)
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: hp('2%'),
        paddingHorizontal: wp("6%"),
    },
    center: {
    	justifyContent: 'center',
        alignItems: 'center',
    },
    center2: {
    	justifyContent: 'flex-start',
        alignItems: 'flex-start',
        flexDirection: "column",
        width: wp("47%")
    },
    form: {
    	marginTop: hp("3%"),
    	paddingTop: hp("1%"),
    	borderTopColor: "#5F666D",
    	borderTopWidth: .5,
    	borderStyle: "solid",
    	paddingHorizontal: wp("2%")
    },
    card: {
    	paddingVertical: hp("1%"),
	    marginTop: hp("1%"),
	    backgroundColor: "white",
	    borderRadius: 10,
	    shadowColor: '#1e1e1e',
	    width: wp("10.5%"),
	    height: 50,
	    shadowOffset: {
	      width: 1,
	      height: 1,
	    },
	    shadowOpacity: 0.5,
	    shadowRadius: 3,
	    elevation: 8,
    },
    select: {
    	borderRadius: 20,
    	borderStyle: "solid",
    	borderWidth: 1,
    	borderColor: "green"
    },
    slogan: {
        color: "#5F666D",
        fontSize: hp("2.3%")

    },
    displayRow: {
    	flexDirection: 'row', 
    	justifyContent: 'space-between'
    },
    displayRow2: {
    	flexDirection: 'row', 
    }
 });