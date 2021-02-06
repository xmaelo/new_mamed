import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';

export default function RoundedImage({profile_image}){
	return(
		<TouchableOpacity>
          <Image
            style={{ ...styles.userProfileImage }}
            source={{ uri: profile_image }}
          />
        </TouchableOpacity>
	)
}


const styles = StyleSheet.create({
    userProfileImage: {
	    width: 40,
	    height: 40,
	    borderRadius: 100,
	}
})