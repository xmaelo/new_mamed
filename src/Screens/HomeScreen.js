import React, { useState }from 'react';
import { View, StyleSheet, SafeAreaView, Image, StatusBar, TouchableOpacity } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { SearchBar } from 'react-native-elements';
import { Text, Input, Button, CheckBox } from 'react-native-elements';
import Carousel from 'react-native-snap-carousel';

 const img = require('../../assets/imgs/logo.png')


const carouselItems = [
  {
      title:"Item 1",
      text: "Text 1",
  },
  {
      title:"Item 2",
      text: "Text 2",
  },
  {
      title:"Item 3",
      text: "Text 3",
  },
  {
      title:"Item 4",
      text: "Text 4",
  },
  {
      title:"Item 5",
      text: "Text 5",
  },
]
function _renderItem({item,index}){
    return (
      <View style={{
          backgroundColor:'floralwhite',
          borderRadius: 5,
          height: 250,
          padding: 50,
          marginLeft: 25,
          marginRight: 25, }}>
        <Text style={{fontSize: 30}}>{item.title}</Text>
        <Text>{item.text}</Text>
      </View>

    )
}

export default function HomeScreen(props){
	const [search, updateSearch] = useState("");
    const [carousel, setCarousel] = useState(null);
    const [activeIndex, setActiveIndex] = useState(null);
	return(
        <SafeAreaView >
			<StatusBar style="auto" backgroundColor="white" />
			<View style={styles.container}>
				<View style={styles.imgBloc}>
                    <Text h4 style={{...styles.slogan}}>Notifications</Text>
                </View>
                <View style={styles.notif}>
                    
                    <View>
                        <Carousel
                          layout={"stack"}
                          ref={ref => setCarousel(ref)}
                          data={carouselItems}
                          sliderWidth={300}
                          layoutCardOffset={25}
                          itemWidth={300}
                          loop={true}
                          autoplay={true}
                          enableMomentum ={false}
                          lockScrollWhileSnapping ={true}
                          autoplayInterval={2000}
                          autoplayDelay={100}
                          renderItem={_renderItem}
                          onSnapToItem = { index => setActiveIndex(index) } 
                        />
                    </View>

                </View>
                <View style={styles.card}>
                    <Text style={{marginTop: hp('10%'), ...styles.slogan}}>Hi! Nice to see you again</Text>
                    

                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
	                    <View style={styles.cardContent}>
	                    	<TouchableOpacity
	                    		onPress={()=>props.navigation.navigate("DashbordScreen")}
	                    	>
		                    
			                    <View style={styles.cardContentSub}>
			                    	<View>
			                    		<Icon name="stethoscope" size={30} style={{marginTop: -hp("1%")}}/>
			                    	</View>
			                    	<Text style={{...styles.slogan, textAlign: "center"}}> Analyse de vos symptomes </Text>
			                    </View>
			                </TouchableOpacity>
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
	                    	<TouchableOpacity
	                    		onPress={() => props.navigation.navigate('RendezVousScreen')}
	                    	>
			                    <View style={{...styles.cardContentSub}}>
			                    	<View>
			                    		<Ionicons name="calendar" size={40} style={{marginTop: -hp("1%")}}/>
			                    	</View>
			                    	<Text style={{...styles.slogan, textAlign: "center"}}> Mes rendez-vous </Text>
			                    </View>
			                </TouchableOpacity>
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
        marginTop: hp('4%'),
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
        alignItems: "center",
        paddingBottom: 23
    },
    notif: {
        marginTop: hp("0%"),
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
