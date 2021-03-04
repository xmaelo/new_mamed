import React, { useState }from 'react';
import { View, StyleSheet, SafeAreaView, Image, ScrollView, StatusBar, TouchableOpacity, Switch } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Text, Input, Button, CheckBox, ListItem } from 'react-native-elements';
import ToggleSwitch from 'toggle-switch-react-native'

const img = require('../../assets/imgs/logo.png')

export default function CheckCovidScreen ({ navigation }){
	const [password, setPassword] = useState("");
    const [username, defineUsername] = useState("");
    const [switchVal, setSwitchVal] = useState(false);

    const pressed = (text) =>{
        console.log('Text pressed');
    }
    const handlePress = () =>{
        console.log('Pressed')
    }
    const [swict1, setSwict1] = useState(false);
    return(
        <ScrollView style={styles.container}>
        	<StatusBar style="auto" backgroundColor="white" />
            	<SafeAreaView>
	                <View style={styles.imgBloc}>
	                    <Image
	                        style={{ width: wp("35%"), height: hp("8%"), borderRadius: 100 }}
	                        source={img}
	                    />
	                    <Text style={{...styles.slogan, marginTop: hp('.5%'), fontWeight: "bold", fontSize: hp("2.8%")}}>
	                		Analyse de mes Symtômes
	                	</Text>
	                </View>
	                <View><Text style={{...styles.slogan, marginTop: hp('2.5%'), fontSize: hp("2.3%")}}>AVEZ-VOUS:</Text></View>
	            	
	            	<View>
	            		<View style={styles.form}>
							<View style={{ ...styles.displayRow2}}>
								<View style={{...styles.center2}}>
									<View style={styles.mt}>
										<Text style={styles.label}>La Toux ?</Text>
										<ToggleSwitch
										  isOn={swict1}
										  onColor="green"
										  offColor="#f4f3f4"
										  label=""
										  labelStyle={{ color: "black", fontWeight: "900" }}
										  size="small"
										  onToggle={isOn => setSwict1(isOn)}
										/>
									</View>
									<View style={styles.mt}>
										<Text style={styles.label}>La diarrhée ?</Text>
										<ToggleSwitch
										  isOn={swict1}
										  onColor="green"
										  offColor="#f4f3f4"
										  label=""
										  labelStyle={{ color: "black", fontWeight: "900" }}
										  size="small"
										  onToggle={isOn => setSwict1(isOn)}
										/>
									</View>
									<View style={styles.mt}>
										<Text style={styles.label}>Des maux de tête ?</Text>
										<ToggleSwitch
										  isOn={swict1}
										  onColor="green"
										  offColor="#f4f3f4"
										  label=""
										  labelStyle={{ color: "black", fontWeight: "900" }}
										  size="small"
										  onToggle={isOn => setSwict1(isOn)}
										/>
									</View>
									<View style={styles.mt}>
										<Text style={styles.label}>Une gêne respiratoire ?</Text>
										<ToggleSwitch
										  isOn={swict1}
										  onColor="green"
										  offColor="#f4f3f4"
										  label=""
										  labelStyle={{ color: "black", fontWeight: "900" }}
										  size="small"
										  onToggle={isOn => setSwict1(isOn)}
										/>
									</View>
									<View style={styles.mt}>
										<Text style={styles.label}>Des courbatures et douleurs musculaires ?</Text>
										<ToggleSwitch
										  isOn={swict1}
										  onColor="green"
										  offColor="#f4f3f4"
										  label=""
										  labelStyle={{ color: "black", fontWeight: "900" }}
										  size="small"
										  onToggle={isOn => setSwict1(isOn)}
										/>
									</View>
									<View style={styles.mt}>
										<Text style={styles.label}>Avez vous été dans un pays touché par la pandémique ?</Text>
										<ToggleSwitch
										  isOn={swict1}
										  onColor="green"
										  offColor="#f4f3f4"
										  label=""
										  labelStyle={{ color: "black", fontWeight: "900" }}
										  size="small"
										  onToggle={isOn => setSwict1(isOn)}
										/>
									</View>
								</View>
								<View style={{...styles.center2}}>
									<View style={styles.mt}>
										<Text style={styles.label}>Ecoulement nasal ?</Text>
										<ToggleSwitch
										  isOn={swict1}
										  onColor="green"
										  offColor="#f4f3f4"
										  label=""
										  labelStyle={{ color: "black", fontWeight: "900" }}
										  size="small"
										  onToggle={isOn => setSwict1(isOn)}
										/>
									</View>
									<View style={styles.mt}>
										<Text style={styles.label}>Une perte d'odorat & de goût ?</Text>
										<ToggleSwitch
										  isOn={swict1}
										  onColor="green"
										  offColor="#f4f3f4"
										  label=""
										  labelStyle={{ color: "black", fontWeight: "900" }}
										  size="small"
										  onToggle={isOn => setSwict1(isOn)}
										/>
									</View>
									<View style={styles.mt}>
										<Text style={styles.label}>Des maux de george ?</Text>
										<ToggleSwitch
										  isOn={swict1}
										  onColor="green"
										  offColor="#f4f3f4"
										  label=""
										  labelStyle={{ color: "black", fontWeight: "900" }}
										  size="small"
										  onToggle={isOn => setSwict1(isOn)}
										/>
									</View>
									<View style={styles.mt}>
										<Text style={styles.label}>Dela fatigue ?</Text>
										<ToggleSwitch
										  isOn={swict1}
										  onColor="green"
										  offColor="#f4f3f4"
										  label=""
										  labelStyle={{ color: "black", fontWeight: "900" }}
										  size="small"
										  onToggle={isOn => setSwict1(isOn)}
										/>
									</View>
									<View style={styles.mt}>
										<Text style={styles.label}>Avez vous été a l'étranger ?</Text>
										<ToggleSwitch
										  isOn={swict1}
										  onColor="green"
										  offColor="#f4f3f4"
										  label=""
										  labelStyle={{ color: "black", fontWeight: "900" }}
										  size="small"
										  onToggle={isOn => setSwict1(isOn)}
										/>
									</View>
									<View style={styles.mt}>
										<Text style={styles.label}>Avez vous été en contact avec un infecté ?</Text>
										<ToggleSwitch
										  isOn={swict1}
										  onColor="green"
										  offColor="#f4f3f4"
										  label=""
										  labelStyle={{ color: "black", fontWeight: "900" }}
										  size="small"
										  onToggle={isOn => setSwict1(isOn)}
										/>
									</View>
								</View>
							</View>
						</View>
	            	</View>
	            	<View style={{marginTop: hp("3%")}}>
	            		<Text>Votre température</Text>
	            		<Input
						  placeholder='Température'
						  leftIcon={{ type: 'font-awesome', name: 'thermometer' }}
						/>
	            	</View>
	            	<View style={{...styles.row, justifyContent: 'space-around', marginTop: -7}}>
	            		<Button
						  title="Enregistrer"
						  buttonStyle={{backgroundColor: "green"}}
						/>
						<Button
						  title="Fermer"
						  buttonStyle={{backgroundColor: "red"}}
						/>
	            	</View>
	            </SafeAreaView>
	        <View style={{height: hp("5%")}}></View>
		</ScrollView>
    );
} 



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        paddingHorizontal: wp("7%"),
    },
    mt: {
    	marginTop: 10
    },
    label: {
    	paddingBottom: 7
    },
    form: {
    	marginTop: hp("3%"),
    	paddingTop: hp("1%"),
    	// paddingHorizontal: wp("2%")
    },
    imgBloc: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    width: {
    	width: wp('40%'),
    },
    slogan: {
        color: "#5F666D",
        fontSize: hp("2.3%")

    }, 
    center2: {
    	justifyContent: 'flex-start',
        alignItems: 'flex-start',
        flexDirection: "column",
        width: wp("43%")
    },
    displayRow2: {
    	flexDirection: 'row', 
    },
    row: {
	    flexDirection: 'row',
	    marginTop: hp('4%')
	  },
})
