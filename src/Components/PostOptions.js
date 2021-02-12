import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native';
import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu';
import Feather   from 'react-native-vector-icons/Feather';
import color from '../themes/Color'

export default function PostOptions(){
	let _menu = null;

	const onAction = () => {
		console.log('onAction run');
		_menu.hide();
	}
	const defineRef = (ref) => {
		_menu = ref;
		//setVisibleMenu(_menu)
	}
	return(
		<View>
	        <Menu
	          ref={defineRef}
	          button={
		          <TouchableOpacity
		          	onPress={
		          		()=>{
		          			_menu.show();
		          		}
		          	}
		          >
		            <Feather name='more-vertical' color={color.blackText} size={20} />
		          </TouchableOpacity>
	          }
	        >
	          <MenuItem onPress={onAction}>Partager</MenuItem>
	          <MenuDivider />
	          <MenuItem onPress={onAction}>Suprimer</MenuItem>
	          <MenuDivider />
	          <MenuItem onPress={onAction}>
	          		Notifictions 
	          </MenuItem>
	          <MenuDivider />
	          <MenuItem onPress={onAction}>
	          	<Text>Saugarder </Text>
	          </MenuItem>
        	</Menu>
        </View>
	)
}