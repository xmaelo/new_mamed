import React, { useState }from 'react';
import { View, StyleSheet, SafeAreaView, Image, ScrollView, StatusBar, TouchableOpacity } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Text, Input, Button, CheckBox, ListItem } from 'react-native-elements';


const list = [
  {
    name: 'Le virus',
    subtitle: 'Mars 03, 2102'
  },
  {
    name: 'Riposte individuelle',
    subtitle: 'Mars 03, 2102'
  },
  {
    name: "Que faire en cas d'urgence",
    subtitle: ''
  },
  {
    name: 'Trouver un centre de traitement dans la zone',
    subtitle: ''
  },
]

const img = require('../../assets/imgs/logo.png')

function BonAsavoirScreen ({ navigation }){
	const [password, setPassword] = useState("");
    const [username, defineUsername] = useState("");

    const pressed = (text) =>{
        console.log('Text pressed');
    }
    const handlePress = () =>{
        console.log('Pressed')
    }
    const [pinSecure, setPinSecure] = useState(false);
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
	                		Bon à Savoir
	                	</Text>
	                </View>
	                <View style={{alignItems: 'center'}}>
	                	<View style={{...styles.youtube, justifyContent: 'center'}}>
	                		
	                	</View>
	                </View>
	                <View>
	                	<View style={{marginTop: hp('1%')}}>
						  {
						    list.map((l, i) => (
						    	<View style={{marginTop: hp('1%')}} key={i}>
							      <ListItem
							      containerStyle={{backgroundColor: "#F0F0F0"}}
							      >
							      {i==0 ?
							      		<Image style={{ width: 35, height: 35,}} 
						           			source={require('../../assets/imgs/covid1.png')} 
						            	/> :
						            i ==1 ?
								      	<Ionicons
									      name='hand-right'
									      size={30}
									      color='black'
									    /> 
									:  i ==2 ?
										<Button
										  title="Urgence"
										  buttonStyle={{backgroundColor: "red"}}
										/> :
									<Ionicons
										name="search"
										size={30}
									     color='black'
									/>


									}
							        <ListItem.Content>
							          <ListItem.Title>{l.name}</ListItem.Title>
							          <ListItem.Subtitle>{l.subtitle}</ListItem.Subtitle>
							        </ListItem.Content>
							        <Icon
								      name='info'
								      size={24}
								      color='black'
								    />
							      </ListItem>
							    </View>
						    ))
						  }
						</View>
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
        paddingHorizontal: wp("3%"),
    },
    youtube: {
    	marginTop: hp('1%'),
    	height: hp("25%"),
    	width: wp('92%'),
    	borderStyle: "solid",
    	borderWidth: 1,
    },
    card: {

    },
    imgBloc: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    slogan: {
        color: "#5F666D",
        fontSize: hp("2.3%")

    }, 
    row: {
	    flexDirection: 'row',
	    marginTop: hp('4%')
	  },
    card2: {
    	width: wp("70%"),
    	padding: wp('5%'),
    	borderWidth: 1,
    	borderColor: "#5F666D",
    	borderStyle: "solid",
    	marginTop: hp('4%')
    },
    centerContent: {
    	justifyContent: 'center', 
    	alignItems: 'center'
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
    details: {
	    flexDirection: 'column',
	    justifyContent: 'center',
	    alignItems: "center"
	  },
	  container_all_details: {
	    flexDirection: 'row',
	    justifyContent: 'space-between',
	    marginTop: hp('4%')
	  },
  container_card_profile: {
    backgroundColor: 'white',
    marginLeft: hp('1%'),
    marginRight: hp('1%'),
    borderRadius: 10,
    height: hp('50%'),
    marginTop: hp('2%'),
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.30,

    elevation: 13,
  },
  logo: {
    width: wp('50%'),
    height: hp('5%')
  },
  startup: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0
  },
  lieu: {
    color: 'black'
  },
  number: {
    fontSize: hp('2.5%'),
    fontWeight: 'bold',
    color: 'black'
  },
  title: {
    fontSize: hp('2.3%'),
    color: 'black'
  },
  details: {
    flexDirection: 'column',
    justifyContent: 'center'
  },
})

export default BonAsavoirScreen;