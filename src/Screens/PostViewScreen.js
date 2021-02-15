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
  TouchableWithoutFeedback,
  StatusBar,
  FlatList,
  Dimensions
} from 'react-native';
import Ionicons  from 'react-native-vector-icons/Ionicons';
import Feather   from 'react-native-vector-icons/Feather';
import Search from '../Components/Search';
import RoundedImage from '../Components/RoundedImage';
import AppText from '../Components/AppText';
import PostCard from '../Components/PostCard';
import color from '../themes/Color'
import PostOptions from '../Components/PostOptions'
import {Comments, SendComment} from '../Components/CommentSection'

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default function PostViewScreen(props){

	const [messages, setMessages] = useState([
	    { sender: 'John Doe', message: 'Hey there!', time: '6:01 PM' },
	    { sender: 'Robert Henry', message: 'Hello, how are you doing?',time: '6:02 PM' },
	    { sender: 'John Doe', message: 'I am good, how about you?', time: '6:02 PM'}
    ])
    const [currentUser] = useState({
	    name: 'XXXX',
	  });
  
	return(
		<View style={{ ...styles.container }}>
			<ScrollView showsVerticalScrollIndicator={false} vertical={true}>
        		<View style={{ paddingHorizontal: 10 }}>
		        	<View style={styles.post}>
			          <View style={styles.postHeader}>
			            <RoundedImage
			              style={{ width: 50, height: 50, borderRadius: 100 }}
			              profile_image={"https://randomuser.me/api/portraits/women/11.jpg"}
			            />
			            <View style={{ flex: 1, paddingHorizontal: wp("3%") }}>
			              <Text style={{ color: color.blackText, fontSize: 18 }}>
			                {"nom prenom"}
			              </Text>
			            </View>
			            <PostOptions name='more-horizontal' size={24}/>
			          </View>

			          {/* Post Content */}
			          <View style={{ paddingHorizontal: wp("1.5%") }}>
			            {/* Post Content Text */}
			            <Text style={{color: color.blackText}}>
			              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
			              Exercitationem.
			            </Text>
			            {/* Post Content Image */}
			            <ScrollView horizontal={true} vertical={false} showsHorizontalScrollIndicator={false}>
			            	<View style={styles.postImg}>
			            		<View style={styles.singleImg}>
			            			<TouchableOpacity
			            				onPress={
						        			()=>props.navigation.navigate("BookCoverView")
						        		}
			            			>
							            <Image
							              style={styles.postContentImage}
							              source={require("../../assets/imgs/1.jpeg")}
							            />
							        </TouchableOpacity>
						        </View>
						        <View style={styles.singleImg}>
						        	<TouchableOpacity
						        		onPress={
						        			()=>props.navigation.navigate("BookCoverView")
						        		}
						        	>
							            <Image
							              style={styles.postContentImage}
							              source={require("../../assets/imgs/2.jpeg")}
							            />
						            </TouchableOpacity>
						        </View>
						        <View style={styles.singleImg}>
						        	<TouchableOpacity
						        		onPress={
						        			()=>props.navigation.navigate("BookCoverView")
						        		}
						        	>
							            <Image
							              style={styles.postContentImage}
							              source={require("../../assets/imgs/3.jpeg")}
							            />
							        </TouchableOpacity>
						        </View>
						        <View style={styles.singleImg}>
						        	<TouchableOpacity
						        		onPress={
						        			()=>props.navigation.navigate("BookCoverView")
						        		}
						        	>
							            <Image
							              style={styles.postContentImage}
							              source={require("../../assets/imgs/4.jpeg")}
							            />
							        </TouchableOpacity>
						        </View>
						        <View style={styles.singleImg}>
						        	<TouchableOpacity
						        		onPress={
						        			()=>props.navigation.navigate("BookCoverView")
						        		}
						        	>
							            <Image
							              style={styles.postContentImage}
							              source={require("../../assets/imgs/5.jpeg")}
							            />
							        </TouchableOpacity>
						        </View>
					        </View>
				        </ScrollView>
			          </View> 
			          {/* Interactions Bar */}
			          <View style={styles.interactionBar}>
			            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
			              	<TouchableOpacity>
			              		<Ionicons name='heart' color={color.redFair} size={21} />
			              	</TouchableOpacity>
			              <Text style={styles.interactionText}>104</Text>
			            </View>
			            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
			            	<TouchableOpacity> 
			              		<Feather name='message-circle' size={24} />
			              	</TouchableOpacity>
			              <Text style={styles.interactionText}>23 </Text>
			            </View>
			            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
			            	<TouchableOpacity>
			              		<Feather name='share-2' size={24} />
			              	</TouchableOpacity>
			              <Text style={styles.interactionText}>5</Text>
			            </View>
			          </View>
					</View>
        		</View>
        
		        <Comments comments={messages} navigation={props.navigation} post={true}/>
        	</ScrollView>

	        <SendComment />
	    </View>
	)
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fbfbfb',
    paddingTop: hp("1%"),
  },
  singleImg: {
  	width: wp('60%'),
  },
  postImg: {
  	flex: 1,
    flexDirection: 'row',
  },
  post: {
    borderColor: '#dfe4ea',
    borderRadius: 4,
    backgroundColor: '#fff',
  },
  postHeader: { padding: wp("1.5%"), flexDirection: 'row', alignItems: 'center' },
  postContentImage: {
    width: wp('55%'),
    height: hp("40%"),
    borderRadius: 10,
    marginTop: 10,
  },
  interactionBar: {
    backgroundColor: '#fafafa',
    height: 40,
    marginHorizontal: wp("3%"),
    marginTop: 4,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    paddingHorizontal: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  interactionText: {
    fontFamily: 'NSRegular',
    color: '#000',
    marginLeft: 4,
  },
  interactionButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: hp("1%"),
  },

});


