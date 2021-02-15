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
import GallerySwiper from "react-native-gallery-swiper";



export default function BookCoverView(props){
	return(
		<View style={{ ...styles.container }}>
			<GallerySwiper
            	images={[
            		{ source: require("../../assets/imgs/1.jpeg"), dimensions: { width: 1080, height: 1920 }},
            		{ source: require("../../assets/imgs/2.jpeg"), dimensions: { width: 1080, height: 1920 } },
	                // { source: require("yourApp/image.png"), dimensions: { width: 1080, height: 1920 } },
	                // { source: require("yourApp/image.png"), width: 1080, height: 1920 },
	                {source: require("../../assets/imgs/3.jpeg"), dimensions: { width: 1080, height: 1920 } },
	                { source: require("../../assets/imgs/4.jpeg"), dimensions: { width: 1080, height: 1920 } },
	                { source: require("../../assets/imgs/5.jpeg"), dimensions: { width: 1080, height: 1920 } }
	            ]}
	        />
		</View>
	)
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});