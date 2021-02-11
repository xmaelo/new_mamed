import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Ionicons  from 'react-native-vector-icons/Ionicons';
import color from '../themes/Color'

export default function Search(props){
	return(
		<View style={{ ...styles.searchBar }}>
          <Ionicons name='search-outline' size={22} color={color.blackText} />
          <TextInput
            style={{ 
              paddingHorizontal: 6,
              color: color.blackText,
              fontSize: 16,
            }}
            onChangeText={(text) => {
                props.setSearchValue(text);
                console.log(text);
            }}
            value = {props.searchValue} 
            placeholder='Recherche'
            placeholderTextColor={color.blackText}
          />
        </View>
	)
}


const styles = StyleSheet.create({
    searchBar: {
	    flex: 1,
	    height: 40,
	    backgroundColor: '#FAFAFB',
	    marginRight: 10,
	    borderRadius: 4,
	    paddingLeft: 10,
	    flexDirection: 'row',
	    alignItems: 'center',
	    borderColor: "black",
	    borderWidth: 1,
	    borderStyle: "solid",
	    borderRadius: 10
	},
})




