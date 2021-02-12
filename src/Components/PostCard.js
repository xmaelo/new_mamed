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
import Feather   from 'react-native-vector-icons/Feather';
import Ionicons   from 'react-native-vector-icons/Ionicons';
import ReactNativeTooltipMenu from 'react-native-tooltip-menu';
import color from '../themes/Color'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu';

export default function PostCard(props){
	const [_menu, setVisibleMenu] = useState(null);

	const onAction = () => {
		console.log('onAction run');
		_menu = _menu.hide();
		setVisibleMenu(_menu);
	}
	return(
		<View style={styles.postView}>
	        {/* Post Header */}
	        <View style={styles.postHeader}>
	          <View>
	            <Image
	              style={{ width: wp("10%"), height: hp("5%"), borderRadius: 100 }}
	              source={{
	                uri: "https://randomuser.me/api/portraits/women/11.jpg",
	              }}
	            />
	          </View>
	          <View style={{ flex: 1, paddingHorizontal: wp("3%") }}>
	            <Text style={{ color: color.blackText,  fontSize: 15 }}>
	              {"Van dark"}
	            </Text>
	          </View>

	          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
		        <Menu
		          ref={_menu}
		          button={
			          <TouchableOpacity
			          	onPress={
			          		()=>{
			          			_menu = _menu.show();
			          			setVisibleMenu(_menu);
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
		          <MenuItem onPress={onAction}>Activer les notifictions</MenuItem>
		          <MenuDivider />
		          <MenuItem onPress={onAction}>Savegarder dans ma bibliothèque</MenuItem>
		        </Menu>
		      </View>
	        </View>
	        {/* Post Content */}
	        <View style={{ marginTop: 0 }}>
	            <Image
	              style={{ width: wp("46.4%"), height: hp("38%"), marginTop: hp("1%") }}
	              source={require("../../assets/imgs/demo.jpg")}
	            />
	        </View>  
	        {/* Post Stats */}
	        <View
	          style={{ height: hp("6%"), flexDirection: 'row', paddingHorizontal: wp("3%") }}
	        >
	          <TouchableOpacity style={styles.postStatsOpacity}>
	            <Ionicons name='heart' color={color.redFair} size={21} />
	            <Text 
	              style={{
	                marginLeft: wp("2%"),
	                color: color.blackText,
	              }}
	            >
	              {3}
	            </Text>
	          </TouchableOpacity>
	          <TouchableOpacity
	            style={{
	              ...styles.postStatsOpacity,
	              marginLeft: wp("6%"),
	            }}
	            onPress={()=>{
	            	props.home ? props.navigation.navigate("PostViewScreen") : null
	            }}
	          >
	            <Feather name='message-circle' color={color.redFair} size={21} />
	            <Text
	              style={{
	                marginLeft: wp("2%"),
	                color: color.blackText,
	              }}
	            >
	              {5}
	            </Text>
	          </TouchableOpacity>
	        </View>
        </View>
    );
 }


const styles = StyleSheet.create({
  postsView: { paddingHorizontal: wp("3%"), marginTop: 10 },
  postView: {
    paddingVertical: hp("1%"),
    marginTop: hp("1%"),
    backgroundColor: "white",
    borderRadius: 10,
    shadowColor: '#1e1e1e',
    width: wp("46.5%"),
    height: hp("52%"),
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 8,
  },
  postHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: wp("3%"),
  },
  postStatsOpacity: {
    backgroundColor: "white",
    padding: 8,
    borderRadius: 6,
    flexDirection: 'row',
    alignItems: 'center',
  },
});


