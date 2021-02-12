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
            		{ uri: "https://luehangs.site/pic-chat-app-images/beautiful-blond-blonde-hair-478544.jpg" },
	                // { source: require("yourApp/image.png"), dimensions: { width: 1080, height: 1920 } },
	                // { source: require("yourApp/image.png"), width: 1080, height: 1920 },
	                { source: { uri: "https://luehangs.site/pic-chat-app-images/beautiful-beautiful-women-beauty-40901.jpg" } },
	                { uri: "https://luehangs.site/pic-chat-app-images/animals-avian-beach-760984.jpg" },
	                { URI: "https://luehangs.site/pic-chat-app-images/beautiful-blond-fishnet-stockings-48134.jpg" },
	                { url: "https://luehangs.site/pic-chat-app-images/beautiful-beautiful-woman-beauty-9763.jpg" },
	                { URL: "https://luehangs.site/pic-chat-app-images/attractive-balance-beautiful-186263.jpg" },
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