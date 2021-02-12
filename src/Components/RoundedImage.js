import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';

export default function RoundedImage({profile_image, style}){
	return(
		<TouchableOpacity>
          <Image
            style={{ ...styles.userProfileImage, ...style}}
            source={{ uri: profile_image }}
          />
        </TouchableOpacity>
	)
}


const styles = StyleSheet.create({
    userProfileImage: {
	    width: 45,
	    height: 45,
	    borderRadius: 100,
	}
})