import React, { useState }from 'react';
import { View, StyleSheet, Picker, SafeAreaView, Image, StatusBar, TouchableOpacity, ScrollView } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { SearchBar } from 'react-native-elements';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Text, Input, Button, CheckBox, ButtonGroup } from 'react-native-elements';

export default function NewMeasureScreen(props){
	const [showPickerOne, setShowPickerOne] = useState(false);
	const [showPickerTwo, setShowPickerTwo] = useState(false);
	const [selectedDate, setSelectedDate] = useState(null);
	const [selectedTime, setSelectedTime] = useState(null);
	const [selectedValue, setSelectedValue] = useState(null);
	const [molL, setMolL] = useState("");
	const [glucides, setGlucides] = useState("");
	const [nSpec, setnSpenSpec] = useState("");
	return(
		<ScrollView style={styles.container}>
			<View>
				<View style={{...styles.row, ...styles.content3}}>
					<View style={{ ...styles.row, ...styles.content2, width: wp('45%')}}>
						<Ionicons
					      name='calendar-outline'
					      size={24}
					      color='black'
					    />
					    <View style={{marginLeft: wp("1%"),}}>
							<Button
							icon={
								<Icon
									name="chevron-down"
									size={13}
									color="black"
								/>
							}
							buttonStyle={{paddingHorizontal: 20, backgroundColor: "#F0F0F0"}}
							titleStyle={{color: "black"}}
							iconRight
							title="Date      "
							onPress={()=>setShowPickerOne(true)}
						/>
						{showPickerOne && (
					        <DateTimePicker
					          testID="dateTimePicker"
					          value={new Date()}
					          mode={"date"}
					          is24Hour={true}
					          display="default"
					          onChange={(event, selectedDate)=>{
						          	setSelectedDate(selectedDate); 
						          	setShowPickerOne(false)
						          }
					          }
					        />
					    )}
					    </View>
					</View>
					<View>
						<Text>{selectedDate && selectedDate.toISOString().split("T")[0]}</Text>
					</View>
				</View>
 

			{/*bbbbbbbbbbbbbbbbb*/}
				<View style={{...styles.row, ...styles.content3, marginTop: hp('2%')}}>
					<View style={{ ...styles.row, ...styles.content2, width: wp('45%')}}>
						<Ionicons
					      name='calendar-outline'
					      size={24}
					      color='black'
					    />
					    <View style={{marginLeft: wp("1%"),}}>
							<Button
							icon={
								<Icon
									name="chevron-down"
									size={13}
									color="black"
								/>
							}
							buttonStyle={{paddingHorizontal: 20, backgroundColor: "#F0F0F0"}}
							titleStyle={{color: "black"}}
							iconRight
							title="Heure    "
							onPress={()=>setShowPickerTwo(true)}
						/>
						{showPickerTwo && (
					        <DateTimePicker
					          testID="time"
					          value={new Date()}
					          mode={"time"}
					          is24Hour={true}
					          display="default"
					          onChange={(event, selectedDate2)=>{
						          	setSelectedTime(selectedDate2); 
						          	setShowPickerTwo(false)
						          }
					          }
					        />
					    )}
					    </View>
					</View>
					<View>
						<Text>{selectedTime && selectedTime.toLocaleTimeString()}</Text>
					</View>
				</View>
				<View style={styles.ligne}/>

				<View style={{marginTop: hp('2%'), ...styles.row, ...styles.content3, justifyContent: "space-around"}} >
					<Ionicons
						name="barcode-outline"
						size={28}
						color="black"
					/>
					<View style={{ backgroundColor: "#F0F0F0", justifyContent: "flex-start"}}>
						<Picker
					        selectedValue={selectedValue}
					        style={{ height: 30, width: wp("80%"), color: "black", padding: "auto" }}
					        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
					      >
					        <Picker.Item label="Cathégorie" value={null} />
					        <Picker.Item label="Avant Repas" value="avant repas" />
					        <Picker.Item label="Apres repas" value="apres repas" />
					        <Picker.Item label="Avant Midi" value="avant midi" />
					      </Picker>
					</View>
				</View>


				<View style={{...styles.row, ...styles.content3}}>
					<View style={{ ...styles.row, ...styles.content2, width: wp('45%')}}>
						<Ionicons
					      name='cloud-outline'
					      size={24}
					      color='black'
					    />
					    <View style={{marginLeft: wp("1%"),}}>
							<Button
							icon={
								<Ionicons
									name="add"
									size={13}
									color="black"
								/>
							}
							buttonStyle={{paddingHorizontal: 20, backgroundColor: "#F0F0F0"}}
							titleStyle={{color: "black"}}
							iconRight
							title="Glycémie "
						/>
					    </View>
					</View>
					<View style={{width: wp("47%"), marginTop: hp("2%")}} >
						<Input
						   placeholder='00.0'
						   value={molL}
						   onChangeText={value => setMolL(value)}
						   rightIcon={
						    <Text>mmol/L</Text>
						  }
						/>
					</View>
				</View>

				<View style={{...styles.row, ...styles.content3, marginTop: -hp("3%")}}>
					<View style={{ ...styles.row, ...styles.content2, width: wp('45%')}}>
						<Ionicons
					      name='egg-outline'
					      size={24}
					      color='black'
					    />
					    <View style={{marginLeft: wp("1%"),}}>
							<Button
							icon={
								<Ionicons
									name="add"
									size={13}
									color="black"
								/>
							}
							buttonStyle={{paddingHorizontal: 20, backgroundColor: "#F0F0F0"}}
							titleStyle={{color: "black"}}
							iconRight
							title="Glucides "
						/>
					    </View>
					</View>
					<View style={{width: wp("47%"), marginTop: hp("2%")}} >
						<Input
						   placeholder='000'
						   value={glucides}
						   onChangeText={value => setGlucides(value)}
						   rightIcon={
						    <Text>grammes</Text>
						  }
						/>
					</View>
				</View>

				<View style={{...styles.row, ...styles.content3, marginTop: -hp("3%"), justifyContent: "space-between"}}>
					<View style={{ ...styles.row, ...styles.content2, width: wp('45%')}}>
						<Ionicons
					      name='attach-outline'
					      size={24}
					      color='black'
					    />
					    <View style={{marginLeft: wp("1%"),}}>
							<Button
							icon={
								<Ionicons
									name="chevron-down"
									size={13}
									color="black"
								/>
							}
							buttonStyle={{paddingHorizontal: 20, backgroundColor: "#F0F0F0"}}
							titleStyle={{color: "black"}}
							iconRight
							title="Non spécifique "
						/>
					    </View>
					</View>
					<View style={{width: wp("38%"), marginTop: hp("2%")}} >
						<Input
						   placeholder='000'
						   value={nSpec}
						   onChangeText={value => setnSpenSpec(value)}
						   rightIcon={
						    <Text>U</Text>
						  }
						/>
					</View>
				</View>
				<View style={{...styles.row, ...styles.content3, marginTop: -hp("3%"), justifyContent: "space-between"}}>
					<View style={{ ...styles.row, ...styles.content2, width: wp('45%')}}>
						<Ionicons
					      name='attach-outline'
					      size={24}
					      color='black'
					    />
					    <View style={{marginLeft: wp("1%"),}}>
							<Button
							icon={
								<Ionicons
									name="chevron-down"
									size={13}
									color="black"
								/>
							}
							buttonStyle={{paddingHorizontal: 20, backgroundColor: "#F0F0F0"}}
							titleStyle={{color: "black"}}
							iconRight
							title="Non spécifique "
						/>
					    </View>
					</View>
					<View style={{width: wp("38%"), marginTop: hp("2%")}} >
						<Input
						   placeholder='000'
						   value={nSpec}
						   onChangeText={value => setnSpenSpec(value)}
						   rightIcon={
						    <Text>U</Text>
						  }
						/>
					</View>
				</View>

				<View style={{marginTop: hp('1%'), ...styles.row, ...styles.content3, justifyContent: "space-around"}} >
					<Ionicons
						name="eyedrop-outline"
						size={28}
						color="black"
					/>
					<View style={{ backgroundColor: "#F0F0F0", justifyContent: "flex-start"}}>
						<Picker
					        selectedValue={selectedValue}
					        style={{ height: 30, width: wp("80%"), color: "black", padding: "auto" }}
					        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
					      >
					        <Picker.Item label="Medicament" value={null} />
					        <Picker.Item label="Avant Repas" value="avant repas" />
					        <Picker.Item label="Apres repas" value="apres repas" />
					        <Picker.Item label="Avant Midi" value="avant midi" />
					      </Picker>
					</View>
				</View>

				<View style={{marginTop: hp('1%'), ...styles.row, ...styles.content3, justifyContent: "space-around"}} >
					<Ionicons
						name="alarm-outline"
						size={28}
						color="black"
					/>
					<View style={{ backgroundColor: "#F0F0F0", justifyContent: "flex-start"}}>
						<Picker
					        selectedValue={selectedValue}
					        style={{ height: 30, width: wp("80%"), color: "black", padding: "auto" }}
					        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
					      >
					        <Picker.Item label="Rapel" value={null} />
					        <Picker.Item label="Avant Repas" value="avant repas" />
					        <Picker.Item label="Apres repas" value="apres repas" />
					        <Picker.Item label="Avant Midi" value="avant midi" />
					      </Picker>
					</View>
				</View>


			</View>
		</ScrollView>
	)
}



const styles = StyleSheet.create({
    container: {
    	paddingTop: hp("2%"),
        paddingHorizontal: wp("5%"),
        backgroundColor: "white"
    },
    ligne: {
		backgroundColor: '#F0F0F0',
		height: 6,
		marginTop: hp("2%")
	},
    row: {
	 	flexDirection: 'row',
	 },
	 content3: {
	 	alignItems: "center"
	 },
	content2: {
		justifyContent: "space-around", 
		justifyContent: 'flex-start', 
		alignItems: "center"
	}
});



// AKIBA: usernae: @kib@
// password: K1z)eUmlx1ZDUxbPr4


// 1. PDF canal 2 augmenter la taill de la pdf du numero de devis.
// 2. Design AKIBA => templates proposition => Squellet AKIBA


// Feedbaack du 01/03/2021

// 	Fait:
// 		Fixe un bug au niveau de la creation du ticket et des notification dans matermost
// 		Sur le projet AKIBA	
// 			Prend connaisance de son cahier de charge
// 			Install wordpress
// 			Configure le ssl
// 			Rechercheles meilleur theme gratuit pour proposer pour son website
// 			Commence a travailler sur les la structure menu front page content etc....
// 	Demain:
// 		Continu avec avec AKIBA et travai sur les pdf de canal 2

