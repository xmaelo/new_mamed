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
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default function PostView(){

	const [messages, setMessages] = useState([
	    { sender: 'John Doe', message: 'Hey there!', time: '6:01 PM' },
	    { sender: 'Robert Henry', message: 'Hello, how are you doing?',time: '6:02 PM' },
	    { sender: 'John Doe', message: 'I am good, how about you?', time: '6:02 PM'}
    ])
    const [currentUser] = useState({
	    name: 'John Doe',
	  });

	return(
		<View style={{ ...styles.container }}>
			<ScrollView showsVerticalScrollIndicator={false} vertical={true}>
        		<View style={{ paddingHorizontal: 10 }}>



        			<View style={styles.post}>
          {/* Post Header */}
          <View style={styles.postHeader}>
            <Image
              style={{ width: 50, height: 50, borderRadius: 100 }}
              source={{ uri: "https://randomuser.me/api/portraits/women/11.jpg"}}
            />
            <View style={{ flex: 1, paddingHorizontal: 10 }}>
              <Text style={{ fontFamily: 'NSBold', fontSize: 18 }}>
                {"nom prenom"}
              </Text>
            </View>
            <TouchableOpacity style={{ paddingHorizontal: 6 }}>
              <Feather name='more-horizontal' size={24} />
            </TouchableOpacity>
          </View>
          {/* Post Content */}
          <View style={{ paddingHorizontal: 6 }}>
            {/* Post Content Text */}
            <Text style={{ fontFamily: 'NSLight' }}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Exercitationem.
            </Text>
            {/* Post Content Image */}
            <ScrollView horizontal={true} vertical={false} showsHorizontalScrollIndicator={false}>
            	<View style={styles.postImg}>
            		<View style={styles.singleImg}>
			            <Image
			              style={styles.postContentImage}
			              source={{
			                uri: `https://picsum.photos/500/500?random=1`,
			              }}
			            />
			        </View>
			        <View style={styles.singleImg}>
			            <Image
			              style={styles.postContentImage}
			              source={{
			                // uri: images[index]?.download_url,
			                uri: `https://picsum.photos/500/500?random=1`,
			              }}
			            />
			        </View>
			        <View style={styles.singleImg}>
			            <Image
			              style={styles.postContentImage}
			              source={{
			                // uri: images[index]?.download_url,
			                uri: `https://picsum.photos/500/500?random=1`,
			              }}
			            />
			        </View>
		        </View>
	        </ScrollView>
          </View>
          {/* Interactions Bar */}
          <View style={styles.interactionBar}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Ionicons name='heart' color={color.redFair} size={21} />
              <Text style={styles.interactionText}>104</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Feather name='message-square' size={24} />
              <Text style={styles.interactionText}>23 </Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Feather name='share-2' size={24} />
              <Text style={styles.interactionText}>5</Text>
            </View>
          </View>
          {/* Interacts Button */}
          <View
            style={{ flexDirection: 'row',  marginBottom: 4 }}
          >
            
          </View>
        </View>
        </View>
        



        

        {messages.map((item, index)=> 
        	(
        	<TouchableWithoutFeedback key={index}>
              <View style={{ marginTop: 20, flex: 1, flexDirection: 'row', marginHorizontal: wp("3%")}}>
              	<Image
	              style={{ width: 40, height: 40, borderRadius: 100 }}
	              source={{ uri: "https://randomuser.me/api/portraits/women/11.jpg"}}
	            />
                <View
                  style={{
                    maxWidth: Dimensions.get('screen').width * 0.7,
                    backgroundColor: color.barColor,
                    alignSelf: "flex-start",
                    marginHorizontal: 10,
                    padding: 10,
                    borderRadius: 8,
                    borderBottomLeftRadius:
                      item.sender === currentUser.name ? 8 : 0,
                    borderBottomRightRadius:
                      item.sender === currentUser.name ? 0 : 8,
                  }}
                >
                  <Text
                    style={{
                      color: 'black',
                      fontSize: 16,
                    }}
                  >
                    {item.message}
                  </Text>
                  <Text
                    style={{
                      color: 'black',
                      fontSize: 14,
                      alignSelf: 'flex-start',
                    }}
                  >
                    {item.time}
                  </Text>
                </View>
              </View>
            </TouchableWithoutFeedback>
        	))
        }
        </ScrollView>




        <View style={{ paddingVertical: 10 }}>
          <View style={styles.messageInputView}>
            <TextInput
              defaultValue={"inputMessage"}
              style={styles.messageInput}
              placeholder='Message'
              onChangeText={(text) => {/*setInputMessage(text)*/}}
              onSubmitEditing={() => {
                //sendMessage();
              }}
            />
            <TouchableOpacity
              style={styles.messageSendView}
              onPress={() => {
                //sendMessage();
              }}
            >
              <Ionicons name='send' />
            </TouchableOpacity>
          </View>
        </View>
    </View>
	)
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fbfbfb',
    paddingTop: 10,
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
  postHeader: { padding: 6, flexDirection: 'row', alignItems: 'center' },
  postContentImage: {
    width: wp('55%'),
    height: hp("40%"),
    borderRadius: 10,
    marginTop: 10,
  },
  interactionBar: {
    backgroundColor: '#fafafa',
    height: 40,
    marginHorizontal: 10,
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
    paddingVertical: 6,
  },


  messageInputView: {
    display: 'flex',
    flexDirection: 'row',
    marginHorizontal: wp("3%"),
    backgroundColor: color.barColor,
    borderRadius: 10,
  },
  messageInput: {
    height: hp("7%"),
    flex: 1,
    paddingHorizontal: wp("3%"),
  },
  messageSendView: {
    paddingHorizontal: wp("3%"),
    justifyContent: 'center',
  },
});


